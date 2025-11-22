"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export default function CategoryProducts({ categoryId }: { categoryId: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("http://localhost:3005/products");
        const data: Product[] = await res.json();

        const filtered = data.filter(
          (item) => item.categoryId === categoryId
        );

        setProducts(filtered);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [categoryId]);

  if (loading)
    return <p className="text-center py-10 text-gray-600">Cargando productos...</p>;

  if (products.length === 0)
    return (
      <p className="text-center py-10 text-gray-600">
        No hay productos en esta categoría.
      </p>
    );

  return (
    
<>
<div className="flex flex-wrap justify-center gap-8 w-full max-w-[1300px] mx-auto px-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
</>

  );
}
