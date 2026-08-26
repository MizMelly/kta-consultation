export type QuestionType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "textarea"
  | "radio"
  | "checkbox"
  | "file";

export interface QuestionOption {
  label: string;
  value: string;
}

export type FormAnswer = string | string[] | File | null;

export interface FormAnswers {
  [fieldName: string]: FormAnswer;
}

export interface QuestionCondition {
  field: string;
  equals?: string;
  includes?: string;
}

export interface FormQuestion {
  id: string;
  name: string;
  type: QuestionType;
  question: string;
  description?: string;
  placeholder?: string;
  required: boolean;
  options?: QuestionOption[];
  condition?: QuestionCondition;
  acceptedFileTypes?: string[];
  maximumFileSize?: number;
}