import type { Metadata } from "next";
import { Button, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-mist py-24">
      <Container>
        <p className="accent">Feil 404</p>
        <h1 className="mt-2 max-w-2xl text-4xl sm:text-5xl">Vi finner ikke siden du leter etter</h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Siden kan ha blitt flyttet eller fjernet. Gå til forsiden, se tjenestene våre, eller ta
          kontakt, så hjelper vi deg.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/">Til forsiden</Button>
          <Button href="/tjenester" variant="secondary">Se tjenestene</Button>
          <Button href="/kontakt" variant="secondary">Ta kontakt</Button>
        </div>
      </Container>
    </section>
  );
}
