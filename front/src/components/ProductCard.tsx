// import { IProducts } from "@/interfaces/Iproducts"
// import Link from "next/link"



// interface CardProps {
//     product : IProducts
// }

// const  ProductCard = ({ product }: CardProps) => {
//     return (
//         <Link key={product.id} href={`/product/${product.id}`}>
//         <div  key={product.id} className="flex flex-col items-center ">
//             <img src={product.image} className="w-100 h-100 object-cover"/>
//             <p className="mt-2 text-NegroCarbon "> {product.name} </p>
//             <p className="mt-2 text-NegroCarbon"> {product.price} </p>
//             <p className="mt-2 text-NegroCarbon" > {product.description} </p>
//             <button className="w-1/2 bg-azulElectrico text-white px-4 py-2 rounded-lg hover:bg-[#0056cc] transition mt-4"> Agregar al carrito </button>
//         </div>
//          </Link>
//     );
// };

// export default ProductCard
"use client"

import { IProducts } from "@/interfaces/Iproducts";
import Link from "next/link";
import ButtonAddToCart from "./ButtonAddToCart";


interface CardProps {
  product: IProducts;
}

const ProductCard = ({ product }: CardProps) => {
  return (
    <div className="flex flex-col w-72 h-96 items-center bg-white rounded-xl shadow-md hover:shadow-lg transition p-4" >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-contain mb-3 rounded-md"  
          />
        <p className="text-NegroCarbon font-semibold text-center line-clamp-1">
          {product.name}
        </p>
        <p className="text-[#007BFF] font-bold text-lg mt-1">
          ${product.price.toLocaleString()}
        </p>

    <Link href={`/product/${product.id}`} className="w-full max-w-[220px]">
        <button className="cursor-pointer w-full bg-[#007BFF] text-white px-3 py-2 rounded-lg hover:bg-[#0056cc] transition mt-4 text-sm"
        >
          Ver Mas
        </button>
    </Link>
    <ButtonAddToCart product ={product} />
  
      </div>

  );
};

export default ProductCard;