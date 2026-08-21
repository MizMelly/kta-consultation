import { ArrowRight, Code2, Rocket, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  {
    icon: Code2,
    title: "Build",
    description:
      "Establish a robust digital foundation with premium web development and brand identity.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description:
      "Expand your reach and attract quality leads through strategic marketing and SEO.",
  },
  {
    icon: Rocket,
    title: "Scale",
    description:
      "Optimize operations with business automation, AI integration, and analytics.",
  },
];

export default function GrowthStages() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24  dark:bg-[#080D0D]">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[36px] font-bold leading-[1.05] tracking-[-1.5px] text-[#050505] dark:text-white sm:text-[44px] md:text-[50px]">
            Built for Every Stage of Your
            <span className="block">Business</span>
          </h2>

          <p className="mt-6 text-[16px] leading-7 text-[#737680] sm:text-[18px] dark:text-[#A0A0A0]">
            Comprehensive digital solutions designed to take you from
            foundation to scale.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 ">
          {stages.map((stage) => {
            const Icon = stage.icon;

            return (
              <div
                key={stage.title}
                className="group flex min-h-67.5 flex-col rounded-2xl border border-[#E5E7EB] bg-white dark:border-gray-800 dark:bg-[#101717] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9DEEE] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] sm:p-8"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF3FA] text-[#00529C]">
                  <Icon size={27} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-[25px] font-semibold tracking-[-0.7px] text-[#050505] dark:text-white">
                  {stage.title}
                </h3>

                <p className="mt-4 max-w-md text-[16px] leading-6 text-[#737680] dark:text-[#A0A3B1]">
                  {stage.description}
                </p>

                {/* Divider */}
                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-[#E8E8E8]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            to="/services"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-7 text-[15px] font-medium text-[#111111] shadow-[0_2px_5px_rgba(0,0,0,0.06)] transition-all duration-200 hover:border-[#00529C] hover:text-[#003F78] hover:shadow-md"
          >
            Explore Our Services

            <ArrowRight
              size={17}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}