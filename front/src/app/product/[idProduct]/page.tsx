
import React from 'react'

interface ProductDetailProps{
  params: {
    idProduct : string;
  }
}

const ProductDetailPage = ({params}: ProductDetailProps) => {

  const {idProduct} = params;
  return (
    <div>este es mi products {idProduct}</div>
  )
}

export default ProductDetailPage
