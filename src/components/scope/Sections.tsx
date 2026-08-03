import { useState } from "react";
import { ScopeCard, QrPlaceholder } from "./ScopeCard";
import { Cta, Eyebrow, Headline, SectionShell } from "./Ui";
import { Reveal, useReveal } from "./Reveal";
import {
  comparisonRows,
  creativeTopics,
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
      className="relative flex min-h-[100svh] items-center bg-ink px-5 pt-24 pb-16 text-white md:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(70% 55% at 78% 30%, oklch(0.55 0.22 27 / 0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow text-scope">Exclusive to eligible Scope Innovation Lab students</p>
          <h1 className="mt-5 font-display text-[clamp(2.1rem,6.6vw,4.3rem)] leading-[0.98] font-extrabold uppercase">
            Your student identity
            <br />
            <span className="text-white/55">beyond the classroom.</span>
          </h1>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-white/70">
            Your student ID says where you study. Your Scope Card shows what you&apos;re building
            beyond it.
          </p>
          <p className="mt-6 text-[0.68rem] font-semibold tracking-[0.22em] text-cyan-accent uppercase">
            Skills • Projects • Portfolio • Experiences • Opportunities
          </p>
          <p className="mt-3 text-sm text-white/55">
            One Card. Five Years to Learn, Build, Showcase, Connect &amp; Grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="#benefits">Explore what my card unlocks</Cta>
            <Cta href="#payment" variant="ghost">
              Apply for Scope Empowerment Card
            </Cta>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto max-w-[440px]" style={{ containerType: "inline-size" }}>
            <ScopeCard />
          </div>
          <ul className="mt-7 flex flex-wrap justify-center gap-2">
            {["5-YEAR MEMBERSHIP", "PORTFOLIO QR", "YEAR-1 ACCELERATOR", "SCOPE VERIFIED"].map((l) => (
              <li
                key={l}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.14em] text-white/70 uppercase"
              >
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-[0.7rem] text-white/40">
            Available only through participating Scope Innovation Lab Chapters.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 02 PROBLEM + 03 QUALIFICATION VS EVIDENCE ---------------- */
const problems: [string, string][] = [
  ["DIRECTION", "What should I explore beyond my syllabus?"],
  ["EXPERIENCE", "Where can I actually participate and build something?"],
  ["VISIBILITY", "How do I show what I have learned, created and achieved?"],
  ["OPPORTUNITY", "How do I discover what comes next?"],
];

export function Problem() {
  return (
    <SectionShell id="problem">
      <Reveal>
        <Headline className="max-w-3xl">
          Your syllabus is important.
          <br />
          <span className="text-muted-foreground">But it can&apos;t be your entire student story.</span>
        </Headline>
      </Reveal>
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {problems.map(([t, d], i) => (
          <Reveal key={t} className="bg-card p-6">
            <span className="font-display text-2xl font-extrabold text-scope/25">0{i + 1}</span>
            <h3 className="mt-3 text-sm font-bold tracking-[0.14em] uppercase">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Direction → Experience → Visibility → Opportunity
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <p className="font-display text-lg font-bold uppercase">
          This is where your Scope journey begins.
        </p>
        <Cta href="#evidence" variant="ghost">
          See how Scope works
        </Cta>
      </div>
    </SectionShell>
  );
}

export function Evidence() {
  const left = [
    "Degree / School qualification",
    "Assignments",
    "Certificates",
    "Activities scattered across devices",
    "No single profile",
  ];
  const right = [
    "Qualification",
    "Skills",
    "Projects",
    "Competitions",
    "Hackathons",
    "Certificates",
    "Achievements",
    "Experiences",
    "One QR-linked profile",
  ];
  return (
    <SectionShell id="evidence" dark>
      <Reveal>
        <Headline className="max-w-3xl">
          Your qualification tells people what you studied.
          <br />
          <span className="text-scope">Your journey shows what you did with it.</span>
        </Headline>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-xl border border-white/10 p-6">
          <p className="eyebrow text-white/40">Typical student record</p>
          <ul className="mt-4 space-y-2">
            {left.map((i) => (
              <li key={i} className="text-sm text-white/55">
                — {i}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="rounded-xl border border-scope/40 bg-white/[0.03] p-6">
          <p className="eyebrow text-scope">Growing Scope profile</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {right.map((i) => (
              <li
                key={i}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[0.72rem] text-white/85"
              >
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <p className="mt-10 font-display text-[clamp(1.1rem,2.6vw,1.7rem)] leading-tight font-extrabold uppercase">
        Don&apos;t wait until the end of your education
        <br />
        <span className="text-white/45">to start building the evidence.</span>
      </p>
    </SectionShell>
  );
}

/* ---------------- 04 UNLOCKS ---------------- */
const unlocks: [string, string][] = [
  ["LEARN", "Selected accelerators, workshops and masterclasses."],
  ["BUILD", "Projects, challenges, ideathons and hackathons."],
  ["SHOWCASE", "Portfolio, skills, certificates and achievements."],
  ["CONNECT", "Cross-campus and ecosystem exposure."],
  ["GROW", "Discover relevant competitions, projects and opportunities."],
];

export function Unlocks() {
  return (
    <SectionShell id="benefits">
      <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div style={{ containerType: "inline-size" }}>
            <ScopeCard />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Headline>
              One card.
              <br />
              <span className="text-muted-foreground">Five ways to build your student journey.</span>
            </Headline>
          </Reveal>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-5">
            {unlocks.map(([t, d], i) => (
              <li key={t} className="bg-card p-4">
                <span className="text-[0.65rem] font-bold tracking-[0.18em] text-scope">
                  0{i + 1}
                </span>
                <h3 className="mt-1 font-display text-base font-extrabold uppercase">{t}</h3>
                <p className="mt-1.5 text-[0.78rem] leading-snug text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- 05 PERSONALIZATION ---------------- */
export function Personalize({
  selected,
  onSelect,
}: {
  selected: StudentTypeKey;
  onSelect: (k: StudentTypeKey) => void;
}) {
  const active = studentTypes.find((s) => s.key === selected)!;
  return (
    <SectionShell id="my-path" className="bg-secondary">
      <Reveal>
        <Headline>What kind of student are you?</Headline>
        <p className="mt-3 text-muted-foreground">
          The same Scope Card can support different student journeys.
        </p>
      </Reveal>

      <div role="tablist" aria-label="Student type" className="mt-8 flex flex-wrap gap-2">
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
              className={`min-h-11 rounded-full border px-5 text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-all ${
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

      <div
        role="tabpanel"
        id={`panel-${active.key}`}
        aria-labelledby={`tab-${active.key}`}
        key={active.key}
        className="reveal is-in mt-8 rounded-xl border bg-card p-6 md:p-8"
      >
        <p className="eyebrow text-muted-foreground">Relevant for</p>
        <p className="mt-2 text-sm font-medium">{active.relevant.join(" · ")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {active.journey.map(([t, d]) => (
            <div key={t} className="border-t-2 border-scope/70 pt-3">
              <h3 className="font-display text-sm font-extrabold tracking-wide uppercase">{t}</h3>
              <p className="mt-1 text-[0.82rem] leading-snug text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Cta href="#accelerator" variant="ghost">
          Explore my path
        </Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 06 ACCELERATOR ---------------- */
export function Accelerator() {
  const [path, setPath] = useState<"creative" | "technical">("creative");
  return (
    <SectionShell id="accelerator" dark>
      <Reveal>
        <span className="inline-block rounded-full bg-scope px-4 py-2 text-[0.65rem] font-bold tracking-[0.16em] uppercase">
          One first-year Accelerator included
        </span>
        <Headline className="mt-6 max-w-3xl">
          Start with something you can actually learn.
        </Headline>
        <p className="mt-4 max-w-2xl text-white/65">
          Every Scope Empowerment Card holder can choose ANY ONE eligible Scope Accelerator
          Programme during the FIRST YEAR.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(["creative", "technical"] as const).map((p) => {
          const on = path === p;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={on}
              onClick={() => setPath(p)}
              className={`min-h-11 rounded-xl border p-5 text-left transition-all hover:-translate-y-0.5 ${
                on ? "border-scope bg-white/[0.04]" : "border-white/12"
              }`}
            >
              <span className="eyebrow text-scope">Pathway</span>
              <span className="mt-1 block font-display text-lg font-extrabold uppercase">
                {p === "creative"
                  ? "Creative Scope Accelerator Programme"
                  : "Technical Scope Accelerator Options"}
              </span>
              <span className="mt-2 block text-[0.7rem] tracking-[0.12em] text-white/45 uppercase">
                Included in Year 1
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-white/10 p-6">
        {path === "creative" ? (
          <>
            <p className="text-sm text-white/70">
              Learn how visual ideas move from concept to execution — across design, storytelling,
              digital art and creative production. Positioned as foundational / introductory
              accelerator exposure depending on cohort.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {creativeTopics.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-white/15 px-3 py-2 text-[0.68rem] font-medium tracking-[0.08em] text-white/80 uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className="text-sm text-white/70">
              Choose one technical learning pathway based on your interest and applicable cohort
              availability.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {technicalOptions.map((t) => (
                <li key={t} className="rounded-md border border-white/12 px-4 py-3 text-sm text-white/85">
                  {t}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <p className="mt-5 text-[0.72rem] text-white/40">
        Programme availability, delivery mode, cohort size, schedule, duration and eligibility may
        vary by Scope Chapter.
      </p>
      <div className="mt-7">
        <Cta href="#comparison" variant="ghost">
          See what else my card unlocks
        </Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 07 COMPARISON ---------------- */
export function Comparison() {
  return (
    <SectionShell id="comparison">
      <Reveal>
        <Headline className="max-w-3xl">
          Two students can have the same qualification.
          <br />
          <span className="text-muted-foreground">Their journeys can look very different.</span>
        </Headline>
      </Reveal>
      <div className="mt-10 overflow-hidden rounded-xl border">
        <div className="grid grid-cols-2 bg-secondary text-[0.65rem] font-bold tracking-[0.14em] uppercase">
          <div className="p-3 text-muted-foreground">Typical student journey</div>
          <div className="border-l bg-scope p-3 text-white">With Scope Empowerment Card</div>
        </div>
        {comparisonRows.map(([a, b], i) => (
          <div key={a} className={`grid grid-cols-2 border-t ${i % 2 ? "bg-secondary/40" : "bg-card"}`}>
            <div className="p-3 text-[0.82rem] leading-snug text-muted-foreground">{a}</div>
            <div className="border-l p-3 text-[0.82rem] leading-snug font-medium">{b}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 font-display text-[clamp(1.1rem,2.6vw,1.7rem)] leading-tight font-extrabold uppercase">
        Same education. <span className="text-scope">More evidence of what you did with it.</span>
      </p>
    </SectionShell>
  );
}

/* ---------------- 08 PORTFOLIO ---------------- */
const scattered = [
  "Phone photos",
  "Google Drive",
  "Certificates",
  "GitHub",
  "Sketchbook",
  "Presentations",
  "Project files",
  "Competition certificates",
  "Social posts",
];

export function Portfolio({ selected }: { selected: StudentTypeKey }) {
  const active = studentTypes.find((s) => s.key === selected)!;
  return (
    <SectionShell id="portfolio" className="bg-secondary">
      <Reveal>
        <Headline className="max-w-3xl">
          Your work shouldn&apos;t
          <br />
          <span className="text-muted-foreground">disappear into folders.</span>
        </Headline>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Before</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {scattered.map((s) => (
              <li
                key={s}
                className="rotate-[-1deg] rounded border border-dashed bg-card px-3 py-1.5 text-[0.72rem] text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <div aria-hidden="true" className="text-center font-display text-2xl text-scope">
          →
        </div>

        <Reveal>
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-4">
              <QrPlaceholder size="lg" />
              <div>
                <p className="eyebrow text-scope">One Scope profile</p>
                <p className="font-display text-lg font-extrabold uppercase">{MEMBER.name}</p>
                <p className="text-[0.72rem] tracking-wider text-muted-foreground">{MEMBER.id}</p>
                <p className="text-[0.72rem] tracking-wider text-muted-foreground">
                  5-YEAR MEMBER · 60-MONTH VALIDITY
                </p>
              </div>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {[
                "Projects",
                "Skills",
                "Certificates",
                "Achievements",
                "Competitions",
                "Hackathons",
                "Events",
                "Creative Work",
                "Technical Work",
                "Academic Work",
              ].map((t) => (
                <li key={t} className="rounded-full bg-secondary px-3 py-1.5 text-[0.7rem]">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t pt-4">
              <p className="eyebrow text-muted-foreground">
                {active.label} portfolio can include
              </p>
              <p className="mt-2 text-sm font-medium">{active.portfolio.join(" · ")}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 font-display text-[clamp(1.1rem,2.4vw,1.6rem)] font-extrabold uppercase">
        Scan one QR. <span className="text-scope">See the journey.</span>
      </p>
      <div className="mt-6">
        <Cta href="#journey" variant="ghost">
          See the 5-year journey
        </Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 09 FIVE-YEAR JOURNEY ---------------- */
const timeline: [string, string][] = [
  ["START", "Scope Card Activated"],
  ["LEARN", "Year-1 Accelerator"],
  ["BUILD", "Projects and challenges"],
  ["PARTICIPATE", "Events, ideathons, hackathons and competitions"],
  ["SHOWCASE", "Portfolio grows"],
  ["CONNECT", "Cross-campus exposure"],
  ["DISCOVER", "Career and opportunity ecosystem"],
];

export function Journey() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <SectionShell id="journey" dark>
      <Reveal>
        <Headline className="max-w-3xl">
          Your card doesn&apos;t have to become more valuable.
          <br />
          <span className="text-scope">You do.</span>
        </Headline>
        <p className="mt-4 max-w-2xl text-white/60">
          Five years covers most of a student journey — school to college, first project to first
          opportunity. The membership stays while your evidence accumulates.
        </p>
      </Reveal>

      <div ref={ref} className="relative mt-12 pl-8 md:pl-0">
        <div className="absolute top-0 bottom-0 left-2 w-px bg-white/12 md:hidden" />
        <div
          className="absolute top-0 left-2 w-px bg-scope transition-[height] duration-[1400ms] ease-out md:hidden"
          style={{ height: inView ? "100%" : "0%" }}
        />
        <div className="hidden md:block">
          <div className="relative h-px w-full bg-white/12">
            <div
              className="absolute inset-y-0 left-0 bg-scope transition-[width] duration-[1400ms] ease-out"
              style={{ width: inView ? "100%" : "0%" }}
            />
          </div>
        </div>
        <ol className="grid gap-6 md:mt-6 md:grid-cols-7 md:gap-3">
          {timeline.map(([t, d]) => (
            <li key={t} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[26px] h-2.5 w-2.5 rounded-full bg-scope md:static md:mb-3 md:block"
              />
              <h3 className="font-display text-sm font-extrabold tracking-[0.1em] uppercase">{t}</h3>
              <p className="mt-1 text-[0.78rem] leading-snug text-white/55">{d}</p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 font-display text-[clamp(1.1rem,2.6vw,1.7rem)] font-extrabold uppercase">
        Five years gives your student story <span className="text-white/45">time to grow.</span>
      </p>
      <p className="mt-3 text-[0.72rem] text-white/40">
        This is an illustrative student journey, not a guaranteed yearly programme sequence.
      </p>
    </SectionShell>
  );
}

/* ---------------- 10 LEARN / PARTICIPATE / DISCOVER ---------------- */
const lpd: [string, string[]][] = [
  ["LEARN", ["Workshops", "Masterclasses", "Webinars", "Seminars", "Industry Sessions"]],
  [
    "PARTICIPATE",
    ["Ideathons", "Hackathons", "Game Jams", "Competitions", "Projects", "Creative Challenges"],
  ],
  [
    "DISCOVER",
    [
      "Internships",
      "Entry-Level Jobs",
      "Campus Opportunities",
      "Creative Opportunities",
      "Technology Opportunities",
      "Industry Interactions",
    ],
  ],
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
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
        {lpd.map(([t, items]) => (
          <Reveal key={t} className="bg-card p-6">
            <h3 className="font-display text-lg font-extrabold tracking-wide text-scope uppercase">
              {t}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {items.map((i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 font-display text-[clamp(1.1rem,2.6vw,1.7rem)] leading-tight font-extrabold uppercase">
        You don&apos;t have to be a programmer <span className="text-scope">to solve a problem.</span>
      </p>
      <ul className="mt-5 flex flex-wrap items-center gap-2">
        {[
          ["TECH", "Build"],
          ["DESIGN", "Experience"],
          ["BUSINESS", "Viability"],
          ["RESEARCH", "Understand"],
          ["COMMUNICATION", "Present"],
        ].map(([a, b]) => (
          <li key={a} className="rounded-lg border bg-card px-4 py-2">
            <span className="block text-[0.62rem] font-bold tracking-[0.14em] uppercase">{a}</span>
            <span className="block text-[0.72rem] text-muted-foreground">{b}</span>
          </li>
        ))}
        <li className="font-display text-sm font-extrabold text-scope uppercase">→ One team</li>
      </ul>
      <p className="mt-6 text-[0.72rem] text-muted-foreground">
        Access and participation remain subject to programme/event eligibility, availability, seats
        and respective terms.
      </p>
    </SectionShell>
  );
}

/* ---------------- 11 FRIENDS & FAMILY ---------------- */
export function Cashback() {
  return (
    <SectionShell id="cashback" className="bg-[oklch(0.96_0.03_75)]">
      <Reveal>
        <Headline className="max-w-3xl">
          Sometimes the best opportunity is the one you help someone else find.
        </Headline>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          If someone you know is searching for an eligible learning programme, your Scope membership
          may help you introduce them to a suitable Red Apple Learning programme.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <ol className="space-y-3">
          {[
            "Someone you know",
            "Needs the right learning opportunity",
            "You help them discover it",
            "They successfully enrol",
            "You may get rewarded",
          ].map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="font-display text-xs font-bold text-scope">0{i + 1}</span>
              <span className="rounded-lg border bg-card px-4 py-2.5 text-sm font-medium">{s}</span>
            </li>
          ))}
        </ol>

        <Reveal className="rounded-xl border bg-card p-8 text-center">
          <p className="eyebrow text-muted-foreground">Scope Friends &amp; Family Cashback</p>
          <p className="mt-3 font-display text-[clamp(1.9rem,5vw,3rem)] leading-none font-extrabold text-scope">
            UP TO ₹30,000
          </p>
          <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">Cashback</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {["FRIEND", "SIBLING", "COUSIN", "CLASSMATE", "FAMILY MEMBER"].map((p) => (
              <li key={p} className="rounded-full bg-secondary px-3 py-1.5 text-[0.65rem] tracking-[0.1em]">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <p className="mt-10 font-display text-[clamp(1rem,2.3vw,1.5rem)] leading-tight font-extrabold uppercase">
        Helping someone find the right opportunity should feel good.
        <br />
        <span className="text-muted-foreground">Getting rewarded for it is a bonus.</span>
      </p>
      <p className="mt-4 text-[0.72rem] text-muted-foreground">
        Applicable cashback may range from ₹1,000 to ₹30,000 depending on programme, campaign,
        successful enrolment, payment realisation and prevailing terms.
      </p>
    </SectionShell>
  );
}

/* ---------------- 12 PARTNERS ---------------- */
export function Partners() {
  return (
    <SectionShell id="partners">
      <Reveal>
        <Headline className="max-w-3xl">
          You&apos;re not just joining a card.
          <br />
          <span className="text-muted-foreground">You&apos;re entering an ecosystem.</span>
        </Headline>
      </Reveal>
      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card p-6 transition-colors hover:bg-secondary"
          >
            <span className="eyebrow text-scope">{p.tag}</span>
            <span className="mt-3 block font-display text-lg leading-tight font-extrabold uppercase">
              {p.name}
            </span>
            <span className="mt-1 block text-[0.78rem] text-muted-foreground">{p.role}</span>
            <span className="mt-4 inline-block text-[0.68rem] tracking-[0.12em] text-muted-foreground uppercase transition-colors group-hover:text-scope">
              Visit ↗
            </span>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- 13 ELIGIBILITY ---------------- */
export function Eligibility() {
  return (
    <SectionShell id="eligibility" dark>
      <Reveal>
        <Eyebrow>Important</Eyebrow>
        <Headline className="max-w-3xl">
          You can&apos;t simply buy the Scope Empowerment Card.
          <br />
          <span className="text-scope">You become eligible for it.</span>
        </Headline>
        <p className="mt-5 max-w-2xl text-white/65">
          The Scope Empowerment Card is available only to eligible students enlisted with Scope
          Innovation Lab through participating institutions / active Scope Innovation Lab Chapters.
        </p>
      </Reveal>
      <ol className="mt-10 flex flex-wrap items-center gap-3">
        {[
          "Participating institution",
          "Scope Innovation Lab",
          "Student enlistment",
          "Eligibility",
          "Scope Empowerment Card",
        ].map((s, i, arr) => (
          <li key={s} className="flex items-center gap-3">
            <span
              className={`rounded-lg border px-4 py-2.5 text-[0.72rem] font-semibold tracking-[0.1em] uppercase ${
                i === arr.length - 1 ? "border-scope bg-scope text-white" : "border-white/15 text-white/75"
              }`}
            >
              {s}
            </span>
            {i < arr.length - 1 && <span aria-hidden="true" className="text-white/30">→</span>}
          </li>
        ))}
      </ol>
      <div className="mt-9">
        <Cta href="#value">Check my eligibility</Cta>
      </div>
    </SectionShell>
  );
}

/* ---------------- 14 VALUE + PRICE ---------------- */
export function ValueAndPrice() {
  return (
    <SectionShell id="value" className="bg-secondary">
      <Reveal>
        <Headline>What are you actually applying for?</Headline>
      </Reveal>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          ["NOT JUST", "A plastic card."],
          ["NOT JUST", "A course."],
          ["NOT JUST", "A portfolio."],
        ].map(([a, b], i) => (
          <div key={i} className="rounded-lg border bg-card p-5">
            <span className="eyebrow text-muted-foreground">{a}</span>
            <span className="mt-1 block font-display text-lg font-extrabold">{b}</span>
          </div>
        ))}
      </div>

      <p className="mt-10 eyebrow text-scope">You&apos;re applying for</p>
      <ul className="mt-3 flex flex-wrap items-center gap-2">
        {[
          "5-Year Scope Membership",
          "One Year-1 Accelerator",
          "One growing student profile",
          "Participation ecosystem",
          "Opportunity discovery",
          "Member privileges",
          "Friends & Family benefit",
        ].map((s, i, arr) => (
          <li key={s} className="flex items-center gap-2">
            <span className="rounded-full border bg-card px-4 py-2 text-[0.75rem] font-semibold">
              {s}
            </span>
            {i < arr.length - 1 && <span aria-hidden="true" className="text-scope">+</span>}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid items-center gap-10 rounded-2xl bg-ink p-6 text-white md:grid-cols-2 md:p-10">
        <div style={{ containerType: "inline-size" }}>
          <ScopeCard />
        </div>
        <div>
          <p className="eyebrow text-scope">Your Scope Empowerment Card</p>
          <p className="mt-2 text-sm text-white/65">
            5-Year / 60-Month Membership · One eligible Accelerator included during Year 1
          </p>
          <p className="mt-6 font-display text-[clamp(2.6rem,8vw,4.6rem)] leading-none font-extrabold">
            ₹2,499
          </p>
          <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
            One-time student fee
          </p>
          <p className="mt-5 font-display text-xl font-extrabold text-cyan-accent">≈ ₹500 / year</p>
          <p className="text-[0.7rem] tracking-[0.14em] text-white/45 uppercase">
            Equivalent over the 5-year membership period
          </p>
          <p className="mt-4 text-[0.72rem] text-white/45">
            ₹2,499 is paid once for the current five-year membership term. It is not an annual
            instalment plan.
          </p>
          <p className="mt-4 inline-block rounded-full border border-white/20 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
            Renewable after 5 years
          </p>
          <p className="mt-6 font-display text-base font-extrabold uppercase">
            One card. One first-year Accelerator. Five years to build more.
          </p>
          <div className="mt-7">
            <Cta href="#payment" variant="light">
              Apply for my Scope Card
            </Cta>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- 17 FAQ ---------------- */
export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SectionShell id="faq" tall={false}>
      <Headline>Questions students ask</Headline>
      <div className="mt-8 divide-y rounded-xl border bg-card">
        {items.map(([q, a], i) => {
          const on = open === i;
          return (
            <div key={q}>
              <h3>
                <button
                  type="button"
                  aria-expanded={on}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(on ? null : i)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold"
                >
                  {q}
                  <span aria-hidden="true" className={`text-scope transition-transform ${on ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-${i}`}
                hidden={!on}
                className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
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

/* ---------------- 18 FINAL CTA ---------------- */
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
        <div style={{ containerType: "inline-size" }}>
          <ScopeCard />
        </div>
        <div>
          <Headline>Five years from now, what will your student story show?</Headline>
          <p className="mt-6 text-[0.72rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
            Skills. Projects. Experiences. Achievements. People you met. Things you built.
          </p>
          <p className="mt-6 font-display text-xl font-extrabold uppercase">Start building it now.</p>
          <p className="mt-4 text-sm text-white/60">
            Scope Empowerment Card · ₹2,499 one-time · 5 Years / 60 Months · One eligible Accelerator
            included in Year 1
          </p>
          <div className="mt-8">
            <Cta href="#payment">Apply for my Scope Card</Cta>
          </div>
          <p className="mt-8 text-[0.72rem] text-white/40">
            Exclusive to eligible students enlisted with Scope Innovation Lab.
          </p>
        </div>
      </div>
    </section>
  );
}
