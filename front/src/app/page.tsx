import ProductCard from "@/components/ProductCard";
import IProducts from "@/interfaces/Iproducts";
import {ListProducts} from "@/mocks/ListProducts";


export default function CardProduct() {
  return (
    <div>
      <div>
        {ListProducts.map((ListProducts:IProducts) =>{
        return <ListProducts name = {ListProducts.name} price = {ListProducts.price} img ={ListProducts.image} />
        }) }  
      </div>
        
    </div>
  );
}
