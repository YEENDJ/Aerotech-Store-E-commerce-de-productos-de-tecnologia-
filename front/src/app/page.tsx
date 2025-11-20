import FeaturedProducts from "@/components/FeaturedProducts";
import HeroVideo from "@/components/Hero";
import OrderList from "@/components/OrderList";
import ProductCard from "@/components/ProductCard";
import PuntoFisico from "@/components/RetailStore";
import { getAllProductsService } from "@/Services/products.services";




 const Home = async () => {

  const allProducts = await getAllProductsService()
  
  return (

        <>
        <HeroVideo/>
        <FeaturedProducts featuredIds={["1", "2", "3"]} />
        <PuntoFisico/>
        </>

);

}



export default Home;



