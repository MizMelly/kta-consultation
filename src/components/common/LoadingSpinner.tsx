interface LoadingSpinnerProps {
  label?: string;
}

export default function LoadingSpinner({
  label = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      className="inline-flex items-center justify-center gap-2"
    >
      <span
        aria-hidden="true"
        className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
      />

      <span>{label}</span>
    </span>
  );
}