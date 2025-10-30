
import ProductDetailCard from '@/components/ProductDetailCard';
import { IProducts } from '@/interfaces/Iproducts';
import { getAllProductByIdService } from '@/Services/products.services';
import { notFound } from 'next/navigation';
import React from 'react'

interface ProductDetailProps{
  params: {
    idProduct : string;
  }
}

const ProductDetailPage = async ({params}: ProductDetailProps) => {
  const {idProduct} = params;

  let productDataid : IProducts;


  try {
    productDataid = await getAllProductByIdService (idProduct)
  } catch (error) {
    notFound()
  }
  return (
    <div>este es mi products {idProduct}
    <ProductDetailCard product={productDataid} />
    </div>
    
  )
}

export default ProductDetailPage
