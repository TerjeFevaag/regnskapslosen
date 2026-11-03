"use client";

import { useEffect } from "react";

/** Lets Escape close the desktop Tjenester dropdown (it otherwise opens on hover/focus via CSS). */
export default function DropdownEscape() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      document.querySelectorAll<HTMLElement>(".has-dropdown").forEach((el) => {
        if (el.matches(":hover") || el.contains(document.activeElement)) {
          el.classList.add("dd-closed");
          (document.activeElement as HTMLElement | null)?.blur?.();
        }
      });
    };
    const reopen = (e: Event) => {
      const t = (e.target as HTMLElement | null)?.closest?.(".has-dropdown");
      document.querySelectorAll(".has-dropdown.dd-closed").forEach((el) => {
        if (el !== t) el.classList.remove("dd-closed");
      });
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerover", reopen);
    document.addEventListener("focusin", reopen);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerover", reopen);
      document.removeEventListener("focusin", reopen);
    };
  }, []);
  return null;
}
