import Link from "next/link";
import { Button, Container, Eyebrow, Photo, SectionHeading, Mountains } from "@/components/ui";
import {
  ContactBand,
  History,
  OneToOne,
  ServicesGrid,
  Steps,
  TeamGrid,
  TripletexSection,
} from "@/components/sections";
import { FaqSection } from "@/components/Faq";
import { HOME_FAQS } from "@/lib/faq";

export default function Home() {
  return (
    <>
      <section className="bg-mist">
        <Container className="grid items-center gap-12 pb-6 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow>Personlig regnskapshjelp, én til én</Eyebrow>
            <h1 className="rise text-4xl sm:text-5xl lg:text-[3.3rem]">
              Autorisert regnskapskontor i Kristiansund
            </h1>
            <p className="rise rise-2 mt-6 max-w-xl text-lg text-muted">
              Profesjonell bistand innen regnskap, lønn og økonomistyring for
              små og mellomstore bedrifter. Du får en fast kontaktperson som
              kjenner virksomheten din, og som tar seg tid til deg.
            </p>
            <div className="rise rise-2 mt-9 flex flex-wrap gap-4">
              <Button href="/kontakt">Ta kontakt</Button>
              <Button href="/tjenester" variant="secondary">
                Se tjenestene
              </Button>
            </div>
          </div>
          <div className="rise rise-2 relative w-full">
            <Photo
              name="team-gruppe"
              alt="Teamet i Regnskapslosen: fire kvinner i hvite skjorter på kontoret i Kristiansund"
              shape="soft"
              priority
              position="center"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full"
            />
            <p className="absolute -right-2 bottom-6 rounded-md bg-white px-5 py-2 font-display text-sm font-semibold text-green shadow-lg sm:-right-6">
              100 % lokaleid
            </p>
          </div>
        </Container>
        <Mountains className="mt-10 h-20 sm:h-32" />
      </section>

      <OneToOne />

      <section className="pb-20">
        <Container>
          <SectionHeading
            eyebrow="Hva kan vi hjelpe med?"
            title="Tjenester"
            intro="Fra daglig bokføring til rådgiving og digitalisering. Vi hjelper alt fra enkeltpersonforetak til aksjeselskaper."
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      <TripletexSection />
      <Steps />

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Møt oss"
            title="Menneskene bak Regnskapslosen"
            intro="Fire fagpersoner som kjenner Kristiansund og næringslivet her."
          />
          <div className="mt-12">
            <TeamGrid />
          </div>
          <div className="mt-12">
            <Link
              href="/om-oss"
              className="font-display font-semibold text-green underline underline-offset-4"
            >
              Les mer om oss →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>Lokaleid, med nærhet</Eyebrow>
              <h2 className="text-3xl sm:text-4xl">
                Fra Hjelseth til Regnskapslosen
              </h2>
              <p className="mt-5 text-lg text-muted">
                Regnskapslosen AS er et 100 % lokaleid regnskapskontor i
                sentrum av Kristiansund. Vår målsetting er verdiskaping for
                kundene gjennom økt lønnsomhet og bedre kontroll.
              </p>
            </div>
            <Photo
              name="tre-kollegaer"
              alt="Tre kolleger i samtale ved døren til møterommet"
              className="aspect-[16/10]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
          <div className="mt-12">
            <History />
          </div>
        </Container>
      </section>

      <FaqSection faqs={HOME_FAQS} tone="blush" />

      <ContactBand />
    </>
  );
}
