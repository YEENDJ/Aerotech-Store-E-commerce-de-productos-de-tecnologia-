"use client";

import { useCart } from "@/contexts/CartContext";
import { Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, getTotal, removeFromCart, clearCart } = useCart();

  return (
    <main className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-gray-600 hover:text-black flex items-center gap-1">
            <ArrowLeft className="w-5 h-5" />
            <span>Seguir comprando</span>
          </Link>
        </div>
        <h1 className="text-xl font-semibold text-gray-800">Tu carrito de compras</h1>
        <div className="w-8" /> {/* Espaciador visual */}
      </div>

      {/* Contenido */}
      <div className=" mx-auto p-6  gap-6 flex justify-center w-full  ">
        {/* Lista de productos */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">🛍️ Tu carrito está vacío</p>
              <Link
                href="/"
                className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  {/* Imagen del producto */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.png"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Resumen de compra */}
        {cartItems.length > 0 && (
          <div className="bg-white rounded-xl shadow p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Resumen de compra</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Productos ({cartItems.length})</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-3">
              <span>Total</span>
              <span className="text-azulElectrico">${getTotal().toFixed(2)}</span>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => alert("Redirigir a pago 🏦")}
                className=" cursor-pointer w-full bg-Verde-Azulado hover:bg-azulElectrico text-black font-semibold py-2 rounded-lg transition"
              >
                Continuar con la compra
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
  );
}
