import type {
  FormAnswer,
  FormQuestion,
} from "../types/forms.types";

export function validateJoinTeamQuestion(
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

  if (
    question.name === "professionalProfileLinks" &&
    !areValidProfileLinks(value)
  ) {
    return "Please enter valid links, with one link on each line.";
  }

  if (
    question.name === "videoIntroductionUrl" &&
    !isGoogleDriveUrl(value)
  ) {
    return "Please enter a valid Google Drive video link.";
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

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
}

function areValidProfileLinks(value: string): boolean {
  const links = value
    .split(/\r?\n/)
    .map((link) => link.trim())
    .filter(Boolean);

  return links.every(isValidUrl);
}

function isGoogleDriveUrl(value: string): boolean {
  if (!isValidUrl(value)) {
    return false;
  }

  const url = new URL(value);

  return (
    url.hostname === "drive.google.com" ||
    url.hostname === "docs.google.com"
  );
}