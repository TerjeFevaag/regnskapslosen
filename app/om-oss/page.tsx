import type { Metadata } from "next";
import { Container, PageHero, Photo, SectionHeading } from "@/components/ui";
import { ContactBand, History, PhotoStrip, TeamGrid } from "@/components/sections";

export const metadata: Metadata = {
  alternates: { canonical: "/om-oss" },
  title: "Om oss",
  description:
    "Regnskapslosen AS er et 100 % lokaleid regnskapskontor i sentrum av Kristiansund. Møt teamet og les historien vår.",
};

export default function OmOss() {
  return (
    <>
      <PageHero
        title="Om oss"
        intro="Regnskapslosen AS er et 100 % lokaleid regnskapskontor i sentrum av Kristiansund."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-lg text-muted">
              <p>
                Regnskapslosen startet som rådgivnings- og konsulenttjenester
                innen økonomi og regnskap, med hovedfokus på digitalisering og
                optimalisering av arbeidsoppgaver. Da behovet for mer tyngde i
                oppgavene vokste, ble et regnskapskontor aktuelt.
              </p>
              <p>
                Hjelseth Regnskapskontor var byens eldste gjenværende
                tradisjonelle regnskapskontor, med 50 års erfaring gjennom
                generasjoner. I 2019 ble Hjelseth Regnskap kjøpt av
                Regnskapslosen AS og eksisterte videre under eget navn ut 2024.
              </p>
              <p>
                I 2024 var tiden inne for å ta tilbake navnet Regnskapslosen.
                Vi fortsetter å drive et tradisjonelt og moderne
                regnskapskontor, og tilbyr i tillegg konsulenttjenester innen
                digitalisering og optimalisering. Sammen loser vi dere trygt i
                havn.
              </p>
            </div>
            <div className="space-y-5 text-lg text-muted">
              <p>
                Vi hjelper små og mellomstore bedrifter med trygg og oversiktlig
                økonomistyring. Nærhet og tilgjengelighet er viktig for oss.
                Du skal ha en fast kontaktperson som kjenner virksomheten godt
                og er tilgjengelig.
              </p>
              <p>
                Vi kombinerer moderne regnskapssystemer med personlig
                oppfølging, slik at tallene blir enkle å forstå og beslutningene
                blir bedre.
              </p>
              <Photo
                name="team-gruppe"
                alt="Teamet i Regnskapslosen samlet på kontoret"
                className="aspect-[16/9]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl">Visjon</h2>
              <p className="mt-4 text-lg text-muted">
                Nærhet og eierskap til bedriftens regnskap gir best resultat, og
                beslutninger tas i tråd med selskapets strategi og økonomiske
                evne.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl">Målsetting</h2>
              <p className="mt-4 text-lg text-muted">
                Verdiskaping for kundene gjennom økt lønnsomhet og bedre
                kontroll.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title="Teamet" />
          <div className="mt-12">
            <TeamGrid detailed />
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHeading title="Historien vår" />
          <div className="mt-10">
            <History />
          </div>
        </Container>
      </section>

      <PhotoStrip />
      <div className="h-20" />

      <ContactBand />
    </>
  );
}
