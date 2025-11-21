import Categorias from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroVideo from "@/components/Hero";
import HeroVideo2 from "@/components/Hero2";
import OrderList from "@/components/OrderList";
import ProductCard from "@/components/ProductCard";
import PuntoFisico from "@/components/RetailStorePage";
import { getAllProductsService } from "@/Services/products.services";
import Productos from "./product/page";




 const Home = async () => {

  const allProducts = await getAllProductsService()
  
  return (

        <>
        <HeroVideo/>
        <Categorias/>
        <FeaturedProducts featuredIds={["5", "19", "24"]} />
        <HeroVideo2/>
        <Productos/>
        </>

);

}



export default Home;



