import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calm Birth Preparation Toolkit | Kimberly Zoltek",
  description:
    "A warm, practical digital toolkit to help expecting parents feel informed, steady, and empowered as they prepare for labor, birth, and early postpartum.",
};

const includedItems = [
  "A guided birth preparation workbook with reflection prompts and planning exercises",
  "Comfort measures and coping techniques for early labor and active labor",
  "Partner support prompts for advocacy, communication, and hands-on help",
  "A simple birth preferences template to organize questions and priorities",
  "Postpartum recovery and newborn transition checklists",
  "Breastfeeding support notes with practical early feeding guidance",
];

const benefits = [
  "Feel more confident about what labor may look and feel like",
  "Reduce overwhelm with practical tools that are easy to use",
  "Help partners feel more prepared and involved",
  "Approach birth with a steadier, more informed mindset",
];

const testimonialPlaceholders = [
  "Placeholder testimonial: This toolkit helped us feel organized, calm, and far more prepared for labor than we expected.",
  "Placeholder testimonial: The partner coaching section made a huge difference in how supported I felt going into birth.",
  "Placeholder testimonial: Everything felt warm, clear, and practical. It gave us a starting point without making things feel overwhelming.",
];

export default function CalmBirthPreparationToolkitPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf8_0%,#f8f2ed_42%,#eff5f2_100%)] text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,196,183,0.34),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(179,204,197,0.24),_transparent_32%),linear-gradient(180deg,_#fffdfa_0%,_#f8f3ee_100%)]" />
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-full border border-white/70 bg-white/75 px-5 py-4 shadow-[0_12px_35px_rgba(86,68,55,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
              Kimberly Zoltek
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Digital support for calm, confident birth preparation
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                Digital Product
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                Calm Birth Preparation Toolkit
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                A warm, practical resource designed to help expecting parents
                feel informed, emotionally grounded, and more prepared for labor,
                birth, and the early postpartum transition.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
                This toolkit brings together education, planning, and partner
                support in one place, so families can prepare with clarity
                instead of pressure.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#buy"
                  className="inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
                >
                  Buy the Toolkit
                </a>
                <a
                  href="#included"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  See What&apos;s Included
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(86,68,55,0.10)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                Why parents love it
              </p>
              <ul className="mt-5 grid gap-4">
                {benefits.map((benefit) => (
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

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              Product Description
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              A supportive digital guide for parents who want to prepare without feeling overwhelmed.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-stone-600">
            <p>
              The Calm Birth Preparation Toolkit is designed for expecting
              parents who want trustworthy guidance in a format they can return
              to at their own pace. It combines practical education with gentle
              structure, helping families prepare for birth in a way that feels
              calm, clear, and realistic.
            </p>
            <p>
              Whether you are planning your first birth or want a more grounded
              experience this time around, the toolkit gives you supportive next
              steps, partner-friendly guidance, and thoughtful prompts that help
              you feel more ready for what is ahead.
            </p>
          </div>
        </div>
      </section>

      <section id="included" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_18px_50px_rgba(86,68,55,0.08)] lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            What&apos;s Included
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            Everything you need to prepare with more confidence.
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {includedItems.map((item) => (
              <li
                key={item}
                className="rounded-3xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-rose-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_60%,#f4f8f6_100%)] p-8 shadow-[0_18px_45px_rgba(86,68,55,0.08)] lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            Benefits for Expecting Parents
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl bg-white/80 px-5 py-5 text-base leading-7 text-stone-700 shadow-sm"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
          Testimonials
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Placeholder feedback section for future customer reviews.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonialPlaceholders.map((quote) => (
            <figure
              key={quote}
              className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_18px_45px_rgba(86,68,55,0.06)]"
            >
              <blockquote className="text-lg leading-8 text-stone-600">
                “{quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>

      <section id="buy" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_60px_rgba(86,68,55,0.08)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              Price
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              A simple, empowering resource for families preparing for birth.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Get immediate access to the Calm Birth Preparation Toolkit for
              <span className="font-semibold text-stone-950"> $49</span>.
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-500">
              Replace the purchase link below with your checkout page, Stripe
              payment link, or digital product platform URL.
            </p>
          </div>
          <a
            href="https://example.com/buy-calm-birth-preparation-toolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Buy Now
          </a>
        </div>
      </section>
    </main>
  );
}
