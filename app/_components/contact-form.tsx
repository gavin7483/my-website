"use client";

import { useState } from "react";

const formEndpoint = "https://formspree.io/f/mkoqvqle";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again in a moment.",
      );
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-stone-700">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            className="rounded-2xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-rose-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-700">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="rounded-2xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-rose-500"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-stone-700">
        Message
        <textarea
          rows={5}
          name="message"
          placeholder="Tell Kimberly a little about your family and what kind of support would feel most helpful."
          required
          className="rounded-2xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-rose-500"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting"
          ? "Sending..."
          : "Book a Free Consultation"}
      </button>

      {status === "success" ? (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Thank you. Your message was sent successfully, and Kimberly will be in
          touch soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
