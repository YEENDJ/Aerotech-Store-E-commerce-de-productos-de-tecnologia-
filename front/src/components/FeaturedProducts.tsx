import React from "react";
import ProductCard from "@/components/ProductCard";
import { IProducts } from "@/interfaces/Iproducts";
import { getAllProductByIdService } from "@/Services/products.services";

interface FeaturedProductsProps {
  featuredIds: string[]; // los IDs de los productos destacados
}

const FeaturedProducts = async ({ featuredIds }: FeaturedProductsProps) => {
  // obtenemos los productos por ID
  const featuredProducts: IProducts[] = [];

  for (const id of featuredIds) {
    try {
      const product = await getAllProductByIdService(id);
      featuredProducts.push(product);
    } catch (error) {
      console.error(`Error cargando producto destacado con ID: ${id}`, error);
    }
  }

  return (
    <div className="min-h-[60vh] bg-[#F8F9FA] py-10 w-full overflow-y-auto flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-[#1A1A1A] mb-8 text-center">
        Productos Destacados
      </h1>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-8
          w-full
          max-w-[1300px]
          px-6
        "
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;