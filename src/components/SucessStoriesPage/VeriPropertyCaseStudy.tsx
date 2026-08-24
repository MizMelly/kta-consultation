import {
  AlertTriangle,
  Lightbulb,
  Check,
  MessageSquareQuote,
} from "lucide-react";
import veriPropertyImage from "../../assets/Veriproperty Banner.jpg.jpeg";

const results = [
  {
    title: "Trusted PropTech Ecosystem",
    description: "AI-powered verification and listing platform built for scale",
  },
  {
    title: "Pre-Launch Brand Awareness",
    description:
      "Established audience and brand recognition before product launch",
  },
  {
    title: "Scalable Platform",
    description:
      "Architecture designed to support rapid user growth and feature expansion",
  },
  {
    title: "Full Digital Presence",
    description:
      "Cohesive brand, social channels, and SEO foundation from day one",
  },
];

const services = [
  "AI Platform Development",
  "UI/UX Design",
  "Product Strategy",
  "Brand Identity",
  "Social Media Management",
  "SEO & Content",
  "Pre-Launch Campaigns",
];

export default function VeriPropertyCaseStudy() {
  return (
    <section className="bg-[#F7F2EA] px-5 py-16 sm:px-8 lg:px-10 lg:py-20 dark:bg-[#0B0B0B]">
      <div className="mx-auto max-w-[1230px] border-t border-[#DED5C7] pt-24 dark:border-gray-800">
        {/* Hero card */}
        <div className="relative h-[385px] overflow-hidden rounded-[22px] bg-[#1565A9]">
  <img
    src={veriPropertyImage}
    alt="Modern apartment building"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#1565A9]/65 via-[#1565A9]/25 to-transparent" />

  <div className="relative z-10 flex h-full max-w-[650px] flex-col justify-end px-8 py-10 sm:px-12">
    <span className="mb-5 inline-flex w-fit rounded-full border border-white/60 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.6px] text-[#F5A21A]">
      Property Technology
    </span>

    <h2 className="text-[42px] font-extrabold leading-none tracking-[-1.2px] text-white sm:text-[54px]">
      VeriProperty
    </h2>

    <p className="mt-3 text-[17px] font-medium leading-7 text-white/85 sm:text-[19px]">
      AI-powered PropTech platform redefining real estate.
    </p>
  </div>
</div>

        {/* Details */}
        <div className="grid gap-14 pt-12 lg:grid-cols-[1fr_0.95fr]">
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
                VeriProperty had a bold vision: to use AI to bring transparency,
                trust, and efficiency to the Nigerian real estate market. But
                vision alone doesn't build a platform. They needed a partner
                who could translate that ambition into a scalable, market-ready
                product — from strategy to launch.
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
                KTA led end-to-end digital execution for VeriProperty. We
                developed the product strategy, designed the full UI/UX
                experience, and built the AI-powered platform from the ground
                up. Simultaneously, we established the brand identity, launched
                social media channels, implemented SEO, and ran pre-launch
                awareness campaigns to build an audience before the product went
                live.
              </p>
            </div>

            <div className="mt-9">
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
                “From product strategy to platform launch, KTA was with us every
                step of the way. They are true partners.”
              </p>

              <p className="mt-4 text-[13px] font-extrabold text-[#6C665D] dark:text-gray-400">
                — VeriProperty Founding Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}