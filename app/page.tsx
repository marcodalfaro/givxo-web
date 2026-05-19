import Image from "next/image";
export default function Home() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
  <Image
  src="/logo.png"
  alt="Givxo"
  width={257}
  height={80}
  priority
  className="logo"
/>
</div>

        <div className="nav-actions">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#beneficios">Beneficios</a>
          <button>Crear lista</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            Regalos colaborativos para momentos importantes
          </div>

          <h1>
            Regalar nunca fue
            <span> tan simple.</span>
          </h1>

          <p>
            Givxo permite crear listas de regalos modernas para que amigos y
            familiares puedan aportar de forma simple, elegante y emocional.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Crear mi lista
            </button>

            <button className="secondary-btn">
              Ver cómo funciona
            </button>
          </div>

          <div className="trust">
            <div>
              <strong>Simple</strong>
              <span>para invitados</span>
            </div>

            <div>
              <strong>Elegante</strong>
              <span>para compartir</span>
            </div>

            <div>
              <strong>Emocional</strong>
              <span>para recordar</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="gift-card">
            <div className="avatar-icon">
  <span>✈</span>
</div>

            <h3>Luna de miel</h3>

            <p>
              Ayudanos a vivir nuestro primer viaje juntos.
            </p>

            <div className="progress">
              <div />
            </div>

            <div className="amounts">
              <span>$1.250.000 reunidos</span>
              <strong>78%</strong>
            </div>

            <button>Aportar regalo</button>
          </div>

          <div className="floating-card one">
            <span>Heladera</span>
            <strong>$35.000</strong>
          </div>

          <div className="floating-card two">
            <span>Sillón</span>
            <strong>$50.000</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-label">
          Cómo funciona
        </div>

        <h2>
          Una experiencia moderna para regalar.
        </h2>

        <div className="steps">
          <div className="step-card">
            <span>01</span>

            <h3>Creás tu lista</h3>

            <p>
              Elegís qué regalos o experiencias querés recibir.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>

            <h3>Compartís el link</h3>

            <p>
              Tus invitados pueden acceder desde cualquier dispositivo.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>

            <h3>Recibís aportes</h3>

            <p>
              Cada regalo se transforma en un aporte real para tu nueva etapa.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}