import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { loadApplications, STORAGE_KEY, type ScopeApplication } from "@/lib/scope-data";
import { Eye, X } from "lucide-react";

export const Route = createFileRoute("/applications-demo")({
  head: () => ({
    meta: [
      { title: "Applications Demo | Scope Empowerment Card" },
      {
        name: "description",
        content:
          "Local frontend demonstration view of Scope Empowerment Card applications stored in this browser.",
      },
      { property: "og:title", content: "Applications Demo | Scope Empowerment Card" },
      {
        property: "og:description",
        content: "Local demo list of Scope Empowerment Card applications saved in this browser.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Demo,
});

const STATUSES = ["Pending Verification", "Verified", "Rejected"];

function Demo() {
  const [apps, setApps] = useState<ScopeApplication[]>([]);
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => setApps(loadApplications()), []);

  const update = (id: string, status: string) => {
    const next = apps.map((a) =>
      a.applicationId === id ? { ...a, applicationStatus: status, paymentStatus: status, status } : a,
    );
    setApps(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-2xl font-extrabold uppercase">Applications demo</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Frontend demonstration only — records are stored in this browser. No automated payment
        validation.
      </p>

      {apps.length === 0 ? (
        <p className="mt-10 rounded-xl border bg-card p-6 text-sm text-muted-foreground">
          No applications saved in this browser yet.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-secondary text-[0.65rem] tracking-[0.12em] uppercase">
              <tr>
                {["Application ID", "Photo", "Name", "Batch ID", "UTR / Transaction ID", "Amount", "Accelerator", "Status"].map(
                  (h) => (
                    <th key={h} className="p-3 font-bold">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {apps.map((a) => {
                const photo = a.profilePhoto || a.image;
                return (
                  <tr key={a.applicationId} className="border-t">
                    <td className="p-3 font-medium">{a.applicationId}</td>
                    <td className="p-3">
                      {photo ? (
                        <button
                          type="button"
                          onClick={() =>
                            setActiveImage({
                              src: photo,
                              title: `${a.fullName} - Scope Card ID Photo`,
                            })
                          }
                          className="group relative flex h-10 w-9 items-center justify-center overflow-hidden rounded border border-scope/50 bg-secondary transition-transform hover:scale-105"
                          title="View card photo"
                        >
                          <img
                            src={photo}
                            alt={a.fullName}
                            className="h-full w-full object-cover object-top"
                          />
                        </button>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="p-3 font-medium">{a.fullName}</td>
                    <td className="p-3">{a.batchId}</td>
                    <td className="p-3 font-mono text-xs">{a.utr}</td>
                    <td className="p-3">₹{a.paymentAmount ?? 4999}</td>
                    <td className="p-3">{a.acceleratorPreference}</td>
                    <td className="p-3">
                      <label className="sr-only" htmlFor={`s-${a.applicationId}`}>
                        Payment status
                      </label>
                      <select
                        id={`s-${a.applicationId}`}
                        value={a.applicationStatus ?? "Pending Verification"}
                        onChange={(e) => update(a.applicationId, e.target.value)}
                        className="min-h-11 rounded-lg border bg-card px-3 text-sm"
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-h-[90vh] max-w-2xl overflow-hidden rounded-2xl bg-card p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b mb-4">
              <p className="font-semibold text-sm">{activeImage.title}</p>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="rounded-lg p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={activeImage.src}
              alt="Payment receipt proof"
              className="max-h-[70vh] w-auto mx-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

