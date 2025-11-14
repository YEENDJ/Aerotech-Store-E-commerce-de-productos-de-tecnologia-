
import { useCart } from "@/contexts/CartContext" 
import { IProducts } from "@/interfaces/Iproducts"


interface ButtonProps {
  product: IProducts
}

const ButtonAddToCart = ({ product }: ButtonProps) => {
  const { addToCart } = useCart()

 const handleAddToCart = () => {
  addToCart(product);
};

  return (
    <button
      onClick={handleAddToCart}
      className="cursor-pointer w-full bg-[#007BFF] text-white px-3 py-2 rounded-lg hover:bg-[#0056cc] transition mt-4 text-sm"
    >
      Agregar al carrito
    </button>
  )
}

export default ButtonAddToCart