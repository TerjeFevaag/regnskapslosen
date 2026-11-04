import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { ContactBand, TripletexSection } from "@/components/sections";
import { FaqSection } from "@/components/Faq";

const TRIPLETEX_FAQS = [
  {
    q: "Hva er Tripletex?",
    a: "Tripletex er et komplett og nettbasert økonomisystem for regnskap, fakturering, lønn, timeføring og prosjekter.",
  },
  {
    q: "Må jeg kjøpe Tripletex selv?",
    a: "Vi hjelper deg å sette opp og komme i gang. Hva som gjelder for lisens og pris avtaler vi sammen, så ta kontakt.",
  },
  {
    q: "Kan jeg se regnskapet mitt når jeg vil?",
    a: "Ja. Siden systemet er nettbasert, ser du tallene dine i sanntid, og vi følger dem opp sammen med deg.",
  },
  {
    q: "Hjelper dere hvis jeg bruker et annet system i dag?",
    a: "Ja. Vi ser på hva du har, og hjelper deg gjennom en eventuell overgang til Tripletex.",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/tripletex" },
  title: "Tripletex",
  description:
    "Regnskapslosen fører regnskapet i Tripletex, et komplett og nettbasert økonomisystem. Få oversikt over regnskap, lønn og fakturering.",
};

const AREAS = [
  {
    title: "Regnskap",
    text: "Bankavstemming, bilag og rapporter på ett sted. Vi gjør bokføringen, du ser resultatet.",
  },
  {
    title: "Fakturering",
    text: "Send fakturaer og følg opp betalinger direkte i systemet.",
  },
  {
    title: "Lønn",
    text: "Lønnskjøring, reiseregninger og utlegg, med lønnsmodulen i Tripletex.",
  },
  {
    title: "Timeføring og prosjekter",
    text: "Se hva tiden brukes på, og hvilke prosjekter som lønner seg.",
  },
];

export default function Tripletex() {
  return (
    <>
      <PageHero
        title="Tripletex"
        intro="Et smart, komplett og nettbasert økonomisystem som tilpasses behovene dine. Support er inkludert."
      />
      <TripletexSection full />
      <section className="py-20">
        <Container>
          <SectionHeading title="Hva du kan bruke Tripletex til" />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {AREAS.map((a) => (
              <div key={a.title} className="border-t-4 border-green pt-5">
                <h3 className="text-xl">{a.title}</h3>
                <p className="mt-3 text-muted">{a.text}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/tripletex-partner.webp"
            alt="Regnskapslosen-teamet foran Tripletex sertifisert partner-banner"
            width={1024}
            height={581}
            quality={90}
            className="mx-auto mt-14 h-auto w-full max-w-3xl rounded-md"
          />
        </Container>
      </section>
      <FaqSection faqs={TRIPLETEX_FAQS} tone="blush" title="Spørsmål om Tripletex" />
      <ContactBand />
    </>
  );
}
