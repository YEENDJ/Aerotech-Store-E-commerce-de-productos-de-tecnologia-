"use client"

import { useCart } from '@/contexts/CartContext'
import { IProducts } from '@/interfaces/Iproducts'
import React from 'react'

interface ButtonPorps{
    product : IProducts
}


const ButtonAddToCart = ({product} : ButtonPorps ) => {
    const {addToCart} = useCart()
    return (
    <button 
    onClick={ () => addToCart(product)}
    className="cursor-pointer w-full bg-[#007BFF] text-white px-3 py-2 rounded-lg hover:bg-[#0056cc] transition mt-4 text-sm">
     Agregar al carrito
    </button>
  )
}

export default ButtonAddToCart