import type { Metadata, Viewport } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE } from "@/lib/site";
import "./globals.css";

const heading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Autorisert regnskapskontor – hele Norge | Regnskapslosen AS",
    template: "%s | Regnskapslosen AS",
  },
  description:
    "Autorisert regnskapskontor i Kristiansund som betjener bedrifter i hele Norge. Fast kontaktperson, regnskap, lønn, digitalisering og rådgiving i Tripletex.",
  alternates: { canonical: "/" },
  applicationName: "Regnskapslosen",
  icons: { icon: "/brand/mark.webp", apple: "/brand/mark.webp" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Regnskapslosen AS",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#00493e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE.name,
  legalName: SITE.name,
  url: SITE.url,
  telephone: [SITE.phone, SITE.phone2],
  email: SITE.email,
  image: `${SITE.url}/brand/logo.png`,
  logo: `${SITE.url}/brand/logo.png`,
  description:
    "Autorisert regnskapskontor i Kristiansund som betjener bedrifter i hele Norge. Vi tilbyr regnskap, lønn, digitalisering og økonomisk rådgiving – med en fast kontaktperson per kunde.",
  areaServed: {
    "@type": "Country",
    name: "Norway",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    postalCode: SITE.postcode,
    addressLocality: "Kristiansund",
    addressRegion: "Møre og Romsdal",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 63.1107,
    longitude: 7.7281,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  ...(SITE.orgnr ? { taxID: SITE.orgnr } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${heading.variable} ${body.variable}`}>
      <body suppressHydrationWarning>
        <a
          href="#innhold"
          className="absolute left-4 top-2 z-50 -translate-y-20 rounded bg-green px-4 py-2 text-white focus:translate-y-0"
        >
          Hopp til innhold
        </a>
        <ScrollToTop />
        <Header />
        <main id="innhold">{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
