'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function RetailStorePage() {
  return (
    <section className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-3xl font-bold">Nuestro Punto Físico</h2>

        <p className="text-gray-700 mt-3 leading-relaxed">
          Visítanos en nuestra tienda especializada en drones, donde podrás ver productos en
          exhibición, recibir asesoría personalizada y realizar tus compras de manera segura.
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
      </div>

      <div
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
      </div>

      <div
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

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Horario de atención</p>
            <p className="text-sm text-gray-500">Lunes - Viernes: 9:00 - 18:00</p>
            <p className="text-sm text-gray-500">Sábados: 9:00 - 13:00</p>
          </div>

          <div>
            <p className="font-medium">Contáctanos</p>
            <p className="text-sm text-gray-500">Tel/WhatsApp: +57 314 000 0000</p>
            <p className="text-sm text-gray-500">Email: contacto@dji-villavicencio.co</p>
          </div>
        </div>
      </div>
    </section>
  )
}
