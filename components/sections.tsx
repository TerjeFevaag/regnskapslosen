import Image from "next/image";
import Link from "next/link";
import { HISTORY, SERVICES, STEPS, TEAM } from "@/lib/site";
import { Button, Container, Eyebrow, Photo, SectionHeading } from "./ui";

export function ServicesGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <article
          key={s.slug}
          className="group flex flex-col overflow-hidden rounded-md border border-slate-1 bg-white transition-shadow hover:shadow-lg"
        >
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl">
              <Link href={`/tjenester/${s.slug}`} className="hover:underline">
                {s.title}
              </Link>
            </h3>
            <p className="mt-3 text-muted">{s.text}</p>
            <Link
              href={`/tjenester/${s.slug}`}
              aria-label={`Les mer om ${s.title}`}
              className="mt-auto inline-block self-start pt-4 font-display text-sm font-semibold text-green underline underline-offset-4"
            >
              Les mer →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

const TRIPLETEX_POINTS = [
  {
    title: "Alt på ett sted",
    text: "Regnskap, fakturering, lønn, timeføring og prosjekter i samme nettbaserte system.",
  },
  {
    title: "Tilpasses din bedrift",
    text: "Sømløst integrerte moduler, med lager og lønn når du trenger det.",
  },
  {
    title: "Sanntidsoversikt",
    text: "Du ser tallene når du vil, og vi følger dem opp sammen med deg.",
  },
  {
    title: "Support inkludert",
    text: "Hjelp fra Tripletex når du trenger det, og fra oss som kjenner din bedrift.",
  },
];

export function TripletexSection({ full = false }: { full?: boolean }) {
  return (
    <section className="bg-green-soft py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Photo
              name="mote-tripletex"
              alt="Regnskapslosens team i møte foran en skjerm med Tripletex"
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <Image
              src="/brand/tripletex.png"
              alt="Tripletex"
              width={500}
              height={169}
              className="h-14 w-auto"
            />
            <h2 className="mt-8 text-3xl sm:text-4xl">
              Vi fører regnskapet i Tripletex
            </h2>
            <p className="mt-5 text-lg text-muted">
              Tripletex er et smart, komplett og nettbasert økonomisystem. Vi
              setter det opp for deg, lærer deg det du trenger og tar det
              daglige arbeidet, slik at du får full oversikt uten å bruke tid på
              regnskap.
            </p>
            {!full && (
              <div className="mt-8">
                <Button href="/tripletex">Les mer om Tripletex</Button>
              </div>
            )}
          </div>
        </div>
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRIPLETEX_POINTS.map((p) => (
            <li key={p.title} className="rounded-md bg-white p-6">
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Steps() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Sammen med deg"
          title="Slik jobber vi sammen"
          intro="Du trenger ikke være regnskapsekspert. Vi tar oss av det faglige og forklarer tallene på en forståelig måte."
        />
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green font-display text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function TeamGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((p) => (
        <article key={p.name} className={detailed ? "flex gap-5 sm:block" : ""}>
          <Photo
            name={p.image}
            alt={`Portrett av ${p.name}, ${p.role.toLowerCase()}`}
            shape="soft"
            position="center 25%"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={`aspect-[4/5] ${detailed ? "w-32 shrink-0 self-start sm:w-full" : "w-full"}`}
          />
          <div className={detailed ? "sm:mt-0" : ""}>
          <h3 className="mt-1 text-xl sm:mt-6">{p.name}</h3>
          <p className="mt-1 font-medium text-green">{p.role}</p>
          {detailed && (
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
              {p.bio.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function History() {
  return (
    <ol className="grid gap-8 md:grid-cols-3">
      {HISTORY.map((h) => (
        <li key={h.year} className="border-l-4 border-slate-2 pl-5">
          <p className="font-display text-2xl font-bold text-green">{h.year}</p>
          <p className="mt-2 text-muted">{h.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ContactBand() {
  return (
    <section className="bg-green-soft">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-green">
            Vi hører gjerne fra deg
          </p>
          <h2 className="text-3xl sm:text-4xl">
            Trenger du en regnskapsfører?
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Ta kontakt, så finner vi ut sammen hva din bedrift trenger. Du får
            en fast kontaktperson fra første dag.
          </p>
          <div className="mt-8">
            <Button href="/kontakt">
              Ta kontakt
            </Button>
          </div>
        </div>
        <Photo
          name="gitte-nilsen-dagligleder"
          alt="Gitte Nilsen, daglig leder i Regnskapslosen"
          shape="soft"
          position="center 20%"
          sizes="(min-width: 768px) 384px, min(384px, 100vw)"
          className="aspect-[5/4] w-full max-w-sm mx-auto md:w-72 md:mx-0 lg:w-96"
        />
      </Container>
    </section>
  );
}

/** Personal service block: photos of one-on-one meetings plus a short pitch. */
export function OneToOne() {
  const points = [
    "Én fast kontaktperson som kjenner deg og bedriften din",
    "Vi setter av tid til deg og forklarer tallene på en forståelig måte",
    "Lett å nå på telefon, e-post eller en kaffe i Storgata",
  ];
  return (
    <section className="py-20">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="grid grid-cols-2 gap-4">
          <Photo
            name="radgivning-en-til-en"
            alt="Regnskapsfører smiler til en kunde under et møte ved skrivebordet"
            shape="soft"
            sizes="(min-width: 1024px) 30vw, 60vw"
            className="col-span-2 aspect-[3/2]"
            position="center"
          />
          <Photo
            name="samtale-grete-jorunn"
            alt="To kolleger i en rolig en-til-en-samtale"
            sizes="(min-width: 1024px) 20vw, 40vw"
            className="aspect-square"
          />
          <Photo
            name="kontor-kollegaer"
            alt="To kolleger ser på dokumenter sammen ved skrivebordet"
            sizes="(min-width: 1024px) 20vw, 40vw"
            position="12% center"
            className="aspect-square"
          />
        </div>
        <div>
          <Eyebrow>Alltid den samme personen</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">
            Regnskap med mennesker bak tallene
          </h2>
          <p className="mt-5 text-lg text-muted">
            Hos oss møter du ikke bare et system, men et lite team som kjenner
            virksomheten din. Vi bryr oss om at du skal lykkes, og at du
            forstår økonomien din.
          </p>
          <ul className="mt-6 space-y-3 text-lg">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-green"
                />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/kontakt">Book en uforpliktende prat</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Strip of portraits used as a visual break between sections. */
export function PhotoStrip() {
  const items = [
    { name: "gitte-kontor", alt: "Gitte Nilsen smiler ved skrivebordet sitt" },
    { name: "mote-gjennomgang", alt: "Kolleger gjennomgår oppgaver sammen i møterommet" },
    { name: "anna-kontor", alt: "Anna Dillan lener seg mot en dør og smiler" },
    { name: "samarbeid-laptop", alt: "To kolleger jobber sammen foran en bærbar PC" },
    { name: "jorunn-dor", alt: "Jorunn Strømsvåg ler ved en glassdør på kontoret" },
  ];
  return (
    <section aria-label="Bilder fra kontoret" className="overflow-hidden">
      <ul className="grid grid-cols-2 gap-3 px-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((i, idx) => (
          <li key={i.name} className={idx > 3 ? "hidden lg:block" : ""}>
            <Photo
              name={i.name}
              alt={i.alt}
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="aspect-[3/4] w-full"
              shape="soft"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
