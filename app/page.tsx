import Image from "next/image";
import babySupportImage from "@/public/images/baby-support.jpg";
import kimberlyHeroImage from "@/public/images/kimberly-hero.jpg";
import { ContactForm } from "@/app/_components/contact-form";

const services = [
  {
    name: "Virtual Labor Preparation",
    description:
      "Build confidence before birth with personalized education, comfort strategies, and practical planning for labor and delivery.",
  },
  {
    name: "Partner Coaching",
    description:
      "Help your partner feel calm, prepared, and useful with clear guidance on advocacy, emotional support, and hands-on comfort techniques.",
  },
  {
    name: "Breastfeeding Support",
    description:
      "Receive lactation-informed support for latch, feeding questions, and early postpartum adjustments in the days after birth.",
  },
  {
    name: "Postpartum Recovery Guidance",
    description:
      "Get steady, compassionate guidance as you recover, adjust to life with your baby, and build routines that support rest and healing.",
  },
  {
    name: "Birth Planning Support",
    description:
      "Create a thoughtful birth plan that reflects your values, preferences, and medical context while staying flexible for real-life decisions.",
  },
];

const testimonials = [
  {
    quote:
      "Before labor started I was terrified. Kimberly helped me understand what was happening in my body and coached both me and my husband through every stage. When contractions intensified, she was the calm voice that reminded me I could do it. I honestly don't know how we would have gotten through that experience without her.",
    name: "Sarah",
    role: "Client testimonial",
  },
  {
    quote:
      "As the partner, I didn't know what my role would be during labor. Kimberly showed me exactly how to support my wife - from breathing techniques to positioning during contractions. Instead of feeling helpless, I felt like part of the team. That changed the entire experience for us.",
    name: "Jessica",
    role: "Partner testimonial",
  },
  {
    quote:
      "When things didn't go the way we expected during labor, Kimberly kept us calm and helped us understand every decision being made. She advocated for us and made sure we felt informed and supported the entire time.",
    name: "Luna",
    role: "Client testimonial",
  },
];

const faqs = [
  {
    question: "How does virtual doula support work?",
    answer:
      "Support is provided through video calls, messaging, and scheduled check-ins. Kimberly helps you prepare before birth, supports decision-making, coaches your partner, and remains a steady resource through postpartum recovery.",
  },
  {
    question: "Who is virtual support best suited for?",
    answer:
      "Virtual support is a strong fit for families who want professional guidance, preparation, and continuity of care regardless of location, hospital policy, or scheduling constraints.",
  },
  {
    question: "Do you support both first-time and experienced parents?",
    answer:
      "Yes. Care is tailored to each family, whether you are preparing for your first baby or wanting a different kind of support for a later birth.",
  },
  {
    question: "What makes your approach evidence-based?",
    answer:
      "Kimberly combines hands-on experience with lactation certification, training through DONA and DTI, and ongoing education as a midwife assistant to provide support grounded in current best practices.",
  },
];

