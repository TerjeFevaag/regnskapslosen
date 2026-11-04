import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, PageHero, Photo } from "@/components/ui";
import { ContactBand } from "@/components/sections";
import { FaqSection, faqJsonLd } from "@/components/Faq";
import { SERVICES, getService } from "@/lib/services";
import { SITE, TEAM } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/tjenester/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.metaDescription,
      areaServed: "Kristiansund",
      provider: { "@type": "AccountingService", name: SITE.name, url: SITE.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hjem", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Tjenester", item: `${SITE.url}/tjenester` },
        { "@type": "ListItem", position: 3, name: s.title, item: `${SITE.url}/tjenester/${s.slug}` },
      ],
    },
  ];

  const others = SERVICES.filter((o) => o.slug !== s.slug);
  // Rotate team portraits across the service pages (no named assignment implied).
  const person = TEAM[SERVICES.findIndex((x) => x.slug === s.slug) % TEAM.length];

  return (
    <>
      <PageHero
        title={s.title}
        intro={s.text}
        eyebrow="Våre tjenester"
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <nav aria-label="Brødsmulesti" className="mb-8 text-sm text-muted">
              <Link href="/" className="hover:text-green">Hjem</Link> /{" "}
              <Link href="/tjenester" className="hover:text-green">Tjenester</Link> /{" "}
              <span aria-current="page">{s.title}</span>
            </nav>
            <div className="space-y-4 text-lg text-muted">
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h2 className="mt-10 text-2xl">Dette kan vi hjelpe med</h2>
            <ul className="mt-5 space-y-3 text-lg">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-green" />
                  {p}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl">Hvem passer det for?</h2>
            <p className="mt-3 text-lg text-muted">{s.forWho}</p>
          </div>
          <aside>
            <Photo
              name={person.image}
              alt={`Portrett av ${person.name}`}
              shape="soft"
              position="center 25%"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="mx-auto aspect-[4/5] w-full max-w-sm"
            />
            <p className="mt-6 font-display text-xl font-semibold text-green">Du får en fast kontaktperson</p>
            <p className="mt-2 text-muted">
              Én som kjenner virksomheten din og tar seg tid til å forklare
              tallene.
            </p>
            <div className="mt-5">
              <Link
                href="/kontakt"
                className="font-display font-semibold text-green underline underline-offset-4"
              >
                Book en uforpliktende prat →
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      <FaqSection
        faqs={s.faqs}
        tone="blush"
        title={`Spørsmål om ${s.title.charAt(0).toLowerCase() + s.title.slice(1)}`}
      />

      <section className="py-14">
        <Container>
          <h2 className="text-2xl">Andre tjenester</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/tjenester/${o.slug}`}
                  className="font-display font-semibold text-green underline underline-offset-4"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
