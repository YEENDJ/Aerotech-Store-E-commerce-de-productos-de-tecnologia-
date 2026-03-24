'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { PATHROUTES } from '@/utils/PathRoutes'
import { useAuth } from '@/contexts/AuthContext'
import { ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import UserMenu from './UserMenu'

const NavBar = () => {
  const { dataUser } = useAuth()
  const { cartItems } = useCart()

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#003f6c]/90 backdrop-blur-md shadow-lg z-50 px-4 sm:px-6 py-2 sm:py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Section: Placeholder or Navigation Links (Desktop) */}
        <div className="hidden sm:block flex-1 order-1">
          {/* Aquí podrías añadir links a futuro */}
        </div>

        {/* Center Section: Logo */}
        <div className="flex-1 sm:flex-none flex justify-start sm:justify-center order-1 sm:order-2">
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

        {/* Right Section: User and Cart Icons */}
        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-4 order-2 sm:order-3">
          <UserMenu />

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
      </div>
    </nav>
  )
}

export default NavBar
