import React from 'react'
import { PATHROUTES } from "@/utils/PathRoutes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center max-w-md">
        <h1 className="text-7xl font-extrabold text-azulElectrico mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Página no encontrada</h2>

        <p className="text-gray-600 mb-6">
          La página que intentas visitar no existe o ya no está disponible.
        </p>

        <Link
          href={PATHROUTES.HOME}
          className="px-6 py-3 bg-azulElectrico text-white rounded-2xl shadow hover:bg-Verde-Azulado transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
