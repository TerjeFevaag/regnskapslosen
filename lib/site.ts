export const SITE = {
  name: "Regnskapslosen AS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://regnskapslosen.no",
  phone: "+47 986 86 610",
  phoneHref: "tel:+4798686610",
  phone2: "+47 454 74 718",
  phone2Href: "tel:+4745474718",
  email: "post@regnskapslosen.no",
  street: "Storgata 2",
  postcode: "6509",
  city: "Kristiansund N",
  hours: "Mandag–fredag 08.00–16.00",
  orgnr: "", // TODO: confirm org.nr with client and add here
};

export const NAV = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/tripletex", label: "Tripletex" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export { SERVICES } from "./services";

export const TEAM = [
  {
    name: "Gitte Nilsen",
    image: "team-gitte-nilsen",
    role: "Daglig leder, statsautorisert regnskapsfører",
    bio: [
      "Bachelor ved Høyskolen Kristiania i innovasjon og forretningsutvikling.",
      "Bachelor ved Høyskolen i Molde i økonomi og administrasjon.",
      "Startet som regnskapsfører i 2020 og ble statsautorisert våren 2024.",
    ],
  },
  {
    name: "Jorunn Strømsvåg",
    image: "team-jorunn-stromsvag",
    role: "Administrativ leder",
    bio: [
      "Utdanning ved BI Handelshøyskole.",
      "Har siden 1986 jobbet som regnskapsansvarlig og senere økonomisjef.",
    ],
  },
  {
    name: "Anna Dillan",
    image: "team-anna-dillan",
    role: "Statsautorisert regnskapsfører",
    bio: [
      "Bachelor ved Nord universitet i økonomi.",
      "Har jobbet innen regnskap siden 2021 og ble statsautorisert ved inngangen til 2025.",
    ],
  },
  {
    name: "Grete Ørsal",
    image: "team-grete-orsal",
    role: "Regnskapsmedarbeider",
    bio: [
      "Ett års studie ved Høyskolen Kristiania som regnskapsmedarbeider.",
      "Har jobbet med regnskap siden 2020, først som daglig leder og senere som kontormedarbeider.",
    ],
  },
];

export const STEPS = [
  {
    title: "Oppstart",
    text: "Vi kartlegger virksomheten, setter opp Tripletex og avtaler hvem som gjør hva.",
  },
  {
    title: "Samarbeid",
    text: "Du har en fast kontaktperson som kjenner bedriften og er lett å nå.",
  },
  {
    title: "Oppfølging",
    text: "Vi følger opp tallene gjennom året, så du kan ta beslutninger på riktig grunnlag.",
  },
];

export const HISTORY = [
  { year: "50 år", text: "Hjelseth Regnskapskontor, byens eldste gjenværende tradisjonelle regnskapskontor." },
  { year: "2019", text: "Regnskapslosen AS kjøper Hjelseth Regnskap, som drives videre under eget navn." },
  { year: "2024", text: "Vi tar tilbake navnet Regnskapslosen og viderefører et tradisjonelt og moderne regnskapskontor." },
];
