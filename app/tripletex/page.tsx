import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { ContactBand, TripletexSection } from "@/components/sections";
import { FaqSection } from "@/components/Faq";

const TRIPLETEX_FAQS = [
  {
    q: "Hva gjør jeg selv i Tripletex, og hva gjør dere?",
    a: "Vi tar bokføringen, mva-meldingen, lønn og årsoppgjøret. Du bruker Tripletex til det du vil ha kontroll på selv: sende fakturaer, registrere utlegg og se tallene i sanntid. Fordelingen tilpasser vi etter ditt behov.",
  },
  {
    q: "Kan vi ta med historikken fra systemet vi bruker i dag?",
    a: "I de fleste tilfeller ja. Vi henter ut det som finnes og importerer til Tripletex slik at du ikke mister oversikten over tidligere år. Hva som er mulig å ta med avhenger av hvilket system dere kommer fra.",
  },
  {
    q: "Hvem betaler for Tripletex-lisensen?",
    a: "Lisensen betales av deg som klient. Prisen avhenger av hvilke moduler du trenger, og vi hjelper deg å velge riktig pakke. Mange opplever at tidsgevinsten og oversikten langt overstiger lisenskostnaden.",
  },
  {
    q: "Kan jeg bruke Tripletex på telefonen?",
    a: "Ja. Tripletex har en egen app for iOS og Android der du kan sende fakturaer, fotografere kvitteringer og se saldoen. Mange bruker den til daglige ting mens vi håndterer resten.",
  },
  {
    q: "Hva er forskjellen på Tripletex og Fiken?",
    a: "Tripletex er et fullstendig regnskapssystem som håndterer alt fra bilag og mva til lønn og prosjektregnskap. Fiken er enklere og passer best for svært små bedrifter uten komplekse behov. For de fleste bedrifter vi jobber med gir Tripletex bedre kontroll og mer fleksible integrasjoner.",
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
