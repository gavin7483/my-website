import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What You ACTUALLY Need On Your Baby Registry | Kimberly Zoltek",
  description:
    "Get the free baby registry guide and sort essentials from nice-to-haves with a warm, realistic checklist for expecting parents.",
};

const sectionSummaries = [
  {
    title: "What&apos;s actually essential",
    description:
      "Focus on the few categories that support sleep, feeding, diapering, going home safely, and the early postpartum stretch.",
  },
  {
    title: "What&apos;s optional",
    description:
      "Understand what can be helpful, but is not necessary, so your registry stays simple and realistic.",
  },
  {
    title: "What&apos;s a waste of money",
    description:
      "Skip the items that often create clutter, duplicates, or regret instead of making life easier.",
  },
  {
    title: "Budget vs premium",
    description:
      "Get practical guidance on where it makes sense to spend a little more and where basic is completely fine.",
  },
  {
    title: "Partner section",
    description:
      "Bring your partner into the planning so the setup feels clear, shared, and easy to manage together.",
  },
];

const trustPoints = [
  "Warm, honest guidance instead of a giant shopping list",
  "Built for real first weeks at home, not perfect nursery photos",
  "Simple enough to use quickly when you already have a lot on your mind",
];

export default function BabyRegistryGuideLandingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdfb_0%,#f8f4ef_46%,#eef5f1_100%)] text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(245,210,198,0.34),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(187,209,200,0.26),_transparent_32%),linear-gradient(180deg,_#fffdfa_0%,_#f7f2ec_100%)]" />
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8 lg:py-14">
          <div className="rounded-full border border-white/80 bg-white/75 px-5 py-4 shadow-[0_12px_35px_rgba(86,68,55,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
              Free Guide
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Practical registry help for expecting parents
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-[0_22px_55px_rgba(86,68,55,0.08)] backdrop-blur sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                What You ACTUALLY Need On Your Baby Registry
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                What do you actually need on your baby registry?
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
                Skip the overwhelm and get a simple, realistic guide to what you
                actually need and what you don&apos;t.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
                This free guide helps you make calmer decisions, avoid clutter,
                and build a registry that fits real life.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(145deg,#f6fbf8_0%,#fffaf6_100%)] p-7 shadow-[0_20px_55px_rgba(86,68,55,0.08)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                Get the free guide
              </p>
              <form
                action="/registry-guide-download"
                method="get"
                className="mt-5 grid gap-4"
              >
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-stone-700">
                    First name
                  </span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-400"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-stone-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-rose-400"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  Download the Free Guide
                </button>
              </form>
              <p className="mt-4 text-sm leading-7 text-stone-500">
                By signing up, you&apos;ll get immediate access to the guide and
                thoughtful next steps for birth preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              What&apos;s Inside
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              A simple, trustworthy guide you can use in one sitting.
            </h2>
            <div className="mt-6 grid gap-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl bg-white/80 px-4 py-4 text-sm leading-7 text-stone-700 shadow-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {sectionSummaries.map((section, index) => (
              <div
                key={section.title}
                className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-[0_16px_40px_rgba(86,68,55,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">
                  Section {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-stone-950">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
