import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Slik samler Regnskapslosen AS inn og bruker informasjon om besøkende på nettsiden, inkludert informasjonskapsler og kontaktskjema.",
  alternates: { canonical: "/personvern" },
};

// Based on the privacy statement on the old regnskapslosen.no. Sections for
// features this site does not have (search, share/tips, newsletter) were left
// out, and the form provider was changed to Resend. Client must approve.
export default function Personvern() {
  return (
    <>
      <PageHero title="Personvernerklæring" />
      <section className="py-16">
        <Container className="max-w-3xl space-y-5 text-lg [&_h2]:mt-10 [&_h2]:text-2xl">
          <p>
            Personvernerklæringen handler om hvordan denne nettsiden samler inn
            og bruker informasjon om besøkende. Erklæringen inneholder
            informasjon du har krav på når det samles inn opplysninger fra
            nettstedet vårt (personopplysningsloven § 19), og generell
            informasjon om hvordan vi behandler personopplysninger
            (personopplysningsloven § 18, 1. ledd). Juridisk eier av nettsiden
            er behandlingsansvarlig for virksomhetens behandling av
            personopplysninger. Det er frivillig for de som besøker nettsidene
            å oppgi personopplysninger. Behandlingsgrunnlaget er samtykke fra
            den enkelte, med mindre annet er spesifisert.
          </p>
          <p>
            Behandlingsansvarlig: {SITE.name}, {SITE.street}, {SITE.postcode}{" "}
            {SITE.city}. Spørsmål kan sendes til{" "}
            <a className="text-green underline underline-offset-2" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>

          <h2 id="informasjonskapsler">Webanalyse og informasjonskapsler (cookies)</h2>
          <p>
            Som en viktig del av arbeidet med å lage et brukervennlig nettsted
            ser vi på brukermønsteret til de som besøker nettstedet. For å
            analysere informasjonen bruker vi analyseverktøyet Google
            Analytics, men bare dersom du har gitt samtykke i
            informasjonskapsel-banneret. Google Analytics bruker
            informasjonskapsler (små tekstfiler som nettstedet lagrer på
            enheten din). Statistikken gir oss svar på hvor mange som besøker
            ulike sider, hvor lenge besøket varer, hvilke nettsteder
            brukerne kommer fra og hvilke nettlesere som brukes. Ingen av
            informasjonskapslene gjør at vi kan knytte informasjon om din bruk
            av nettstedet til deg som enkeltperson.
          </p>
          <p>
            Informasjonen som samles inn av Google Analytics lagres på Googles
            servere, blant annet i USA, og er underlagt Googles retningslinjer
            for personvern. En IP-adresse regnes som en personopplysning fordi
            den kan spores tilbake til en bestemt enhet. Vi bruker Google
            Analytics sin sporingskode som anonymiserer IP-adressen før
            informasjonen lagres og bearbeides av Google, slik at den lagrede
            IP-adressen ikke kan brukes til å identifisere den enkelte.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-base">
              <caption className="pb-2 text-left font-display font-semibold text-green">
                Informasjonskapsler og lagring på nettsiden
              </caption>
              <thead>
                <tr className="border-b-2 border-green">
                  <th className="py-2 pr-4">Navn</th>
                  <th className="py-2 pr-4">Formål</th>
                  <th className="py-2 pr-4">Type</th>
                  <th className="py-2">Varighet</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-slate-1">
                  <td className="py-2 pr-4">rl-cookie-consent-v1</td>
                  <td className="py-2 pr-4">Husker ditt valg om informasjonskapsler</td>
                  <td className="py-2 pr-4">Nødvendig</td>
                  <td className="py-2">Til du sletter nettleserdata</td>
                </tr>
                <tr className="border-b border-slate-1">
                  <td className="py-2 pr-4">_ga, _ga_*</td>
                  <td className="py-2 pr-4">Google Analytics, besøksstatistikk</td>
                  <td className="py-2 pr-4">Statistikk (krever samtykke)</td>
                  <td className="py-2">Opptil 2 år</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <CookieSettingsButton className="font-display font-semibold text-green underline underline-offset-4" />{" "}
            – endre eller trekk tilbake samtykket når som helst.
          </p>

          <h2>Kontaktskjema</h2>
          <p>
            Kontaktskjemaet er for at besøkende enkelt kan sende en melding til
            oss. Vi ber om navn, e-postadresse og eventuelt telefonnummer.
            Personopplysninger vi mottar blir ikke brukt til andre formål enn å
            svare på henvendelsen. Skjemaet sendes som e-post via en
            tredjepartsløsning (Resend), som behandler innholdet på våre
            vegne. Når e-posten er mottatt hos oss, er det vi som avgjør
            behandlingsbehovet for den.
          </p>

          <h2>Side- og tjenestefunksjonalitet</h2>
          <p>
            Det kan brukes informasjonskapsler eller lignende lagring i drift
            og presentasjon av nettstedet, for eksempel for å huske valg du har
            gjort.
          </p>

          <h2>Kart fra Google Maps</h2>
          <p>
            På kontaktsiden kan du vise et kart fra Google Maps. Kartet lastes
            først når du selv trykker «Vis kart». Da kobler nettleseren din til
            Google, som kan motta din IP-adresse og sette informasjonskapsler.
            Vi lagrer ikke denne informasjonen selv.
          </p>

          <h2>Slik forhindrer du at informasjonskapsler lagres</h2>
          <p>
            Du kan slette informasjonskapsler fra enheten din når som helst,
            men da forsvinner dine personlige innstillinger. Du kan også endre
            innstillingene i nettleseren slik at den ikke tillater at
            informasjonskapsler lagres. Dette kan gi dårligere funksjonalitet
            på enkelte nettsider.
          </p>
          <p>
            Hvis du ikke ønsker å bli sporet av Google Analytics, kan dette
            deaktiveres på{" "}
            <a
              className="text-green underline underline-offset-2"
              href="https://tools.google.com/dlpage/gaoptout"
              rel="noopener noreferrer"
              target="_blank"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            . Mer informasjon om hvordan du kan unngå informasjonskapsler finner
            du på{" "}
            <a className="text-green underline underline-offset-2" href="https://www.nettvett.no" rel="noopener noreferrer" target="_blank">
              nettvett.no
            </a>{" "}
            og{" "}
            <a className="text-green underline underline-offset-2" href="https://www.allaboutcookies.org" rel="noopener noreferrer" target="_blank">
              allaboutcookies.org
            </a>
            .
          </p>

          <h2>Deling av opplysninger</h2>
          <p>
            Vi deler ikke dine opplysninger med andre parter enn vårt eget
            interne Zirius CRM-system. Du kan når som helst be oss om innsyn i
            alt vi har om deg, eller om at alt slettes.
          </p>

          <h2>Du kan klage på vår behandling av personopplysninger</h2>
          <p>
            Vi håper du sier ifra dersom du mener vi ikke overholder reglene i
            personopplysningsloven. Ta gjerne først kontakt med oss. Du kan
            også klage over vår behandling av personopplysninger til{" "}
            <a className="text-green underline underline-offset-2" href="https://www.datatilsynet.no" rel="noopener noreferrer" target="_blank">
              Datatilsynet
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
