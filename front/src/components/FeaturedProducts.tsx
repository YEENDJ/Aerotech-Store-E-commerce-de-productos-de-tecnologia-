import { IProducts } from "@/interfaces/Iproducts";
import { ListProducts } from "@/mocks/ListProducts";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredIds = [1, 3, 5];

  const featuredProducts = ListProducts.filter((p) =>
    featuredIds.includes(p.id)
  );

  return (
  <div className=" py-10">
    <h1 className="text-2xl font-semibold text-center mb-8">
      PRODUCTOS DESTACADOS
    </h1>

    <div className="flex justify-center gap-10">
      {featuredProducts.map((product: IProducts) => (
        <ProductCard
          key={product.id}
          name={product.name}
          img={product.image}
          price={product.price}
        />
      ))}
    </div>
  </div>
);


}