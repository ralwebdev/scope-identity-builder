import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav } from "@/components/scope/Nav";
import {
  Accelerator,
  Cashback,
  Ecosystemreach,
  Eligibility,
  Faq,
  FastStrip,
  FinalCta,
  Hero,
  JourneyComparison,
  Partners,
  Personalize,
  Portfolio,
  PriceReveal,
  Problem,
  Unlocks,
  ValueComparison,
  WhyDifferent,
} from "@/components/scope/Sections";
import { ApplicationSection, PaymentSection } from "@/components/scope/PaymentApply";
import { faqs, type StudentTypeKey } from "@/lib/scope-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scope Empowerment Card | Student Identity Beyond the Classroom" },
      {
        name: "description",
        content:
          "Scope Empowerment Card by Scope Innovation Lab — a 5-year student membership with one eligible Accelerator in Year 1, a QR-linked portfolio and ecosystem participation. ₹4,999/- one-time.",
      },
      { property: "og:title", content: "Scope Empowerment Card — Scope Innovation Lab" },
      {
        property: "og:description",
        content:
          "One Card. Five years to Learn, Build, Showcase, Connect & Grow. ₹4,999/- one-time, 5 years / 60 months.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const progress = window.scrollY / Math.max(1, doc.scrollHeight - window.innerHeight);
      let formVisible = false;
      for (const id of ["payment", "apply"]) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) formVisible = true;
      }
      setShow(progress > 0.25 && !formVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`no-print fixed inset-x-0 bottom-0 z-40 p-3 transition-all duration-300 md:hidden ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
        }`}
    >
      <a
        href="#payment"
        className="flex min-h-12 items-center justify-center rounded-full bg-scope text-[0.95rem] font-semibold text-white shadow-lg"
      >
        Apply for Scope Card
      </a>
    </div>
  );
}

function Landing() {
  const [studentType, setStudentType] = useState<StudentTypeKey | null>(null);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FastStrip />
        {/* <Problem /> */}
        <Personalize selected={studentType} onSelect={setStudentType} />
        <Accelerator />
        <Unlocks />
        <Portfolio selected={studentType} />
        <Ecosystemreach />
        <ValueComparison />
        <JourneyComparison />
        <WhyDifferent />
        <Cashback />
        <Partners />
        <Eligibility />
        <PriceReveal />
        <PaymentSection />
        <ApplicationSection defaultStudentType={studentType ?? "creative"} />
        <Faq items={faqs} />
        <FinalCta />
      </main>
      <footer className="no-print bg-ink px-5 py-12 text-center text-[0.8rem] text-white/40 md:px-10 flex flex-col items-center gap-4">
        <img
          src="/SCOPE Innovation Lab logo mark-07.png"
          alt="SCOPE Innovation Lab Logo"
          className="h-8 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity"
        />
        <p>
          Scope Innovation Lab · Scope Empowerment Card · Exclusive to eligible students enlisted with
          Scope Innovation Lab.
        </p>
      </footer>
      <StickyCta />
    </>
  );
}
