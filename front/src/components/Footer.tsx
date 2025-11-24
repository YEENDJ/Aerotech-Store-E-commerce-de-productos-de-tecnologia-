import { PATHROUTES } from '@/utils/PathRoutes'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#003f6c] text-gray-300 py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-3">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Aero Store. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 text-sm">
          <Link href={PATHROUTES.TERMS} className="hover:text-white transition">
            Política de privacidad
          </Link>
          <a href={PATHROUTES.TERMS} className="hover:text-white transition">
            Términos y condiciones
          </a>
          <Link href={PATHROUTES.RETAILSTORE} className="hover:text-white transition">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
