import { PATHROUTES } from "@/utils/PathRoutes";
import { Camera, Drone, Mic, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Categorias() {
const items = [
{
title: "Cámaras",
icon: <Camera className="w-10 h-10" />,
},
{
title: "Drones",
icon: <Drone className="w-10 h-10" />,
},
{
title: "Accesorios",
icon: <ShoppingCart className="w-10 h-10" />,
},
];


return (
<section className="w-full py-10">
<h2 className="text-2xl font-bold mb-6 text-center">Categorías</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div
className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer"
>
    <h1 className="text-center my-3" > Video </h1>
    <Link href={PATHROUTES.VIDEO}>
    <Camera className="w-30 h-30 text-azulElectrico hover:text-Verde-Azulado"/>
    </Link>
</div>

<div
className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer"
>
    <Link href={PATHROUTES.DRONES}>
    <h1 className="text-center my-3" > Drones </h1>
    <Drone className="w-30 h-30 text-azulElectrico hover:text-Verde-Azulado"/>
    </Link>
</div>

<div
className="bg-white rounded-2xl  p-8 flex flex-col items-center justify-center shadow hover:shadow-lg  transition cursor-pointer"
>
    <Link href={PATHROUTES.AUDIO}>
    <h1 className="text-center my-3"> Audio </h1>
    <Mic className="w-30 h-30 text-azulElectrico hover:text-Verde-Azulado"/>
    </Link>
</div>

</div>
</section>
);
}