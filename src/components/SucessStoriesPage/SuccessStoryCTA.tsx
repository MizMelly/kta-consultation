import { ArrowRight } from "lucide-react";

export default function SuccessStoryCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-28">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-size-[160px_80px]" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,101,169,0.24),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-225 flex-col items-center text-center">
        <p className="text-[12px] font-extrabold uppercase tracking-[7px] text-[#F5A21A]">
          Your Turn
        </p>

        <h2 className="mt-6 text-[44px] font-extrabold leading-[1.05] tracking-[-1.6px] text-[#FFFFFF] sm:text-[58px] lg:text-[64px]">
          Ready to Write{" "}
          <span className="font-serif italic font-medium text-[#F5A21A]">
            Your Success
          </span>
          <br />
          <span className="font-serif italic font-medium text-[#F5A21A]">
            Story?
          </span>
        </h2>

        <div className="mt-28 flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
          <button className="inline-flex items-center gap-2 text-[15px] font-bold text-white transition hover:text-[#F5A21A]">
            Book a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="rounded-full border border-white/15 bg-white/12 px-8 py-4 text-[15px] font-bold text-white shadow-sm transition hover:border-[#1565A9] hover:bg-[#1565A9]">
            Learn About KTA
          </button>
        </div>
      </div>
    </section>
  );
}