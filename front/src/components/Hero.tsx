export default function HeroVideo() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="public/videos/hero.mp4"
        autoPlay
        muted
        loop
      />

      {/* 🌫️ Capa oscura para legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* 🧾 Contenido encima del video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Bienvenido</h1>
        <p className="mt-4 text-lg md:text-xl">
          Disfruta de nuestros mejores productos
        </p>
      </div>
    </section>
  );
}