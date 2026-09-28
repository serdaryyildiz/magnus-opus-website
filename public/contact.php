<?php
// contact.php — receives the "Contact Us" form and emails it to the company.
// Sends through the info@ mailbox's own SMTP account (no libraries needed).
// Falls back to PHP mail() only if $smtpPass is left empty.

header('Content-Type: application/json; charset=utf-8');

// Never print PHP warnings into the JSON response; log them instead.
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

// --- Config -----------------------------------------------------------
$recipient   = 'info@magnumopus.com.tr';
$fromAddress = 'info@magnumopus.com.tr';
$subjectLine = 'Magnum Opus — New Contact Form Message';

// SMTP settings: cPanel -> Email Accounts -> info@ -> "Connect Devices"
// shows the exact "Outgoing Server" and the SSL port (usually 465).
$smtpHost = 'mail.magnumopus.com.tr';
$smtpPort = 465;
$smtpUser = 'info@magnumopus.com.tr';
$smtpPass = '';   // <-- the info@ mailbox password
// ------------------------------------------------------------------------

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

// Minimal SMTP client over implicit SSL (port 465) with AUTH LOGIN.
function smtp_send(string $host, int $port, string $user, string $pass,
                   string $from, string $to, string $subject, string $body,
                   string $replyTo): void {
    $ctx = stream_context_create(['ssl' => [
        'verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true,
    ]]);
    $fp = @stream_socket_client("ssl://{$host}:{$port}", $errno, $errstr, 15,
                                STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) {
        throw new RuntimeException("SMTP connect failed: {$errstr} ({$errno})");
    }
    stream_set_timeout($fp, 15);

    $read = function () use ($fp): string {
        $resp = '';
        while (($line = fgets($fp, 515)) !== false) {
            $resp .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $resp;
    };
    $cmd = function (?string $c, int $expect) use ($fp, $read): void {
        if ($c !== null) fwrite($fp, $c . "\r\n");
        $r = $read();
        if (strpos($r, (string)$expect) !== 0) {
            throw new RuntimeException("SMTP expected {$expect}, got: " . trim($r));
        }
    };

    $cmd(null, 220);
    $cmd('EHLO magnumopus.com.tr', 250);
    $cmd('AUTH LOGIN', 334);
    $cmd(base64_encode($user), 334);
    $cmd(base64_encode($pass), 235);
    $cmd("MAIL FROM:<{$from}>", 250);
    $cmd("RCPT TO:<{$to}>", 250);
    $cmd('DATA', 354);

    $msg = "Date: " . date('r') . "\r\n"
         . "From: Magnum Opus Website <{$from}>\r\n"
         . "To: <{$to}>\r\n"
         . "Reply-To: {$replyTo}\r\n"
         . "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n"
         . "Message-ID: <" . bin2hex(random_bytes(8)) . "@magnumopus.com.tr>\r\n"
         . "MIME-Version: 1.0\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "Content-Transfer-Encoding: base64\r\n\r\n"
         . chunk_split(base64_encode($body));

    fwrite($fp, $msg . "\r\n.\r\n");
    $cmd(null, 250);
    fwrite($fp, "QUIT\r\n");
    fclose($fp);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Accept both JSON (fetch + JSON.stringify) and normal form posts.
$data = $_POST;
if (empty($data)) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?: [];
}

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
// Honeypot: a real visitor never fills this hidden field in.
$honeypot = trim($data['company'] ?? '');

if ($honeypot !== '') {
    respond(200, ['ok' => true]); // silently pretend success to bots
}

if ($name === '' || $email === '' || $message === '') {
    respond(422, ['ok' => false, 'error' => 'Name, email and message are required.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please enter a valid email address.']);
}

// Strip newlines from header-bound fields to prevent header injection.
$safeName  = preg_replace('/[\r\n]+/', ' ', $name);
$safeEmail = preg_replace('/[\r\n]+/', ' ', $email);

$body = "New message from the website contact form:\n\n"
      . "Name: {$safeName}\n"
      . "Email: {$safeEmail}\n\n"
      . "Message:\n{$message}\n";

$sent = false;
try {
    if ($smtpPass !== '') {
        smtp_send($smtpHost, $smtpPort, $smtpUser, $smtpPass,
                  $fromAddress, $recipient, $subjectLine, $body, $safeEmail);
        $sent = true;
    } else {
        $headers = "From: Magnum Opus Website <{$fromAddress}>\r\n"
                 . "Reply-To: {$safeName} <{$safeEmail}>\r\n"
                 . "Content-Type: text/plain; charset=UTF-8";
        $sent = mail($recipient, $subjectLine, $body, $headers);
    }
} catch (Throwable $e) {
    error_log('contact.php: send failed: ' . $e->getMessage());
}

if ($sent) {
    respond(200, ['ok' => true]);
}
error_log('contact.php: not sent. Last PHP error: ' . json_encode(error_get_last()));
respond(500, ['ok' => false, 'error' => 'The message could not be sent. Please try again later.']);
