import { useState } from "react";
import {
  Mic,
  Users,
  FolderGit2,
  ClipboardCheck,
  GraduationCap,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { ScopeCard, QrPlaceholder } from "./ScopeCard";
import { Cta, Fine, Headline, SectionShell, Sub } from "./Ui";
import { Reveal } from "./Reveal";
import {
  creativeTopics,
  journeyRows,
  MEMBER,
  partners,
  studentTypes,
  technicalOptions,
  type StudentTypeKey,
} from "@/lib/scope-data";

/* ---------------- 01 HERO ---------------- */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center bg-ink px-5 pt-24 pb-14 text-white md:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(70% 55% at 78% 30%, oklch(0.55 0.22 27 / 0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="contents md:block">
          <div className="order-1">
            <p className="eyebrow text-scope">Exclusive to eligible Scope Innovation Lab students</p>
            <h1 className="mt-4 text-[clamp(2.5rem,7.4vw,5.1rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">
              Your Student Identity
              <br />
              <span className="text-white/55">Beyond the Classroom.</span>
            </h1>
          </div>

          {/* Card comes before long copy on mobile */}
          <div className="order-2 mt-8 md:hidden">
            <HeroCardVisual />
          </div>

          <div className="order-3">
            <p className="mt-6 max-w-[620px] text-[1.05rem] leading-[1.5] font-medium text-white/75 md:text-[1.35rem]">
              Your student ID says where you study. Your Scope Card helps show what you&apos;re
              building beyond it.
            </p>
            <p className="mt-5 text-[0.8rem] font-bold tracking-[0.08em] text-cyan-accent uppercase">
              Skills • Projects • Portfolio • Experiences • Opportunities
            </p>
            <p className="mt-2 text-[0.8rem] font-bold tracking-[0.08em] text-white/55 uppercase">
              One card • Five years • One Year-1 Accelerator
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta href="#benefits">Explore what my card unlocks</Cta>
              {/* <Cta href="#payment" variant="ghost">
                Apply for Scope Card
              </Cta> */}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <HeroCardVisual />
        </div>
      </div>
    </section>
  );
}

function HeroCardVisual() {
  return (
    <div>
      <div className="relative mx-auto max-w-[460px]" style={{ containerType: "inline-size" }}>
        <ScopeCard />
      </div>
      <p className="mt-5 text-center text-[0.8rem] text-white/40">
        Available only through participating Scope Innovation Lab Chapters.
      </p>
    </div>
  );
}

/* ---------------- 02 FAST COMPREHENSION STRIP ---------------- */
const fastItems = [
  "One card.",
  "5 years.",
  "One first-year Accelerator.",
  "One growing student profile.",
  "Multiple ways to participate.",
];

export function FastStrip() {
  return (
    <div className="border-y bg-secondary">
      <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-4 md:px-10 [scrollbar-width:none]">
        {fastItems.map((f) => (
          <li
            key={f}
            className="flex shrink-0 items-center gap-2 text-[0.9rem] font-semibold whitespace-nowrap"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-scope" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- 03 PROBLEM ---------------- */
const problems: [string, string][] = [
  ["Direction", "What should I explore?"],
  ["Experience", "Where can I participate?"],
  ["Visibility", "How do I show what I've done?"],
  ["Opportunity", "What can I discover next?"],
];

export function Problem() {
  return (
    <SectionShell id="problem" className="!py-14 md:!py-20">
      <Reveal>
        <Headline className="max-w-3xl">
          Your syllabus is important.
          <br />
          <span className="text-muted-foreground">
            It doesn&apos;t have to be your entire student story.
          </span>
        </Headline>
      </Reveal>
      <div className="mt-8 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {problems.map(([t, d], i) => (
          <div key={t} className="bg-card p-5">
            <span className="text-sm font-bold text-scope/40">0{i + 1}</span>
            <h3 className="mt-1 text-lg font-bold tracking-[-0.02em]">{t}</h3>
            <p className="mt-1 text-[0.95rem] text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Cta href="#my-path" variant="ghost">
          See how Scope works
        </Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 04 PERSONALIZATION ---------------- */
export function Personalize({
  selected,
  onSelect,
}: {
  selected: StudentTypeKey | null;
  onSelect: (k: StudentTypeKey) => void;
}) {
  const active = selected ? studentTypes.find((s) => s.key === selected)! : null;
  return (
    <SectionShell id="my-path" className="bg-secondary">
      <Reveal>
        <Headline>What kind of student are you?</Headline>
        <Sub className="text-muted-foreground">
          Pick one and we&apos;ll show the pathway that fits you.
        </Sub>
      </Reveal>

      <div role="tablist" aria-label="Student type" className="mt-8 flex flex-wrap gap-2.5">
        {studentTypes.map((s) => {
          const on = s.key === selected;
          return (
            <button
              key={s.key}
              role="tab"
              aria-selected={on}
              aria-controls={`panel-${s.key}`}
              id={`tab-${s.key}`}
              type="button"
              onClick={() => onSelect(s.key)}
              className={`min-h-12 rounded-full border px-5 text-[0.95rem] font-semibold transition-all ${
                on
                  ? "border-scope bg-scope text-white"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/40"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          role="tabpanel"
          id={`panel-${active.key}`}
          aria-labelledby={`tab-${active.key}`}
          key={active.key}
          className="reveal is-in mt-8 rounded-xl border bg-card p-6 md:p-8"
        >
          <p className="eyebrow text-scope">Your pathway</p>
          <p className="mt-2 text-[0.95rem] font-medium text-muted-foreground">
            {active.relevant.join(" · ")}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {active.journey.map(([t, d]) => (
              <div key={t} className="border-t-2 border-scope/70 pt-3">
                <h3 className="text-base font-bold">{t}</h3>
                <p className="mt-1 text-[0.95rem] leading-snug text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <Cta
              href="https://cps.redapplelearning.in/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Explore my path
            </Cta>
          </div>
        </div>
      ) : (
        <p className="mt-8 rounded-xl border border-dashed bg-card/60 p-8 text-center text-[0.95rem] text-muted-foreground">
          Select an option above to see the pathway designed for you.
        </p>
      )}
    </SectionShell>
  );
}

/* ---------------- 05 ACCELERATOR ---------------- */
export function Accelerator() {
  const [path, setPath] = useState<"creative" | "technical">("creative");
  return (
    <SectionShell id="accelerator" dark>
      <Reveal>
        <span className="eyebrow inline-block rounded-full bg-scope px-4 py-2 text-white">
          One eligible Accelerator included during Year 1
        </span>
        <Headline className="mt-6 max-w-3xl">Start With Something You Can Learn.</Headline>
        <Sub className="text-white/70">
          Choose any one eligible Scope Accelerator during your first year.
        </Sub>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {(["creative", "technical"] as const).map((p) => {
          const on = path === p;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={on}
              onClick={() => setPath(p)}
              className={`min-h-12 rounded-full border px-5 text-[0.95rem] font-semibold transition-all ${
                on ? "border-scope bg-scope text-white" : "border-white/20 text-white/70"
              }`}
            >
              {p === "creative" ? "Creative" : "Technical"}
            </button>
          );
        })}
      </div>

      <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        {path === "creative" ? (
          <>
            <h3 className="text-2xl font-bold tracking-[-0.02em]">Creative Scope Accelerator</h3>
            <p className="mt-3 max-w-[660px] text-[1rem] leading-relaxed text-white/70">
              Build foundational exposure across visual communication, digital design and creative
              storytelling.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {creativeTopics.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 px-3.5 py-2 text-[0.85rem] font-medium text-white/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold tracking-[-0.02em]">Technical Scope Accelerator</h3>
            <p className="mt-3 max-w-[660px] text-[1rem] leading-relaxed text-white/70">
              Choose one technical pathway based on your interest and cohort availability.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {technicalOptions.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 px-3.5 py-2 text-[0.85rem] font-medium text-white/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <Fine className="text-white">
        Programme availability, delivery mode, cohort size, schedule, duration and eligibility may
        vary by Scope Chapter.
      </Fine>
      <div className="mt-7">
        <Cta href="#benefits" variant="ghost">
          See what else my card unlocks
        </Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 06 UNLOCKS (card with orbiting labels) ---------------- */
const unlocks = [
  {
    title: "SEMINARS & WEBINARS",
    desc: "Interactive expert masterclasses, technical sessions and global webinars.",
    icon: Mic,
  },
  {
    title: "INDUSTRY SESSIONS",
    desc: "Direct interactions, fireside chats and mentorship with industry leaders.",
    icon: Users,
  },
  {
    title: "LIVE PROJECT & PORTFOLIO",
    desc: "Hands-on real-world builds, challenges and a verified live digital portfolio.",
    icon: FolderGit2,
  },
  {
    title: "SELF ASSESSMENT",
    desc: "Skill benchmarking, diagnostic evaluations and structured growth tracking.",
    icon: ClipboardCheck,
  },
  {
    title: "HIGHER STUDIES",
    desc: "Guidance, profile evaluation and roadmaps for advanced higher education.",
    icon: GraduationCap,
  },
  {
    title: "CAREER PLANNING",
    desc: "Step-by-step career roadmaps, goal milestones and professional advisory.",
    icon: TrendingUp,
  },
  {
    title: "JOB OPPORTUNITIES",
    desc: "Curated internships, hiring drives and exclusive campus-to-career opportunities.",
    icon: Briefcase,
  },
];

export function Unlocks() {
  return (
    <SectionShell id="benefits">
      <Reveal>
        <Headline className="max-w-3xl">
          One card.
          <br />
          <span className="text-muted-foreground">What your membership unlocks.</span>
        </Headline>
      </Reveal>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-2xl bg-ink p-6 md:p-8" style={{ containerType: "inline-size" }}>
            <ScopeCard />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {unlocks.map((item, i) => {
            const IconComponent = item.icon;
            const isLastOdd = i === unlocks.length - 1;
            return (
              <div
                key={item.title}
                className={`group flex items-start gap-3.5 rounded-xl border border-border/80 bg-card p-3.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-scope/40 hover:shadow-md ${
                  isLastOdd ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-scope/20 bg-scope/10 text-scope transition-all duration-200 group-hover:scale-105 group-hover:border-scope group-hover:bg-scope group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[0.92rem] font-bold tracking-tight text-foreground uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[0.82rem] leading-snug text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- 07 PORTFOLIO ---------------- */
const scattered = [
  "Drive",
  "Phone",
  "Certificates",
  "GitHub",
  "Sketchbook",
  "Presentations",
  "Project files",
];

const profileTags = [
  "Projects",
  "Skills",
  "Achievements",
  "Certificates",
  "Competitions",
  "Hackathons",
  "Academic Work",
  "Creative Work",
  "Technical Work",
];

export function Portfolio({ selected }: { selected: StudentTypeKey | null }) {
  const active = selected ? studentTypes.find((s) => s.key === selected)! : null;
  return (
    <SectionShell id="portfolio" className="bg-secondary">
      <Reveal>
        <Headline className="max-w-3xl">
          One Student.
          <br />
          One Growing Profile. <span className="text-scope">One QR.</span>
        </Headline>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1.15fr] md:items-center">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Before</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {scattered.map((s) => (
              <li
                key={s}
                className="rotate-[-1deg] rounded border border-dashed bg-card px-3 py-2 text-[0.85rem] text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <div aria-hidden="true" className="text-center text-2xl text-scope">
          →
        </div>

        <Reveal>
          <div className="rounded-2xl border bg-card p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4">
              <QrPlaceholder size="lg" />
              <div className="min-w-0">
                <p className="eyebrow text-scope">Scope Profile</p>
                <p className="text-xl font-bold tracking-[-0.02em]">{MEMBER.name}</p>
                <p className="text-[0.85rem] text-muted-foreground">{MEMBER.id}</p>
              </div>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {profileTags.map((t) => (
                <li key={t} className="rounded-full bg-secondary px-3 py-1.5 text-[0.85rem]">
                  {t}
                </li>
              ))}
            </ul>
            {active && (
              <div className="mt-5 border-t pt-4">
                <p className="eyebrow text-muted-foreground">{active.label} work can include</p>
                <p className="mt-2 text-[0.95rem] font-medium">{active.portfolio.join(" · ")}</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <p className="mt-9 text-[clamp(1.2rem,2.6vw,1.8rem)] font-extrabold tracking-[-0.02em]">
        Scan one QR. <span className="text-scope">See the journey.</span>
      </p>
      <div className="mt-6">
        <Cta href="#value" variant="ghost">
          See the value
        </Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 08 PARTICIPATION ECOSYSTEM ---------------- */
const lpd: [string, string[]][] = [
  ["Learn", ["Workshops", "Masterclasses", "Webinars", "Industry Sessions"]],
  ["Participate", ["Ideathons", "Hackathons", "Game Jams", "Competitions", "Projects"]],
  ["Discover", ["Internships", "Entry-Level Jobs", "Campus Opportunities", "Industry Interactions"]],
];

export function Ecosystemreach() {
  return (
    <SectionShell id="reach">
      <Reveal>
        <Headline className="max-w-3xl">
          Your campus is the starting point.
          <br />
          <span className="text-muted-foreground">Not the boundary.</span>
        </Headline>
      </Reveal>
      <div className="mt-9 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
        {lpd.map(([t, items]) => (
          <div key={t} className="bg-card p-6">
            <h3 className="text-lg font-bold text-scope">{t}</h3>
            <ul className="mt-3 space-y-1.5">
              {items.map((i) => (
                <li key={i} className="text-[0.95rem] text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Fine>
        Access and participation remain subject to programme/event eligibility, availability, seats
        and respective terms.
      </Fine>
    </SectionShell>
  );
}

/* ---------------- 09 VALUE COMPARISON ---------------- */
const separateRows: [string, string][] = [
  ["Creative Scope Accelerator", "₹17,860*"],
  ["Scope Digital Portfolio", "Not separately sold"],
  ["Workshops & Masterclasses", "Member access where eligible"],
  ["Ideathons / Hackathons / Challenges", "Member access where eligible"],
  ["Career & Opportunity Ecosystem", "Member access"],
  ["Scope Profile / QR Identity", "Included with membership"],
  ["Friends & Family Benefit", "Up to ₹30,000 eligible cashback"],
];

const included = [
  "One eligible Accelerator in Year 1",
  "Scope Digital Portfolio",
  "QR-linked Profile",
  "Applicable Workshops & Masterclasses",
  "Ideathons / Hackathons / Challenges",
  "Opportunity Ecosystem",
  "Member Privileges",
  "Friends & Family Benefit",
];

export function ValueComparison() {
  return (
    <SectionShell id="value" className="bg-secondary">
      <Reveal>
        <Headline className="max-w-3xl">Look at What ₹2,999/- Actually Unlocks.</Headline>
      </Reveal>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6 md:p-8">
          <p className="eyebrow text-muted-foreground">If accessed separately</p>
          <dl className="mt-5 divide-y">
            {separateRows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-3">
                <dt className="min-w-0 text-[0.95rem]">{k}</dt>
                <dd className="text-right text-[0.95rem] font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl bg-ink p-6 text-white md:p-8">
          <p className="eyebrow text-scope">With Scope Empowerment Card</p>
          <p className="mt-4 text-[clamp(2.8rem,9vw,4.6rem)] leading-none font-extrabold tracking-[-0.03em]">
            ₹2,999/-
          </p>
          <p className="eyebrow mt-3 text-white/60">One-time · 5 years / 60 months</p>
          <ul className="mt-6 grid gap-2.5">
            {included.map((i) => (
              <li key={i} className="flex gap-3 text-[0.95rem] text-white/85">
                <span aria-hidden="true" className="text-scope">
                  ✓
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Fine>
        *₹17,860 refers to the stated reference value of the applicable Creative Accelerator
        programme. Other Accelerator options may have different standalone/reference values.
      </Fine>
    </SectionShell>
  );
}

/* ---------------- 10 JOURNEY COMPARISON ---------------- */
export function JourneyComparison() {
  return (
    <SectionShell id="journey">
      <Reveal>
        <Headline className="max-w-3xl">The Bigger Difference Isn&apos;t Only the Price.</Headline>
      </Reveal>
      <div className="mt-9 overflow-hidden rounded-xl border">
        <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] bg-secondary text-[0.72rem] font-bold tracking-[0.06em] uppercase">
          <div className="p-3 text-muted-foreground">Area</div>
          <div className="border-l p-3 text-muted-foreground">Without a structured ecosystem</div>
          <div className="border-l bg-scope p-3 text-white">With Scope</div>
        </div>
        {journeyRows.map(([area, a, b], i) => (
          <div
            key={area}
            className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] border-t ${
              i % 2 ? "bg-secondary/40" : "bg-card"
            }`}
          >
            <div className="p-3 text-[0.85rem] font-semibold">{area}</div>
            <div className="border-l p-3 text-[0.85rem] leading-snug text-muted-foreground">{a}</div>
            <div className="border-l p-3 text-[0.85rem] leading-snug font-medium">{b}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-[clamp(1.2rem,2.6vw,1.8rem)] font-extrabold tracking-[-0.02em]">
        Same education. <span className="text-scope">More evidence of what you did with it.</span>
      </p>
    </SectionShell>
  );
}

/* ---------------- 11 WHY ₹2,999 FEELS DIFFERENT ---------------- */
export function WhyDifferent() {
  return (
    <SectionShell dark className="!py-16 md:!py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {[
          ["One short course", "can cost more than ₹2,999."],
          ["One event", "can end in one day."],
          ["One certificate", "can sit in a folder."],
        ].map(([a, b]) => (
          <div key={a} className="border-t border-white/15 pt-4">
            <p className="text-lg font-bold">{a}</p>
            <p className="mt-1 text-[0.95rem] text-white/55">{b}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-3xl text-[clamp(1.3rem,3vw,2.1rem)] leading-tight font-extrabold tracking-[-0.02em]">
        The Scope Empowerment Card connects{" "}
        <span className="text-scope">learning, participation, portfolio and opportunity</span>{" "}
        across a 5-year membership period.
      </p>
    </SectionShell>
  );
}

/* ---------------- 12 FRIENDS & FAMILY ---------------- */
export function Cashback() {
  return (
    <SectionShell id="cashback" className="bg-[oklch(0.96_0.03_75)]">
      <Reveal>
        <Headline className="max-w-3xl">
          Sometimes the best opportunity is the one you help someone else find.
        </Headline>
      </Reveal>

      <div className="mt-9 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <ol className="space-y-2.5">
          {[
            "Someone you know",
            "Needs the right learning opportunity",
            "You help them discover it",
            "They successfully enrol",
            "You may get rewarded",
          ].map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="text-[0.8rem] font-bold text-scope">0{i + 1}</span>
              <span className="rounded-lg border bg-card px-4 py-2.5 text-[0.95rem] font-medium">
                {s}
              </span>
            </li>
          ))}
        </ol>

        <Reveal className="rounded-2xl border bg-card p-8 text-center">
          <p className="eyebrow text-muted-foreground">Scope Friends &amp; Family</p>
          <p className="mt-3 text-[clamp(2.2rem,6vw,3.4rem)] leading-none font-extrabold tracking-[-0.03em] text-scope">
            Up to ₹30,000
          </p>
          <p className="eyebrow mt-2">Cashback</p>
        </Reveal>
      </div>

      <p className="mt-9 text-[clamp(1.1rem,2.4vw,1.6rem)] leading-tight font-extrabold tracking-[-0.02em]">
        Helping someone find the right opportunity should feel good.
        <br />
        <span className="text-muted-foreground">Getting rewarded is a bonus.</span>
      </p>
      <Fine>
        Applicable cashback may range from ₹1,000 to ₹30,000 depending on programme, campaign,
        successful enrolment, payment realisation and prevailing terms.
      </Fine>
    </SectionShell>
  );
}

/* ---------------- 13 PARTNERS ---------------- */
export function Partners() {
  return (
    <SectionShell id="partners" className="!py-14 md:!py-20">
      <Reveal>
        <Headline className="max-w-3xl">An Ecosystem Around Student Growth.</Headline>
      </Reveal>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p) => (
          <li key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card p-5 transition-colors hover:bg-secondary"
            >
              <span className="eyebrow text-scope">{p.tag}</span>
              <span className="mt-2 block text-lg font-bold tracking-[-0.02em]">{p.name}</span>
              <span className="mt-1 block text-[0.9rem] text-muted-foreground">{p.role}</span>
            </a>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

/* ---------------- 14 ELIGIBILITY ---------------- */
export function Eligibility() {
  return (
    <SectionShell id="eligibility" dark>
      <Reveal>
        <p className="eyebrow text-scope">Important</p>
        <Headline className="mt-4 max-w-3xl">
          You can&apos;t simply buy the Scope Empowerment Card.
          <br />
          <span className="text-scope">You become eligible for it.</span>
        </Headline>
        <Sub className="text-white/70">
          Available only to eligible students enlisted with Scope Innovation Lab through
          participating institutions.
        </Sub>
      </Reveal>
      <ol className="mt-9 flex flex-wrap items-center gap-3">
        {[
          "Participating institution",
          "Scope Innovation Lab",
          "Student enlistment",
          "Eligibility",
          "Scope Empowerment Card",
        ].map((s, i, arr) => (
          <li key={s} className="flex items-center gap-3">
            <span
              className={`rounded-lg border px-4 py-2.5 text-[0.9rem] font-semibold ${
                i === arr.length - 1
                  ? "border-scope bg-scope text-white"
                  : "border-white/15 text-white/75"
              }`}
            >
              {s}
            </span>
            {i < arr.length - 1 && (
              <span aria-hidden="true" className="text-white/30">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-9">
        <Cta href="#price">Check my eligibility</Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 15 PRICE REVEAL ---------------- */
export function PriceReveal() {
  return (
    <SectionShell id="price" className="bg-[color-mix(in_oklab,var(--scope)_8%,var(--background))]">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl bg-ink p-6 md:p-8" style={{ containerType: "inline-size" }}>
            <ScopeCard />
          </div>
        </Reveal>
        <div className="text-center md:text-left">
          <Headline>Your Scope Empowerment Card</Headline>
          <p className="eyebrow mt-3 text-muted-foreground">5-year / 60-month membership</p>
          <p className="mt-6 text-[clamp(3rem,10vw,5.2rem)] leading-none font-extrabold tracking-[-0.04em]">
            ₹2,999/-
          </p>
          <p className="eyebrow mt-3 text-muted-foreground">One-time student fee</p>
          <p className="mt-5 text-2xl font-bold text-scope">≈ ₹600 / year</p>
          <p className="text-[0.9rem] text-muted-foreground">
            Equivalent across the five-year membership period.
          </p>
          <p className="mx-auto mt-5 max-w-[520px] text-[0.85rem] text-muted-foreground md:mx-0">
            ₹2,999/- is paid once for the current five-year membership term. This is not an instalment
            plan.
          </p>
          <p className="mt-5 text-lg font-bold">One first-year Accelerator included.</p>
          <div className="mt-7">
            <Cta href="#payment">Apply for my Scope Card</Cta>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- 16 FAQ ---------------- */
export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <SectionShell id="faq" className="!py-14 md:!py-20">
      <Headline>Questions students ask</Headline>
      <div className="mt-8 divide-y rounded-xl border bg-card">
        {items.slice(0, 8).map(([q, a], i) => {
          const on = open === i;
          return (
            <div key={q}>
              <h3>
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(on ? null : i)}
                  className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left text-[1rem] font-semibold"
                >
                  {q}
                  <span
                    aria-hidden="true"
                    className={`text-scope transition-transform ${on ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-${i}`}
                hidden={!on}
                className="max-w-[700px] px-5 pb-5 text-[0.95rem] leading-relaxed text-muted-foreground"
              >
                {a}
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

/* ---------------- 17 FINAL CTA ---------------- */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-20 text-white md:px-10 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 30% 20%, oklch(0.55 0.22 27 / 0.25), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="mx-auto w-full max-w-[480px]" style={{ containerType: "inline-size" }}>
          <ScopeCard />
        </div>
        <div>
          <Headline>
            Five Years From Now,
            <br />
            <span className="text-white/55">What Will Your Student Story Show?</span>
          </Headline>
          <p className="mt-6 max-w-[620px] text-[1.05rem] text-white/70">
            Skills. Projects. Experiences. Achievements. People you met. Things you built.
          </p>
          <p className="mt-6 text-xl font-bold">Start building it now.</p>
          <p className="mt-4 text-[0.95rem] text-white/60">
            Scope Empowerment Card · ₹2,999 one-time · 5 years / 60 months · One eligible Accelerator
            included during Year 1
          </p>
          <div className="mt-8">
            <Cta href="#payment">Apply for my Scope Card</Cta>
          </div>
          <p className="mt-8 text-[0.8rem] text-white/40">
            Exclusive to eligible students enlisted with Scope Innovation Lab.
          </p>
        </div>
      </div>
    </section>
  );
}
