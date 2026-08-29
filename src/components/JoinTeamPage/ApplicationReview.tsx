import type { JoinTeamFormData } from "../../types/joinTeam.types";
import LoadingSpinner from "../common/LoadingSpinner";

interface ApplicationReviewProps {
  formData: JoinTeamFormData;
  isSubmitting: boolean;
  submissionError?: string;
  onSubmit: () => void;
  onBack: () => void;
}

export default function ApplicationReview({
  formData,
  isSubmitting,
  submissionError,
  onSubmit,
  onBack,
}: ApplicationReviewProps) {
  return (
    <section className="min-h-[calc(100vh-80px)] overflow-x-hidden bg-[#FFFFFF] px-5 py-12 transition-colors dark:bg-[#000000]">
      <div className="booking-enter mx-auto w-full max-w-2xl">
        <div className="text-center">
          <p className="font-medium text-[#F5A21A]">
            Final step
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#1565A9] dark:text-[#FFFFFF] sm:text-4xl">
            Review Your Application
          </h1>

          <p className="mt-4 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            Check your information before submitting your
            application.
          </p>
        </div>

        <ReviewSection title="Personal details">
          <ReviewItem
            label="Full name"
            value={formData.fullName}
          />

          <ReviewItem
            label="Email address"
            value={formData.emailAddress}
          />

          <ReviewItem
            label="Phone or WhatsApp"
            value={formData.phoneNumber}
          />

          <ReviewItem
            label="Location"
            value={formData.location}
          />
        </ReviewSection>

        <ReviewSection title="Opportunity">
          <ReviewItem
            label="Work preference"
            value={formatWorkPreference(
              formData.workPreference,
            )}
          />

          <ReviewItem
            label="Area of interest"
            value={formatAreaOfInterest(
              formData.areaOfInterest,
            )}
          />

          {formData.areaOfInterest === "other" && (
            <ReviewItem
              label="Preferred role"
              value={formData.preferredRole}
            />
          )}
        </ReviewSection>

        <ReviewSection title="Experience and professional information">
          <ReviewItem
            label="About you"
            value={formData.aboutApplicant}
          />

          <ReviewItem
            label="Portfolio or professional work"
            value={formData.portfolioUrl}
          />

          <ReviewItem
            label="Professional profile links"
            value={formData.professionalProfileLinks}
          />

          <ReviewItem
            label="CV or Resume"
            value={formData.cv?.name ?? ""}
          />

          <ReviewItem
            label="Video introduction"
            value={formData.videoIntroductionUrl}
          />
        </ReviewSection>

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
            Back
          </button>

          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="
              rounded-lg border border-[#1565A9] bg-[#FFFFFF]
              px-6 py-3 font-semibold text-[#1565A9]
              transition-colors
              hover:border-[#F5A21A] hover:text-[#F5A21A]
              disabled:cursor-not-allowed disabled:opacity-50
              dark:border-[#FFFFFF] dark:bg-[#FFFFFF]
              dark:text-[#1565A9]
              dark:hover:border-[#F5A21A]
              dark:hover:text-[#F5A21A]
            "
          >
           {isSubmitting ? (
                      <LoadingSpinner label="Submitting application..." />
                    ) : (
                      "Submit Application"
                    )} 
          </button>
        </div>
      </div>
    </section>
  );
}

interface ReviewSectionProps {
  title: string;
  children: React.ReactNode;
}

function ReviewSection({
  title,
  children,
}: ReviewSectionProps) {
  return (
    <div className="mt-6 rounded-2xl border border-[#1565A9]/20 bg-[#FFFFFF] p-6 transition-colors dark:border-[#FFFFFF]/20 dark:bg-[#000000] sm:p-8">
      <h2 className="text-xl font-semibold text-[#1565A9] dark:text-[#FFFFFF]">
        {title}
      </h2>

      <div className="mt-6 space-y-5">
        {children}
      </div>
    </div>
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

      <p className="mt-1 whitespace-pre-line break-words text-[#1565A9] dark:text-[#FFFFFF]">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function formatWorkPreference(value: string): string {
  const labels: Record<string, string> = {
    full_time: "Full-Time",
    internship: "Internship",
    volunteer: "Volunteer",
    talent_community: "Talent Community",
  };

  return labels[value] || value;
}

function formatAreaOfInterest(value: string): string {
  const labels: Record<string, string> = {
    software_development: "Software Development",
    ui_ux_design: "UI/UX Design",
    graphic_design: "Graphic Design",
    video_editing: "Video Editing & Motion Graphics",
    digital_marketing: "Digital Marketing",
    social_media: "Social Media",
    content_creation: "Content Creation",
    seo: "SEO",
    business_development: "Business Development",
    project_management: "Project Management",
    other: "Other",
  };

  return labels[value] || value;
}