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
      to: (process.env.CONTACT_TO ?? "terje@fevaag.no").split(",").map(e => e.trim()),
      reply_to: epost,
      subject: `Ny henvendelse fra ${navn}`,
      text: `Navn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || "–"}\n\n${melding}`,
      html: `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;border:1px solid #dbe0e4;">
      <tr><td style="background:#00493e;padding:6px 0;"></td></tr>
      <tr><td style="padding:28px 32px;">
        <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#9da9b2;">Regnskapslosen.no</p>
        <h2 style="margin:0 0 24px;font-size:20px;color:#17221f;font-weight:600;">Ny henvendelse</h2>
        <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f2;width:90px;color:#55625f;font-size:13px;vertical-align:top;">Navn</td>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f2;font-size:14px;color:#17221f;font-weight:500;">${navn}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f2;color:#55625f;font-size:13px;vertical-align:top;">E-post</td>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f2;font-size:14px;"><a href="mailto:${epost}" style="color:#00493e;text-decoration:none;">${epost}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f2;color:#55625f;font-size:13px;vertical-align:top;">Telefon</td>
            <td style="padding:10px 0;border-bottom:1px solid #eef2f2;font-size:14px;color:#17221f;">${telefon || "–"}</td>
          </tr>
        </table>
        <div style="margin-top:20px;background:#f9fafb;border-radius:4px;padding:16px;">
          <p style="margin:0 0 6px;color:#55625f;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Melding</p>
          <p style="margin:0;font-size:14px;color:#17221f;line-height:1.65;white-space:pre-wrap;">${melding}</p>
        </div>
      </td></tr>
      <tr><td style="padding:12px 32px;border-top:1px solid #eef2f2;font-size:11px;color:#b4bdc5;">
        Regnskapslosen AS &middot; Storgata 2, 6509 Kristiansund N
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`,
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
