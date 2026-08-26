import type {
  FormAnswers,
  FormQuestion,
} from "../types/forms.types";

export function shouldDisplayQuestion(
  question: FormQuestion,
  answers: FormAnswers,
): boolean {
  if (!question.condition) {
    return true;
  }

  const {
    field,
    equals,
    includes,
  } = question.condition;

  const answer = answers[field];

  if (equals !== undefined) {
    return answer === equals;
  }

  if (includes !== undefined) {
    if (Array.isArray(answer)) {
      return answer.includes(includes);
    }

    if (includes === "website") {
      return answer === "website" || answer === "both";
    }

    if (includes === "social_media") {
      return answer === "social_media" || answer === "both";
    }

    return answer === includes;
  }

  return true;
}