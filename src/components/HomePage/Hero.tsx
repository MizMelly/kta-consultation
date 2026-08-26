import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#080D0D]">
      {/* Background glow - right */}
      <div className="hero-glow-right pointer-events-none absolute -right-32 top-[30%] h-96 w-96 rounded-full bg-[#72A9D8]/10 blur-[100px] sm:h-112.5 sm:w-112.5" />

      {/* Center glow */}
      <div className="hero-glow-center pointer-events-none absolute left-[45%] top-[10%] h-72 w-72 rounded-full bg-[#DCE8F2]/20 blur-[90px] sm:h-80 sm:w-80" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="w-full max-w-4xl">

          {/* Heading */}
          <h1 className="hero-heading text-[42px] font-bold leading-[1.02] tracking-[-1.8px] text-[#050505] dark:text-white sm:text-[52px] sm:tracking-[-2px] md:text-[60px] lg:text-[68px] xl:text-[74px]">
            Your Digital{" "}
            <span className="block">
              Business Partner for
            </span>

            <span className="mt-1 block bg-linear-to-r from-[#00529C] via-[#2D78B8] to-[#72A9D8] bg-clip-text text-transparent">
              Sustainable
            </span>

            <span className="block bg-linear-to-r from-[#2D78B8] to-[#00529C] bg-clip-text text-transparent">
              Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-7 max-w-2xl text-[16px] font-medium leading-7 text-[#737680] sm:mt-8 sm:text-[18px] sm:leading-8">
            We help businesses build, manage, and scale their digital
            presence through precise, innovative solutions.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">

            {/* Primary CTA */}
            <Link
              to="/booking"
              className="group flex h-13 items-center justify-center gap-2 rounded-md bg-[#00529C] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#003F78] hover:shadow-lg sm:h-14 sm:px-7"
            >
              Book a Free Consultation

              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-13 items-center justify-center rounded-md border border-[#EEEEEE] bg-white px-6 text-[14px] font-medium text-[#202020] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:bg-gray-50 hover:shadow-md sm:h-14 sm:px-7"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}