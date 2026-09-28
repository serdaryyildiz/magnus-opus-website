<?php
// contact.php — receives the "Contact Us" form and emails it to the company.
// Lives in public/ so `next build` (output: "export") copies it into out/
// automatically; upload out/ to cPanel's public_html as usual.

header('Content-Type: application/json; charset=utf-8');

// Never print PHP warnings into the JSON response; log them instead
// (visible in cPanel -> Metrics -> Errors).
ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);

// --- Config -----------------------------------------------------------
$recipient    = 'info@magnumopus.com.tr';
// Same mailbox as $recipient: with only one inbox available, the mail is
// sent "from itself". The visitor's address goes in Reply-To below, so
// hitting Reply in your mail client still goes straight to them.
$fromAddress  = 'info@magnumopus.com.tr';
$subjectLine  = 'Magnum Opus — New Contact Form Message';
// ------------------------------------------------------------------------

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
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

$headers = "From: Magnum Opus Website <{$fromAddress}>\r\n"
         . "Reply-To: {$safeName} <{$safeEmail}>\r\n"
         . "Content-Type: text/plain; charset=UTF-8";

$sent = false;
try {
    $sent = mail($recipient, $subjectLine, $body, $headers);
} catch (Throwable $e) {
    error_log('contact.php: mail() threw: ' . $e->getMessage());
}

if ($sent) {
    respond(200, ['ok' => true]);
}
error_log('contact.php: mail() returned false. Last PHP error: ' . json_encode(error_get_last()));
respond(500, ['ok' => false, 'error' => 'The message could not be sent. Please try again later.']);
