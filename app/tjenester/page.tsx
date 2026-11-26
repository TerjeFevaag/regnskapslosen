import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { ContactBand, ServicesGrid, Steps } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/tjenester" },
  title: "Tjenester – regnskap, lønn og rådgiving",
  description:
    "Regnskap, lønn, digitalisering, selskapsetablering, controller og rådgiving for bedrifter i hele Norge. Autorisert regnskapskontor i Kristiansund.",
};

export default function Tjenester() {
  return (
    <>
      <PageHero
        title="Tjenester"
        eyebrow="Det vi gjør best"
        intro="Regnskap, lønn og økonomistyring for små og mellomstore bedrifter. Vi holder oss oppdatert på fag, regelverk og teknologi."
      />
      <section className="pt-16">
        <Container>
          <ServicesGrid />
        </Container>
      </section>
      <Steps />
      <ContactBand />
    </>
  );
}
