import { useState, type FormEvent } from "react";
import { Cta, Headline, SectionShell } from "./Ui";
import { QrPlaceholder } from "./ScopeCard";
import {
  acceleratorPreferences,
  newApplicationId,
  saveApplication,
  studentTypes,
  type ScopeApplication,
} from "@/lib/scope-data";

function PaymentQr() {
  const [broken, setBroken] = useState(false);
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-xl border-2 border-ink bg-white p-4 text-center">
      {broken ? (
        <div className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-ink/30 p-4">
          <QrPlaceholder size="lg" />
          <p className="text-base font-bold text-ink">
            Payment QR
          </p>
          <p className="text-[0.68rem] leading-snug text-muted-foreground">
            Replace with authorised Scope payment QR before production.
          </p>
        </div>
      ) : (
        <img
          src="/payment-qr.png"
          alt="Authorised Scope payment QR code for the ₹2,499 Scope Empowerment Card fee"
          width={480}
          height={480}
          loading="lazy"
          onError={() => setBroken(true)}
          className="aspect-square w-full rounded-lg object-contain"
        />
      )}
      <p className="mt-3 eyebrow text-ink">
        Scan to pay ₹2,499
      </p>
    </div>
  );
}

export function PaymentSection() {
  return (
    <SectionShell id="payment" className="bg-secondary" tall={false}>
      <Headline>Pay ₹2,499, then complete your application.</Headline>
      <p className="mt-4 max-w-[660px] text-[1.05rem] text-muted-foreground">
        Scan the authorised QR, copy your UTR / Transaction ID, then fill the form below.
      </p>

      <div className="mt-8 grid gap-8 rounded-2xl border bg-card p-6 md:grid-cols-2 md:p-8">
        <div>
          <p className="eyebrow text-scope">Scope Empowerment Card</p>
          <p className="mt-2 text-[clamp(2.2rem,7vw,3.4rem)] leading-none font-extrabold tracking-[-0.03em]">
            ₹2,499
          </p>
          <p className="mt-2 eyebrow text-muted-foreground">
            One-time student fee · 5-Year / 60-Month validity
          </p>
          <p className="mt-4 rounded-lg bg-secondary px-4 py-3 text-sm">
            Includes any ONE eligible Scope Accelerator Programme during Year 1.
          </p>

          <ol className="mt-6 space-y-3">
            {[
              ["Scan & pay", "Scan the authorised QR and pay ₹2,499."],
              ["Copy your UTR", "Find the UTR / Transaction ID in the successful payment confirmation."],
              ["Complete your application", "Enter the same transaction reference in the application form."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-3">
                <span className="text-[0.95rem] font-bold text-scope">{i + 1}</span>
                <span>
                  <span className="block text-[0.95rem] font-bold">{t}</span>
                  <span className="block text-[0.82rem] text-muted-foreground">{d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <PaymentQr />
          <p className="mx-auto mt-4 max-w-sm text-center text-[0.8rem] text-muted-foreground">
            After completing your payment, copy the UTR / Transaction ID from your payment app or
            bank confirmation and enter it in the application form below.
          </p>
          <p className="mt-5 text-center eyebrow text-scope">
            Scan → Pay → Copy UTR → Apply
          </p>

          <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border bg-border text-[0.78rem]">
            {[
              ["Payment amount", "₹2,499"],
              ["Payment purpose", "Scope Empowerment Card — 5-Year Membership"],
              ["Payment verification", "Manual verification after application submission."],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[auto_1fr] gap-3 bg-card p-3">
                <dt className="text-[0.78rem] font-semibold text-muted-foreground">
                  {k}
                </dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.72rem] text-muted-foreground">
            Only make payment using the authorised Scope payment QR displayed on this page /
            provided by your Scope Chapter. Payment through the displayed QR does not automatically
            activate membership. Card activation is subject to student eligibility and successful
            manual verification of the payment reference.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

const steps: [string, string, string][] = [
  ["Step 1", "Verify", "Confirm Scope eligibility / Batch ID."],
  ["Step 2", "Pay", "Pay ₹2,499 through the authorised payment instruction provided by Scope / participating institution."],
  ["Step 3", "Apply", "Enter student details and payment UTR."],
  ["Step 4", "Verify & Activate", "Scope verifies eligibility and payment before activation."],
];

type FieldKey =
  | "fullName"
  | "phone"
  | "email"
  | "batchId"
  | "utr"
  | "acceleratorPreference"
  | "confirmPaid"
  | "confirmInfo"
  | "confirmTerms";
type Errors = Partial<Record<FieldKey, string>>;

export function ApplicationSection({ defaultStudentType }: { defaultStudentType: string }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    batchId: "",
    utr: "",
    studentType: defaultStudentType,
    acceleratorPreference: "",
    confirmInfo: false,
    confirmTerms: false,
    confirmPaid: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<ScopeApplication | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const set = (k: string, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k as FieldKey]: undefined }));
  };

  const validate = () => {
    const e: Errors = {};
    if (form.fullName.trim().length < 2) e.fullName = "Enter your full name.";
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email ID.";
    if (form.batchId.trim().length < 2) e.batchId = "Enter your Scope Batch ID.";
    const utr = form.utr.trim();
    if (utr.length < 6) e.utr = "Enter the UTR / Transaction ID (minimum 6 characters).";
    else if (!/^[A-Za-z0-9-]+$/.test(utr)) e.utr = "Only letters, numbers and hyphens are allowed.";
    if (!form.acceleratorPreference) e.acceleratorPreference = "Select an Accelerator preference.";
    if (!form.confirmPaid) e.confirmPaid = "Please confirm your payment.";
    if (!form.confirmInfo) e.confirmInfo = "Please confirm your details are correct.";
    if (!form.confirmTerms) e.confirmTerms = "Please accept the applicable Scope terms.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const utr = form.utr.trim();
    const app: ScopeApplication = {
      applicationId: newApplicationId(),
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      batchId: form.batchId.trim(),
      utr,
      transactionId: utr,
      studentType: form.studentType,
      acceleratorPreference: form.acceleratorPreference,
      paymentAmount: 2499,
      paymentMethod: "Manual QR Payment",
      paymentStatus: "Pending Verification",
      applicationStatus: "Pending Verification",
      status: "Pending Verification",
      submittedAt: new Date().toISOString(),
    };

    try {
      const appsScriptUrl = import.meta.env.VITE_APPSCRIPT_URL;

      if (appsScriptUrl) {
        const studentLabel = studentTypes.find((s) => s.key === app.studentType)?.label || app.studentType || "Not specified";
        const payload = {
          id: app.applicationId,
          submittedAt: app.submittedAt,
          name: app.fullName,
          phone: app.phone,
          email: app.email,
          batchId: app.batchId,
          utr: app.utr,
          interest: studentLabel,
          accelerator: app.acceleratorPreference || "Not specified",
          status: app.status,
          membershipType: "5-Year",
          validityMonths: 60,
        };

        const response = await fetch(appsScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.status === "error") {
          throw new Error(data.message || "Failed to submit card application");
        }
      } else {
        console.warn("VITE_APPSCRIPT_URL is not set. Saving application only to local storage.");
      }

      saveApplication(app);
      setResult(app);
    } catch (err: any) {
      console.error("Error submitting application:", err);
      setSubmitError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const field =
    "mt-2 h-12 w-full rounded-lg border border-input bg-card px-4 text-[1rem] outline-none transition-colors focus:border-scope focus:ring-2 focus:ring-scope/25";

  return (
    <SectionShell id="apply" tall={false}>
      <ol className="grid gap-3 md:grid-cols-4">
        {steps.map(([s, t, d]) => (
          <li key={s} className="rounded-xl border bg-card p-5">
            <span className="eyebrow text-scope">{s}</span>
            <span className="mt-1 block text-lg font-bold">{t}</span>
            <span className="mt-1.5 block text-[0.78rem] leading-snug text-muted-foreground">{d}</span>
          </li>
        ))}
      </ol>

      <Headline className="mt-14">
        <span id="apply-form">
          Apply for your</span>
        <br />
        Scope Empowerment Card
      </Headline>

      <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5 rounded-2xl border bg-secondary/40 p-6 md:grid-cols-2 md:p-8">
        <div>
          <label htmlFor="fullName" className="text-[0.95rem] font-semibold">Full name</label>
          <input id="fullName" className={field} value={form.fullName} maxLength={100}
            aria-invalid={!!errors.fullName} onChange={(e) => set("fullName", e.target.value)} />
          {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-[0.95rem] font-semibold">Phone number</label>
          <input id="phone" inputMode="tel" className={field} value={form.phone} maxLength={15}
            aria-invalid={!!errors.phone} onChange={(e) => set("phone", e.target.value)} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-[0.95rem] font-semibold">Email ID</label>
          <input id="email" type="email" className={field} value={form.email} maxLength={255}
            aria-invalid={!!errors.email} onChange={(e) => set("email", e.target.value)} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="batchId" className="text-[0.95rem] font-semibold">Batch ID</label>
          <input id="batchId" className={field} value={form.batchId} maxLength={40}
            aria-invalid={!!errors.batchId} onChange={(e) => set("batchId", e.target.value)} />
          {errors.batchId && <p className="mt-1 text-xs text-destructive">{errors.batchId}</p>}
        </div>

        <div className="md:col-span-2">
          <a href="#payment" className="inline-flex min-h-11 items-center text-[0.9rem] font-semibold text-scope">
            Haven&apos;t paid yet? View payment QR ↑
          </a>
          <label htmlFor="utr" className="mt-1 block text-[0.95rem] font-semibold">
            Payment UTR / Transaction ID
          </label>
          <input id="utr" className={field} value={form.utr} maxLength={40} placeholder="e.g. 428731XXXXXX"
            aria-describedby="utr-help" aria-invalid={!!errors.utr}
            onChange={(e) => set("utr", e.target.value)} />
          <p id="utr-help" className="mt-1.5 text-[0.75rem] text-muted-foreground">
            Complete the ₹2,499 payment using the authorised QR above, then enter the exact UTR /
            Transaction ID shown in your successful payment confirmation.
          </p>
          {errors.utr && <p className="mt-1 text-xs text-destructive">{errors.utr}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 py-2 text-sm">
            <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--scope)]"
              checked={form.confirmPaid} onChange={(e) => set("confirmPaid", e.target.checked)} />
            <span>
              I confirm that I have completed the ₹2,499 Scope Empowerment Card payment and entered
              the corresponding UTR / Transaction ID above.
            </span>
          </label>
          {errors.confirmPaid && <p className="text-xs text-destructive">{errors.confirmPaid}</p>}
        </div>

        <div>
          <label htmlFor="accel" className="text-[0.95rem] font-semibold">Accelerator preference</label>
          <select id="accel" className={field} value={form.acceleratorPreference}
            aria-invalid={!!errors.acceleratorPreference}
            onChange={(e) => set("acceleratorPreference", e.target.value)}>
            <option value="">Select a preference</option>
            {acceleratorPreferences.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          {errors.acceleratorPreference && (
            <p className="mt-1 text-xs text-destructive">{errors.acceleratorPreference}</p>
          )}
        </div>
        <div>
          <label htmlFor="stype" className="text-[0.95rem] font-semibold">Student type (optional)</label>
          <select id="stype" className={field} value={form.studentType}
            onChange={(e) => set("studentType", e.target.value)}>
            {studentTypes.map((s) => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 py-2 text-sm">
            <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--scope)]"
              checked={form.confirmInfo} onChange={(e) => set("confirmInfo", e.target.checked)} />
            <span>I confirm that the information and payment reference provided are correct.</span>
          </label>
          {errors.confirmInfo && <p className="text-xs text-destructive">{errors.confirmInfo}</p>}
          <label className="flex items-start gap-3 py-2 text-sm">
            <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--scope)]"
              checked={form.confirmTerms} onChange={(e) => set("confirmTerms", e.target.checked)} />
            <span>
              I understand that eligibility, programme availability, events and opportunities remain
              subject to applicable Scope terms.
            </span>
          </label>
          {errors.confirmTerms && <p className="text-xs text-destructive">{errors.confirmTerms}</p>}
        </div>

        {submitError && (
          <div className="md:col-span-2 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive font-medium">
            {submitError}
          </div>
        )}

        <div className="md:col-span-2">
          <Cta type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting application..." : "Submit card application"}
          </Cta>
        </div>
      </form>

      {result && <SuccessModal app={result} onClose={() => setResult(null)} />}
    </SectionShell>
  );
}

function SuccessModal({ app, onClose }: { app: ScopeApplication; onClose: () => void }) {
  const firstName = app.fullName.split(" ")[0];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl bg-card p-6 md:p-8">
        <p className="eyebrow text-scope">Application recorded</p>
        <h2 id="success-title" className="mt-2 text-2xl font-bold tracking-[-0.02em]">
          Thank you, {firstName}.
        </h2>
        <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border bg-border text-sm">
          {[
            ["Application ID", app.applicationId],
            ["Student name", app.fullName],
            ["Batch ID", app.batchId],
            ["Membership", "Scope Empowerment Card"],
            ["Term", "5 Years / 60 Months"],
            ["Payment amount", "₹2,499"],
            ["UTR / Transaction ID", app.utr],
            ["Accelerator preference", app.acceleratorPreference],
            ["Submission date", new Date(app.submittedAt).toLocaleString()],
            ["Status", "Pending eligibility & payment verification"],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-[auto_1fr] gap-3 bg-card p-3">
              <dt className="text-[0.78rem] font-semibold text-muted-foreground">{k}</dt>
              <dd className="text-right font-medium break-words">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.78rem] text-muted-foreground">
          Your Scope Empowerment Card will be activated only after your Batch ID, eligibility and
          payment reference are verified through the authorised Scope process.
        </p>
        <div className="no-print mt-6 flex flex-wrap gap-3">
          <Cta onClick={() => window.print()}>Print application</Cta>
          <Cta variant="ghost" onClick={onClose}>Back to benefits</Cta>
        </div>
      </div>
    </div>
  );
}
