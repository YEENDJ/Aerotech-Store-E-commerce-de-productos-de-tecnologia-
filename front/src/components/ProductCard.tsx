import IProducts from "@/interfaces/Iproducts"

interface IProductsCard{
    name: string
    img: string
    price: number
}

function ProductCard ({name, img, price } : IProductsCard)    {
return (
    <div>
        <span> {name}</span>
        <img src={img}/> 
        <span> {price} </span>
    </div> 
)


}

export default ProductCard