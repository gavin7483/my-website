import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birth Plan Toolkit | Kimberly Zoltek",
  description:
    "A printable, supportive birth planning toolkit with a fillable birth plan template, hospital bag checklist, partner support cheat sheet, and scripts for communicating with staff.",
};

const hospitalBagChecklist = [
  {
    title: "For Birthing Parent",
    items: [
      "Photo ID, insurance card, and any hospital paperwork",
      "Comfortable robe, socks, slippers, and a change of clothes",
      "Lip balm, hair ties, toiletries, and phone charger",
      "Comfort items such as music, a pillow, or affirmation cards",
      "Going-home outfit and postpartum essentials",
    ],
  },
  {
    title: "For Baby",
    items: [
      "Car seat installed and checked",
      "Going-home outfit in newborn and 0-3 month sizes",
      "Swaddle or blanket if desired",
      "Any items requested by your birth center or hospital",
    ],
  },
  {
    title: "For Partner or Support Person",
    items: [
      "Change of clothes and toiletries",
      "Snacks, water bottle, and charger",
      "List of key contacts and important updates to share",
      "Notes on comfort techniques and birth preferences",
    ],
  },
];

const partnerSupportTips = [
  "Help set the tone: stay calm, speak gently, and protect the space from unnecessary stress.",
  "Offer simple support first: water, food, rest, movement, quiet, reassurance, and reminders to breathe.",
  "Use hands-on comfort measures such as hip squeezes, counterpressure, massage, or helping with position changes.",
  "Keep track of changing needs and communicate preferences clearly when the birthing parent is focused inward.",
  "Be flexible. What feels helpful at one point in labor may need to change later.",
];

const scripts = [
  {
    title: "When asking for time to think",
    line: "Can you give us a few minutes to talk this through before we decide?",
  },
  {
    title: "When asking for more explanation",
    line: "Can you walk us through the benefits, risks, and alternatives so we can understand our options?",
  },
  {
    title: "When restating a preference",
    line: "Our preference is to keep the environment calm and limit interventions unless they become medically necessary.",
  },
  {
    title: "When asking for support with comfort",
    line: "I would like to try movement, position changes, or other comfort measures before making another decision.",
  },
  {
    title: "When partner needs clarity",
    line: "Can you explain what is happening right now and what the next step would be if we wait versus act immediately?",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-rose-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-base leading-7 text-stone-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function FillLine({ label }: { label: string }) {
  return (
    <div className="grid gap-2">
      <p className="text-sm font-medium text-stone-700">{label}</p>
      <div className="h-10 rounded-xl border border-stone-300 bg-white" />
    </div>
  );
}

export default function CalmBirthPlanToolkitPage() {
  return (
    <main className="bg-[#fcfaf7] text-stone-800 print:bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8 print:max-w-none print:px-8 print:py-6">
        <section className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_55%,#f4f8f6_100%)] p-8 shadow-[0_20px_55px_rgba(86,68,55,0.08)] print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
            Kimberly Zoltek
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Birth Plan Toolkit
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600">
            A printable planning guide designed to help expecting parents feel
            steady, informed, and empowered as they prepare for birth. Use these
            pages to clarify your preferences, pack intentionally, prepare your
            partner, and communicate with confidence.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Fillable birth plan template",
              "Hospital bag checklist",
              "Partner support cheat sheet",
              "What to say to staff scripts",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/80 bg-white/80 px-4 py-4 text-sm font-medium text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 break-inside-avoid rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm print:mt-8 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <SectionTitle
            eyebrow="Section 1"
            title="Fillable Birth Plan Template"
            description="Use this template to organize your preferences while staying flexible. A birth plan is not about controlling every outcome. It is about helping your care team understand what matters most to you."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FillLine label="Your Name" />
            <FillLine label="Estimated Due Date" />
            <FillLine label="Birth Location" />
            <FillLine label="Care Provider" />
          </div>

          <div className="mt-8 grid gap-6">
            <FillLine label="Who do you want in the room with you?" />
            <FillLine label="What kind of environment helps you feel calm and safe?" />
            <FillLine label="What are your preferences for movement, positioning, and comfort measures?" />
            <FillLine label="What pain management options are you open to or hoping to avoid?" />
            <FillLine label="How would you like staff to communicate with you during labor?" />
            <FillLine label="What should your team know about your fears, priorities, or past experiences?" />
            <FillLine label="What are your immediate postpartum hopes for skin-to-skin, feeding, and recovery?" />
            <FillLine label="If plans need to change, what values would you like decisions to honor?" />
          </div>
        </section>

        <section className="mt-12 break-inside-avoid rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm print:mt-8 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <SectionTitle
            eyebrow="Section 2"
            title="Hospital Bag Checklist"
            description="Pack for comfort, recovery, and ease. Check off what feels right for your birth setting and family."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {hospitalBagChecklist.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-semibold text-stone-950">
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-stone-700">
                      <span className="mt-1 h-4 w-4 rounded border border-stone-400 bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 break-inside-avoid rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm print:mt-8 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <SectionTitle
            eyebrow="Section 3"
            title="Partner Support Cheat Sheet"
            description="Partners do not need to do everything perfectly. Calm, steady presence matters. Use these reminders as quick anchors during labor."
          />

          <div className="grid gap-4">
            {partnerSupportTips.map((tip, index) => (
              <div
                key={tip}
                className="flex gap-4 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-800">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-stone-700">{tip}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_100%)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
              Partner Reminder
            </p>
            <p className="mt-3 text-base leading-7 text-stone-700">
              Your job is not to control labor. Your job is to help your partner
              feel safe, supported, and less alone.
            </p>
          </div>
        </section>

        <section className="mt-12 break-inside-avoid rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm print:mt-8 print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <SectionTitle
            eyebrow="Section 4"
            title="What To Say To Staff Scripts"
            description="When labor feels intense, it can help to have simple language ready. These scripts are supportive starting points you can adapt to your own voice."
          />

          <div className="grid gap-4">
            {scripts.map((script) => (
              <div
                key={script.title}
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-semibold text-stone-950">
                  {script.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  “{script.line}”
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-rose-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_60%,#f4f8f6_100%)] p-8 shadow-[0_18px_45px_rgba(86,68,55,0.08)] print:mt-8 print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            Closing Note
          </p>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            You do not need to know everything to prepare well. A calm, flexible
            plan can help you feel more grounded, more informed, and more ready
            to meet birth as it unfolds.
          </p>
          <p className="mt-4 text-base leading-7 text-stone-600">
            If you want more personalized support, Kimberly Zoltek offers
            virtual doula guidance, birth planning support, and free
            consultations for families throughout New England.
          </p>
          <a
            href="https://buy.stripe.com/4gM5kE6U03qb5jZgEU0RG00"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-800 print:hidden"
          >
            Get the Toolkit
          </a>
        </section>
      </div>
    </main>
  );
}
