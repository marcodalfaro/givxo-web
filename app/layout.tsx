import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Givxo | Regalos colaborativos para momentos importantes",
  description:
    "Creá una lista de regalos, compartila con tus invitados y recibí aportes para eso que realmente querés.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}