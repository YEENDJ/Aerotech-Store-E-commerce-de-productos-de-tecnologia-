import { getAllProductsService } from '@/Services/products.services'
import ProductsList from '@/components/ProductsList'

const Productos = async () => {
  const allProducts = await getAllProductsService()

  const products = Array.isArray(allProducts) ? allProducts : []

  return (
    <div className="flex justify-center  bg-GrisClaro ">
      <ProductsList products={products} />
    </div>
  )
}

export default Productos
