import type {
  ChangeEvent,
  FormEvent,
} from "react";

import type {
  FormAnswer,
  FormQuestion,
} from "../../types/forms.types";

interface QuestionStepProps {
  question: FormQuestion;
  value: FormAnswer;
  error?: string;
  onChange: (value: FormAnswer) => void;
  onNext: () => void;
  onBack: () => void;
}

const fieldClassName = `
  w-full rounded-lg border border-[#1565A9]/40
  bg-[#FFFFFF] px-4 py-3 text-[#1565A9]
  outline-none transition-colors
  placeholder:text-[#1565A9]/50
  hover:border-[#F5A21A]
  focus:border-[#F5A21A]
  focus:ring-1 focus:ring-[#F5A21A]
  dark:border-[#FFFFFF]/40 dark:bg-[#000000]
  dark:text-[#FFFFFF]
  dark:placeholder:text-[#FFFFFF]/50
  dark:hover:border-[#F5A21A]
  dark:focus:border-[#F5A21A]
`;

export default function QuestionStep({
  question,
  value,
  error,
  onChange,
  onNext,
  onBack,
}: QuestionStepProps) {
  const selectedValues = Array.isArray(value) ? value : [];

  const hasAnswer =
  typeof value === "string"
    ? value.trim().length > 0
    : Array.isArray(value)
      ? value.length > 0
      : value instanceof File;

const nextButtonText =
  !question.required && !hasAnswer
    ? "Skip"
    : "Continue";

  function handleCheckboxChange(optionValue: string) {
    const isSelected = selectedValues.includes(optionValue);

    if (isSelected) {
      const updatedValues = selectedValues.filter(
        (selectedValue) => selectedValue !== optionValue,
      );

      onChange(updatedValues);
      return;
    }

    onChange([...selectedValues, optionValue]);
  }

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFile = event.target.files?.[0] ?? null;

    onChange(selectedFile);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onNext();
  }

  function renderQuestionField() {
    switch (question.type) {
      case "textarea":
        return (
          <textarea
            id={question.id}
            name={question.name}
            value={typeof value === "string" ? value : ""}
            placeholder={question.placeholder}
            rows={5}
            onChange={(event) => onChange(event.target.value)}
            className={`${fieldClassName} resize-none`}
          />
        );

      case "radio":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => {
              const isSelected = value === option.value;

              return (
                <label
                  key={option.value}
                  className={`
                    flex cursor-pointer items-center gap-3
                    rounded-lg border px-4 py-4
                    transition-colors
                    ${
                      isSelected
                        ? "border-[#F5A21A] bg-[#F5A21A]/10"
                        : "border-[#1565A9]/30 bg-[#FFFFFF] hover:border-[#F5A21A] dark:border-[#FFFFFF]/40 dark:bg-[#000000] dark:hover:border-[#F5A21A]"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name={question.name}
                    value={option.value}
                    checked={isSelected}
                    onChange={() => onChange(option.value)}
                    className="h-4 w-4 accent-[#F5A21A]"
                  />

                  <span className="text-[#1565A9] dark:text-[#FFFFFF]">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        );

      case "checkbox":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => {
              const isSelected = selectedValues.includes(
                option.value,
              );

              return (
                <label
                  key={option.value}
                  className={`
                    flex cursor-pointer items-center gap-3
                    rounded-lg border px-4 py-4
                    transition-colors
                    ${
                      isSelected
                        ? "border-[#F5A21A] bg-[#F5A21A]/10"
                        : "border-[#1565A9]/30 bg-[#FFFFFF] hover:border-[#F5A21A] dark:border-[#FFFFFF]/40 dark:bg-[#000000] dark:hover:border-[#F5A21A]"
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    name={question.name}
                    value={option.value}
                    checked={isSelected}
                    onChange={() =>
                      handleCheckboxChange(option.value)
                    }
                    className="h-4 w-4 accent-[#F5A21A]"
                  />

                  <span className="text-[#1565A9] dark:text-[#FFFFFF]">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        );

      case "file":
        return (
          <input
            id={question.id}
            name={question.name}
            type="file"
            accept={question.acceptedFileTypes?.join(",")}
            onChange={handleFileChange}
            className={fieldClassName}
          />
        );

      default:
        return (
          <input
            id={question.id}
            name={question.name}
            type={question.type}
            value={typeof value === "string" ? value : ""}
            placeholder={question.placeholder}
            onChange={(event) => onChange(event.target.value)}
            className={fieldClassName}
          />
        );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl"
    >
      <div className="mb-8">
        <label
          htmlFor={question.id}
          className="block text-2xl font-semibold text-[#1565A9] dark:text-[#FFFFFF] sm:text-3xl"
        >
          {question.question}
        </label>

        {question.description && (
          <p className="mt-3 text-sm leading-6 text-[#1565A9]/70 dark:text-[#FFFFFF]/70">
            {question.description}
          </p>
        )}
      </div>

      {renderQuestionField()}

      {error && (
        <p
          role="alert"
          className="mt-3 text-sm font-medium text-[#F5A21A]"
        >
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
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
          type="submit"
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
          {nextButtonText}
        </button>
      </div>
    </form>
  );
}