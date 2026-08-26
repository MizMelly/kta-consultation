import { ArrowRight } from "lucide-react";

export default function SuccessStoriesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-28">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-size-[160px_80px]" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,101,169,0.28),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-275 flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/45 px-4 py-2 text-[12px] font-bold uppercase tracking-[1.6px] text-[#F5A21A]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5A21A]" />
          Success Stories
        </div>

        <h1 className="mt-8 max-w-225 text-[56px] font-extrabold leading-[0.92] tracking-[-2px] text-[#FFFFFF] sm:text-[72px] lg:text-[88px]">
          Helping Businesses
          <br />
          Grow{" "}
          <span className="font-serif italic font-medium text-[#F5A21A]">
            Through
          </span>
          <br />
          <span className="font-serif italic font-medium text-[#F5A21A]">
            Innovation
          </span>
        </h1>

        <p className="mt-10 max-w-150 text-[16px] font-medium leading-7 text-white/65 sm:text-[18px]">
          Real results powered by strategy, collaboration, and a shared vision
          for what we build together.
        </p>

        <button className="mt-14 inline-flex items-center gap-2 text-[15px] font-bold text-white transition hover:text-[#F5A21A]">
          Start Your Story
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}