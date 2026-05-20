import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import SectionBadge from "@/components/SectionBadge";
import StepCard from "@/components/StepCard";
import FeatureCard from "@/components/FeatureCard";
import GiftCard from "@/components/GiftCard";
import FAQItem from "@/components/FAQItem";
import CTASection from "@/components/CTASection";
import { demoGifts } from "@/lib/demoData";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroContent">
              <SectionBadge>Regalos colaborativos</SectionBadge>

              <h1>
                Regalar nunca fue tan{" "}
                <span className="gradient-text">simple.</span>
              </h1>

              <p>
                Creá una lista de regalos, compartila con tus invitados y recibí
                aportes para eso que realmente querés.
              </p>

              <div className="heroActions">
                <Button href="/crear-lista">Crear mi lista</Button>
                <Button href="/lista-demo" variant="secondary">
                  Ver lista demo
                </Button>
              </div>
            </div>

            <div className="heroPreview">
              

              <GiftCard gift={demoGifts[0]} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <SectionBadge>Cómo funciona</SectionBadge>
              <h2>Una experiencia simple de principio a fin.</h2>
            </div>

            <p className="section-subtitle">
              La pareja crea una lista, comparte un link y los invitados pueden
              aportar a regalos concretos en menos de un minuto.
            </p>

            <div className="grid threeColumns">
              <StepCard
                number="01"
                title="Creás tu lista"
                description="Cargás regalos, experiencias o fondos importantes para la pareja."
              />
              <StepCard
                number="02"
                title="Compartís el link"
                description="Enviás una página simple y cuidada por WhatsApp o redes."
              />
              <StepCard
                number="03"
                title="Recibís aportes"
                description="Cada invitado elige a qué regalo aportar y puede dejar un mensaje."
              />
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="container twoColumns">
            <div>
              <SectionBadge>Para parejas</SectionBadge>
              <h2>Regalos con sentido para una nueva etapa.</h2>
            </div>

            <div className="grid">
              <FeatureCard
                title="Elegís regalos reales"
                description="Podés incluir luna de miel, heladera, sillón, vajilla, viaje o fondo para el hogar."
              />
              <FeatureCard
                title="Centralizás los aportes"
                description="Ordenás lo recibido en una experiencia clara, visual y fácil de compartir."
              />
              <FeatureCard
                title="Evitás regalos repetidos"
                description="Los invitados entienden qué necesita la pareja y participan de algo concreto."
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container twoColumns reverseMobile">
            <div className="grid">
              <FeatureCard
                title="Elegís a qué aportar"
                description="El invitado puede participar de un regalo específico, no hacer una transferencia fría."
              />
              <FeatureCard
                title="Aportás el monto que querés"
                description="La experiencia es flexible, rápida y pensada para celular."
              />
              <FeatureCard
                title="Dejás un mensaje"
                description="Cada aporte puede tener una dedicatoria simple para la pareja."
              />
            </div>

            <div>
              <SectionBadge>Para invitados</SectionBadge>
              <h2>Regalar se vuelve claro, rápido y emocional.</h2>
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="container">
            <div className="section-title">
              <SectionBadge>Lista demo</SectionBadge>
              <h2>Así podría verse una lista real.</h2>
            </div>

            <p className="section-subtitle">
              Una página simple para que los invitados elijan regalos y entiendan
              rápidamente cómo participar.
            </p>

            <div className="grid giftGrid">
              {demoGifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <SectionBadge>Por qué Givxo</SectionBadge>
              <h2>No es una transferencia fría. Es un regalo con identidad.</h2>
            </div>

            <div className="grid threeColumns">
              <FeatureCard
                title="Simple"
                description="Sin registros innecesarios ni pasos complejos para el invitado."
              />
              <FeatureCard
                title="Visual"
                description="Cada aporte se vincula a un regalo, experiencia o fondo concreto."
              />
              <FeatureCard
                title="Flexible"
                description="La pareja puede adaptar su lista a lo que realmente necesita."
              />
            </div>
          </div>
        </section>

        <section className="section softSection">
          <div className="container">
            <div className="section-title">
              <SectionBadge>Preguntas frecuentes</SectionBadge>
              <h2>Dudas simples, respuestas claras.</h2>
            </div>

            <div className="grid faqGrid">
              <FAQItem
                question="¿Givxo es solo para casamientos?"
                answer="Inicialmente está pensado para casamientos, pero también puede adaptarse a otros eventos importantes."
              />
              <FAQItem
                question="¿El invitado debe registrarse?"
                answer="La experiencia está pensada para ser simple y rápida, sin fricción innecesaria."
              />
              <FAQItem
                question="¿Puede aportar cualquier monto?"
                answer="Sí. El invitado puede elegir un monto sugerido o ingresar otro monto."
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