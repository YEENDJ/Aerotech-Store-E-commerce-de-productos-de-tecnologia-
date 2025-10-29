import { IProducts } from "@/interfaces/Iproducts"
import Link from "next/link"



interface CardProps {
    product : IProducts
}

const  ProductCard = ({ product }: CardProps) => {
    return (
        <Link href="/product/idProduct">
        <div  key={product.id} className="flex flex-col items-center ">
            <img src={product.image} className="w-100 h-100 object-cover"/>
            <p className="mt-2 text-[#1A1A1A] "> {product.name} </p>
            <p className="mt-2 text-[#1A1A1A]"> {product.price} </p>
            <p className="mt-2 text-[#1A1A1A]" > {product.description} </p>
            <button className="w-1/2 bg-azulElectrico text-white px-4 py-2 rounded-lg hover:bg-[#0056cc] transition mt-4"> Agregar al carrito </button>
        </div>
         </Link>
    );
};

export default ProductCard