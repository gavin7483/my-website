import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Birth Plan Toolkit",
  description:
    "Thank you for purchasing the Birth Plan Toolkit. Access your download and next steps here.",
};

export default function ToolkitThankYouPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf8_0%,#f8f2ed_42%,#eff5f2_100%)] text-stone-800">
      <section className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16 lg:px-8">
        <div className="w-full rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_60px_rgba(86,68,55,0.08)] lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            Purchase Complete
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Thank you for purchasing the Birth Plan Toolkit
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Your toolkit is ready. You can download the printable PDF below and
            start using it right away to prepare with more clarity, calm, and
            confidence.
          </p>

          <div className="mt-10 rounded-[1.75rem] border border-rose-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_60%,#f4f8f6_100%)] p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Download your toolkit
            </h2>
            <p className="mt-3 text-base leading-7 text-stone-600">
              Click the button below to access your PDF:
            </p>
            <a
              href="/downloads/calm-birth-plan-toolkit.pdf"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Download the Toolkit PDF
            </a>
          </div>

          <div className="mt-10 grid gap-4 text-base leading-7 text-stone-600">
            <p>
              If you would like more personalized support, Kimberly also offers
              virtual doula guidance, birth planning support, and free
              consultations for families throughout New England.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/birth-plan-toolkit"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                Back to Toolkit Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
