import type { ReactNode } from "react";

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-all duration-200 active:scale-[0.97]";
  const styles = {
    primary:
      "bg-scope text-white shadow-[0_10px_24px_-12px_var(--scope)] hover:-translate-y-0.5 hover:bg-scope-deep",
    ghost:
      "border border-current/30 text-current hover:-translate-y-0.5 hover:border-current/60",
    light:
      "bg-white text-ink hover:-translate-y-0.5 hover:bg-white/90",
  }[variant];

  const inner = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {inner}
    </button>
  );
}

export function SectionShell({
  id,
  children,
  dark = false,
  className = "",
  tall = true,
}: {
  id?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  tall?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-ink text-white" : "bg-background text-foreground"} ${
        tall ? "md:min-h-[80vh]" : ""
      } flex items-center px-5 py-16 md:px-10 md:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "scope" }: { children: ReactNode; tone?: "scope" | "muted" }) {
  return (
    <p className={`eyebrow mb-4 ${tone === "scope" ? "text-scope" : "text-current/50"}`}>{children}</p>
  );
}

export function Headline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-[clamp(1.6rem,4.4vw,3.1rem)] leading-[1.04] font-extrabold uppercase ${className}`}
    >
      {children}
    </h2>
  );
}
