'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { PATHROUTES } from '@/utils/PathRoutes'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { LogOut, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { dataUser, logout } = useAuth()
  const router = useRouter()

  // Cierra el menú al hacer clic fuera
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
    <nav className=" flex items-center justify-between px-6 py-3 bg-[#003f6c] flex-row-reverse  fixed top-0 left-0 w-full  backdrop-blur shadow z-50">
      {/* Logo centrado */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href={PATHROUTES.HOME}>
          <img
            src="/LogoAerotechStoreHorizontal.png"
            alt="logo horizontal"
            className="h-26 mx-auto mt-1 flex"
          />
        </Link>
      </div>

      {/* Íconos */}

      <div className="flex items-center space-x-4 relative" ref={menuRef}>
        {/* Ícono de usuario con menú */}
        <button onClick={() => setOpen(!open)}>
          <User
            size={32}
            className="text-azulElectrico hover:text-Verde-Azulado h-18 hover:opacity-80 transition cursor-pointer"
          />
        </button>

        {open && (
          <div className="absolute top-10 right-0 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col text-center z-50">
            {/* Si NO hay usuario logueado */}
            {!dataUser ? (
              <>
                <Link
                  href={PATHROUTES.LOGIN}
                  className="bg-azulElectrico hover:bg-Verde-Azulado text-white font-semibold py-2 px-4 rounded-t-2xl transition-colors duration-300"
                >
                  Iniciar sesión
                </Link>
                <div className="h-px bg-gray-200" />
                <Link
                  href={PATHROUTES.REGISTER}
                  className="bg-azulElectrico hover:bg-Verde-Azulado text-white font-semibold py-2 px-4 rounded-b-2xl transition-colors duration-300"
                >
                  Registrarse
                </Link>
              </>
            ) : (
              // Si SÍ hay usuario logueado
              <>
                <p className="py-2 font-semibold text-gray-700">Hola, {dataUser.user.name}</p>

                <div className="h-px bg-gray-200" />
                <button
                  onClick={() => {
                    logout() // 1️⃣ Cierra sesión
                    router.push(PATHROUTES.LOGIN) // 2️⃣ Redirige al login
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4  transition-colors duration-300 cursor-pointer"
                >
                  Cerrar sesión
                </button>
                <div>
                  <Link href={PATHROUTES.DASHBOARD}>
                    <p className=" bg-azulElectrico text-white hover:bg-Verde-Azulado rounded-b-2xl">
                      {' '}
                      Ver Ordenes
                    </p>
                  </Link>
                </div>
              </>
            )}
          </div>
        )}

        {dataUser && (
          <Link href={PATHROUTES.CART}>
            <ShoppingCart
              size={32}
              className="text-azulElectrico hover:text-Verde-Azulado h-18 hover:opacity-80 transition"
            />
          </Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar
