import { useState } from "react";
import { useNavigate } from "react-router-dom";

import bookingQuestions from "../../data/bookingQuestions";
import { submitBooking } from "../../services/bookingService";

import {
  initialBookingFormData,
  type BookingFormData,
  type BookingStage,
} from "../../types/booking.types";

import type {
  FormAnswer,
  FormAnswers,
} from "../../types/forms.types";

import { validateBookingQuestion } from "../../utils/bookingValidation";
import { shouldDisplayQuestion } from "../../utils/formConditions";

import FormProgress from "../common/FormProgress";
import QuestionStep from "../common/QuestionStep";

import BookingIntro from "./BookingIntro";
import BookingReview from "./BookingReview";
import BookingSuccess from "./BookingSuccess";
import DateSelectionStep from "./DateSelectionStep";
import TimeSelectionStep from "./TimeSelectionSteps";

const availableDates = createAvailableDates();

const availableTimes = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

export default function BookingFlow() {
  const navigate = useNavigate();

  const [stage, setStage] =
    useState<BookingStage>("introduction");

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [formData, setFormData] =
    useState<BookingFormData>(initialBookingFormData);

  const [error, setError] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const answers = formData as unknown as FormAnswers;

  const visibleQuestions = bookingQuestions.filter((question) =>
    shouldDisplayQuestion(question, answers),
  );

  const currentQuestion =
    visibleQuestions[currentQuestionIndex];

  const currentAnswer = currentQuestion
    ? answers[currentQuestion.name] ?? ""
    : "";

  function startBooking() {
    setCurrentQuestionIndex(0);
    setError("");
    setStage("questions");
  }

  function updateAnswer(value: FormAnswer) {
    if (!currentQuestion) {
      return;
    }

    setFormData((currentFormData) => ({
      ...currentFormData,
      [currentQuestion.name]: value,
    }));

    setError("");
  }

  function goToNextQuestion() {
    if (!currentQuestion) {
      return;
    }

    const validationError = validateBookingQuestion(
      currentQuestion,
      currentAnswer,
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    const isLastQuestion =
      currentQuestionIndex === visibleQuestions.length - 1;

    if (isLastQuestion) {
      setError("");
      setStage("dateSelection");
      return;
    }

    setError("");
    setCurrentQuestionIndex(
      (currentIndex) => currentIndex + 1,
    );
  }

  function goToPreviousQuestion() {
    if (currentQuestionIndex === 0) {
      setError("");
      setStage("introduction");
      return;
    }

    setCurrentQuestionIndex(
      (currentIndex) => currentIndex - 1,
    );

    setError("");
  }

  function selectDate(date: string) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      selectedDate: date,
      selectedTime: "",
    }));
  }

  function selectTime(time: string) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      selectedTime: time,
    }));
  }

  async function confirmBooking() {
    try {
      setIsSubmitting(true);
      setSubmissionError("");

      const response = await submitBooking(formData);

      if (!response.success) {
        throw new Error(response.message);
      }

      setStage("success");
    } catch (bookingError) {
      const message =
        bookingError instanceof Error
          ? bookingError.message
          : "We could not complete your booking.";

      setSubmissionError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (stage === "introduction") {
    return <BookingIntro onStart={startBooking} />;
  }

  if (stage === "dateSelection") {
    return (
      <DateSelectionStep
        availableDates={availableDates}
        selectedDate={formData.selectedDate}
        onSelect={selectDate}
        onNext={() => setStage("timeSelection")}
        onBack={() => setStage("questions")}
      />
    );
  }

  if (stage === "timeSelection") {
    return (
      <TimeSelectionStep
        selectedDate={formData.selectedDate}
        selectedTime={formData.selectedTime}
        availableTimes={availableTimes}
        onSelect={selectTime}
        onNext={() => setStage("review")}
        onBack={() => setStage("dateSelection")}
      />
    );
  }

  if (stage === "review") {
    return (
      <BookingReview
        formData={formData}
        isSubmitting={isSubmitting}
        submissionError={submissionError}
        onConfirm={confirmBooking}
        onBack={() => setStage("timeSelection")}
      />
    );
  }

  if (stage === "success") {
    return (
      <BookingSuccess
        selectedDate={formData.selectedDate}
        selectedTime={formData.selectedTime}
        onReturnHome={() => navigate("/home")}
      />
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <main className="min-h-[calc(100vh-80px)] overflow-x-hidden bg-[#FFFFFF] px-5 transition-colors dark:bg-[#000000]">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-2xl items-center py-10">
        <div className="w-full">
          <FormProgress
            currentStep={currentQuestionIndex + 1}
            totalSteps={visibleQuestions.length}
          />

          <div
            key={currentQuestion.id}
            className="booking-enter mt-10"
          >
            <QuestionStep
              question={currentQuestion}
              value={currentAnswer}
              error={error}
              onChange={updateAnswer}
              onNext={goToNextQuestion}
              onBack={goToPreviousQuestion}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function createAvailableDates(): string[] {
  const dates: string[] = [];
  const currentDate = new Date();

  while (dates.length < 12) {
    const isSunday = currentDate.getDay() === 0;

    if (!isSunday) {
      dates.push(formatDateValue(currentDate));
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

function formatDateValue(date: Date): string {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(
    2,
    "0",
  );

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}