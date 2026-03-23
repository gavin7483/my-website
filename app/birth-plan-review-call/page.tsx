import type { Metadata } from "next";

import { calendlyUrl } from "@/app/seo-page-content";

export const metadata: Metadata = {
  title: "Birth Plan Review Call | Kimberly Zoltek",
  description:
    "Book a 30-minute Birth Plan Review Call with Kimberly Zoltek for personalized support around preferences, questions, and next steps before birth.",
};

const callBenefits = [
  "Talk through your current birth preferences and open questions",
  "Get practical feedback on comfort measures, communication, and flexibility",
  "Clarify partner roles and what support will matter most in labor",
  "Leave with calmer, more realistic next steps",
];

export default function BirthPlanReviewCallPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf7_0%,#f8f4ef_40%,#f1f6f4_100%)] text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,196,183,0.34),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(179,204,197,0.26),_transparent_30%),linear-gradient(180deg,_#fffdfc_0%,_#f8f4f0_100%)]" />
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-full border border-white/70 bg-white/75 px-5 py-4 shadow-[0_12px_35px_rgba(86,68,55,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
              Kimberly Zoltek
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Personalized support for a clearer, more flexible birth plan
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                30-Minute Session
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                Birth Plan Review Call
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                A focused 30-minute call to talk through your birth plan,
                answer key questions, and help you feel more prepared for real
                decisions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
                >
                  Book the Review Call
                </a>
                <div className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-700">
                  $95
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(86,68,55,0.10)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                What we can cover
              </p>
              <ul className="mt-5 grid gap-4">
                {callBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-3xl bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-700"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_18px_50px_rgba(86,68,55,0.08)] lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            Is This For You?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            A practical next step if you want personalized input without a full support package.
          </h2>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-stone-600">
            <p>
              This call is a strong fit if you already have a rough birth plan,
              feel unsure about specific decisions, or want a calm outside voice
              to help you organize your thoughts before labor.
            </p>
            <p>
              Kimberly can help you think through preferences, questions for
              your provider, partner support, comfort options, and how to keep
              your plan flexible if things change.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
