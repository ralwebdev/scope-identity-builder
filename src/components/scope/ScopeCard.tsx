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
        className="scope-float card-sheen relative aspect-[2434/1341] w-full overflow-hidden rounded-[18px] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.75)] transition-transform duration-300 will-change-transform"
        style={{ transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)` }}
      />
    </div>
  );
}

export { QrPlaceholder };
