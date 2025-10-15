import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-[#f2f2f2] mt-0 flex items-center">
          <img src="/LogoAerotechStoreHorizontal.png" alt="logo horizontal" className="h-26 mx-auto mt-1 flex" />
          <img src="/IconoUsuario.png" alt="icono usuario" className="h-18 " />
          <img src="/IconoCarrito.png" alt="icono Carrito" className="h-18" />
        </nav>
    </div>
  )
}

export default NavBar