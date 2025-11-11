import FeaturedProducts from "@/components/FeaturedProducts";
import HeroVideo from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getAllProductsService } from "@/Services/products.services";




 const Home = async () => {

  const allProducts = await getAllProductsService()
  
  return (
    <div className="flex flex-wrap justify-around content-around items-start mt-5 p-5 gap-y-6 bg-[#FFFFFF]">
      {/* <section className="flex justify-center gap-10 w-full"> */}
        <HeroVideo/>
        <FeaturedProducts featuredIds={["1", "2", "3"]} />
      {/* </section>  */}
    </div>
);

}


export default Home;



