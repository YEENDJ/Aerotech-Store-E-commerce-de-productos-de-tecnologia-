
import ProductDetailCard from '@/components/ProductDetailCard';
import { IProducts } from '@/interfaces/Iproducts';
import { getAllProductByIdService } from '@/Services/products.services';
import { notFound } from 'next/navigation';
import React from 'react'
import swal from 'sweetalert';


interface ProductDetailProps{
  params: Promise<{
    idProduct : string;
  }>
}

const ProductDetailPage = async ({params}: ProductDetailProps) => {
  const {idProduct} = await params;

  let productDataid : IProducts;


  try {
    productDataid = await getAllProductByIdService (idProduct)
  } catch (error) {
    notFound()
  }
  return (
    <div>
    <ProductDetailCard product={productDataid} />
    </div>
    
  )
}

export default ProductDetailPage
