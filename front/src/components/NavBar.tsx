// import React from 'react'
// import Link from "next/link";
// import { PATHROUTES } from '@/utils/PathRoutes';


// const NavBar = () => {
//   return (
    
//         <nav  className="relative flex items-center justify-between px-6 py-3 bg-GrisClaro flex-row-reverse">

//           <div className="absolute left-1/2 transform -translate-x-1/2">
//             <Link href={PATHROUTES.HOME}>
//               <img src="/LogoAerotechStoreHorizontal.png" alt="logo horizontal" className="h-26 mx-auto mt-1 flex" />
//             </Link>
//           </div>

//           <div className="flex items-center space-x-4">
//             <Link href={PATHROUTES.DASHBOARD}>
//               <img src="/IconoUsuario.png" alt="icono usuario" className="h-18 " />
//             </Link>

//             <Link href={PATHROUTES.CART}>
//               <img src="/IconoCarrito.png" alt="icono Carrito" className="h-18" />
//             </Link>
//           </div>

//         </nav>
    
//   )
// }

// export default NavBar

"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PATHROUTES } from "@/utils/PathRoutes";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LogOut, ShoppingCart, User } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const {dataUser, logout } = useAuth();

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative flex items-center justify-between px-6 py-3 bg-GrisClaro flex-row-reverse">
      
      {/* <div>
        {
          dataUser && 
        <> 
        <p> {dataUser.user.name} </p>
        <p> {dataUser.user.phone} </p>
        <p> {dataUser.user.email}</p>
        </>
        }
      </div>

      <div className="flex justify-end space-x-4 relative">
        <button onClick={logout} className="bg-red-500 flex  hover:bg-red-600 text-white px-4 py-2 rounded-lg transition items-end">
        cerrar sesion
        </button>
        
      </div> */}
      
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
          <User size={32} className="text-azulElectrico hover:text-Verde-Azulado h-18 hover:opacity-80 transition cursor-pointer"/>
        </button>

        {/* Menú desplegable */}
        {open && (
          <div className="absolute top-10 right-0 w-44 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col text-center z-50">
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
          </div>
        )}

        {/* Ícono carrito */}
        <Link href={PATHROUTES.CART}>
        <ShoppingCart size={32} className="text-azulElectrico hover:text-Verde-Azulado h-18 hover:opacity-80 transition" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
