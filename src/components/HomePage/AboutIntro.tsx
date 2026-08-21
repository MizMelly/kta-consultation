import { ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutIntro() {
  return (
    <section className="about-section overflow-hidden bg-[#FAFAFA] px-5 py-16 transition-colors duration-300 dark:bg-[#080D0D] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">

        {/* Left Content */}
        <div className="about-content">
          <h2 className="about-heading text-[38px] font-bold leading-[1.04] tracking-[-1.8px] text-[#050505] transition-colors duration-300 dark:text-white sm:text-[46px] md:text-[50px] lg:text-[52px]">
            More Than a Service Provider.
            <span className="block">
              A Digital Partner Invested in
              <br className="hidden sm:block" />
              Your Growth.
            </span>
          </h2>

          <p className="about-description mt-7 max-w-170 text-[16px] font-medium leading-7 text-[#737680] transition-colors duration-300 dark:text-gray-400 sm:text-[17px] sm:leading-7">
            We aren't just another agency executing tasks in isolation. We
            act as an extension of your team, deeply understanding your
            business goals and leveraging technology to propel you forward.
            Our success is measured entirely by your growth.
          </p>

          <Link
            to="/about"
            className="about-link group mt-9 inline-flex items-center gap-2 text-[16px] font-semibold text-[#00529C] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#003F78]"
          >
            Learn More About KTA

            <ArrowRight
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Right Visual */}
        <div className="about-visual relative flex min-h-90 items-center justify-center overflow-hidden rounded-2xl border border-[#DCE8F2] bg-linear-to-br from-[#F4F9FC] via-white to-[#EAF3FA] transition-all duration-300 dark:border-[#243B53] dark:bg-linear-to-br dark:from-[#102A42] dark:via-[#0D1716] dark:to-[#0A1111] sm:min-h-105 lg:min-h-127.5">

          {/* Decorative glow */}
          <div className="about-glow pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2D78B8]/10 blur-[70px] dark:bg-[#2D78B8]/15" />

          {/* Target Icon */}
          <div className="about-target relative flex h-28 w-28 items-center justify-center rounded-full text-[#A8CBE5] transition-colors duration-300 dark:text-[#72A9D8] sm:h-32 sm:w-32">
            <Target
              size={120}
              strokeWidth={1.2}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}