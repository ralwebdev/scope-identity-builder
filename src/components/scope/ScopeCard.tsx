import { useCallback, useRef, useState } from "react";
import { MEMBER } from "@/lib/scope-data";

function QrPlaceholder({ size = "sm" }: { size?: "sm" | "lg" }) {
  const cells = 7;
  return (
    <div
      aria-hidden="true"
      className={`grid rounded-[3px] bg-white p-[3px] ${size === "lg" ? "h-16 w-16" : "h-11 w-11"}`}
      style={{ gridTemplateColumns: `repeat(${cells}, 1fr)`, gap: "1px" }}
    >
      {Array.from({ length: cells * cells }).map((_, i) => {
        const r = Math.floor(i / cells);
        const c = i % cells;
        const corner =
          (r < 3 && c < 3) || (r < 3 && c > 3) || (r > 3 && c < 3);
        const on = corner ? (r === 1 && c === 1) || (r === 1 && c === 5) || (r === 5 && c === 1) || r === 0 || c === 0 || r === 2 || c === 2 : (i * 7) % 3 === 0;
        return <span key={i} className={on ? "bg-black" : "bg-white"} />;
      })}
    </div>
  );
}

export function ScopeCard({ className = "", tilt = true }: { className?: string; tilt?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!tilt || !ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.innerWidth < 768) return;
      const r = ref.current.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setT({ x: -py * 7, y: px * 9 });
    },
    [tilt],
  );

  return (
    <div className={`[perspective:1200px] ${className}`}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setT({ x: 0, y: 0 })}
        className="scope-float card-sheen relative aspect-[85.6/53.98] w-full overflow-hidden rounded-[18px] border border-white/10 p-[5.5%] text-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.75)] transition-transform duration-300 will-change-transform"
        style={{ transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)` }}
      >
        {/* embossed scope symbol */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -bottom-14 h-56 w-56 rounded-full border-[18px] border-white/[0.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 4px)",
          }}
        />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-[2px] bg-scope" />
                <span className="text-[clamp(0.85rem,2.5cqw,1.1rem)] leading-none font-extrabold tracking-[0.06em]">
                  SCOPE
                </span>
              </div>
              <div className="mt-0.5 text-[clamp(0.4rem,1.3cqw,0.55rem)] tracking-[0.08em] text-white/60">
                INNOVATION LAB
              </div>
            </div>
            <div className="text-right">
              <div className="text-[clamp(0.42rem,1.3cqw,0.6rem)] font-semibold tracking-[0.08em] text-scope">
                EMPOWERMENT CARD
              </div>
              <div className="mt-1 text-[clamp(0.34rem,1.1cqw,0.47rem)] tracking-[0.06em] text-white/45">
                LEARN. BUILD. SHOWCASE. CONNECT. GROW.
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[clamp(0.9rem,3.1cqw,1.4rem)] leading-tight font-bold tracking-[-0.02em]">
                {MEMBER.name}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-x-5 gap-y-2">
                <div>
                  <div className="text-[clamp(0.3rem,1cqw,0.42rem)] tracking-[0.06em] text-white/45">
                    MEMBERSHIP NUMBER
                  </div>
                  <div className="text-[clamp(0.5rem,1.5cqw,0.72rem)] font-semibold tracking-wider">
                    {MEMBER.id}
                  </div>
                </div>
                <div>
                  <div className="text-[clamp(0.3rem,1cqw,0.42rem)] tracking-[0.06em] text-white/45">
                    SCOPE CHAPTER
                  </div>
                  <div className="text-[clamp(0.45rem,1.3cqw,0.62rem)] font-medium tracking-wide text-white/85">
                    PARTICIPATING INSTITUTION
                  </div>
                </div>
                <div>
                  <div className="text-[clamp(0.3rem,1cqw,0.42rem)] tracking-[0.06em] text-white/45">
                    MEMBERSHIP
                  </div>
                  <div className="text-[clamp(0.45rem,1.3cqw,0.62rem)] font-semibold tracking-wide">
                    {MEMBER.term}
                  </div>
                </div>
                <div>
                  <div className="text-[clamp(0.3rem,1cqw,0.42rem)] tracking-[0.06em] text-white/45">
                    VALIDITY
                  </div>
                  <div className="text-[clamp(0.45rem,1.3cqw,0.62rem)] font-semibold tracking-wide">
                    {MEMBER.validity}
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 text-center">
              <QrPlaceholder />
              <div className="mt-1 text-[clamp(0.28rem,0.95cqw,0.4rem)] tracking-[0.14em] text-white/55">
                MY SCOPE PROFILE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { QrPlaceholder };
