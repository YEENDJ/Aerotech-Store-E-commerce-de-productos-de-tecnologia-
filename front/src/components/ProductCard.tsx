import Link from "next/link"


interface ProductsCard {
    name: string
    img: string
    price: number
}

function ProductCard({ name, img, price }: ProductsCard) {
    return (
        <Link href="/product/idProduct">
        <div   className="flex flex-col items-center ">
            <img src={img} className="w-100 h-100 object-cover"/>
            <span className="mt-2 text-[#1A1A1A] "> {name}</span>
            <span className="mt-2 text-[#1A1A1A]"> ${price.toLocaleString("es-CO")} </span>
            <button className="w-1/2 bg-[#007BFF] text-white px-4 py-2 rounded-lg hover:bg-[#0056cc] transition mt-4"> Agregar al carrito </button>
        </div>
        </Link>
    )
}

export default ProductCard