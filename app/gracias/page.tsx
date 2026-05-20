import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";

export default function GraciasPage() {
  return (
    <>
      <Header />

      <main>
        <section className="thanksSection">
          <div className="container">
            <div className="thanksCard">
              <SectionBadge>
                Aporte realizado
              </SectionBadge>

              <h1>
                Gracias por ser parte de este regalo.
              </h1>

              <p className="thanksText">
                Tu aporte para la Luna de miel fue registrado correctamente.
                Cada contribución ayuda a construir una experiencia
                compartida y significativa.
              </p>

              <div className="thanksSummary">
                <div className="thanksItem">
                  <span>Regalo</span>
                  <strong>Luna de miel</strong>
                </div>

                <div className="thanksItem">
                  <span>Aporte</span>
                  <strong>$35.000</strong>
                </div>
              </div>

              <div className="thanksActions">
                <Button href="/lista-demo">
                  Volver a la lista
                </Button>

                <Button
                  href="/crear-lista"
                  variant="secondary"
                >
                  Crear mi lista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}