import FeaturedProducts from "@/components/FeaturedProducts";
import ProductCard from "@/components/ProductCard";
import { getAllProductsService } from "@/Services/products.services";




 const Home = async () => {

  const allProducts = await getAllProductsService()
  
  return (
    <div className="flex flex-wrap justify-around content-around items-start mt-5 p-5 gap-y-6 bg-[#FFFFFF]">
      <section className="flex justify-center gap-10">
        {allProducts &&
        allProducts.map((product) => {
          return <ProductCard product={product} key={product.name}/>
        })
        }
      </section> 
    </div>
);

}


export default Home;



