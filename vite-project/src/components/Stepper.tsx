type Props = {
  total: number;
  current: number; // 1-indexed
  labels?: string[];
};

const Stepper: React.FC<Props> = ({ total, current, labels }) => {
  const steps = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <ol className="stepper">
      {steps.map((n, idx) => {
        const isActive = n === current;
        const isCompleted = n < current;
        const label = labels?.[idx] ?? `Step ${n}`;

        return (
          <li
            key={n}
            className={[
              "stepper-item",
              isActive ? "active" : "",
              isCompleted ? "completed" : "",
            ].join(" ")}
          >
            <div className="stepper-circle" aria-current={isActive ? "step" : undefined}>
              <span className="stepper-index">{n}</span>
            </div>
            <div className="stepper-label">{label}</div>
            {idx < steps.length - 1 && <div className="stepper-line" />}
          </li>
        );
      })}
    </ol>
  );
};

export default Stepper;
