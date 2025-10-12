
interface ProductsCard {
    name: string
    img: string
    price: number
}

function ProductCard({ name, img, price }: ProductsCard) {
    return (
        <div className="flex flex-col items-center ">
            <img src={img} className="w-100 h-100 object-cover"/>
            <span className="mt-2"> {name}</span>
            <span className="mt-2"> ${price} </span>
            {/* <button className="border border-gray-300 mt-2 rounded-md " > Agregar al Carrito </button> */}
            <button className="w-1/2 bg-[#0A84FF] text-white px-4 py-2 rounded-lg hover:bg-[#006FDD] transition mt-4"> Agregar al carrito </button>
        </div>
    )
}

export default ProductCard