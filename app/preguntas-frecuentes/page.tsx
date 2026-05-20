import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQItem from "@/components/FAQItem";
import SectionBadge from "@/components/SectionBadge";
import CTASection from "@/components/CTASection";

const faqs = [
  {
    question: "¿Givxo es solo para casamientos?",
    answer:
      "Inicialmente está pensado para casamientos, pero puede adaptarse a otros eventos importantes donde tenga sentido crear una lista compartida.",
  },
  {
    question: "¿El invitado debe registrarse?",
    answer:
      "La experiencia está pensada para que el invitado pueda participar de forma simple, rápida y sin fricción innecesaria.",
  },
  {
    question: "¿Puede aportar cualquier monto?",
    answer:
      "Sí. El invitado puede elegir montos sugeridos o ingresar otro monto según lo que quiera aportar.",
  },
  {
    question: "¿La pareja puede editar su lista?",
    answer:
      "La idea del producto contempla que la pareja pueda modificar regalos, mensajes y datos principales de su lista.",
  },
  {
    question: "¿Puedo compartir el link por WhatsApp?",
    answer:
      "Sí. El flujo está pensado especialmente para compartir el link por WhatsApp, invitaciones digitales o redes.",
  },
  {
    question: "¿Qué pasa si un regalo no se completa?",
    answer:
      "El objetivo es que cada aporte siga teniendo valor para la pareja, incluso si el monto total del regalo no se completa.",
  },
  {
    question: "¿Puedo usarlo para luna de miel o fondo para el hogar?",
    answer:
      "Sí. Givxo permite representar regalos físicos, experiencias o fondos importantes como luna de miel, hogar o viaje.",
  },
  {
    question: "¿Givxo procesa pagos reales actualmente?",
    answer:
      "Esta versión está planteada como experiencia visual y flujo inicial. No promete integraciones de pago reales hasta que estén implementadas.",
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pageHero">
          <div className="container pageHeroContent">
            <SectionBadge>Preguntas frecuentes</SectionBadge>

            <h1>Dudas claras para una experiencia simple.</h1>

            <p>
              Respuestas pensadas para parejas e invitados que quieren entender
              rápidamente cómo funciona Givxo.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="faqPageGrid">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}