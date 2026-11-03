"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Mobile menu that closes after navigation or when Escape is pressed. */
export default function MobileMenu({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && ref.current) ref.current.open = false;
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <details ref={ref} className="group relative md:hidden">
      <summary className="flex h-11 cursor-pointer list-none items-center rounded-md border border-slate-2 px-4 font-display text-sm font-semibold text-green">
        Meny
      </summary>
      {children}
    </details>
  );
}
