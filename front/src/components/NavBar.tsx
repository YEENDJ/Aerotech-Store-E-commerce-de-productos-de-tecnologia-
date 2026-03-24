'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { PATHROUTES } from '@/utils/PathRoutes'
import { useAuth } from '@/contexts/AuthContext'
import { ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'

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
    <nav className="fixed top-0 left-0 w-full bg-[#003f6c]/90 backdrop-blur-md shadow-lg z-50 px-4 sm:px-6 py-2 sm:py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Section: User and Cart Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4 order-2 sm:order-1" ref={menuRef}>
          <div className="relative">
            <button 
              onClick={() => setOpen(!open)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <User
                size={28}
                className="text-azulElectrico hover:text-Verde-Azulado transition-colors cursor-pointer"
              />
            </button>

            {open && (
              <div className="absolute top-12 left-0 sm:left-auto sm:right-0 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col text-center overflow-hidden z-50">
                {!dataUser ? (
                  <>
                    <Link
                      href={PATHROUTES.LOGIN}
                      className="bg-azulElectrico hover:bg-Verde-Azulado text-white font-semibold py-2.5 px-4 transition-colors"
                    >
                      Iniciar sesión
                    </Link>
                    <Link
                      href={PATHROUTES.REGISTER}
                      className="bg-gray-50 hover:bg-gray-100 text-azulElectrico font-semibold py-2.5 px-4 transition-colors border-t border-gray-100"
                    >
                      Registrarse
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="py-3 px-4 bg-gray-50">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Usuario</p>
                      <p className="font-bold text-gray-800 truncate">{dataUser.user.name}</p>
                    </div>
                    <Link 
                      href={PATHROUTES.DASHBOARD}
                      className="py-2.5 px-4 text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100 flex items-center justify-center gap-2"
                    >
                      Ver Órdenes
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        router.push(PATHROUTES.LOGIN)
                      }}
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 px-4 transition-colors cursor-pointer"
                    >
                      Cerrar sesión
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {dataUser && (
            <Link href={PATHROUTES.CART} className="p-1 hover:bg-white/10 rounded-full transition-colors relative">
              <ShoppingCart
                size={28}
                className="text-azulElectrico hover:text-Verde-Azulado transition-colors"
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-lg border border-[#003f6c]">
                  {cartItems.length}
                </span>
              )}
            </Link>
          )}
        </div>

        {/* Center Section: Logo */}
        <div className="flex-1 flex justify-center order-1 sm:order-2">
          <Link href={PATHROUTES.HOME} className="transition-transform hover:scale-105 active:scale-95 text-center">
            <div className="relative w-32 sm:w-48 md:w-56 h-8 sm:h-12 md:h-14">
              <Image
                src="/LogoAerotechStoreHorizontal.png"
                alt="logo horizontal"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Right Section: Placeholder for balance on Desktop */}
        <div className="hidden sm:block w-[80px] md:w-[120px] order-3"></div>
      </div>
    </nav>
  )
}

export default NavBar
