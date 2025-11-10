import swal from "sweetalert"
import { useCart } from "@/contexts/CartContext" 
import { IProducts } from "@/interfaces/Iproducts"
import Swal from "sweetalert2"

interface ButtonProps {
  product: IProducts
}

const ButtonAddToCart = ({ product }: ButtonProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
     Swal.fire({
    title: "¡Agregado!",
    text: "El producto fue agregado al carrito correctamente.",
    icon: "success",
    timer: 2000, 
    showConfirmButton: false, 
  })

    } else {
      Swal.fire({
    title: "Error",
    text: "No se pudo agregar el producto al carrito.",
    icon: "error",
    timer: 2000, 
    showConfirmButton: false, 
  })
    }
  }

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