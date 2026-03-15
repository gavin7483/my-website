import Link from "next/link";

import type { SeoPageContent } from "@/app/seo-page-content";
import { calendlyUrl } from "@/app/seo-page-content";

type SeoLandingPageProps = {
  content: SeoPageContent;
};

export function SeoLandingPage({ content }: SeoLandingPageProps) {
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
              Virtual birth doula support for families in New England
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                {content.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
                {content.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                {content.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
                >
                  Book a Free Consultation
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  Contact Kimberly
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_70px_rgba(86,68,55,0.10)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                Benefits of Virtual Doula Care
              </p>
              <ul className="mt-5 grid gap-4">
                {content.benefits.map((benefit) => (
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
            Educational Content
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            {content.educationalHeading}
          </h2>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-stone-600">
            {content.educationalParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-4 lg:px-8">
        <div className="rounded-[2rem] border border-rose-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_60%,#f4f8f6_100%)] p-8 shadow-[0_18px_45px_rgba(86,68,55,0.08)] lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              Consultation CTA
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
              Get personalized guidance for your pregnancy, birth, or postpartum experience.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Kimberly offers a free 20 minute consultation so families can ask
              questions, learn what support is available, and decide on the next
              right step.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              Common questions about {content.title.toLowerCase()}.
            </h2>
          </div>
          <div className="grid gap-4">
            {content.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-stone-200 bg-white/85 p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-stone-950">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-stone-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
