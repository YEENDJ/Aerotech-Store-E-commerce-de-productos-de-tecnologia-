'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import { createOrder } from '@/Services/orders.Services'
import { PATHROUTES } from '@/utils/PathRoutes'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Checkout() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: '',
    exp: '',
    cvc: '',
    phone: '',
  })

  const { clearCart, getIdItems } = useCart()

  const { dataUser } = useAuth()

  const handleCheckout = async () => {
    if (!dataUser?.token) {
      return
    }
    try {
      await createOrder(getIdItems(), dataUser.token)
      clearCart()
    } catch (error) {
      Swal.fire({
        title: 'Error en la compra',
        text: 'Ocurrió un problema procesando tu pago. Inténtalo nuevamente.',
        icon: 'error',
        confirmButtonText: 'Entendido',
      })
    }
  }

  useEffect(() => {
    if (dataUser?.user) {
      setForm(prev => ({
        ...prev,
        name: dataUser.user.name || '',
        email: dataUser.user.email || '',
        address: dataUser.user.address || '',
        phone: dataUser.user.phone || '',
      }))
    }
  }, [dataUser])

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Checkout info:', form)
  }

  return (
    <section className="w-full max-w-3xl mx-auto p-6 flex flex-col gap-6 bg-GrisClaro">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full bg-GrisClaro cursor-no-drop"
            readOnly
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full bg-GrisClaro cursor-no-drop"
            readOnly
            required
          />
        </div>


        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full bg-GrisClaro cursor-no-drop"
          required
        />

        <input
          type="text"
          name="Phone"
          placeholder="Telefono"
          value={form.phone}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full bg-GrisClaro cursor-no-drop"
          readOnly
          required
        />

        <h2 className="text-xl font-semibold mt-4">Información de pago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            value={form.cardNumber}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="exp"
            placeholder="MM/AA"
            value={form.exp}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full"
            required
          />
        </div>

        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={form.cvc}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full md:w-1/3"
          required
        />

        <button
          onClick={() => {
            if (!form.cardNumber || !form.exp || !form.cvc) {
              Swal.fire({
                title: 'Campos incompletos',
                text: 'Por favor completa todos los campos antes de continuar.',
                icon: 'warning',
                confirmButtonText: 'Entendido',
              })
              return 
            }

            handleCheckout()
            Swal.fire({
              title: '¡Compra exitosa!',
              text: 'Tu orden fue creada con éxito.',
              icon: 'success',
              showConfirmButton: true,
              confirmButtonText: 'Continuar',
            }).then(result => {
              if (result.isConfirmed) {
                router.push(PATHROUTES.DASHBOARD)
              }
            })
          }}
          type="submit"
          className="bg-azulElectrico items-center text-white py-3 rounded-lg mt-4 hover:bg-Verde-Azulado transition cursor-pointer w-full"
        >
          Confirmar compra
        </button>
      </form>
    </section>
  )
}
