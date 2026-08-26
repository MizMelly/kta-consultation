export type OnlinePresence =
  | "website"
  | "social_media"
  | "both"
  | "neither";

export type BookingStage =
  | "introduction"
  | "questions"
  | "dateSelection"
  | "timeSelection"
  | "review"
  | "submitting"
  | "success"
  | "error";

export interface BookingFormData {
  fullName: string;
  businessName: string;
  businessDescription: string;

  onlinePresence: OnlinePresence | "";
  websiteUrl: string;
  socialMediaUrl: string;

  businessGoal: string;
  biggestDigitalChallenge: string;
  requestedServices: string[];

  phoneNumber: string;
  emailAddress: string;
 
  selectedDate: string;
  selectedTime: string;
}

export interface BookingApiResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}

export const initialBookingFormData: BookingFormData = {
  fullName: "",
  businessName: "",
  businessDescription: "",

  onlinePresence: "",
  websiteUrl: "",
  socialMediaUrl: "",

  businessGoal: "",
  biggestDigitalChallenge: "",
  requestedServices: [],

  phoneNumber: "",
  emailAddress: "",

  selectedDate: "",
  selectedTime: "",
};