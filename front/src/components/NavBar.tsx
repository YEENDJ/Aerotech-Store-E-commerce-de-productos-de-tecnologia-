import React from 'react'
import Link from "next/link";
import { PATHROUTES } from '@/utils/PathRoutes';


const NavBar = () => {
  return (
    
        <nav  className="relative flex items-center justify-between px-6 py-3 bg-[#f2f2f2] flex-row-reverse">

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href={PATHROUTES.HOME}>
              <img src="/LogoAerotechStoreHorizontal.png" alt="logo horizontal" className="h-26 mx-auto mt-1 flex" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="">
              <img src="/IconoUsuario.png" alt="icono usuario" className="h-18 " />
            </Link>

            <Link href={PATHROUTES.CART}>
              <img src="/IconoCarrito.png" alt="icono Carrito" className="h-18" />
            </Link>
          </div>

        </nav>
    
  )
}

export default NavBar