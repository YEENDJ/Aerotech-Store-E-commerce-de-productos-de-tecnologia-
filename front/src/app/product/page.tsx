import { getAllProductsService } from "@/Services/products.services";
import ProductsList from "@/components/ProductsList";

const Home = async () => {
  // Obtenemos todos los productos
  const allProducts = await getAllProductsService();

  // Validación por si la respuesta viene vacía o incorrecta
  const products = Array.isArray(allProducts) ? allProducts : [];

  return (
    <div className="flex justify-center bg-[#FFFFFF]">
      <ProductsList products={products} />
    </div>
  );
};

export default Home;