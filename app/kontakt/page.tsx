import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { Container, PageHero } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/kontakt" },
  title: "Kontakt",
  description:
    "Kontakt Regnskapslosen AS i Storgata 2, Kristiansund. Telefon 986 86 610 / 454 74 718, post@regnskapslosen.no.",
};

export default function Kontakt() {
  const mapQuery = `${SITE.street}, ${SITE.postcode} ${SITE.city}`;
  return (
    <>
      <PageHero
        title="Kontakt oss"
        eyebrow="Vi hører gjerne fra deg"
        image={{ name: "team-gruppe", alt: "Teamet i Regnskapslosen smiler til kamera", position: "center 45%" }}
        intro="Send oss en melding, ring eller kom innom kontoret. Vi svarer vanligvis innen en virkedag."
      />
      <section className="py-16">
        <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl">Send en melding</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside>
            <h2 className="text-2xl sm:text-3xl">Regnskapslosen AS</h2>
            <address className="mt-6 space-y-4 text-lg not-italic">
              <p>
                {SITE.street}
                <br />
                {SITE.postcode} {SITE.city}
              </p>
              <p>
                <a className="font-semibold text-green underline underline-offset-4" href={SITE.phoneHref}>
                  {SITE.phone}
                </a>
                <br />
                <a className="font-semibold text-green underline underline-offset-4" href={SITE.phone2Href}>
                  {SITE.phone2}
                </a>
                <br />
                <a className="font-semibold text-green underline underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p className="text-muted">{SITE.hours}</p>
            </address>
            <MapEmbed query={mapQuery} title="Kart: Regnskapslosen, Storgata 2, Kristiansund" />
          </aside>
        </Container>
      </section>
    </>
  );
}
