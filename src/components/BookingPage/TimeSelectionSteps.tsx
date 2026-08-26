import { useState } from "react";

interface TimeSelectionStepProps {
  selectedDate: string;
  selectedTime: string;
  availableTimes: string[];
  onSelect: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function TimeSelectionStep({
  selectedDate,
  selectedTime,
  availableTimes,
  onSelect,
  onNext,
  onBack,
}: TimeSelectionStepProps) {
  const [error, setError] = useState("");

  const validTimes = availableTimes.filter((time) =>
    isAvailableTime(selectedDate, time),
  );

  function handleTimeSelection(time: string) {
    onSelect(time);
    setError("");
  }

  function handleContinue() {
    if (!selectedTime) {
      setError("Please select a time before continuing.");
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
            {formatSelectedDate(selectedDate)}
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl">
            What time works best for you?
          </h1>

          <p className="mt-4 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            Choose an available time between 7:00 am and 6:00 pm.
          </p>
        </div>

        {validTimes.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {validTimes.map((time) => {
              const isSelected = selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleTimeSelection(time)}
                  className={`
                    rounded-lg border px-4 py-4 font-semibold
                    transition-colors
                    ${
                      isSelected
                        ? "border-[#F5A21A] bg-[#F5A21A]/10 text-[#1565A9] dark:text-[#FFFFFF]"
                        : "border-[#1565A9]/30 bg-[#FFFFFF] text-[#1565A9] hover:border-[#F5A21A] dark:border-[#FFFFFF]/40 dark:bg-[#000000] dark:text-[#FFFFFF] dark:hover:border-[#F5A21A]"
                    }
                  `}
                >
                  {formatTime(time)}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-[#1565A9]/20 p-6 text-center dark:border-[#FFFFFF]/20">
            <p className="text-[#1565A9] dark:text-[#FFFFFF]">
              There are no available times for this date.
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
            disabled={validTimes.length === 0}
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

function isAvailableTime(
  selectedDate: string,
  time: string,
): boolean {
  const selectedDay = createLocalDate(selectedDate);
  const now = new Date();

  const isToday =
    selectedDay.getFullYear() === now.getFullYear() &&
    selectedDay.getMonth() === now.getMonth() &&
    selectedDay.getDate() === now.getDate();

  if (!isToday) {
    return true;
  }

  const [hours, minutes] = time.split(":").map(Number);
  const appointmentTime = createLocalDate(selectedDate);

  appointmentTime.setHours(hours, minutes, 0, 0);

  return appointmentTime > now;
}

function formatTime(time: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatSelectedDate(date: string): string {
  return createLocalDate(date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function createLocalDate(date: string): Date {
  const [year, month, day] = date.split("-").map(Number);

  return new Date(year, month - 1, day);
}