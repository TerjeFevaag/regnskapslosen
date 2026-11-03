import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { CookieSettingsButton } from "./CookieConsent";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-green text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link
            href="/"
            aria-label="Regnskapslosen – til forsiden"
            className="inline-block rounded-md bg-white px-5 py-4"
          >
            <Image
              src="/brand/logo.png"
              alt="Regnskapslosen"
              width={300}
              height={81}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-white/80">
            Lokaleid regnskapskontor i sentrum av Kristiansund. Sammen loser vi
            dere trygt i havn.
          </p>
        </div>

        <div>
          <p className="font-display font-semibold">Kontakt</p>
          <address className="mt-3 not-italic leading-relaxed text-white/80">
            {SITE.street}
            <br />
            {SITE.postcode} {SITE.city}
            <br />
            <a className="underline underline-offset-2 hover:text-white" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <br />
            <a className="underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </address>
          <p className="mt-3 text-white/80">{SITE.hours}</p>
        </div>

        <div>
          <p className="font-display font-semibold">Sider</p>
          <ul className="mt-3 space-y-1 text-white/80">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link className="py-2.5 hover:text-white" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-white" href="/personvern">
                Personvernerklæring
              </Link>
            </li>
            <li>
              <CookieSettingsButton className="hover:text-white" />
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-5 text-sm text-white/70 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} Regnskapslosen AS
            {SITE.orgnr ? ` · Org.nr. ${SITE.orgnr}` : ""}
          </span>
          <span>
            Design og utvikling av{" "}
            <a
              href="https://fevaag.no"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 hover:text-white"
            >
              Fevaag Web Consulting
            </a>
          </span>
        </Container>
      </div>
    </footer>
  );
}
