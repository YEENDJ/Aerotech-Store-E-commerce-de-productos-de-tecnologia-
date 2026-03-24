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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 justify-items-center">
        {products.map(product => (
          <div
            key={product.id}
            className="w-full flex justify-center transform hover:scale-[1.03] transition-transform duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList
