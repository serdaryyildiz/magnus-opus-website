"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-ink/80 border border-ink/20 rounded px-4 py-3">
        Thank you — your message has been sent. We will get back to you soon.
      </p>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold resize-none"
      />
      {/* Honeypot field: hidden from real visitors, catches simple bots */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-block bg-ink text-white px-8 py-3 text-sm tracked uppercase hover:bg-gold transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Get in touch"}
      </button>
    </form>
  );
}
