"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/utils/PathRoutes";

 const CartPage = () => {
  const { cartItems, getTotal, removeFromCart, clearCart, getIdItems } =
   useCart();
   const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 ">

        <div className="bg-[#F8F9FA] shadow-sm px-6 py-4 flex items-center justify-between rounded-lg w-f">
          <Link href="/product" className="text-gray-600 hover:text-black flex items-center gap-1">
            <ArrowLeft className="flex justify-start w-5 h-5" />
            <span>Seguir comprando</span>
          </Link>
        </div>
        
        <h1 className="text-xl font-semibold text-gray-800 text-center flex-1 justify-center">
          Tu carrito de compras
          </h1>
        <div className="w-8" /> 

     
      <div className=" mx-auto p-6  gap-6 flex justify-center w-full  ">
        <div className="flex flex-col justify-center items-center  bg-white rounded-xl shadow-none p-4 w-full">
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
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center gap-4 ">
                    <Link href={`/product/${item.id}`}>
                    <div className="w-24 h-16 flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.png"}
                        alt={item.name}
                        className="w-19 duration-300 h-16 object-cover rounded-lg border transition-transform hover:scale-105"
                        />
                    </div>
                    </Link>

                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-azulElectrico text-sm">${item.price.toLocaleString("es-CO")}</p>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                     
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <Trash2 className="cursor-pointer w-5 h-5" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        
        {cartItems.length > 0 && (
          <div className="bg-white rounded-xl shadow p-6 h-fit w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Resumen de compra</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Productos ({cartItems.length})</span>
            </div>

            <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-3">
              <span>Total</span>
              <span className="text-azulElectrico">${getTotal().toLocaleString("es-CO")}</span>
            </div>

            <div className="mt-6 space-y-3">
              <button
              onClick={() => {
                Swal.fire({
                  title: "¿Deseas finalizar la compra?",
                  text: "Serás llevado al checkout para completar los datos.",
                  icon: "info",
                  showCancelButton: true,
                  confirmButtonText: "Sí, continuar",
                  cancelButtonText: "Volver al Carrito",
                }).then((result) => {
                  if (result.isConfirmed) {
                    router.push(PATHROUTES.CHECKOUT);
                  }
                });
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
  );
}



export default CartPage