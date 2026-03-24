'use client'

import { useCart } from '@/contexts/CartContext'
import { Trash2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { PATHROUTES } from '@/utils/PathRoutes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const CartPage = () => {
  const { cartItems, getTotal, removeFromCart, clearCart, getTotalEnvio } = useCart()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (cartItems.length === 5 ) {
      Swal.fire({
        title: '¡Felicitaciones!',
        text: 'Eres un usuario Premium',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      })
    }
  }, [cartItems.length])

  useEffect(() => {
    const user = localStorage.getItem('userSession')

    if (!user) {
      Swal.fire({
        title: 'Ooops',
        text: 'Esta ruta no esta permitida Por favor Inicia Sesion',
        icon: 'warning',
        timer: 3000,
        showConfirmButton: false,
      })
      router.replace('/login')
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) return null

  return (
    <main className="min-h-screen bg-gray-50 ">
      <div className="bg-[#F8F9FA] shadow-sm px-4 sm:px-6 py-4 flex items-center justify-between rounded-lg w-full">
        <Link href="/product" className="flex">
          <ArrowLeft className="flex justify-start w-5 h-5 items-center" />
          <span className="flex ">Seguir comprando</span>
        </Link>
      </div>

      <h1 className="text-xl font-semibold text-gray-800 text-center flex-1 justify-center">
        Tu carrito de compras
      </h1>
      <div className="w-8" />

      <div className="mx-auto p-4 md:p-6 gap-6 flex flex-col lg:flex-row justify-center w-full max-w-7xl">
        <div className="flex flex-col bg-white rounded-xl shadow-none p-4 w-full lg:flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 w-full">
              <p className="text-gray-500 text-lg">🛍️ Tu carrito está vacío</p>
              <Link
                href="/"
                className="mt-4 inline-block bg-Verde-Azulado hover:bg-azulElectrico text-black font-semibold px-6 py-2 rounded-lg transition"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 py-4 gap-4"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <Link href={`/product/${item.id}`} className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-16 flex-shrink-0 relative">
                        <Image 
                          src={item.image || '/placeholder.png'}
                          alt={item.name}
                          fill
                          className="duration-300 object-cover rounded-lg border transition-transform hover:scale-105"
                        />
                      </div>
                    </Link>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-800 truncate">{item.name}</h3>
                      <p className="text-azulElectrico text-sm font-semibold">
                        ${item.price.toLocaleString('es-CO')}
                      </p>
                      <p className="text-gray-500 text-sm line-clamp-2 md:line-clamp-none">{item.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition self-end sm:self-auto"
                  >
                    <Trash2 className="cursor-pointer w-5 h-5" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="bg-white rounded-xl shadow p-6 h-fit w-full lg:w-80 xl:w-96 shrink-0">
            <h2 className="text-lg font-semibold mb-4">Resumen de compra</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Productos ({cartItems.length})</span>
            </div>

            <div className="text-lg font-semibold border-t border-gray-200 pt-3">
              {getTotal() > 3000000 ? (
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <p className="text-azulElectrico">${getTotal().toLocaleString('es-CO')}</p>
                  </div>
                  <p className="mt-2 text-green-600 font-semibold text-sm text-center">
                    🎉 ¡Tu envío es gratis!
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between">
                    <span>Valor Productos</span>
                    <p className="text-azulElectrico">${getTotal().toLocaleString('es-CO')}</p>
                  </div>
                  <div className="flex justify-between">
                    <span>Valor envio</span>
                    <p className="text-azulElectrico">$25.000</p>
                  </div>

                  <div className="flex justify-between">
                    <span>Total</span>
                    <p className="text-Verde-Azulado">${getTotalEnvio().toLocaleString('es-CO')}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => {
                  Swal.fire({
                    title: '¿Deseas finalizar la compra?',
                    text: 'Serás llevado al checkout para completar los datos.',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, continuar',
                    cancelButtonText: 'Volver al Carrito',
                  }).then(result => {
                    if (result.isConfirmed) {
                      router.push(PATHROUTES.CHECKOUT)
                    }
                  })
                }}
                className="cursor-pointer w-full bg-azulElectrico hover:bg-Verde-Azulado text-black font-semibold py-2 rounded-lg transition"
              >
                Finalizar compra
              </button>

              <button
                onClick={clearCart}
                className=" cursor-pointer w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default CartPage
