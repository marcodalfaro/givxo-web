"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className="header">
      <div className="container headerContent">
        <Link href="/" className="logoWrapper">
          <Image
            src="/logo.png"
            alt="Givxo"
            width={140}
            height={42}
            className="logo"
            priority
          />
        </Link>

        <nav className="desktopNav">
          <Link href="/como-funciona">
            Cómo funciona
          </Link>

          <Link href="/lista-demo">
            Lista demo
          </Link>

          <Link href="/preguntas-frecuentes">
            Preguntas frecuentes
          </Link>
        </nav>

        <div className="headerActions">
          <Button href="/crear-lista">
            Crear lista
          </Button>
        </div>

        <button
          className="mobileMenuButton"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobileMenu">
          <Link
            href="/como-funciona"
            onClick={() => setMenuOpen(false)}
          >
            Cómo funciona
          </Link>

          <Link
            href="/lista-demo"
            onClick={() => setMenuOpen(false)}
          >
            Lista demo
          </Link>

          <Link
            href="/preguntas-frecuentes"
            onClick={() => setMenuOpen(false)}
          >
            Preguntas frecuentes
          </Link>

          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>

          <Button href="/crear-lista">
            Crear lista
          </Button>
        </div>
      )}
    </header>
  );
}