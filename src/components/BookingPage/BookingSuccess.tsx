interface BookingSuccessProps {
  selectedDate: string;
  selectedTime: string;
  onReturnHome: () => void;
}

export default function BookingSuccess({
  selectedDate,
  selectedTime,
  onReturnHome,
}: BookingSuccessProps) {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-x-hidden bg-[#FFFFFF] px-5 py-16 transition-colors dark:bg-[#000000]">
      <div className="booking-enter w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl">
          You&apos;re All Set!
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
          Your Free Digital Growth Strategy Session has been booked
          successfully.
        </p>

        <div className="mt-10 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
          <h2 className="text-xl font-semibold text-[#1565A9] dark:text-[#FFFFFF]">
            Consultation details
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
                Date
              </p>

              <p className="mt-2 font-semibold text-[#1565A9] dark:text-[#FFFFFF]">
                {formatDate(selectedDate)}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
                Time
              </p>

              <p className="mt-2 font-semibold text-[#1565A9] dark:text-[#FFFFFF]">
                {formatTime(selectedTime)}
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
          Your consultation confirmation and appointment details will
          be sent to your email address.
        </p>

        <button
          type="button"
          onClick={onReturnHome}
          className="mt-8 rounded-lg bg-[#F5A21A] px-6 py-3 font-semibold text-[#FFFFFF] transition-colors hover:bg-[#1565A9] dark:hover:bg-[#FFFFFF] dark:hover:text-[#1565A9]"
        >
          Return to Homepage
        </button>
      </div>
    </section>
  );
}

function formatDate(date: string): string {
  if (!date) {
    return "";
  }

  const [year, month, day] = date.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);

  return selectedDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTime(time: string): string {
  if (!time) {
    return "";
  }

  const [hours, minutes] = time.split(":").map(Number);
  const selectedTime = new Date();

  selectedTime.setHours(hours, minutes, 0, 0);

  return selectedTime.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}