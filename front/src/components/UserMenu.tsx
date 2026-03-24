'use client'
import { useState, useRef, useEffect } from 'react'
import { User } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { PATHROUTES } from '@/utils/PathRoutes'

export default function UserMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { dataUser, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="p-1 sm:p-2 rounded-full hover:bg-white/10 text-azulElectrico hover:text-Verde-Azulado transition-all"
      >
        <User size={28} className="cursor-pointer" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col text-center overflow-hidden z-[60]">
          {!dataUser ? (
            <>
              <Link
                href={PATHROUTES.LOGIN}
                onClick={() => setOpen(false)}
                className="py-2.5 bg-azulElectrico hover:bg-Verde-Azulado text-white font-semibold transition"
              >
                Iniciar sesión
              </Link>
              <Link
                href={PATHROUTES.REGISTER}
                onClick={() => setOpen(false)}
                className="py-2.5 bg-gray-50 hover:bg-gray-100 text-azulElectrico font-semibold transition border-t border-gray-100"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <>
              <div className="py-3 px-4 bg-gray-50/50">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Usuario</p>
                <p className="font-bold text-gray-800 truncate">{dataUser.user.name}</p>
              </div>
              <div className="h-px bg-gray-100" />
              <Link
                href={PATHROUTES.DASHBOARD}
                onClick={() => setOpen(false)}
                className="py-2.5 hover:bg-gray-50 text-gray-700 transition"
              >
                Ver Órdenes
              </Link>
              <button
                onClick={() => {
                  setOpen(false)
                  logout()
                  router.push(PATHROUTES.LOGIN)
                }}
                className="py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold transition cursor-pointer"
              >
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
