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
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold tracking-normal transition-all duration-200 active:scale-[0.97]";
  const styles = {
    primary:
      "bg-scope text-white shadow-[0_10px_24px_-12px_var(--scope)] hover:-translate-y-0.5 hover:bg-scope-deep",
    ghost:
      "border border-current/30 text-current hover:-translate-y-0.5 hover:border-current/60",
    light: "bg-white text-ink hover:-translate-y-0.5 hover:bg-white/90",
  }[variant];

  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
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
  tall = false,
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
        tall ? "md:min-h-[70vh]" : ""
      } flex items-center px-5 py-16 md:px-10 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "scope" }: { children: ReactNode; tone?: "scope" | "muted" }) {
  return (
    <p className={`eyebrow mb-4 ${tone === "scope" ? "text-scope" : "text-current/55"}`}>
      {children}
    </p>
  );
}

export function Headline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[clamp(1.9rem,4.6vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.03em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Sub({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mt-4 max-w-[660px] text-[1.075rem] leading-[1.45] font-medium md:text-[1.4rem] ${className}`}>
      {children}
    </p>
  );
}

export function Fine({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-4 max-w-[660px] text-[0.8rem] leading-relaxed opacity-55 ${className}`}>{children}</p>;
}
