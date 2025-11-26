'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { PATHROUTES } from '@/utils/PathRoutes'
import { useAuth } from '@/contexts/AuthContext'
import { ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { dataUser, logout } = useAuth()
  const router = useRouter()
  const { cartItems } = useCart()

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
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href={PATHROUTES.HOME}>
          <img
            src="/LogoAerotechStoreHorizontal.png"
            alt="logo horizontal"
            className="h-26 mx-auto mt-1 flex"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4 relative" ref={menuRef}>
        <button onClick={() => setOpen(!open)}>
          <User
            size={32}
            className="text-azulElectrico hover:text-Verde-Azulado h-18 hover:opacity-80 transition cursor-pointer"
          />
        </button>

        {open && (
          <div className="absolute top-10 right-0 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col text-center z-50">
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
              <>
                <p className="py-2 font-semibold text-gray-700">Hola, {dataUser.user.name}</p>

                <div className="h-px bg-gray-200" />
                <button
                  onClick={() => {
                    logout()
                    router.push(PATHROUTES.LOGIN)
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
            <div className="relative">
              <ShoppingCart
                size={32}
                className="text-azulElectrico hover:text-Verde-Azulado h-18 hover:opacity-80 transition"
              />

              {cartItems.length > 0 && (
                <span
                  className="
            absolute -top-1 -right-1 
            bg-red-600 text-white text-xs font-bold 
            rounded-full w-5 h-5 
            flex items-center justify-center
            shadow
          "
                >
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar
