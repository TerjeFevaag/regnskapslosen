"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "rl-cookie-consent-v1";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Choice = { analytics: boolean };

function read(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v ? (JSON.parse(v) as Choice) : null;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event("rl-open-cookies"));
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie-innstillinger
    </button>
  );
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const saved = read();
    setChoice(saved);
    setAnalytics(saved?.analytics ?? false);
    setOpen(!saved);
    setReady(true);
    const reopen = () => {
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener("rl-open-cookies", reopen);
    return () => window.removeEventListener("rl-open-cookies", reopen);
  }, []);

  function save(c: Choice) {
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {
      /* choice just won't persist */
    }
    setChoice(c);
    setAnalytics(c.analytics);
    setOpen(false);
    setShowDetails(false);
  }

  return (
    <>
      {ready && GA_ID && choice?.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {ready && open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-lg border border-slate-2 bg-white p-5 shadow-2xl sm:p-6"
        >
          <h2 id="cookie-title" className="text-lg">
            Vi bruker informasjonskapsler
          </h2>
          <p className="mt-2 text-[0.95rem] text-muted">
            Nødvendige informasjonskapsler gjør at nettsiden fungerer. Med ditt
            samtykke bruker vi også statistikk for å forbedre siden. Du kan
            endre valget når som helst. Les mer i{" "}
            <Link
              href="/personvern#informasjonskapsler"
              className="font-medium text-green underline underline-offset-2"
            >
              personvernerklæringen
            </Link>
            .
          </p>

          {showDetails && (
            <div className="mt-4 space-y-3 text-[0.95rem]">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked disabled className="mt-1.5 h-4 w-4" />
                <span>
                  <strong>Nødvendige</strong>
                  <br />
                  <span className="text-muted">
                    Lagrer valget ditt her og sørger for at siden fungerer. Kan ikke slås av.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1.5 h-4 w-4 accent-[#00493e]"
                />
                <span>
                  <strong>Statistikk</strong>
                  <br />
                  <span className="text-muted">
                    Google Analytics med anonymisert IP-adresse. Viser hvilke sider som brukes.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => save({ analytics: true })}
              className="rounded-md bg-green px-5 py-2.5 font-display text-sm font-semibold text-white hover:bg-green-dark"
            >
              Godta alle
            </button>
            <button
              type="button"
              onClick={() => save({ analytics: false })}
              className="rounded-md border-2 border-green px-5 py-2.5 font-display text-sm font-semibold text-green hover:bg-green-soft"
            >
              Kun nødvendige
            </button>
            {showDetails ? (
              <button
                type="button"
                onClick={() => save({ analytics })}
                className="rounded-md px-3 py-2.5 font-display text-sm font-semibold text-green underline underline-offset-4"
              >
                Lagre valg
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="rounded-md px-3 py-2.5 font-display text-sm font-semibold text-green underline underline-offset-4"
              >
                Tilpass
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
