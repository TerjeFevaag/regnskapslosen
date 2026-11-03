"use client";

import { useState } from "react";

/** Google Maps is only loaded after the visitor clicks, so nothing is sent to Google before that. */
export default function MapEmbed({ query, title }: { query: string; title: string }) {
  const [show, setShow] = useState(false);
  const q = encodeURIComponent(query);
  if (show) {
    return (
      <iframe
        title={title}
        src={`https://maps.google.com/maps?q=${q}&output=embed`}
        className="mt-8 aspect-[4/3] w-full rounded-md border border-slate-1"
      />
    );
  }
  return (
    <div className="mt-8 flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-md border border-slate-1 bg-mist p-6 text-center">
      <p className="max-w-xs text-muted">
        Kartet lastes fra Google Maps. Google kan sette informasjonskapsler når du viser det.
      </p>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="rounded-md bg-green px-6 py-3 font-display font-semibold text-white hover:bg-green-dark"
      >
        Vis kart
      </button>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 font-medium text-green underline underline-offset-4"
      >
        Åpne i Google Maps
      </a>
    </div>
  );
}
