import type { Metadata } from "next";
import Link from "next/link";

type RegistryGuideDownloadPageProps = {
  searchParams?: Promise<{
    firstName?: string;
    email?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Your Free Registry Guide | Kimberly Zoltek",
  description:
    "Download the free baby registry guide, then explore the Birth Plan Toolkit and Birth Plan Review Call for more personalized support.",
};

function formatFirstName(firstName?: string) {
  if (!firstName) {
    return "there";
  }

  return firstName.trim() || "there";
}

export default async function RegistryGuideDownloadPage({
  searchParams,
}: RegistryGuideDownloadPageProps) {
  const params = (await searchParams) ?? {};
  const firstName = formatFirstName(params.firstName);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf8_0%,#f8f2ed_42%,#eff5f2_100%)] text-stone-800">
      <section className="mx-auto max-w-5xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_60px_rgba(86,68,55,0.08)] lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            Free Download
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Your registry guide is ready, {firstName}.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            You can download the free guide below and use it anytime you want a
            calmer, more realistic starting point for your registry.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-rose-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_60%,#f4f8f6_100%)] p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Download the free registry guide
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
              Save it now so you can come back to the essentials, skip the
              noise, and make decisions at your own pace.
            </p>
            <a
              href="/downloads/what-you-actually-need-on-your-baby-registry.html"
              download
              className="mt-6 inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Download the Free Guide
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                Upsell 1
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-stone-950">
                Birth Plan Toolkit
              </h2>
              <p className="mt-3 text-lg font-semibold text-stone-950">$19</p>
              <p className="mt-4 text-base leading-7 text-stone-600">
                If you want the same kind of clear, practical support for birth
                prep, the Birth Plan Toolkit helps you think through
                preferences, partner roles, comfort measures, and real decisions
                before labor starts.
              </p>
              <a
                href="https://buy.stripe.com/4gM5kE6U03qb5jZgEU0RG00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
              >
                Get the Birth Plan Toolkit
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                Upsell 2
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-stone-950">
                Birth Plan Review Call
              </h2>
              <p className="mt-3 text-lg font-semibold text-stone-950">$95</p>
              <p className="mt-4 text-base leading-7 text-stone-600">
                For personalized support, the Birth Plan Review Call gives you
                30 focused minutes to talk through your preferences, questions,
                and next steps with Kimberly.
              </p>
              <Link
                href="/birth-plan-review-call"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                Explore the Review Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
