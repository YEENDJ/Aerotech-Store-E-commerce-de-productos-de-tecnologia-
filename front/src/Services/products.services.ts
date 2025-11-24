import { IProducts } from '@/interfaces/Iproducts'

export const getAllProductsService = async () => {
  try {
    const res = await fetch('http://localhost:3005/products', {
      method: 'GET',
    })
    const products: IProducts[] = await res.json()
    return products
  } catch (error: any) {
    throw new Error(error)
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
  } catch (error: any) {
    throw new Error()
  }
}
