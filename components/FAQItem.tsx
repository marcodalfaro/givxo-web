type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  return (
    <article className="faqItem">
      <h3>{question}</h3>
      <p>{answer}</p>
    </article>
  );
}