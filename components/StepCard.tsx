type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <article className="stepCard">
      <div className="stepNumber">
        {number}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}