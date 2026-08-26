import type { FormAnswer, FormQuestion } from "../types/forms.types";

export function validateBookingQuestion(
  question: FormQuestion,
  answer: FormAnswer,
): string {
  if (question.required && isEmpty(answer)) {
    return "Please answer this question before continuing.";
  }

  if (typeof answer !== "string" || !answer.trim()) {
    return "";
  }

  const value = answer.trim();

  if (question.type === "email" && !isValidEmail(value)) {
    return "Please enter a valid email address.";
  }

  if (question.type === "tel" && !isValidPhoneNumber(value)) {
    return "Please enter a valid phone number.";
  }

  if (question.type === "url" && !isValidUrl(value)) {
    return "Please enter a valid link beginning with http:// or https://.";
  }

  return "";
}

function isEmpty(answer: FormAnswer): boolean {
  if (answer === null) {
    return true;
  }

  if (typeof answer === "string") {
    return answer.trim() === "";
  }

  if (Array.isArray(answer)) {
    return answer.length === 0;
  }

  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phoneNumber: string): boolean {
  const cleanedNumber = phoneNumber.replace(/[\s()-]/g, "");

  return /^\+?[0-9]{7,15}$/.test(cleanedNumber);
}

function isValidUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);

    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}
