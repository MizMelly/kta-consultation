import {
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Users,
    title: "We Think Like Partners",
    description:
      "Your goals become our targets. We operate as an invested extension of your business.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description:
      "No cookie-cutter templates. Everything is built around your specific business model.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description:
      "We focus on sustainable strategies that build compound value over time.",
  },
  {
    icon: Zap,
    title: "Driven by Innovation",
    description:
      "Leveraging the latest AI and automation tools to keep you ahead of the curve.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24  dark:bg-[#080D0D]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.7fr] lg:items-start lg:gap-16">

          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-[40px] font-bold leading-[1.02] tracking-[-1.8px] text-[#050505] dark:text-white sm:text-[48px] md:text-[52px]">
              Why Partner with
              <span className="block">KTA</span>
            </h2>

            <p className="mt-7 max-w-md text-[16px] leading-7 text-[#737680] sm:text-[17px] dark:text-[#A0A0A0]">
              We combine global standards with deep understanding of local
              markets to deliver results that matter.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-[#00529C] px-6 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003F78] hover:shadow-md"
            >
              Let's Discuss Your Business
            </Link>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5 sm:grid-cols-2 dark:bg-[#080D0D]">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="min-h-51.25 rounded-xl border border-[#E4E4E4] bg-white dark:border-gray-800 dark:bg-[#101717] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9DEEE] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8 "
                >
                  {/* Icon */}
                  <div className="mb-6 text-[#00529C]">
                    <Icon size={31} strokeWidth={1.9} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-semibold tracking-[-0.5px] text-[#050505] dark:text-white">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[15.5px] leading-6 text-[#737680] dark:text-[#A0A3B1]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}