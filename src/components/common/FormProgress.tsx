interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function FormProgress({
  currentStep,
  totalSteps,
}: FormProgressProps) {
  const progress =
    totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-[#1565A9] dark:text-[#FFFFFF]">
        <span>
          Step {currentStep} of {totalSteps}
        </span>

        <span>{Math.round(progress)}%</span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-[#1565A9]/15 dark:bg-[#FFFFFF]/20"
        role="progressbar"
        aria-label="Form progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div
          className="h-full rounded-full bg-[#F5A21A] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}