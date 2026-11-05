// Short texts are from the client's old site. The longer "intro" and "points"
// are draft copy based on those texts and must be reviewed by the client.
export type Service = {
  slug: string;
  title: string;
  text: string;
  metaDescription: string;
  intro: string[];
  points: string[];
  forWho: string;
  /** Photo in /public/images (without extension) used on cards and in the page hero. */
  image: { name: string; alt: string; position?: string };
  /** Team member image key (e.g. "team-grete-orsal") shown in the contact-person aside. Overrides auto-rotation. */
  teamMember?: string;
  /** Draft FAQ copy – must be reviewed by the client. */
  faqs: Faq[];
};

export type Faq = { q: string; a: string };

export const SERVICES: Service[] = [
  {
    slug: "regnskap",
    title: "Regnskap fra A til Å",
    text: "Komplett regnskap med lønnskjøring. Alt fra små enkeltpersonforetak til større aksjeselskaper.",
    metaDescription:
      "Komplett regnskap og lønnskjøring i Kristiansund, for alt fra enkeltpersonforetak til aksjeselskaper. Regnskapslosen fører regnskapet i Tripletex.",
    intro: [
      "Vi tar oss av hele regnskapet, fra bilag og bokføring til lønnskjøring og avslutning. Du får en fast kontaktperson som kjenner virksomheten din.",
      "Vi jobber i Tripletex, så du kan se tallene dine når du vil.",
    ],
    points: [
      "Løpende bokføring og avstemming",
      "Lønnskjøring",
      "Mva-melding og andre frister",
      "Årsregnskap og årsoppgjør",
      "Oppfølging og forklaring av tallene",
    ],
    forWho:
      "Enkeltpersonforetak, mindre bedrifter og aksjeselskaper som vil ha et regnskap de kan stole på.",
    image: { name: "radgivning-kunde", alt: "Regnskapsfører i møte med en kunde ved skrivebordet", position: "center" },
    teamMember: "team-grete-orsal",
    faqs: [
      { q: "Hva er inkludert i regnskap fra A til Å?", a: "Vi tar oss av løpende bokføring, avstemming, lønnskjøring, mva-melding og årsoppgjør, og forklarer tallene underveis. Nøyaktig omfang avtaler vi med deg ut fra størrelsen på virksomheten." },
      { q: "Må jeg bruke Tripletex?", a: "Vi fører regnskap i Tripletex, og anbefaler det fordi du får full oversikt i et nettbasert system der vi jobber sammen. Snakk med oss hvis du bruker noe annet i dag, så finner vi en god løsning." },
      { q: "Får jeg en fast kontaktperson?", a: "Ja. Du har en fast kontaktperson som kjenner virksomheten din, slik at du slipper å forklare alt på nytt hver gang." },
      { q: "Kan jeg levere bilag selv?", a: "Ja. Vi setter opp en enkel rutine for bilag, og viser deg hvordan du leverer dem digitalt i Tripletex." },
      { q: "Hjelper dere også enkeltpersonforetak?", a: "Ja. Vi hjelper alt fra små enkeltpersonforetak til større aksjeselskaper." },
    ],
  },
  {
    slug: "digitalisering-og-optimalisering",
    title: "Digitalisering og optimalisering",
    text: "Vi bruker teknologi til å fornye, forenkle og forbedre. Tjenestene våre er enkle å bruke, effektive og pålitelige.",
    metaDescription:
      "Digitalisering og optimalisering av arbeidsoppgaver og rutiner i regnskap og økonomi. Regnskapslosen hjelper bedrifter i Kristiansund.",
    intro: [
      "Digitalisering og optimalisering av arbeidsoppgaver er der Regnskapslosen startet. Vi hjelper deg å bruke teknologi til å fornye, forenkle og forbedre rutinene i bedriften.",
      "Målet er løsninger som er enkle å bruke, effektive og pålitelige.",
    ],
    points: [
      "Gjennomgang av dagens rutiner",
      "Oppsett og bruk av Tripletex",
      "Mindre manuelt arbeid og færre feil",
      "Opplæring av ansatte",
    ],
    forWho:
      "Bedrifter som bruker mye tid på manuelt arbeid, eller som vil få mer ut av systemene de allerede har.",
    image: { name: "mote-tripletex", alt: "Regnskapslosens team i møterommet, med Tripletex på skjermen", position: "center" },
    teamMember: "team-anna-dillan",
    faqs: [
      { q: "Hva betyr digitalisering og optimalisering i praksis?", a: "Vi går gjennom hvordan du jobber i dag, og finner oppgaver som kan gjøres enklere, raskere og med færre feil. Deretter hjelper vi deg å sette det opp og ta det i bruk." },
      { q: "Må vi bytte regnskapssystem?", a: "Ikke nødvendigvis. Vi ser først på hva dere har, og om dere kan få mer ut av det. Skal dere bytte, hjelper vi dere gjennom overgangen." },
      { q: "Får de ansatte opplæring?", a: "Ja, opplæring av de som skal bruke systemene er en del av jobben." },
      { q: "Hvor starter vi?", a: "Vi starter med en prat om hvordan hverdagen din ser ut. Ta kontakt, så avtaler vi en uforpliktende samtale." },
    ],
  },
  {
    slug: "strukturering",
    title: "Strukturering",
    text: "Vi planlegger oppgavene og iverksetter deloppgavene som trengs for å nå målet. God planlegging gjør prosessene forutsigbare for alle parter.",
    metaDescription:
      "Strukturering og planlegging av økonomioppgaver og rutiner. Regnskapslosen i Kristiansund gjør prosessene forutsigbare.",
    intro: [
      "Vi planlegger oppgavene og iverksetter deloppgavene som trengs for å fullføre en oppgave.",
      "God planlegging gjør prosessene forutsigbare for alle parter.",
    ],
    points: [
      "Plan for hvem som gjør hva, og når",
      "Faste rutiner for bilag og innrapportering",
      "Oversikt over frister",
      "Tydelig oppgavefordeling mellom deg og oss",
    ],
    forWho:
      "Bedrifter som vil ha ryddigere økonomirutiner og færre overraskelser.",
    image: { name: "mote-gjennomgang", alt: "Regnskapslosen-teamet planlegger oppgaver sammen i møterom", position: "center" },
    teamMember: "team-jorunn-stromsvag",
    faqs: [
      { q: "Hva menes med strukturering?", a: "Vi lager en tydelig plan for hvem som gjør hva og når, slik at økonomioppgavene blir forutsigbare for alle." },
      { q: "Hjelper dere med frister?", a: "Ja. Vi gir deg oversikt over frister og sørger for at rutinene er på plass, så du slipper overraskelser." },
      { q: "Passer det også for en liten bedrift?", a: "Ja. Små virksomheter har ofte mest å vinne på enkle, faste rutiner." },
      { q: "Kan dere ta over rutinene helt?", a: "Det avtaler vi sammen. Noen vil gjøre mest selv, andre vil overlate det meste til oss." },
    ],
  },
  {
    slug: "selskapsetablering",
    title: "Selskapsetablering",
    text: "Hjelp til å velge selskapsform, registrere og administrere selskapet.",
    metaDescription:
      "Hjelp til selskapsetablering i Kristiansund: valg av selskapsform, registrering og administrasjon. Regnskapslosen AS.",
    intro: [
      "Skal du starte virksomhet? Vi hjelper deg å velge selskapsform, registrere selskapet og administrere det etterpå.",
    ],
    points: [
      "Valg av selskapsform",
      "Registrering av selskapet",
      "Oppstart av regnskap og system",
      "Løpende administrasjon av selskapet",
    ],
    forWho: "Deg som skal starte egen virksomhet, eller endre selskapsform.",
    image: { name: "to-kollegaer-banner", alt: "To kolleger fra Regnskapslosen foran roll-up på kontoret", position: "center" },
    teamMember: "team-anna-dillan",
    faqs: [
      { q: "Hvilken selskapsform bør jeg velge?", a: "Det avhenger av risiko, økonomi, antall eiere og planene dine. Vi går gjennom alternativene med deg, for eksempel enkeltpersonforetak og aksjeselskap." },
      { q: "Hjelper dere med registrering?", a: "Ja, vi hjelper deg å registrere selskapet og følger opp det praktiske etterpå." },
      { q: "Kan dere sette opp regnskapet fra dag én?", a: "Ja. Vi setter opp regnskap og system i Tripletex fra start, slik at du kommer rett i gang." },
      { q: "Kan jeg endre selskapsform senere?", a: "Ofte ja. Ta kontakt hvis du vurderer å endre, så ser vi på hva som er best for deg." },
    ],
  },
  {
    slug: "controller",
    title: "Controller",
    text: "Oppfølging av regnskapet gjennom året, slik at informasjonen er korrekt. Hjelp til budsjettering, likviditetsstyring og rapportering.",
    metaDescription:
      "Controllertjenester for små og mellomstore bedrifter: oppfølging av regnskap, budsjettering, likviditetsstyring og rapportering. Regnskapslosen, Kristiansund.",
    intro: [
      "Vi følger opp regnskapet gjennom året, slik at informasjonen er korrekt når du skal ta beslutninger.",
      "Du får hjelp til budsjettering, likviditetsstyring og rapportering.",
    ],
    points: [
      "Løpende kontroll av regnskapet",
      "Budsjettering",
      "Likviditetsstyring",
      "Rapportering som er enkel å forstå",
    ],
    forWho:
      "Bedrifter som trenger bedre kontroll og oversikt, men ikke har egen økonomiavdeling.",
    image: { name: "kontor-kollegaer", alt: "Regnskapsfører og kollega ved skrivebordet", position: "center" },
    teamMember: "team-grete-orsal",
    faqs: [
      { q: "Hva gjør en controller for meg?", a: "Vi følger opp regnskapet gjennom året, slik at tallene er riktige, og hjelper deg med budsjett, likviditet og rapportering." },
      { q: "Trenger jeg dette hvis dere allerede fører regnskapet?", a: "Regnskapet viser hva som har skjedd. Controllerrollen handler om å bruke tallene til å styre fremover." },
      { q: "Hvor ofte får jeg rapporter?", a: "Det avtaler vi ut fra hva du trenger, for eksempel månedlig eller kvartalsvis." },
      { q: "Passer det for små bedrifter?", a: "Ja, spesielt hvis du ikke har egen økonomiavdeling." },
    ],
  },
  {
    slug: "okonomisk-radgiving",
    title: "Økonomisk rådgiving",
    text: "Rådgiving innen økonomi og regnskap, og økonomisk konsulentvirksomhet.",
    metaDescription:
      "Økonomisk rådgiving og konsulenttjenester innen økonomi og regnskap for små og mellomstore bedrifter i Kristiansund.",
    intro: [
      "Vi gir rådgiving innen økonomi og regnskap, og tilbyr økonomisk konsulentvirksomhet.",
      "Vi hjelper deg å ta beslutninger i tråd med selskapets strategi og økonomiske evne.",
    ],
    points: [
      "Rådgiving i økonomiske spørsmål",
      "Konsulenthjelp i prosjekter",
      "Gjennomgang av lønnsomhet",
      "Beslutningsstøtte basert på tallene dine",
    ],
    forWho:
      "Bedriftseiere og ledere som trenger en sparringspartner i økonomi.",
    image: { name: "samtale-grete-jorunn", alt: "Rådgiver og kunde i et rolig en-til-en-møte", position: "center" },
    faqs: [
      { q: "Hva kan jeg få rådgiving om?", a: "Alt fra lønnsomhet og beslutninger i bedriften til økonomiske spørsmål som dukker opp underveis." },
      { q: "Er rådgivingen personlig?", a: "Ja. Du snakker direkte med en av oss som setter seg inn i din virksomhet." },
      { q: "Hjelper dere også i prosjekter?", a: "Ja, vi kan bistå som økonomisk konsulent i større og mindre prosjekter." },
      { q: "Hvordan kommer jeg i gang?", a: "Ta kontakt på telefon eller e-post, eller send meldingen via kontaktskjemaet." },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
