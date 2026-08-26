interface JoinTeamIntroProps {
  onStart: () => void;
}

export default function JoinTeamIntro({
  onStart,
}: JoinTeamIntroProps) {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-x-hidden bg-[#FFFFFF] px-5 py-16 transition-colors dark:bg-[#000000]">
      <div className="booking-enter w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl md:text-5xl">
          Join the KTA Team
        </h1>

        <p className="mt-4 text-base text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
          Tell us about yourself and how you would like to grow with
          KTA.
        </p>

        <div className="mt-10 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 text-left transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
          <p className="leading-7 text-[#1565A9] dark:text-[#FFFFFF]">
            Hi! We&apos;re excited that you&apos;re interested in
            joining Konfirm Tech Africa. We&apos;ll ask you a few
            questions about your skills, experience, interests, and
            how you would like to contribute.
          </p>

          <p className="mt-4 text-sm leading-6 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            You can skip questions marked as optional. Your answers
            will remain saved if you go back to a previous question.
          </p>

          <button
            type="button"
            onClick={onStart}
            className="mt-6 w-full rounded-lg bg-[#F5A21A] px-6 py-4 font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1565A9] focus:outline-none focus:ring-2 focus:ring-[#F5A21A] focus:ring-offset-2 focus:ring-offset-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#1565A9] dark:focus:ring-offset-[#000000]"
          >
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
}