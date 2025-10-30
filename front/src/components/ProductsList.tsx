import React from "react";
import ProductCard from "@/components/ProductCard";
import { IProducts } from "@/interfaces/Iproducts";

interface ProductsListProps {
  products: IProducts[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-10 w-full overflow-y-auto ">
      <h1 className="text-3xl font-semibold text-NegroCarbon mb-8 text-center">
        Nuestros Productos
      </h1>

      <div
        className="
          grid 
          gap-8 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5
          justify-items-center
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;