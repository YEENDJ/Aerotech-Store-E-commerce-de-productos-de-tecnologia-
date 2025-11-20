"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function PuntoFisico() {
  return (
    <section className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Información del punto físico */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-3xl font-bold">Nuestro Punto Físico</h2>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Visítanos en nuestra tienda especializada en drones, donde podrás
          ver productos en exhibición, recibir asesoría personalizada y
          realizar tus compras de manera segura.
        </p>

        <div className="flex items-center gap-2 mt-4 text-lg font-semibold">
          <MapPin />
          <span>Ubicación:</span>
        </div>

        <div className="text-gray-700 mt-1">
          <p> cr 31 # 37-12 BRR Centro</p>
          <p> Villavicencio Meta </p>
          <p> Colombia </p>
        </div>
      </motion.div>

      {/* Galería de imágenes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
  <Image
    src="/images/TiendaFisica1.jpg"
    alt="Foto tienda 1"
    fill
    className="object-cover"
  />
</div>


        <div className="relative h-40 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/TiendaFisica2.jpg"
            alt="Foto tienda 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative h-40 rounded-xl overflow-hidden shadow-md col-span-2">
          <Image
            src="/images/TiendaFisica3.webp"
            alt="Foto tienda 3"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Mapa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 md:col-span-2 bg-white rounded-2xl shadow-lg p-4"
      >
        <h3 className="text-2xl font-bold mb-3">Encuéntranos en Google Maps</h3>

        <iframe
          src="https://www.google.com/maps?q=4.150812,-73.637321&z=15&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
