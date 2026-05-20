import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";
import SectionBadge from "@/components/SectionBadge";
import CTASection from "@/components/CTASection";

import { demoGifts } from "@/lib/demoData";

export default function ListaDemoPage() {
  return (
    <>
      <Header />

      <main>
        <section className="demoHero">
          <div className="container">
            <div className="demoHeroContent">
              <SectionBadge>
                Lista demo
              </SectionBadge>

              <h1>
                Sofi & Mati
              </h1>

              <p className="demoDate">
                14 de noviembre de 2026
              </p>

              <p className="demoMessage">
                Gracias por acompañarnos en esta nueva etapa.
                Creamos esta lista para transformar cada aporte
                en algo realmente importante para nosotros.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="demoGrid">
              {demoGifts.map((gift) => (
                <GiftCard
                  key={gift.id}
                  gift={gift}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Un regalo puede empezar con un simple aporte."
          description="Cada contribución ayuda a construir una experiencia compartida y significativa."
        />
      </main>

      <Footer />
    </>
  );
}