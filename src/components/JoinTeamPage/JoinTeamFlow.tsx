import { useState } from "react";
import { useNavigate } from "react-router-dom";

import joinTeamQuestions from "../../data/joinTeamQuestion";
import { submitJoinTeamApplication } from "../../services/joinTeamService";

import {
  initialJoinTeamFormData,
  type JoinTeamFormData,
  type JoinTeamStage,
} from "../../types/joinTeam.types";

import type {
  FormAnswer,
  FormAnswers,
} from "../../types/forms.types";

import { shouldDisplayQuestion } from "../../utils/formConditions";
import { validateCvFile } from "../../utils/fileValidation";
import { validateJoinTeamQuestion } from "../../utils/joinTeamValidation";

import FormProgress from "../common/FormProgress";
import QuestionStep from "../common/QuestionStep";

import ApplicationReview from "./ApplicationReview";
import ApplicationSuccess from "./ApplicationSuccess";
import JoinTeamIntro from "./JoinTeamIntro";

export default function JoinTeamFlow() {
  const navigate = useNavigate();

  const [stage, setStage] =
    useState<JoinTeamStage>("introduction");

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [formData, setFormData] =
    useState<JoinTeamFormData>(initialJoinTeamFormData);

  const [error, setError] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const answers = formData as unknown as FormAnswers;

  const visibleQuestions = joinTeamQuestions.filter((question) =>
    shouldDisplayQuestion(question, answers),
  );

  const currentQuestion =
    visibleQuestions[currentQuestionIndex];

  const currentAnswer = currentQuestion
    ? answers[currentQuestion.name] ?? ""
    : "";

  function startApplication() {
    setCurrentQuestionIndex(0);
    setError("");
    setStage("questions");
  }

  function updateAnswer(value: FormAnswer) {
    if (!currentQuestion) {
      return;
    }

    setFormData((currentFormData) => {
      const updatedFormData = {
        ...currentFormData,
        [currentQuestion.name]: value,
      };

      if (
        currentQuestion.name === "areaOfInterest" &&
        value !== "other"
      ) {
        updatedFormData.preferredRole = "";
      }

      return updatedFormData as JoinTeamFormData;
    });

    setError("");
  }

  function goToNextQuestion() {
    if (!currentQuestion) {
      return;
    }

    const validationError = validateJoinTeamQuestion(
      currentQuestion,
      currentAnswer,
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    if (currentQuestion.name === "cv") {
      const cv =
        currentAnswer instanceof File
          ? currentAnswer
          : null;

      const fileError = validateCvFile(cv);

      if (fileError) {
        setError(fileError);
        return;
      }
    }

    const isLastQuestion =
      currentQuestionIndex === visibleQuestions.length - 1;

    if (isLastQuestion) {
      setError("");
      setStage("review");
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

  async function submitApplication() {
    try {
      setIsSubmitting(true);
      setSubmissionError("");

      const response =
        await submitJoinTeamApplication(formData);

      if (!response.success) {
        throw new Error(response.message);
      }

      setStage("success");
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "We could not submit your application.";

      setSubmissionError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (stage === "introduction") {
    return (
      <JoinTeamIntro onStart={startApplication} />
    );
  }

  if (stage === "review") {
    return (
      <ApplicationReview
        formData={formData}
        isSubmitting={isSubmitting}
        submissionError={submissionError}
        onSubmit={submitApplication}
        onBack={() => setStage("questions")}
      />
    );
  }

  if (stage === "success") {
    return (
      <ApplicationSuccess
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