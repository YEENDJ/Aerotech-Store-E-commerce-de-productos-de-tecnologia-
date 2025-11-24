'use client'
import React, { useState } from 'react'
import { IProducts } from '@/interfaces/Iproducts'
import ButtonAddToCart from '@/components/ButtonAddToCart'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart } from 'lucide-react'

interface ProductDetailCardProps {
  product: IProducts
}

const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  const [showZoom, setShowZoom] = useState(false)
  const [backgroundPosition, setBackgroundPosition] = useState('center')

  const { cartItems } = useCart()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    <div className="bg-GrisClaro">
      <div className="bg-GrisClaro shadow-sm px-6 py-4 flex items-center justify-between rounded-lg w-f flex-row">
        <Link href="/product" className="text-gray-600 hover:text-black flex items-center gap-1">
          <ArrowLeft className="flex justify-start w-5 h-5" />
          <span>Seguir comprando</span>
        </Link>
      </div>

      <br className="bg-[#F8F9FA] " />
      <div className="flex flex-col md:flex-row bg-Blanco rounded-2xl shadow-lg p-6 gap-8 max-w-5xl mx-auto ">
        <div
          className="flex-1 flex items-center justify-center relative"
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm h-auto object-contain rounded-lg"
          />

          {showZoom && (
            <div
              className="hidden md:block absolute top-0 right-[-420px] w-[400px] h-[400px] border border-gray-300 rounded-lg shadow-lg bg-no-repeat bg-white"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: '200%',
                backgroundPosition,
              }}
            ></div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">
              Nuevo |{' '}
              {[1, 3, 5, 9, 11, 15].includes(product.id) ? '+500 vendidos' : '+100 vendidos'}{' '}
            </p>
            <h1 className="text-2xl font-semibold text-NegroCarbon mb-3">{product.name}</h1>
            <p className="text-3xl font-bold text-[#007BFF] mb-4">
              ${product.price.toLocaleString('es-CO')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
          </div>

          <div className="flex  gap-3">
            <ButtonAddToCart product={product} />

            {!!cartItems.length && (
              <Link
                href="/cart"
                className="bg-Verde-Azulado hover:bg-azulElectrico text-white px-4 py-2 rounded-lg text-center flex items-center justify-center w-full  text-sm"
              >
                Ir al
                <ShoppingCart size={20} className="ml-2" />
              </Link>
            )}
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>🚚 Envío gratis a todo el país en compras superiores a $3.000.000 </p>
            <p className="mt-1"> 🚚 En compras menores a $3.000.000 el envio costara $25.000</p>
            <p className="mt-1">🛡️ Garantía de compra protegida</p>
          </div>
        </div>
      </div>
      <br className="bg-GrisClaro " />
    </div>
  )
}

export default ProductDetailCard
