type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="progress">
      <div
        className="progressFill"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}