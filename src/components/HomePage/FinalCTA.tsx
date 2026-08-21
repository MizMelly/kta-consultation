import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-[#00529C] px-5 py-20 sm:px-8 sm:py-24 lg:py-28  dark:bg-[#080D0D]">
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-[40px] font-bold leading-[1.05] tracking-[-1.8px] text-white sm:text-[52px] md:text-[58px] lg:text-[62px]">
          Ready to Grow Your
          <span className="block">Business?</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-[16px] font-medium leading-7 text-white/90 sm:text-[18px] sm:leading-8">
          Let's discuss how our strategic digital solutions can help you
          achieve your goals and scale your operations.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          {/* Primary */}
          <Link
            to="/contact"
            className="flex h-14 items-center justify-center rounded-md bg-white px-7 text-[14px] font-semibold text-[#00529C] shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
          >
            Book a Free Consultation
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center rounded-md bg-[#003F78] px-7 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#002E59] hover:shadow-md"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}