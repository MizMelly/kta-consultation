import type { BookingFormData } from "../../types/booking.types";

interface BookingReviewProps {
  formData: BookingFormData;
  isSubmitting: boolean;
  submissionError?: string;
  onConfirm: () => void;
  onBack: () => void;
}

export default function BookingReview({
  formData,
  isSubmitting,
  submissionError,
  onConfirm,
  onBack,
}: BookingReviewProps) {
  return (
    <section className="min-h-[calc(100vh-80px)] overflow-x-hidden bg-[#FFFFFF] px-5 py-12 transition-colors dark:bg-[#000000]">
      <div className="booking-enter mx-auto w-full max-w-2xl">
        <div className="text-center">
          <p className="font-medium text-[#F5A21A]">
            Final step
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl">
            Confirm Your Consultation
          </h1>

          <p className="mt-4 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            Ready to book your Free Digital Growth Strategy Session?
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
          <h2 className="text-xl font-semibold text-[#1565A9] dark:text-[#FFFFFF]">
            Appointment details
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ReviewItem
              label="Date"
              value={formatDate(formData.selectedDate)}
            />

            <ReviewItem
              label="Time"
              value={formatTime(formData.selectedTime)}
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
          <h2 className="text-xl font-semibold text-[#1565A9] dark:text-[#FFFFFF]">
            Your information
          </h2>

          <div className="mt-6 space-y-5">
            <ReviewItem
              label="Full name"
              value={formData.fullName}
            />

            <ReviewItem
              label="Business name"
              value={formData.businessName}
            />

            <ReviewItem
              label="About the business"
              value={formData.businessDescription}
            />

            <ReviewItem
              label="Online presence"
              value={formatOnlinePresence(
                formData.onlinePresence,
              )}
            />

            {formData.websiteUrl && (
              <ReviewItem
                label="Website"
                value={formData.websiteUrl}
              />
            )}

            {formData.socialMediaUrl && (
              <ReviewItem
                label="Social media"
                value={formData.socialMediaUrl}
              />
            )}

            <ReviewItem
              label="Business goal"
              value={formData.businessGoal}
            />

            <ReviewItem
              label="Biggest digital challenge"
              value={formData.biggestDigitalChallenge}
            />

            <ReviewItem
              label="Services required"
              value={formData.requestedServices.join(", ")}
            />

            <ReviewItem
              label="Phone or WhatsApp"
              value={formData.phoneNumber}
            />

            <ReviewItem
              label="Email address"
              value={formData.emailAddress}
            />
          </div>
        </div>

        {submissionError && (
          <p
            role="alert"
            className="mt-5 text-sm font-medium text-[#F5A21A]"
          >
            {submissionError}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="rounded-lg border border-[#1565A9] bg-[#FFFFFF] px-6 py-3 font-medium text-[#1565A9] transition-colors hover:bg-[#1565A9] hover:text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#FFFFFF] dark:bg-[#000000] dark:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#1565A9]"
          >
            Back
          </button>

         <button
  type="button"
  onClick={onConfirm}
  disabled={isSubmitting}
  className="rounded-lg border border-[#1565A9] bg-[#FFFFFF] px-6 py-3 font-semibold text-[#1565A9] transition-colors hover:bg-[#1565A9] hover:text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#FFFFFF] dark:bg-[#FFFFFF] dark:text-[#1565A9] dark:hover:border-[#F5A21A] dark:hover:bg-[#F5A21A] dark:hover:text-[#FFFFFF]"
>
  {isSubmitting
    ? "Confirming booking..."
    : "Confirm Booking"}
</button>
        </div>
      </div>
    </section>
  );
}

interface ReviewItemProps {
  label: string;
  value: string;
}

function ReviewItem({
  label,
  value,
}: ReviewItemProps) {
  return (
    <div>
      <p className="text-sm font-medium text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
        {label}
      </p>

      <p className="mt-1 break-words text-[#1565A9] dark:text-[#FFFFFF]">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function formatOnlinePresence(value: string): string {
  const labels: Record<string, string> = {
    website: "Website",
    socialMedia: "Social media",
    social_media: "Social media",
    both: "Website and social media",
    neither: "No online presence",
  };

  return labels[value] || value;
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