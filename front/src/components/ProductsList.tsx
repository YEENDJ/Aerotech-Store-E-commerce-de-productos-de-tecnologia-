// import React from "react";
// import ProductCard from "@/components/ProductCard";
// import { IProducts } from "@/interfaces/Iproducts";

// interface ProductsListProps {
//   products: IProducts[];
// }

// const ProductsList = ({ products }: ProductsListProps) => {
//   return (
//     <div className="min-h-screen bg-[#F8F9FA] py-10 w-full overflow-y-auto ">
//       <h1 className="text-3xl font-semibold text-NegroCarbon mb-8 text-center">
//         Nuestros Productos
//       </h1>

//       <div
//         className="
//           grid
//           gap-8
//           sm:grid-cols-1
//           md:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//           justify-items-center
//         "
//       >
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsList;

import React from 'react'
import ProductCard from '@/components/ProductCard'
import { IProducts } from '@/interfaces/Iproducts'

interface ProductsListProps {
  products: IProducts[]
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-10 w-full overflow-y-auto">
      <h1 className="text-3xl font-semibold text-NegroCarbon mb-8 text-center">
        Nuestros Productos
      </h1>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {products.map(product => (
          <div
            key={product.id}
            className="
              w-full 
              sm:w-[90%] 
              md:w-[45%] 
              lg:w-[30%] 
              xl:w-[30%] 
              flex 
              justify-center
              transform
              hover:scale-[1.03]
              transition-transform
              duration-300
            "
          >
            <div className="w-full max-w-[360px]">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
