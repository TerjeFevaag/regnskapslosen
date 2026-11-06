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
      { q: "Hva er grensen for mva-registrering?", a: "Du må registrere deg i Merverdiavgiftsregisteret når omsetningen de siste 12 månedene overstiger 50 000 kroner. Vi hjelper deg å vurdere når det er aktuelt og registrerer deg." },
      { q: "Hva skjer hvis vi ikke leverer mva-meldingen i tide?", a: "Skatteetaten ilegger forsinkelsesgebyr, og renter kan løpe fra fristen. Vi følger opp alle frister for deg slik at det ikke skjer." },
      { q: "Kan jeg trekke fra mva på alle kjøp?", a: "Nei, bare kjøp som brukes i den mva-pliktige virksomheten gir rett til fradrag. Du har for eksempel ikke fradragsrett for mva på mat, representasjon eller kjøp til privat bruk. Vi veileder deg på hva som er fradragsberettiget." },
      { q: "Hvem leverer skattemeldingen for bedriften min?", a: "For aksjeselskap leverer vi næringsoppgaven som del av årsoppgjøret. For enkeltpersonforetak inngår næringsoppgaven i din personlige skattemelding, og vi hjelper deg med den." },
      { q: "Hva skjer hvis vi har etterslep i regnskapet?", a: "Vi hjelper deg å rydde opp. Vi vurderer situasjonen, legger en plan og kommer à jour. Det er bedre å ta tak i det tidlig enn å la det hope seg opp." },
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
      { q: "Er digitale bilag godkjent?", a: "Ja. Bildet av en kvittering er godkjent som bilag så lenge det er leselig og viser dato, beløp, mva og leverandør. I Tripletex kan du ta bilde med mobilen og sende det rett inn." },
      { q: "Hva kan automatiseres i Tripletex?", a: "Bankavlesing, kreditorfaktura, bilagsflyt og purringer kan i stor grad automatiseres. Nøyaktig hva som passer for din bedrift avhenger av størrelse og rutiner, og det ser vi på sammen." },
      { q: "Kan vi koble nettbutikken vår til Tripletex?", a: "Tripletex har integrasjoner mot blant annet WooCommerce, Shopify og flere faktureringssystemer. Vi hjelper deg å sette opp koblingen og teste at tallene stemmer." },
      { q: "Hva koster det å bytte regnskapssystem?", a: "Selve Tripletex-lisensen er rimelig, men overgangen tar tid og krever opplæring. Vi planlegger byttet slik at du ikke mister historikk og at driften ikke stopper opp." },
      { q: "Hvem eier dataene i systemet?", a: "Det gjør du. Tripletex er et norsk system med servere i Norge, og dataene dine tilhører deg, ikke systemleverandøren eller oss." },
    ],
  },
  {
    slug: "strukturering",
    title: "Strukturering",
    text: "Uklare rutiner og ansvar koster tid og skaper unødvendige feil. Vi setter opp et system der alle vet hva de skal gjøre – og når.",
    metaDescription:
      "Rydd opp i økonomirutinene: Regnskapslosen setter opp klare ansvarslinjer, faste prosesser og oversikt over frister for bedriften din.",
    intro: [
      "Mange bedrifter samler opp bilag, glemmer frister og er usikre på hvem som egentlig har ansvar for hva i regnskapet. Strukturering handler om å rydde opp i det – og holde det ryddig.",
      "Vi kartlegger hvordan dere jobber i dag, finner flaskehalsene og lager et opplegg som fungerer i hverdagen. Resultatet er færre overraskelser, bedre kontroll og et regnskap som er klart når det skal være det.",
    ],
    points: [
      "Kartlegging av dagens rutiner og ansvarsfordeling",
      "Faste rutiner for bilag og innrapportering",
      "Oversikt over frister og rapporteringsplikter",
      "Tydelig oppgavefordeling mellom deg og oss",
    ],
    forWho:
      "Voksende bedrifter og nye AS-er som vil ha orden fra starten, og etablerte bedrifter som har merket at rutinene ikke lenger henger sammen.",
    image: { name: "mote-gjennomgang", alt: "Regnskapslosen-teamet planlegger oppgaver sammen i møterom", position: "center" },
    teamMember: "team-jorunn-stromsvag",
    faqs: [
      { q: "Hvem er ansvarlig for mva-meldingen, oss eller dere?", a: "Det avtaler vi tydelig fra start. Som autorisert regnskapsfører tar vi ansvaret for mva-meldingen på vegne av deg, men du er alltid informert om hva som leveres og når." },
      { q: "Hva bør vi ha klart til årsoppgjøret?", a: "Alle bilag bokført og avstemt, banken kontrollert, utestående fakturaer avklart og eventuelle lønn- og feriepengeposter på plass. Vi sender deg en sjekkliste i god tid." },
      { q: "Hva gjør vi hvis vi ansetter noen for første gang?", a: "Du blir arbeidsgiverpliktig med A-melding, feriepenger, yrkesskadeforsikring og eventuelt pensjon (OTP). Vi hjelper deg å sette opp alt riktig fra start." },
      { q: "Kan dere overta rutinene fra en regnskapsfører vi bytter fra?", a: "Ja. Vi innhenter informasjon fra den tidligere regnskapsføreren, går gjennom status og sørger for en smidig overgang uten hull i historikken." },
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
    teamMember: "team-grete-orsal",
    faqs: [
      { q: "Når bør jeg gå fra ENK til AS?", a: "En vanlig tommelfingerregel er når overskuddet overstiger omtrent 500 000 kroner, fordi AS-strukturen da kan gi lavere skatt og et tydeligere skille mellom privat og bedrift. Tidspunktet avhenger også av risiko og vekstplaner. Vi regner på din situasjon." },
      { q: "Hva er minimumskravet til aksjekapital?", a: "Du trenger minst 30 000 kroner i aksjekapital for å stifte et AS. Beløpet kan du selv bestemme bruken av, og det trenger ikke stå ubrukt." },
      { q: "Kan jeg omdanne ENK til AS uten å skatte av det?", a: "Ja, skattefri omdanning er mulig hvis du gjør det etter reglene. Det innebærer at alle eiendeler og gjeld overføres til AS-et til skattemessige verdier. Vi hjelper deg gjennom prosessen." },
      { q: "Hva er forskjellen på lønn og utbytte fra AS-et?", a: "Lønn er fradragsberettiget i selskapet og gir deg pensjonsopptjening, men belastes trygdeavgift. Utbytte beskattes som kapitalinntekt uten trygdeavgift, men er ikke fradragsberettiget. Den beste kombinasjonen avhenger av din situasjon." },
      { q: "Kan jeg starte et AS alene?", a: "Ja, du kan stifte et AS alene som enestyre og eneaksjonær. Du trenger ikke partnere." },
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
    teamMember: "team-anna-dillan",
    faqs: [
      { q: "Hva er forskjellen på regnskapsføring og controller-tjeneste?", a: "Regnskapsføring dokumenterer det som har skjedd: bilag, lønn, mva og årsoppgjør. Controller-tjenesten bruker tallene til å styre fremover: budsjett, likviditetsstyring, analyser og rapportering. De to utfyller hverandre godt." },
      { q: "Hva er en likviditetsprognose, og trenger vi det?", a: "En likviditetsprognose viser når penger kommer inn og går ut de neste ukene og månedene. Det gir deg tid til å handle før det eventuelt strammer seg til, i stedet for å bli overrasket. De fleste bedrifter har nytte av det." },
      { q: "Kan dere hjelpe oss å forstå hvorfor lønnsomheten har falt?", a: "Ja. Vi går gjennom tallene, skiller mellom volum, margin og kostnad, og finner ut hva som faktisk driver endringen. Det er en av de mest verdifulle tingene vi kan gjøre for en bedrift." },
      { q: "Hvem bør eie budsjettprosessen?", a: "Budsjettet bør utarbeides av deg som kjenner driften. Vi bidrar med strukturen, tallgrunnlaget og kvalitetssikrer at det er realistisk og kan brukes til løpende oppfølging." },
      { q: "Hvor ofte bør vi ha økonomirapport?", a: "Det avhenger av størrelse og tempo i bedriften. Mange har nytte av månedlig rapport; kvartalsvis passer for roligere virksomheter. Vi tilpasser det til ditt behov." },
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
      { q: "Hva bør jeg ta i lønn fra AS-et mitt?", a: "Det er et av de vanligste rådgivingsspørsmålene, og det finnes ikke ett svar. Lønn gir deg pensjon via folketrygden og er fradragsberettiget i selskapet, men belastes trygdeavgift. Utbytte beskattes som kapitalinntekt uten trygdeavgift, men er ikke fradragsberettiget. Den optimale kombinasjonen avhenger av din inntekt, alder og selskapets økonomi. Vi regner på din situasjon." },
      { q: "Er det gunstig å kjøpe bil gjennom selskapet?", a: "Det avhenger av bruksmønsteret. Fordelsbeskatning av yrkesbil er høy og kan fort utslette fordelen for de fleste. For biler med mye yrkeskjøring kan det likevel lønne seg. Vi går gjennom tallene for deg før du bestemmer deg." },
      { q: "Hva betyr det at bedriften er lønnsom men ikke har penger?", a: "Resultatet og likviditeten er to forskjellige ting. Bedriften kan vise overskudd mens pengene er bundet i varelager, utestående fakturaer eller avdrag på lån. Vi hjelper deg forstå sammenhengen og planlegge deretter." },
      { q: "Hva bør jeg tenke på hvis jeg vil selge bedriften en dag?", a: "Det er lurt å begynne tidlig. Kjøpere ser på struktur, historikk og lønnsomhet over tid. Vi kan hjelpe deg sette bedriften i stand for salg og gi deg et realistisk bilde av verdien." },
      { q: "Hva er forskjellen på rådgiving og controller-tjeneste?", a: "Controller handler om løpende oppfølging av tall gjennom året. Rådgiving er mer situasjonsbestemt: en beslutning du skal ta, en problemstilling du vil forstå, eller et spørsmål du ikke finner svaret på andre steder." },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
