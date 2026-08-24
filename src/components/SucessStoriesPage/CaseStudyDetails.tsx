import {
  AlertTriangle,
  Lightbulb,
  Check,
  MessageSquareQuote,
} from "lucide-react";

const results = [
  {
    title: "AI-Assisted Booking",
    description: "Automated appointment scheduling, reducing admin time by 60%",
  },
  {
    title: "WhatsApp Automation",
    description: "24/7 patient support without additional staffing costs",
  },
  {
    title: "SEO Visibility",
    description:
      "Significant increase in organic search rankings for local healthcare queries",
  },
  {
    title: "Patient Experience",
    description: "Streamlined digital journey from discovery to appointment",
  },
];

const services = [
  "Website Development",
  "AI Booking System",
  "WhatsApp Chatbot",
  "SEO Optimisation",
  "Social Media Management",
  "Digital Marketing",
];

export default function CaseStudyDetails() {
  return (
    <section className="bg-[#F7F2EA] px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:bg-[#0B0B0B]">
      <div className="mx-auto grid max-w-[1265px] gap-14 lg:grid-cols-[1fr_0.95fr]">
        {/* Left content */}
        <div>
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A21A]/10">
                <AlertTriangle className="h-4 w-4 text-[#F5A21A]" />
              </span>

              <h3 className="text-[15px] font-extrabold uppercase tracking-[0.6px] text-[#0B1220] dark:text-white">
                The Challenge
              </h3>
            </div>

            <p className="mt-6 max-w-[650px] text-[17px] font-medium leading-8 text-[#6C665D] dark:text-gray-400">
              Enekem Medicals had a strong clinical reputation but a digital
              presence that didn't reflect it. Patients struggled to find
              information, book appointments, or engage with the practice
              online. The team needed a digital partner — not just a web
              developer.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1565A9]/10">
                <Lightbulb className="h-4 w-4 text-[#1565A9]" />
              </span>

              <h3 className="text-[15px] font-extrabold uppercase tracking-[0.6px] text-[#0B1220] dark:text-white">
                Our Solution
              </h3>
            </div>

            <p className="mt-6 max-w-[650px] text-[17px] font-medium leading-8 text-[#6C665D] dark:text-gray-400">
              KTA designed and developed a modern, patient-first website that
              communicates trust and professionalism. We integrated an
              AI-powered appointment booking system that reduced administrative
              workload, deployed a WhatsApp chatbot for 24/7 patient enquiries,
              and launched an ongoing digital marketing programme covering SEO,
              social media, and content.
            </p>
          </div>

          <div className="mt-14">
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.5px] text-[#6C665D] dark:text-gray-400">
              Services Delivered
            </h4>

            <div className="mt-4 flex flex-wrap gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-[#DED5C7] bg-[#EEE8DD] px-4 py-2 text-[13px] font-bold text-[#6C665D] dark:border-gray-800 dark:bg-[#111111] dark:text-gray-300"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <h3 className="text-[15px] font-extrabold uppercase tracking-[0.6px] text-[#0B1220] dark:text-white">
            Results & Impact
          </h3>

          <div className="mt-7 space-y-4">
            {results.map((result) => (
              <div
                key={result.title}
                className="flex gap-5 rounded-[16px] border border-[#DED5C7] bg-[#F7F2EA] px-6 py-6 dark:border-gray-800 dark:bg-[#111111]"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#1565A9]" />

                <div>
                  <h4 className="text-[15px] font-extrabold text-[#0B1220] dark:text-white">
                    {result.title}
                  </h4>

                  <p className="mt-2 text-[15px] font-medium leading-6 text-[#6C665D] dark:text-gray-400">
                    {result.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[16px] border border-[#DED5C7] bg-[#F7F2EA] px-6 py-7 dark:border-gray-800 dark:bg-[#111111]">
            <MessageSquareQuote className="h-5 w-5 text-[#1565A9]" />

            <p className="mt-5 text-[15px] font-medium italic leading-7 text-[#0B1220] dark:text-gray-100">
              “KTA didn't just build us a website — they transformed how we
              connect with our patients digitally.”
            </p>

            <p className="mt-4 text-[13px] font-extrabold text-[#6C665D] dark:text-gray-400">
              — Enekem Medicals Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}