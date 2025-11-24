'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Users, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { PATHROUTES } from '@/utils/PathRoutes'

export default function AboutUs() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Somos una tienda especializada en productos DJI ubicada en Villavicencio, Meta. Nuestra
          misión es acercar tecnología profesional a creadores, empresas y entusiastas, con asesoría
          experta y productos totalmente originales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Nuestra Historia</h2>
          <p className="text-gray-600 leading-relaxed">
            Empezamos en 2021 como un pequeño proyecto apasionado por la tecnología aérea. Con el
            tiempo, crecimos gracias a la confianza de nuestros clientes, convirtiéndonos en un
            punto de referencia en Villavicencio para productos DJI. Hoy ofrecemos un catálogo
            completo y soporte especializado.
          </p>
        </div>

        <div className="bg-Blanco p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Nuestros Valores</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5" /> Transparencia en cada compra
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5" /> Productos 100% originales DJI
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5" /> Acompañamiento experto
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5" /> Compromiso con el cliente
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-Blanco p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Nuestra Misión</h2>
          <p className="text-gray-600 leading-relaxed">
            Proveer productos DJI de alta calidad, asesoría honesta y soporte especializado para que
            cada cliente obtenga la mejor experiencia tecnológica posible.
          </p>
        </div>

        <div className="bg-Blanco p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3">Nuestra Visión</h2>
          <p className="text-gray-600 leading-relaxed">
            Convertirnos en la tienda líder en tecnología DJI en Colombia, expandiendo nuestros
            servicios y brindando soluciones a nivel profesional y empresarial.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">¿Por qué elegirnos?</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5" /> Asesoría técnica y especializada
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5" /> Garantía oficial DJI
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5" /> Envíos seguros a nivel nacional
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-5" /> Entregas rápidas en Villavicencio
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Users className="w-6" /> Nuestro Equipo
        </h2>
        <p className="text-gray-600">
          Contamos con un equipo pequeño pero apasionado por la tecnología aérea y la innovación.
          Siempre dispuestos a brindar asesoría personalizada y soporte técnico.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Yeison Enciso', role: 'Gerente', img: '/team/yeison.jpeg' },
            { name: 'Lizette Forero', role: 'Jefe Administrativa', img: '/team/lizette.png' },
            { name: 'Saimon Enciso', role: 'Ventas y Logistica', img: '/team/saimon.png' },
            { name: 'Lolo Forero', role: 'Tecnico de drones', img: '/team/lolo.png' },
          ].map(m => (
            <div
              key={m.name}
              className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-3">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <ShieldCheck className="w-6" /> Garantías y Confianza
        </h2>
        <p className="text-gray-600">
          Todos nuestros productos cuentan con garantía oficial del fabricante. Trabajamos
          únicamente con distribuidores autorizados para garantizar autenticidad y soporte.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              🏷️
            </div>
            <div>
              <p className="font-medium">Distribuidor Autorizado</p>
              <p className="text-sm text-gray-500">
                Certificado por fabricantes para venta y soporte.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              🔧
            </div>
            <div>
              <p className="font-medium">Soporte Técnico</p>
              <p className="text-sm text-gray-500">
                Taller propio y servicio posventa en Villavicencio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          ¿Listo para volar? Visita nuestro{' '}
          {
            <Link
              className="hover:bg-Verde-Azulado rounded-xs text-azulElectrico"
              href={PATHROUTES.PRODUCT}
            >
              {' '}
              catálogo
            </Link>
          }{' '}
          o contáctanos para asesoría personalizada.
        </p>
      </div>
    </section>
  )
}
