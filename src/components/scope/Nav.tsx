import { useEffect, useState } from "react";

const links = [
  ["My Path", "#my-path"],
  ["Accelerator", "#accelerator"],
  ["Benefits", "#benefits"],
  ["Portfolio", "#portfolio"],
  ["Value", "#value"],
  ["Cashback", "#cashback"],
  ["Pricing", "#price"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? "bg-ink/95 backdrop-blur-sm" : "bg-transparent"
        } text-white`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/SCOPE Innovation Lab logo mark-07.png"
            alt="SCOPE Logo"
            className="h-6 w-auto object-contain md:h-7"
          />
          <span className="font-display text-base font-extrabold tracking-[0.06em]">SCOPE</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[0.85rem] font-medium text-white/70 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#apply-form"
            className="hidden min-h-11 items-center rounded-full bg-scope px-5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-scope-deep sm:inline-flex"
          >
            Apply for Scope Card
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="text-lg">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="bg-ink px-5 pb-4 lg:hidden">
          <ul className="grid gap-1">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center border-b border-white/10 text-[0.95rem] text-white/80"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#apply-form"
                onClick={() => setOpen(false)}
                className="mt-3 flex min-h-11 items-center justify-center rounded-full bg-scope text-[0.95rem] font-semibold"
              >
                Apply for Scope Card
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
