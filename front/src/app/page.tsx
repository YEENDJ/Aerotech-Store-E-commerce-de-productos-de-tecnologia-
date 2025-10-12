import ProductCard from "@/components/ProductCard";
import { IProducts } from "@/interfaces/Iproducts";
import { ListProducts } from "@/mocks/ListProducts";


export default function CardProduct() {
  return (
    <div>
      <div className="flex flex-wrap justify-around content-around items-start mt-5 p-5 gap-y-6 bg-[#FFFFFF]">
        {
          ListProducts.map((Product: IProducts) => {
            return (
              <ProductCard 
                name={Product.name}
                price={Product.price}
                img={Product.image}
                key={Product.id}
              />
            );
          })
        }
      </div>
    </div>
  );
}
