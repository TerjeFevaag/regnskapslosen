import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  // Honeypot: pretend success for bots
  if (typeof body.nettside === "string" && body.nettside.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const navn = String(body.navn ?? "").trim().slice(0, 200);
  const epost = String(body.epost ?? "").trim().slice(0, 200);
  const telefon = String(body.telefon ?? "").trim().slice(0, 50);
  const melding = String(body.melding ?? "").trim().slice(0, 5000);

  if (!navn || !melding || !/^\S+@\S+\.\S+$/.test(epost)) {
    return NextResponse.json(
      { error: "Fyll ut navn, en gyldig e-postadresse og melding." },
      { status: 400 },
    );
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Kontaktskjemaet er ikke satt opp ennå." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Regnskapslosen <noreply@regnskapslosen.no>",
      to: [process.env.CONTACT_TO ?? "post@regnskapslosen.no"],
      reply_to: epost,
      subject: `Ny henvendelse fra ${navn}`,
      text: `Navn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || "-"}\n\n${melding}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Meldingen kunne ikke sendes." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
