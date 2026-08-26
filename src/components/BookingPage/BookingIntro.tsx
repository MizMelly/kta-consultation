interface BookingIntroProps {
  onStart: () => void;
}

export default function BookingIntro({
  onStart,
}: BookingIntroProps) {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-x-hidden bg-[#FFFFFF] px-5 py-16 transition-colors dark:bg-[#000000]">
      <div className="booking-enter w-full max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1565A9]">
          <span className="text-lg font-bold text-[#FFFFFF]">
            KTA
          </span>
        </div>

        <h1 className="text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl md:text-5xl">
          Let&apos;s Talk About Your Business
        </h1>

        <p className="mt-4 text-base text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
          Estimated time: 2–3 minutes
        </p>

        <div className="mt-10 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 text-left shadow-sm transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
          <p className="leading-7 text-[#1565A9] dark:text-[#FFFFFF]">
            "Hi! I&apos;m the KTA Assistant. I&apos;m going to ask you
            a few quick questions about your business so our team can
            prepare for a productive consultation with you. Shall we?"
          </p>

          <button
            type="button"
            onClick={onStart}
            className="mt-6 w-full rounded-lg bg-[#F5A21A] px-6 py-4 font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1565A9] focus:outline-none focus:ring-2 focus:ring-[#F5A21A] focus:ring-offset-2 focus:ring-offset-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#1565A9] dark:focus:ring-offset-[#000000]"
          >
            Let&apos;s Get Started
          </button>
        </div>
      </div>
    </section>
  );
}