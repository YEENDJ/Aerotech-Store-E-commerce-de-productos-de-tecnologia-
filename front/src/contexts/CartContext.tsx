'use client'
import { IProducts } from '@/interfaces/Iproducts'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import Swal from 'sweetalert2'


interface CartContextProps {
  cartItems: IProducts[]
  addToCart: (product: IProducts) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  getTotal: () => number
  getTotalEnvio: () => number
  getIdItems: () => number[]
  getItemsCount: () => number
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  getTotalEnvio: () => 0,
  getIdItems: () => [],
  getItemsCount: () => 0,
})

interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { dataUser } = useAuth()
  const [cartItems, setCarItem] = useState<IProducts[]>([])
  const userId = dataUser?.user.id
  const CART_KEY = userId ? `cart_${userId}` : null

  useEffect(() => {
    if (!CART_KEY) return

    const saved = localStorage.getItem(CART_KEY)

    if (saved) {
      const parsed = JSON.parse(saved)

      const cleanCart = parsed.filter((item: IProducts) => item && item.id)

      setCarItem(cleanCart)
    } else {
      setCarItem([])
    }
  }, [CART_KEY])

  useEffect(() => {
    if (!CART_KEY) return
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  }, [cartItems, CART_KEY])

  const addToCart = (product: IProducts) => {
    if (!dataUser) {
      Swal.fire({
        title: 'Ooops',
        text: 'Debes estar logueado para añadir productos al carrito de compras',
        icon: 'warning',
        timer: 2500,
        showConfirmButton: false,
      })
      return
    }
    const ExistingProduct = cartItems.some(item => item?.id === product.id)
    if (ExistingProduct) {
      Swal.fire({
        title: 'Ooops',
        text: 'Solo es permitido seleccionar 1 unidad por usuario',
        icon: 'warning',
        timer: 2500,
        showConfirmButton: false,
      })
      return
    } else {
      Swal.fire({
        title: '¡Agregado!',
        text: 'El producto fue agregado al carrito correctamente.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
      })
    }
    if (!product || !product.id) return
    setCarItem(prevItems => [...prevItems, product])
  }

  const removeFromCart = (productId: number) => {
    setCarItem(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCarItem([])
    if (typeof window !== 'undefined' && window.localStorage) {
      if (CART_KEY) {
        localStorage.removeItem(CART_KEY)
      }
    }
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const getTotalEnvio = () => {
    return cartItems.reduce((total, item) => total + item.price, 0) + 25000
  }

  const getIdItems = () => {
    return cartItems.filter(Boolean).map(item => item.id)
  }

  const getItemsCount = () => {
    return cartItems.length
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        getIdItems,
        getItemsCount,
        getTotalEnvio,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
