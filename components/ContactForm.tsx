"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "mt-1.5 w-full rounded-md border border-slate-2 bg-white px-4 py-3 text-ink focus:border-green";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Noe gikk galt.");
      form.reset();
      setState("sent");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Noe gikk galt.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-md bg-green-soft p-6">
        <p className="font-display text-lg font-semibold text-green">
          Takk for meldingen
        </p>
        <p className="mt-2">Vi tar kontakt så snart vi kan, vanligvis innen en virkedag.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div>
        <label htmlFor="navn" className="font-medium">Navn</label>
        <input id="navn" name="navn" required autoComplete="name" className={field} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="epost" className="font-medium">E-post</label>
          <input id="epost" name="epost" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="telefon" className="font-medium">Telefon (valgfritt)</label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="melding" className="font-medium">Melding</label>
        <textarea id="melding" name="melding" rows={6} required className={field} />
      </div>
      {/* Honeypot: real visitors never see or fill this */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="nettside">Nettside</label>
        <input id="nettside" name="nettside" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-md bg-green px-8 py-3 font-display font-semibold text-white hover:bg-green-dark disabled:opacity-60"
      >
        {state === "sending" ? "Sender …" : "Send melding"}
      </button>
      {state === "error" && (
        <p role="alert" className="text-red-700">
          {message} Du kan også ringe oss på 71 67 45 22 eller skrive til post@regnskapslosen.no.
        </p>
      )}
    </form>
  );
}
