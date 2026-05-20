import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBadge from "@/components/SectionBadge";
import Button from "@/components/Button";

export default function ContactoPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pageHero">
          <div className="container pageHeroContent">
            <SectionBadge>Contacto</SectionBadge>

            <h1>Hablemos de regalos con más sentido.</h1>

            <p>
              Si querés conocer más sobre Givxo, validar una lista o explorar
              una posible colaboración, podés dejarnos tus datos.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contactCard">
              <div className="contactInfo">
                <h2>Estamos construyendo Givxo.</h2>

                <p>
                  Esta versión está pensada para mostrar la experiencia,
                  validar el flujo y conversar con parejas, invitados y posibles
                  aliados comerciales.
                </p>

                <div className="contactHighlights">
                  <span>Casamientos</span>
                  <span>Listas de regalos</span>
                  <span>Experiencias</span>
                  <span>Regalos colaborativos</span>
                </div>
              </div>

              <form className="contactForm">
                <div className="formGroup">
                  <label>Nombre</label>
                  <input type="text" placeholder="Tu nombre" />
                </div>

                <div className="formGroup">
                  <label>Email</label>
                  <input type="email" placeholder="tu@email.com" />
                </div>

                <div className="formGroup fullWidth">
                  <label>Mensaje</label>
                  <textarea placeholder="Contanos brevemente en qué podemos ayudarte..." />
                </div>

                <div className="contactActions">
                  <Button type="submit">Enviar mensaje</Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}