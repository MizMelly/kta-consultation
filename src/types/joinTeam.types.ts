export type WorkPreference =
  | "full_time"
  | "internship"
  | "volunteer"
  | "talent_community";

export type AreaOfInterest =
  | "software_development"
  | "ui_ux_design"
  | "graphic_design"
  | "video_editing"
  | "digital_marketing"
  | "social_media"
  | "content_creation"
  | "seo"
  | "business_development"
  | "project_management"
  | "other";

export type JoinTeamStage =
  | "introduction"
  | "questions"
  | "review"
  | "submitting"
  | "success"
  | "error";

export interface JoinTeamFormData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  location: string;

  workPreference: WorkPreference | "";
  areaOfInterest: AreaOfInterest | "";
  preferredRole: string;

  aboutApplicant: string;
  portfolioUrl: string;
  professionalProfileLinks: string;

  cv: File | null;
  videoIntroductionUrl: string;
}

export interface JoinTeamApiResponse {
  success: boolean;
  message: string;
  applicationId?: string;
}

export const initialJoinTeamFormData: JoinTeamFormData = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
  location: "",

  workPreference: "",
  areaOfInterest: "",
  preferredRole: "",

  aboutApplicant: "",
  portfolioUrl: "",
  professionalProfileLinks: "",

  cv: null,
  videoIntroductionUrl: "",
};