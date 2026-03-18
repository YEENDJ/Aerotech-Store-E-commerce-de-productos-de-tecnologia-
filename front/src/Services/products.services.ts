import { IProducts } from '@/interfaces/Iproducts'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
export const getAllProductsService = async () => {
  try {
    const res = await fetch(`${API_URL}/products`, {
      method: 'GET',
    })
    const products: IProducts[] = await res.json()
    return products
  }catch (error) {
  console.error('Error obteniendo productos:', error)
  throw error
}
}

export const getAllProductByIdService = async (id: string) => {
  try {
    const allProducts = await getAllProductsService()
    const product = allProducts.find(product => product.id === Number(id))
    if (!product) {
      throw new Error('No se encontro un producto con ese ID')
    }
    return product
  } catch (error) {
  console.error('Error obteniendo producto:', error)
  throw error
}
}
