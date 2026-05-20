import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerContent">
        <div>
          <Link href="/" className="footerLogo">
            <Image
              src="/logo.png"
              alt="Givxo"
              width={130}
              height={40}
            />
          </Link>

          <p className="footerText">
            Una forma moderna, simple y emocional de regalar algo que realmente importa.
          </p>
        </div>

        <div className="footerLinks">
          <Link href="/como-funciona">Cómo funciona</Link>
          <Link href="/lista-demo">Lista demo</Link>
          <Link href="/preguntas-frecuentes">Preguntas frecuentes</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>

      <div className="container footerBottom">
        <span>© 2026 Givxo. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}