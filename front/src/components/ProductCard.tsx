
interface ProductsCard {
    name: string
    img: string
    price: number
}

function ProductCard({ name, img, price }: ProductsCard) {
    return (
        <div className="flex border-1 rounded-lg">
            <img src={img} />
            <span> {name}</span>
            <span> {price} </span>
        </div>
    )
}

export default ProductCard