import { useState } from "react";

interface DateSelectionStepProps {
  availableDates: string[];
  selectedDate: string;
  onSelect: (date: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function DateSelectionStep({
  availableDates,
  selectedDate,
  onSelect,
  onNext,
  onBack,
}: DateSelectionStepProps) {
  const [error, setError] = useState("");

  const validDates = availableDates.filter(isAvailableDate);

  function handleDateSelection(date: string) {
    onSelect(date);
    setError("");
  }

  function handleContinue() {
    if (!selectedDate) {
      setError("Please select a date before continuing.");
      return;
    }

    setError("");
    onNext();
  }

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center overflow-x-hidden bg-[#FFFFFF] px-5 py-12 transition-colors dark:bg-[#000000]">
      <div className="booking-enter w-full max-w-2xl">
        <div className="text-center">
          <p className="font-medium text-[#F5A21A]">
            Schedule your consultation
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl">
            Select a consultation date
          </h1>

          <p className="mt-4 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            Choose an available date from Monday to Saturday.
          </p>
        </div>

        {validDates.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {validDates.map((date) => {
              const isSelected = selectedDate === date;

              return (
                <button
                  key={date}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleDateSelection(date)}
                  className={`
                    rounded-lg border px-4 py-4 text-left
                    transition-colors
                    ${
                      isSelected
                        ? "border-[#F5A21A] bg-[#F5A21A]/10 text-[#1565A9] dark:text-[#FFFFFF]"
                        : "border-[#1565A9]/30 bg-[#FFFFFF] text-[#1565A9] hover:border-[#F5A21A] dark:border-[#FFFFFF]/40 dark:bg-[#000000] dark:text-[#FFFFFF] dark:hover:border-[#F5A21A]"
                    }
                  `}
                >
                  <span className="block text-sm font-medium">
                    {formatWeekday(date)}
                  </span>

                  <span className="mt-1 block font-semibold">
                    {formatDate(date)}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-[#1565A9]/20 p-6 text-center dark:border-[#FFFFFF]/20">
            <p className="text-[#1565A9] dark:text-[#FFFFFF]">
              There are currently no available consultation dates.
            </p>
          </div>
        )}

        {error && (
          <p
            role="alert"
            className="mt-4 text-sm font-medium text-[#F5A21A]"
          >
            {error}
          </p>
        )}

        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
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
            Back
          </button>

          <button
            type="button"
            onClick={handleContinue}
            disabled={validDates.length === 0}
            className="
              rounded-lg border border-[#1565A9] bg-[#FFFFFF]
              px-6 py-3 font-medium text-[#1565A9]
              transition-colors
              hover:bg-[#1565A9] hover:text-[#FFFFFF]
              disabled:cursor-not-allowed disabled:opacity-50
              dark:border-[#FFFFFF] dark:bg-[#000000]
              dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF]
              dark:hover:text-[#1565A9]
            "
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}

function isAvailableDate(date: string): boolean {
  const selectedDate = createLocalDate(date);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const isPastDate = selectedDate < today;
  const isSunday = selectedDate.getDay() === 0;

  return !isPastDate && !isSunday;
}

function formatWeekday(date: string): string {
  return createLocalDate(date).toLocaleDateString("en-GB", {
    weekday: "long",
  });
}

function formatDate(date: string): string {
  return createLocalDate(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function createLocalDate(date: string): Date {
  const [year, month, day] = date.split("-").map(Number);

  return new Date(year, month - 1, day);
}