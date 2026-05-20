import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepCard from "@/components/StepCard";
import SectionBadge from "@/components/SectionBadge";
import CTASection from "@/components/CTASection";

export default function ComoFuncionaPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pageHero">
          <div className="container pageHeroContent">
            <SectionBadge>Cómo funciona</SectionBadge>

            <h1>Una forma simple de regalar con sentido.</h1>

            <p>
              Givxo permite que una pareja cree una lista, comparta un link y
              reciba aportes para regalos, experiencias o fondos importantes.
            </p>
          </div>
        </section>

        <section className="section softSection">
          <div className="container">
            <div className="section-title">
              <SectionBadge>Para parejas</SectionBadge>
              <h2>Crean una lista y comparten una experiencia cuidada.</h2>
            </div>

            <div className="grid fiveSteps">
              <StepCard
                number="01"
                title="Crean su lista"
                description="Definen el nombre de la pareja, fecha del evento y mensaje de bienvenida."
              />
              <StepCard
                number="02"
                title="Cargan regalos"
                description="Agregan regalos, experiencias o fondos que realmente quieren recibir."
              />
              <StepCard
                number="03"
                title="Comparten el link"
                description="Envían la lista por WhatsApp, invitación digital o redes."
              />
              <StepCard
                number="04"
                title="Reciben aportes"
                description="Cada invitado puede elegir a qué regalo aportar."
              />
              <StepCard
                number="05"
                title="Visualizan avances"
                description="La pareja puede ver cómo avanza cada regalo de manera simple."
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <SectionBadge>Para invitados</SectionBadge>
              <h2>Eligen un regalo y aportan en menos de un minuto.</h2>
            </div>

            <div className="grid sixSteps">
              <StepCard
                number="01"
                title="Entran al link"
                description="Acceden a una lista clara, preparada para verse bien desde el celular."
              />
              <StepCard
                number="02"
                title="Ven la lista"
                description="Encuentran regalos concretos, montos y progreso de cada objetivo."
              />
              <StepCard
                number="03"
                title="Eligen un regalo"
                description="Seleccionan el regalo o experiencia a la que quieren aportar."
              />
              <StepCard
                number="04"
                title="Definen el monto"
                description="Pueden elegir un monto sugerido o ingresar otro monto."
              />
              <StepCard
                number="05"
                title="Dejan un mensaje"
                description="La dedicatoria es opcional, pero suma emoción al regalo."
              />
              <StepCard
                number="06"
                title="Finalizan"
                description="Cierran la experiencia de forma simple, clara y emocional."
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}