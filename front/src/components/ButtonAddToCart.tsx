import { useCart } from '@/contexts/CartContext'
import { IProducts } from '@/interfaces/Iproducts'
import { ShoppingCart } from 'lucide-react'

interface ButtonProps {
  product: IProducts
}

const ButtonAddToCart = ({ product }: ButtonProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <button
      onClick={handleAddToCart}
      className="cursor-pointer w-full bg-azulElectrico text-white px-4 py-2 rounded-lg hover:bg-Verde-Azulado transition  flex items-center justify-center text-sm"
    >
      Agregar al
      <ShoppingCart size={20} className="ml-2" />
    </button>
  )
}

export default ButtonAddToCart
