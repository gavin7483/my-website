const services = [
  {
    name: "Strategy & Positioning",
    description:
      "Clarify your message, sharpen your offer, and align your team around a growth plan that fits the market.",
  },
  {
    name: "Design Systems",
    description:
      "Create polished digital experiences with scalable components, consistent branding, and a user-first interface.",
  },
  {
    name: "Delivery & Optimization",
    description:
      "Launch faster with dependable execution, then improve conversion and retention through measurable iteration.",
  },
];

const testimonials = [
  {
    quote:
      "Their team helped us turn a fragmented website into a focused sales tool. The result felt premium and performed immediately.",
    name: "Maya Chen",
    role: "Head of Marketing, Northline",
  },
  {
    quote:
      "From kickoff to launch, the process was clear, efficient, and highly strategic. We finally have a site that reflects the business.",
    name: "Daniel Brooks",
    role: "Founder, Harbor Advisory",
  },
  {
    quote:
      "They balanced design quality with practical execution. Every section had a purpose, and our inbound inquiries increased within weeks.",
    name: "Olivia Grant",
    role: "Operations Director, Fieldstone",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_32%,#eef4f1_100%)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.18),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.14),_transparent_34%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="text-lg font-semibold tracking-[0.18em] text-slate-800 uppercase">
              Northstar Studio
            </div>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/80 px-5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-900 hover:text-slate-900"
            >
              Schedule a Call
            </a>
          </header>

          <div className="grid gap-12 pb-14 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                Modern digital presence for service-led businesses
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Build trust faster with a landing page designed to convert.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We help ambitious teams turn expertise into a clear, compelling
                online presence with messaging, design, and structure that move
                visitors to action.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur">
              <div className="grid gap-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    Results Snapshot
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-slate-950">
                    32%
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    average increase in qualified inbound leads after launch.
                  </p>
                </div>
                <div className="grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-semibold text-slate-950">4-6 weeks</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Typical turnaround from strategy to release.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="text-2xl font-semibold text-slate-950">Senior-led</p>
                    <p className="mt-1 text-sm text-slate-600">
                      Every project is handled with direct expert oversight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A focused partner for businesses that need clarity, not clutter.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-slate-600">
            <p>
              Northstar Studio creates business websites that are refined,
              credible, and built around clear decision-making. We combine
              messaging strategy, visual direction, and practical implementation
              into one streamlined engagement.
            </p>
            <p>
              The outcome is a landing page that helps clients understand your
              value quickly, trust your brand sooner, and take the next step
              with confidence.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            End-to-end support for a stronger online presence.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Each engagement is built to help your business look sharper, sound
            clearer, and convert more effectively.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                {service.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
                {service.name}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="bg-slate-950 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by teams that need their website to work harder.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
              >
                <blockquote className="text-lg leading-8 text-slate-100">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-300">
                    {testimonial.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Ready to elevate your online presence?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Tell us about your business, your goals, and what your current
              website is missing. We&apos;ll map out a focused next step.
            </p>
          </div>

          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-600"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-600"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Company
              <input
                type="text"
                placeholder="Company name"
                className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-600"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Project Details
              <textarea
                rows={5}
                placeholder="What are you building, and what outcome do you want?"
                className="rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-600"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
