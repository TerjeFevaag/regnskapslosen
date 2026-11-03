import type { Faq } from "@/lib/services";
import { Container, Eyebrow } from "./ui";

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Accessible FAQ accordion (native <details>) with FAQPage structured data. */
export function FaqSection({
  faqs,
  title = "Ofte stilte spørsmål",
  tone = "white",
}: {
  faqs: Faq[];
  title?: string;
  tone?: "white" | "blush";
}) {
  return (
    <section className={`py-20 ${tone === "blush" ? "bg-mist" : ""}`}>
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow>Lurer du på noe?</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted">
            Finner du ikke svaret her? Ring oss eller send en melding, så
            hjelper vi deg personlig.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-md border border-slate-1 bg-white px-6 py-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.05rem] font-semibold text-green">
                {f.q}
                <span
                  aria-hidden
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-xl leading-none text-green transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
    </section>
  );
}
