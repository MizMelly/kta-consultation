import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Users,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Clock3,
} from "lucide-react";

const opportunityTypes = [
  {
    icon: BriefcaseBusiness,
    title: "Full-Time Opportunities",
    description:
      "Join our core team and work on exciting projects that help businesses grow through innovative digital solutions.",
  },
  {
    icon: GraduationCap,
    title: "Internship Programme",
    description:
      "Gain hands-on experience by working on real projects, learning from experienced professionals, and building a portfolio that prepares you for your career.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Programme",
    description:
      "Contribute your skills, collaborate with like-minded individuals, and gain valuable experience while making a meaningful impact.",
  },
  {
    icon: Users,
    title: "Talent Community",
    description:
      "Not looking for an immediate opportunity? Join our talent community to stay connected and be among the first to hear about future opportunities, training programmes, and community initiatives.",
  },
];

const applicationQuestions = [
  "Your name, email, phone & location",
  "Which opportunity interests you (Full-Time, Internship, Volunteer, Talent Community)",
  "Which role you're interested in",
  "Your skills and experience",
  "Portfolio or LinkedIn profile (Optional)",
  "Anything else you'd like us to know (Optional)",
];

const nextSteps = [
  {
    number: "01",
    title: "Application Received",
    description:
      "You'll immediately receive a confirmation that we've successfully received your application.",
  },
  {
    number: "02",
    title: "Confirmation Email",
    description:
      "A confirmation email will be sent to your inbox thanking you for your interest in Konfirm Tech Africa.",
  },
  {
    number: "03",
    title: "Current Recruitment Status",
    description:
      "If we're not actively recruiting, we'll let you know. Your application will be securely kept in our talent pool and reviewed whenever suitable opportunities become available.",
  },
  {
    number: "04",
    title: "Join Our Community",
    description:
      "While you wait, become part of the Konfirm Tech Africa Community — where we share updates, learning opportunities, announcements, and future openings.",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-white text-[#111214] dark:bg-[#0B0B0B] dark:text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1565A9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#F5A21A]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F5A21A]">
              We're Growing
            </p>

            <h1 className="text-[44px] font-bold leading-[1.06] tracking-[-0.045em] text-white sm:text-[58px] lg:text-[72px]">
              Build the Future
              <br />
              <span className="text-[#1565A9]">With Us</span>
            </h1>

            <p className="mt-7 max-w-3xl text-[15px] leading-7 text-[#92949B] sm:text-[17px] sm:leading-8">
              At Konfirm Tech Africa, we're building more than digital
              solutions we're building a community of innovators, creators,
              and problem-solvers who are passionate about empowering business
              growth through innovation.
            </p>

            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#92949B] sm:text-[17px] sm:leading-8">
              Whether you're an experienced professional, a student looking to
              gain real-world experience, or someone looking to contribute
              your skills, we'd love to connect with you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
             <Link
  to="/join-team"
  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1565A9] px-6 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#12588f]"
>
  Join Our Team
  <ArrowRight size={16} />
</Link>

              <a
                href="#opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#2C2D30] px-6 py-3.5 text-[13px] font-bold text-white transition hover:border-[#1565A9] hover:text-[#F5A21A]"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OPPORTUNITIES
      ========================================================== */}
      <section
        id="opportunities"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 dark:bg-[#0B0B0B]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
                OPPORTUNITIES
              </span>

              <div className="h-px w-8 bg-[#1565A9]" />
            </div>

            <h2 className="text-[32px] font-extrabold tracking-[-1px] text-[#050505] sm:text-[40px] dark:text-white">
              There Are Many Ways to Grow With KTA
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#737680] sm:text-[16px] dark:text-gray-400">
              We believe talent comes in many forms. Whether you're looking
              for a full-time opportunity, an internship, volunteer experience,
              or simply want to be part of our community, there's a place for
              you.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {opportunityTypes.map((opportunity) => {
              const Icon = opportunity.icon;

              return (
                <div
                  key={opportunity.title}
                  className="group rounded-[14px] border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1565A9] hover:shadow-lg dark:border-gray-800 dark:bg-[#111111]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1565A9]/10 text-[#1565A9] transition group-hover:bg-[#1565A9] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-[18px] font-bold tracking-[-0.3px] text-[#111214] dark:text-white">
                    {opportunity.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#737680] dark:text-gray-400">
                    {opportunity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION / AI ASSISTANT
      ========================================================== */}
      <section
        id="application"
        className="bg-[#F7F8F9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 dark:bg-[#101112]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            {/* Left */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
                  START YOUR APPLICATION
                </span>

                <div className="h-px w-8 bg-[#1565A9]" />
              </div>

              <h2 className="text-[32px] font-extrabold tracking-[-1px] text-[#050505] sm:text-[40px] dark:text-white">
                Let's Get to Know You
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#737680] sm:text-[16px] dark:text-gray-400">
                Instead of filling out a long application form, our AI
                Recruitment Assistant will guide you through a short
                conversation to learn more about you, your skills, and the
                type of opportunity you're interested in.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E2E4E7] bg-white px-4 py-2 text-[12px] font-semibold text-[#62656C] dark:border-gray-800 dark:bg-[#18191B] dark:text-gray-300">
                <Clock3 size={14} className="text-[#1565A9]" />
                The conversation takes approximately{" "}
                <span className="text-[#111214] dark:text-white">
                  3–5 minutes.
                </span>
              </div>

              <div className="mt-9">
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#74767D]">
                  Questions include
                </p>

                <div className="mt-5 space-y-4">
                  {applicationQuestions.map((question) => (
                    <div
                      key={question}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#1565A9]"
                      />

                      <p className="text-[14px] leading-6 text-[#62656C] dark:text-gray-400">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Assistant Card */}
            <div className="overflow-hidden rounded-2xl border border-[#E3E5E8] bg-white shadow-sm dark:border-gray-800 dark:bg-[#151617]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E8E9EB] px-5 py-4 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#050505] text-[#F5A21A]">
                    <Sparkles size={17} />
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-[#111214] dark:text-white">
                      KTA AI Recruitment Assistant
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-[11px] text-[#74767D]">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat */}
              <div className="min-h-105 bg-[#FAFAFA] px-5 py-6 dark:bg-[#101112]">
                <div className="max-w-[90%]">
                  <div className="rounded-2xl rounded-tl-md bg-white p-5 shadow-sm dark:bg-[#1B1C1E]">
                    <p className="text-[14px] leading-7 text-[#45474D] dark:text-gray-300">
                      Hello and welcome to{" "}
                      <strong className="font-bold text-[#111214] dark:text-white">
                        Konfirm Tech Africa!
                      </strong>
                    </p>

                    <p className="mt-3 text-[14px] leading-7 text-[#45474D] dark:text-gray-300">
                      I'm here to help you submit your application. I'll ask
                      you a few quick questions so we can learn more about you
                      and the opportunities you're interested in.
                    </p>

                    <p className="mt-3 text-[14px] leading-7 text-[#45474D] dark:text-gray-300">
                      Let's get started.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-[#1565A9] px-5 py-3.5 text-[13px] font-medium leading-6 text-white">
                    I'd like to start my application.
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-[11px] text-[#92949B]">
                    <MessageCircle size={14} />
                    AI-guided application
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-[#E8E9EB] p-5 dark:border-gray-800">
                <Link
  to="/join-team"
  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#1565A9] px-5 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#12588f]"
>
  Start Your Application
  <ArrowRight size={16} />
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT HAPPENS NEXT
      ========================================================== */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 dark:bg-[#0B0B0B]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[12px] font-semibold tracking-[0.15em] text-[#1565A9]">
                NEXT STEPS
              </span>

              <div className="h-px w-8 bg-[#1565A9]" />
            </div>

            <h2 className="text-[32px] font-extrabold tracking-[-1px] text-[#050505] sm:text-[40px] dark:text-white">
              What Happens Next?
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#737680] sm:text-[16px] dark:text-gray-400">
              Here's what to expect after you submit your application.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-[12px] font-bold tracking-[0.2em] text-[#1565A9]">
                  {step.number}
                </span>

                <div className="mt-5 h-px w-full bg-[#E5E7EB] dark:bg-gray-800" />

                <h3 className="mt-6 text-[18px] font-bold text-[#111214] dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#737680] dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <div className="mt-16 rounded-2xl bg-[#050505] px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5A21A]">
                  Stay Connected
                </p>

                <h3 className="mt-3 text-[24px] font-bold tracking-[-0.5px] text-white sm:text-[28px]">
                  Join Our Community
                </h3>

                <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#92949B]">
                  While you wait, become part of the Konfirm Tech Africa
                  Community where we share updates, learning opportunities,
                  announcements, and future openings.
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/I0Ab3gX04jC5orbNAoOQGA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#F5A21A] px-6 py-3.5 text-[13px] font-bold text-[#050505] transition hover:bg-white"
              >
                <MessageCircle size={17} />
                Join our WhatsApp Community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section className="bg-[#F7F8F9] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 dark:bg-[#101112]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1565A9]/10 text-[#1565A9]">
            <Sparkles size={20} />
          </div>

          <h2 className="mt-7 text-[34px] font-extrabold tracking-[-1px] text-[#050505] sm:text-[46px] dark:text-white">
            Grow With KTA
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#737680] sm:text-[16px] dark:text-gray-400">
            At Konfirm Tech Africa, we believe growth is a shared journey.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#737680] sm:text-[16px] dark:text-gray-400">
            Whether you join us as an employee, intern, volunteer, or future
            team member, you'll become part of a community committed to
            learning, innovation, collaboration, and building digital
            solutions that create lasting impact.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://chat.whatsapp.com/I0Ab3gX04jC5orbNAoOQGA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1565A9] px-6 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#12588f]"
            >
              Join Our Community
              <ArrowRight size={16} />
            </a>

            <Link
              to="/home"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D9DBDE] bg-white px-6 py-3.5 text-[13px] font-bold text-[#111214] transition hover:border-[#1565A9] hover:text-[#1565A9] dark:border-gray-800 dark:bg-[#18191B] dark:text-white"
            >
              <ArrowRight size={16} className="rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}