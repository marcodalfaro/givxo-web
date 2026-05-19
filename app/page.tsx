export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1F1F1F]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-sm font-medium tracking-[0.35em] text-[#8A6F4D]">
          GIVXO
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          La forma más simple y elegante de organizar regalos de casamiento.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5F5F5F] md:text-xl">
          Givxo permite que las parejas creen una lista de regalos deseados y que
          sus invitados puedan contribuir fácilmente a cada experiencia, producto
          o proyecto importante.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-[#1F1F1F] px-8 py-4 text-sm font-semibold text-white transition hover:bg-black"
          >
            Crear lista
          </a>

          <a
            href="#"
            className="rounded-full border border-[#1F1F1F]/20 px-8 py-4 text-sm font-semibold transition hover:border-[#1F1F1F]"
          >
            Ver cómo funciona
          </a>
        </div>
      </section>
    </main>
  );
}