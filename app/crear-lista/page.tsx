"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionBadge from "@/components/SectionBadge";
import Button from "@/components/Button";

export default function CrearListaPage() {
  const [coupleName, setCoupleName] = useState("Sofi & Mati");
  const [eventDate, setEventDate] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Gracias por acompañarnos en esta nueva etapa."
  );
  const [giftName, setGiftName] = useState("Luna de miel");
  const [giftAmount, setGiftAmount] = useState("1200000");
  const [giftDescription, setGiftDescription] = useState(
    "Un aporte para nuestro primer viaje juntos."
  );

  return (
    <>
      <Header />

      <main>
        <section className="createHero">
          <div className="container createHeroContent">
            <SectionBadge>Crear lista</SectionBadge>

            <h1>Empezá a crear una experiencia de regalos más simple.</h1>

            <p>
              Configurá una lista clara, emocional y preparada para compartir
              con tus invitados.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container createLayout">
            <div className="createCard">
              <div className="createGrid">
                <div className="formGroup">
                  <label>Nombre de la pareja</label>
                  <input
                    type="text"
                    value={coupleName}
                    onChange={(e) => setCoupleName(e.target.value)}
                  />
                </div>

                <div className="formGroup">
                  <label>Fecha del evento</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>

                <div className="formGroup fullWidth">
                  <label>Mensaje de bienvenida</label>
                  <textarea
                    value={welcomeMessage}
                    onChange={(e) => setWelcomeMessage(e.target.value)}
                  />
                </div>

                <div className="formGroup">
                  <label>Nombre del regalo</label>
                  <input
                    type="text"
                    value={giftName}
                    onChange={(e) => setGiftName(e.target.value)}
                  />
                </div>

                <div className="formGroup">
                  <label>Monto objetivo</label>
                  <input
                    type="number"
                    value={giftAmount}
                    onChange={(e) => setGiftAmount(e.target.value)}
                  />
                </div>

                <div className="formGroup fullWidth">
                  <label>Descripción</label>
                  <textarea
                    value={giftDescription}
                    onChange={(e) => setGiftDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="createActions">
                <Button href="/lista-demo">Vista previa</Button>

                <Button href="/gracias" variant="secondary">
                  Crear lista
                </Button>
              </div>
            </div>

            <aside className="createPreview">
              <span>Vista previa</span>

              <h2>{coupleName || "Nombre de la pareja"}</h2>

              <p>
                {eventDate
                  ? `Fecha del evento: ${eventDate}`
                  : "Fecha del evento"}
              </p>

              <div className="previewGift">
                <strong>{giftName || "Nombre del regalo"}</strong>
                <small>
                  Objetivo: $
                  {Number(giftAmount || 0).toLocaleString("es-AR")}
                </small>
                <p>{giftDescription || "Descripción del regalo"}</p>
              </div>

              <p className="previewMessage">
                {welcomeMessage || "Mensaje de bienvenida"}
              </p>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}