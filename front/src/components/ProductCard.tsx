
"use client"

import { IProducts } from "@/interfaces/Iproducts";
import Link from "next/link";
import ButtonAddToCart from "./ButtonAddToCart";


interface CardProps {
  product: IProducts;
}

const ProductCard = ({ product }: CardProps) => {
  return (

<div className="flex flex-col w-72 items-center bg-white rounded-xl shadow hover:shadow-lg transition p-4 gap-2">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain rounded-md"
      />

      <p className="text-center font-semibold text-gray-800 break-words whitespace-normal leading-tight min-h-[48px]">
        {product.name}
      </p>

      <p className="text-[#007BFF] font-bold text-lg">
        ${product.price.toLocaleString()}
      </p>

      <Link href={`/product/${product.id}`} className="w-full max-w-[220px]">
        <button className="cursor-pointer w-full bg-Verde-Azulado text-white px-3 py-2 rounded-lg hover:bg-azulElectrico transition text-sm">
          Ver Mas
        </button>
      </Link>

      <ButtonAddToCart product={product} />
</div>


  );
};

export default ProductCard;