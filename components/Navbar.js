"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artist", label: "Artist" },
  { href: "/experiences", label: "Experiences" },
  { href: "/brands-culture", label: "Brands & Culture" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink shadow-sm">
      <nav className="mx-auto max-w-[1680px] px-5 md:px-8 h-24 md:h-28 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <ul
          className="hidden xl:flex items-center gap-5 2xl:gap-7 text-[12px] font-medium text-white"
          style={{ letterSpacing: "0.08em" }}
        >
          {LINKS.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href} className="whitespace-nowrap">
                <Link
                  href={l.href}
                  className={`uppercase transition-colors hover:text-gold ${
                    active ? "text-gold" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden xl:flex items-center gap-2 text-xs tracked shrink-0 text-white">
          <span className="opacity-100">TR</span>
          <span className="opacity-40">|</span>
          <span className="text-gold">EN</span>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden flex flex-col gap-1.5 p-2 text-white"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
        </button>
      </nav>

      {open && (
        <ul className="xl:hidden bg-white text-ink px-6 pb-6 pt-2 flex flex-col gap-4 text-sm tracked uppercase max-h-[70vh] overflow-y-auto">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