export default function Home() {
  const calendlyUrl =
    "https://calendly.com/macagent7483/free-20-minute-birth-consultation";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff9f8_0%,#f9f5f2_36%,#f2f6f4_100%)] text-stone-800">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(244,196,183,0.38),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(179,204,197,0.32),_transparent_32%),linear-gradient(180deg,_#fffdfc_0%,_#f8f4f1_100%)]" />
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
          <header className="flex flex-col gap-5 rounded-full border border-white/70 bg-white/70 px-5 py-4 shadow-[0_12px_35px_rgba(86,68,55,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
                Kimberly Zoltek
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Virtual birth doula support for families in New England
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm text-stone-600">
              <a href="#about" className="transition hover:text-stone-950">
                About
              </a>
              <a href="#services" className="transition hover:text-stone-950">
                Services
              </a>
              <a
                href="#testimonials"
                className="transition hover:text-stone-950"
              >
                Testimonials
              </a>
              <a href="#faq" className="transition hover:text-stone-950">
                FAQ
              </a>
              <a href="#contact" className="transition hover:text-stone-950">
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Book a Free Consultation
            </a>
          </header>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-medium text-rose-800 shadow-sm">
                Warm, evidence-based virtual support through pregnancy, birth,
                and postpartum
              </p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                Calm, compassionate birth doula care from wherever you are in
                New England.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                Kimberly Zoltek helps families feel informed, supported, and
                steady through labor preparation, partner coaching,
                breastfeeding support, and postpartum recovery guidance.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-800"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
                >
                  Explore Services
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm">
                  <p className="text-3xl font-semibold text-stone-950">109</p>
                  <p className="mt-1 text-sm text-stone-600">Births supported</p>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm">
                  <p className="text-3xl font-semibold text-stone-950">200+</p>
                  <p className="mt-1 text-sm text-stone-600">
                    Postpartum families served
                  </p>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm">
                  <p className="text-3xl font-semibold text-stone-950">DONA + DTI</p>
                  <p className="mt-1 text-sm text-stone-600">
                    Professional training foundation
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_24px_70px_rgba(86,68,55,0.12)] backdrop-blur">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={kimberlyHeroImage}
                    alt="Kimberly Zoltek offering warm virtual birth doula support"
                    priority
                    placeholder="blur"
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_rgba(86,68,55,0.12)] backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-800">
                  Why families choose Kimberly
                </p>
                <div className="mt-6 grid gap-5">
                  <div className="rounded-3xl bg-rose-50 p-5">
                    <h2 className="text-lg font-semibold text-stone-950">
                      Professional and deeply reassuring
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      Support that blends calm communication, practical tools,
                      and evidence-based education.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-emerald-50 p-5">
                    <h2 className="text-lg font-semibold text-stone-950">
                      Trusted through every stage
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      From birth planning to the early postpartum period, care
                      is steady, responsive, and centered on your goals.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-stone-100 p-5">
                    <h2 className="text-lg font-semibold text-stone-950">
                      Built for modern families
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      Virtual doula care makes experienced support accessible
                      wherever you are across New England.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              About Kimberly
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              Experienced virtual doula support rooted in trust, education, and
              calm guidance.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-stone-600">
            <p>
              Kimberly Zoltek supports families throughout New England with
              thoughtful virtual birth doula care that helps them feel informed,
              prepared, and genuinely supported. She has supported 109 births
              and more than 200 postpartum families.
            </p>
            <p>
              Her background includes lactation certification, training through
              DONA and DTI, and ongoing education as a midwife assistant. That
              combination shapes an approach that is warm, professional, and
              grounded in evidence-based care.
            </p>
            <p>
              Kimberly&apos;s role is to help you understand your options, prepare
              for labor, strengthen communication with your partner, and move
              into postpartum recovery with confidence.
            </p>
            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_20px_55px_rgba(86,68,55,0.10)]">
              <Image
                src={babySupportImage}
                alt="Gentle postpartum and newborn support imagery"
                placeholder="blur"
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            Personalized support before birth, during labor, and into
            postpartum recovery.
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-stone-600">
            Each service is designed to make your experience feel more
            informed, connected, and manageable, with direct support tailored to
            your family&apos;s needs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-8 shadow-[0_18px_40px_rgba(86,68,55,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(86,68,55,0.10)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-sm font-semibold text-rose-800">
                {service.name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-950">
                {service.name}
              </h3>
              <p className="mt-4 leading-7 text-stone-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-rose-200 bg-[linear-gradient(135deg,#fff7f4_0%,#fffdfa_60%,#f4f8f6_100%)] p-8 shadow-[0_18px_45px_rgba(86,68,55,0.08)] lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              Free Consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
              Start with a no-pressure conversation about the support your
              family needs.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Kimberly offers a free consultation so you can ask questions,
              discuss your goals, and see whether virtual doula support is the
              right fit.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-stone-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-300">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Families deserve support that feels calm, capable, and deeply human.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={`${testimonial.name}-${testimonial.role}`}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <blockquote className="text-lg leading-8 text-stone-100">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-stone-300">
                    {testimonial.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              Common questions from growing families.
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
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

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_24px_60px_rgba(86,68,55,0.08)] lg:grid-cols-[0.88fr_1.12fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              Reach out to book your free consultation.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
              Share your due date, where you are in your pregnancy or postpartum
              journey, and the kind of support you are looking for. This form is
              ready for a future form handling provider when you deploy to
              Vercel.
            </p>
            <div className="mt-8 rounded-3xl bg-stone-100 p-5 text-sm leading-7 text-stone-600">
              <p className="font-semibold text-stone-900">Best fit for:</p>
              <p>
                Families in Massachusetts, Connecticut, Rhode Island, Vermont,
                New Hampshire, and Maine seeking warm, virtual, professional
                support.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 shadow-sm">
              <div className="border-b border-stone-200 px-5 py-4">
                <h3 className="text-lg font-semibold text-stone-950">
                  Free 20 Minute Consultation
                </h3>
                <p className="mt-1 text-sm text-stone-600">
                  Book directly on the calendar below.
                </p>
              </div>
              <iframe
                title="Book a free 20 minute consultation with Kimberly Zoltek"
                src={calendlyUrl}
                className="h-[700px] w-full"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
