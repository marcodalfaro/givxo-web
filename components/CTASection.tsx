import Button from "./Button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Cada aporte puede ser parte de una historia.",
  description = "Creá una lista simple, compartila con tus invitados y transformá los aportes en regalos con sentido.",
}: CTASectionProps) {
  return (
    <section className="ctaSection">
      <div className="container">
        <div className="ctaBox">
          <h2>{title}</h2>
          <p>{description}</p>

          <div className="ctaActions">
            <Button href="/crear-lista">
              Crear mi lista
            </Button>

            <Button href="/lista-demo" variant="secondary">
              Ver lista demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}