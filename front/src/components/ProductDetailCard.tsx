import React from "react";
import { IProducts } from "@/interfaces/Iproducts";

interface ProductDetailCardProps {
  product: IProducts;
}

const ProductDetailCard = ({ product }: ProductDetailCardProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg p-6 gap-8 max-w-5xl mx-auto">
      {/* Imagen del producto */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-sm h-auto object-contain rounded-lg"
        />
      </div>

      {/* Detalle del producto */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Info principal */}
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Nuevo | +100 vendidos
          </p>
          <h1 className="text-2xl font-semibold text-NegroCarbon mb-3">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-[#007BFF] mb-4">
            ${product.price.toLocaleString()}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {product.description}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-3">
          <button className="w-full bg-[#007BFF] text-white py-3 rounded-xl font-semibold hover:bg-[#0056cc] transition">
            Comprar ahora
          </button>

          <button className="w-full border border-[#007BFF] text-[#007BFF] py-3 rounded-xl font-semibold hover:bg-[#E5E5E5] transition">
            Agregar al carrito
          </button>
        </div>

        {/* Envío y garantía */}
        <div className="mt-6 text-sm text-gray-600">
          <p>🚚 Envío gratis a todo el país</p>
          <p className="mt-1">🛡️ Garantía de compra protegida</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
