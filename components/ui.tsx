import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export type PhotoShape = "soft" | "round";

/** Photo from /public/images (WebP). Always give a descriptive Norwegian alt text. */
export function Photo({
  name,
  alt,
  className = "",
  shape = "soft",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  position = "center",
}: {
  name: string;
  alt: string;
  className?: string;
  shape?: PhotoShape;
  priority?: boolean;
  sizes?: string;
  position?: string;
}) {
  const radius = {
    soft: "rounded-md",
    round: "rounded-full",
  }[shape];
  return (
    <div className={`relative overflow-hidden bg-mist ${radius} ${className}`}>
      <Image
        src={`/images/${name}.webp`}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

/** Layered mountain silhouette from the old site, used as a divider. */
export function Mountains({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className={`block w-full ${className}`}
    >
      <polygon
        fill="#dbe0e4"
        points="0,220 0,110 220,20 520,150 860,60 1160,150 1440,50 1440,220"
      />
      <polygon
        fill="#b4bdc5"
        points="0,220 0,150 240,90 560,170 880,110 1180,175 1440,120 1440,220"
      />
      <polygon
        fill="#9da9b2"
        points="0,220 0,185 300,140 620,195 940,150 1200,200 1440,165 1440,220"
      />
    </svg>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary: "bg-green text-white shadow-sm hover:bg-green-dark",
    secondary: "border-2 border-green text-green hover:bg-green hover:text-white",
    light: "bg-white text-green hover:bg-green-soft",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 font-display text-[0.95rem] font-semibold transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  title,
  intro,
  eyebrow,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="accent mb-3">{children}</p>
  );
}

export function PageHero({
  title,
  intro,
  eyebrow,
  image,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
  image?: { name: string; alt: string; position?: string };
}) {
  return (
    <section className="bg-mist">
      <Container
        className={`pb-14 pt-14 sm:pb-20 sm:pt-20 ${
          image ? "grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]" : ""
        }`}
      >
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="rise max-w-3xl text-[1.85rem] sm:text-5xl">{title}</h1>
          {intro && (
            <p className="rise rise-2 mt-5 max-w-2xl text-lg text-muted">{intro}</p>
          )}
        </div>
        {image && (
          <Photo
            name={image.name}
            alt={image.alt}
            position={image.position}
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rise rise-2 aspect-[4/3] w-full"
          />
        )}
      </Container>
    </section>
  );
}
