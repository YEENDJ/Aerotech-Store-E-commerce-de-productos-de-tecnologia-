import { Camera, Drone, Mic, ShoppingCart } from "lucide-react";


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
    <h1> Camaras Deportivas</h1>
    <Camera className="w-30 h-30 text-azulElectrico hover:text-Verde-Azulado"/>
</div>

<div
className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer"
>
    <h1> Drones </h1>
    <Drone className="w-30 h-30 text-azulElectrico hover:text-Verde-Azulado"/>
</div>

<div
className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer"
>
    <h1> Microfonos </h1>
    <Mic className="w-30 h-30 text-azulElectrico hover:text-Verde-Azulado"/>
</div>

</div>
</section>
);
}