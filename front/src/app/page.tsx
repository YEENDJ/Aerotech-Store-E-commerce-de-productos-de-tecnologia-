import FeaturedProducts from "@/components/FeaturedProducts";
import HeroVideo from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getAllProductsService } from "@/Services/products.services";




 const Home = async () => {

  const allProducts = await getAllProductsService()
  
  return (

        <>
        <HeroVideo/>
        <FeaturedProducts featuredIds={["1", "2", "3"]} />
        </>

);

}



export default Home;



