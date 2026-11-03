import Image from "next/image";
import Link from "next/link";
import { NAV, SERVICES } from "@/lib/site";
import { Container } from "./ui";
import MobileMenu from "./MobileMenu";
import DropdownEscape from "./DropdownEscape";

// "Kontakt" is covered by the "Ta kontakt" button, so it is not repeated as a text link.
const HEADER_NAV = NAV.filter((n) => n.href !== "/kontakt");

const linkClass =
  "py-2 font-display text-[0.95rem] font-medium text-ink hover:text-green";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-1 bg-white">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Regnskapslosen – til forsiden">
          <Image
            src="/brand/logo.png"
            alt="Regnskapslosen"
            width={300}
            height={81}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <DropdownEscape />
        <nav aria-label="Hovedmeny" className="hidden items-center gap-8 md:flex">
          {HEADER_NAV.map((n) =>
            n.href === "/tjenester" ? (
              <div key={n.href} className="has-dropdown relative">
                <Link href={n.href} className={`${linkClass} inline-flex items-center gap-1.5 py-6`}>
                  {n.label}
                  <svg aria-hidden viewBox="0 0 12 8" className="h-2 w-3 fill-none stroke-current" strokeWidth="2">
                    <path d="M1 1.5l5 5 5-5" />
                  </svg>
                </Link>
                <ul className="dropdown absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 rounded-md border border-slate-1 bg-white p-2 shadow-xl">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/tjenester/${s.slug}`}
                        className="block rounded-md px-4 py-2.5 font-display text-[0.92rem] font-medium text-ink hover:bg-mist hover:text-green"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-slate-1 pt-1">
                    <Link
                      href="/tjenester"
                      className="block rounded-md px-4 py-2.5 font-display text-[0.92rem] font-semibold text-green hover:bg-mist"
                    >
                      Se alle tjenester →
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link key={n.href} href={n.href} className={linkClass}>
                {n.label}
              </Link>
            ),
          )}
          <Link
            href="/kontakt"
            className="rounded-md bg-green px-5 py-2.5 font-display text-[0.95rem] font-semibold text-white hover:bg-green-dark"
          >
            Ta kontakt
          </Link>
        </nav>

        <MobileMenu>
          <nav
            aria-label="Mobilmeny"
            className="absolute right-0 top-14 flex max-h-[80vh] w-72 flex-col overflow-y-auto rounded-md border border-slate-1 bg-white p-2 shadow-lg"
          >
            {HEADER_NAV.map((n) =>
              n.href === "/tjenester" ? (
                <div key={n.href}>
                  <Link
                    href={n.href}
                    className="block rounded-md px-4 py-3 font-display font-medium text-ink hover:bg-mist"
                  >
                    {n.label}
                  </Link>
                  <ul className="mb-1 ml-4 border-l-2 border-slate-2 pl-2">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/tjenester/${s.slug}`}
                          className="block rounded-md px-3 py-2 text-[0.95rem] text-muted hover:bg-mist hover:text-green"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-md px-4 py-3 font-display font-medium text-ink hover:bg-mist"
                >
                  {n.label}
                </Link>
              ),
            )}
            <Link
              href="/kontakt"
              className="mt-1 rounded-md bg-green px-4 py-3 text-center font-display font-semibold text-white"
            >
              Ta kontakt
            </Link>
          </nav>
        </MobileMenu>
      </Container>
    </header>
  );
}
