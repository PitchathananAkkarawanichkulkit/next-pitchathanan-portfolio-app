"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Projects", href: "/Projects" },
  { name: "Contact", href: "/Contact" },
  { name: "Skills", href: "/Skills" },
  { name: "Gallery", href: "/Gallery" },
];


export default function NavigationBar() {
  const pathname = usePathname();
  const normalizedPathname = decodeURIComponent(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100 transition hover:text-white"
        >
          Pitchathanan
        </Link>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {Links.map((link) => {
            const isActive = normalizedPathname === decodeURIComponent(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                    isActive
                      ? "border-cyan-300/30 bg-cyan-400/15 text-white shadow-lg shadow-cyan-950/20"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
