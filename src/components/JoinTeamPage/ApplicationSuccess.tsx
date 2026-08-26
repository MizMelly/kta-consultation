interface ApplicationSuccessProps {
  communityUrl?: string;
  onReturnHome: () => void;
}

export default function ApplicationSuccess({
  communityUrl,
  onReturnHome,
}: ApplicationSuccessProps) {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-x-hidden bg-[#FFFFFF] px-5 py-16 transition-colors dark:bg-[#000000]">
      <div className="booking-enter w-full max-w-2xl text-center">
        <p className="font-medium text-[#F5A21A]">
          Application submitted
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl">
          Application Received
        </h1>

        <div className="mt-10 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 text-left transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
          <p className="leading-7 text-[#1565A9] dark:text-[#FFFFFF]">
            Thank you for your interest in joining KTA.
          </p>

          <p className="mt-4 leading-7 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            We&apos;ve received your application successfully. Our
            team will review your information and reach out to you if
            a suitable opportunity becomes available.
          </p>

          <p className="mt-4 leading-7 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            Please check your email for a confirmation message and
            next steps.
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          {communityUrl && (
            <a
              href={communityUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#F5A21A] px-6 py-3 font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1565A9] dark:hover:bg-[#FFFFFF] dark:hover:text-[#1565A9]"
            >
              Join KTA Community
            </a>
          )}

          <button
            type="button"
            onClick={onReturnHome}
            className="
              rounded-lg border border-[#1565A9] bg-[#FFFFFF]
              px-6 py-3 font-medium text-[#1565A9]
              transition-colors
              hover:bg-[#1565A9] hover:text-[#FFFFFF]
              dark:border-[#FFFFFF] dark:bg-[#000000]
              dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF]
              dark:hover:text-[#1565A9]
            "
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </section>
  );
}