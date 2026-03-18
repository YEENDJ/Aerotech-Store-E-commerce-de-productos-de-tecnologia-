import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
    {
        
        "name": "DJI Neo",
        "price": 999900,
        "description": "El DJI Neo es un dron compacto y ligero con cámara 4K, vuelo estable y funciones inteligentes. La versión sencilla incluye el dron, una batería, control remoto, hélices de repuesto, cable USB-C y protector del gimbal para mayor seguridad.",
        "image": "https://se-cdn.djiits.com/tpc/uploads/carousel/image/a1c8825ca01a2887f29d59f757c36ebb@ultra.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        
        "name": "DJI Neo Fly More Combo",
        "price": 1799900,
        "description": "El DJI Neo es un dron compacto y potente con cámara 4K y vuelo inteligente. La versión Fly More Combo incluye tres baterías, control remoto, hub de carga bidireccional, hélices de repuesto, protectores de hélices, cable USB-C y estuche de transporte.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/12/dji-neo-fly-more-combo-in-box-Recovered.webp-2.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Neo Motion Fly  More Combo",
        "price": 2849900,
        "description": "El DJI Neo es un dron compacto y ágil con cámara 4K, vuelo inteligente y gran estabilidad, ideal para capturar tomas aéreas impresionantes. La versión Motion Fly More Combo incluye tres baterías, control remoto Motion 3, hub de carga bidireccional, hélices de repuesto, protectores de hélices y estuche de transporte..",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/12/DJI-Neo-Motion-Fly-More-Combo_x1.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        
        "name": "DJI Neo 2",
        "price": 1299900,
        "description": "El DJI Neo 2 es un dron ultracompacto diseñado para obtener imágenes nítidas y estables con total facilidad. Ofrece excelente autonomía, vuelo seguro e interfaz intuitiva ideal para creadores y principiantes. La versión sencilla incluye el dron, una batería inteligente, hélices de repuesto, cable de carga y protectores de hélice, brindando todo lo necesario para volar desde el primer día.",
        "image": "https://audiocolor.co/cdn/shop/files/Productos-Audiocolor2025_DroneDJINeo2-05.jpg?v=1763326822&width=1200",
        "categoryId": 1,
        "stock": 10
    },
    {
        
        "name": "DJI Neo 2 Fly More Combo",
        "price": 1329900,
        "description": "El DJI Neo 2 Fly More Combo ofrece una experiencia de vuelo completa y versátil, ideal para creadores que buscan más tiempo en el aire y mayor seguridad. Su cámara estable y controles intuitivos garantizan imágenes fluidas y nítidas. El combo incluye el dron, tres baterías inteligentes, hélices adicionales, estuche de transporte, hub de carga y cableado, ofreciendo más autonomía, protección y comodidad para cada proyecto.",
        "image": "https://audiocolor.co/cdn/shop/files/Audiocolor_DroneDJINeo2FlyMoreCombo-05.jpg?v=1763331036&width=1200",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Neo 2 Motion Fly  More Combo",
        "price": 3299900,
        "description": "El DJI Neo 2 Motion Fly More Combo combina control intuitivo y máxima diversión gracias al Motion Controller, que permite volar con movimientos naturales y precisos. Su cámara estabilizada ofrece imágenes fluidas y nítidas. El combo incluye el dron, el Motion Controller, tres baterías inteligentes, hélices adicionales, estuche de transporte, hub de carga y cables necesarios, brindando mayor autonomía, control inmersivo y una experiencia de vuelo completa desde el primer día.",
        "image": "https://se-cdn.djiits.com/tpc/uploads/carousel/image/2410e131d32dca8a5a9726927b921367@ultra.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 4K",
        "price": 1599900,
        "description": "El DJI Mini 4K es un dron ultraligero y portátil con cámara 4K, estabilización precisa y modos de vuelo inteligentes, perfecto para creadores en movimiento. La versión sencilla incluye el dron, una batería, control remoto, hélices de repuesto, cable USB-C, protector del gimbal y herramientas de montaje esenciales.",
        "image": "https://drontechx.com/wp-content/uploads/2023/12/1-2.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 4K Fly More Combo",
        "price": 2499900,
        "description": "El DJI Mini 4K es un dron ultraligero y potente con cámara 4K, estabilización de tres ejes y funciones inteligentes para grabaciones fluidas y creativas. La versión Fly More Combo incluye tres baterías, hub de carga bidireccional, control remoto, hélices de repuesto, bolsa de transporte, cable USB-C y protectores del gimbal.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/11/DJI-Mini-2-SE-Combo-2-scaled-1.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 3",
        "price": 1999900,
        "description": "El DJI Mini 3 es un dron ligero y versátil con cámara 4K HDR, vuelo estable y batería de larga duración, ideal para capturar vistas aéreas impresionantes. La versión sencilla con control RC-N1 incluye el dron, una batería, control remoto RC-N1, hélices de repuesto, cable USB-C y protector del gimbal.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/03/9a451bcb753bf10952c60233e7454e67@origin-1920x1920.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 3 (DJI RC)",
        "price": 2599900,
        "description": "El DJI Mini 3 es un dron compacto y ligero con cámara 4K HDR, vuelo inteligente y gran autonomía, ideal para creadores y viajeros. La versión sencilla con control DJI RC incluye el dron, una batería, control remoto DJI RC con pantalla, hélices de repuesto, cable USB-C y protector del gimbal.",
        "image": "https://comunicacionesyseguridad.com/wp-content/uploads/2024/09/MINI-3-RC.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 3 Fly More Combo (DJI RC-N1)",
        "price": 3149900,
        "description": "El DJI Mini 3 es un dron ligero y potente con cámara 4K HDR, vuelo inteligente y excelente autonomía, ideal para capturar paisajes y momentos únicos. La versión Combo con control RC-N1 incluye el dron, tres baterías, control remoto RC-N1, hub de carga bidireccional, hélices de repuesto, cable USB-C y estuche de transporte.",
        "image": "https://djistore.com.pa/wp-content/uploads/2022/12/DJI_MINI3_10.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 3 Fly More Combo (DJI RC)",
        "price": 3499900,
        "description": "El DJI Mini 3 es un dron ligero, potente y fácil de usar, ideal para capturar videos 4K HDR y fotos aéreas impresionantes con gran autonomía. La versión Combo RC incluye el dron, control remoto DJI RC con pantalla, tres baterías, hélices de repuesto, hub de carga bidireccional y estuche de transporte..",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2023/07/DJI-Mini-3-Fly-More-Combo-%EF%BC%88RC-1-scaled-1.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 4 Pro (DJI RC-N2)",
        "price": 3799900,
        "description": "El DJI Mini 4 Pro es un dron ultra ligero y avanzado, diseñado para capturar video 4K HDR y fotos aéreas de alta calidad con máxima estabilidad y seguridad. Su control RC-N2 ofrece una conexión más estable y baja latencia, ideal para vuelos precisos. La versión estándar incluye el dron, el control RC-N2, una batería inteligente, hélices de repuesto, cableado completo y protector de gimbal, listo para volar desde el primer momento.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2023/10/1695671537_IMG_2087266_500x.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 4 Pro (DJI RC2)",
        "price": 3999900,
        "description": "El DJI Mini 4 Pro es un dron compacto, ligero y muy potente, ideal para capturar videos 4K HDR y fotos aéreas de alta calidad con sensores avanzados para un vuelo más seguro. La versión con control RC 2 ofrece una señal más estable y mayor alcance gracias a O4, además de una experiencia de vuelo precisa e intuitiva. Incluye el dron, el control RC 2, una batería inteligente, hélices de repuesto, cables y protector de gimbal, listo para usar desde el primer vuelo.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2023/10/3prod_500x.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 4 Pro Fly More Combo (DJI RC2)",
        "price": 4499900,
        "description": "El DJI Mini 4 Pro Fly More Combo con control RC 2 es un paquete completo pensado para aprovechar al máximo cada vuelo. Ofrece video 4K HDR, sensores avanzados para mayor seguridad y un diseño ultraligero fácil de llevar a cualquier lugar. El control RC 2 garantiza una conexión más estable y de largo alcance gracias a O4. El combo incluye el dron, el control RC 2, tres baterías inteligentes, hub de carga, hélices de repuesto, estuche de transporte y accesorios adicionales, ideal para sesiones más largas y sin interrupciones.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/01/dji-mini-4-pro-drone-fly-more-combo-plus-with-rc-2-controller-front.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 5 Pro Fly More Combo (DJI RC-N3)",
        "price": 4999900,
        "description": "El DJI Mini 5 Pro Fly More Combo con control RC-N3 es un dron ultraligero y potente diseñado para capturar videos en alta definición y fotografías aéreas con máxima estabilidad. Incluye sensores avanzados para un vuelo seguro, y su control RC-N2 brinda una señal confiable y de largo alcance, ideal para vuelos precisos. En el combo encontrarás el dron, el control RC-N2, tres baterías inteligentes, un hub de carga, hélices de repuesto y un estuche de transporte, para que puedas volar más tiempo y con tranquilidad.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/09/DJI_Mini_5_Pro_Fly_More_Combo_DJI_RC-N3_2-1024x683.webp",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Mini 5 Pro Fly More Combo (DJI RC2)",
        "price": 4999900,
        "description": "El DJI Mini 5 Pro Fly More Combo con control RC 2 ofrece una experiencia de vuelo completa y confiable, ideal para quienes buscan calidad de imagen y mayor autonomía. Su sistema de transmisión O4 permite una conexión estable y un control preciso a larga distancia, mientras su cámara renovada captura video detallado y fotografías nítidas incluso en condiciones exigentes. El combo incluye tres baterías, hub de carga, hélices de repuesto, estuche de transporte y todos los accesorios necesarios para disfrutar sesiones de vuelo prolongadas desde el primer día.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/09/DJI-Mini-5-Pro-Fly-More-Combo-DJI-RC-2-2-scaled.jpg",
        "categoryId": 1,
        "stock": 10
    },
    {
        "name": "DJI Osmo Pocket 3 Creator Combo",
        "price": 2999900,
        "description": "La DJI Osmo Pocket 3 Creator Combo es la herramienta perfecta para creadores que quieren calidad profesional en un dispositivo compacto. Con su sensor de alta resolución, estabilización avanzada y grabación en 4K o más, permite capturar video fluido y nítido desde cualquier ángulo. El combo incluye la Osmo Pocket 3, micrófono externo, empuñadura con controles adicionales, trípode pequeño, filtro ND y accesorios para potenciar tus producciones. Ideal para vlogging, viajes, cine independiente y contenido creativo en movimiento.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/03/IMG_8202.jpeg",
        "categoryId": 3,
        "stock": 10
    },
    {
        "name": "DJI Osmo Nano (128 GB)",
        "price": 1599900,
        "description": "La DJI Osmo Nano con 128 GB es una cámara de vlogging ultracompacta que lleva calidad avanzada a la palma de tu mano. Gracias a su diseño minimalista y muy ligera, puedes grabar video 4K con estabilización electrónica para tomas suaves sin necesidad de trípodes voluminosos. Su almacenamiento interno de 128 GB te da espacio amplio para grabar largos periodos sin preocuparte por tarjetas externas. Ideal para creadores móviles, viajeros y cualquiera que quiera capturar momentos en alta resolución sin sacrificar portabilidad.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/10/Osmo-Nano-in-the-box-2-scaled.jpg",
        "categoryId": 3,
        "stock": 10
    },
    {
        "name": "DJI Osmo 360 Adventure Combo",
        "price": 2899900,
        "description": "La DJI Osmo 360 Adventure Combo te permite capturar el mundo en 360° con resolución 8K, fotos de 120 MP y estabilización avanzada. Compacta, resistente y lista para cualquier aventura, ofrece color de 10 bits, grabación fluida y accesorios magnéticos para máxima creatividad en movimiento.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-21-at-4.17.15-PM.jpeg",
        "categoryId": 3,
        "stock": 10
    },
    {
        "name": "DJI Osmo 360 Standard Combo",
        "price": 2299900,
        "description": "La DJI Osmo 360 Adventure Combo te permite capturar el mundo en 360° con resolución 8K, fotos de 120 MP y estabilización avanzada. Compacta, resistente y lista para cualquier aventura, ofrece color de 10 bits, grabación fluida y accesorios magnéticos para máxima creatividad en movimiento.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-21-at-4.14.48-PM1.jpeg",
        "categoryId": 3,
        "stock": 10
    },
    {
        "name": "DJI Osmo Action 5 pro Adventure Combo",
        "price": 2399900,
        "description": "La DJI Osmo Action 5 Pro Adventure Combo es la cámara ideal para quienes buscan calidad profesional en cualquier aventura. Su sensor mejorado, estabilización avanzada y grabación en 4K/8K permiten capturar imágenes nítidas y fluidas incluso en movimiento. El combo incluye la Action 5 Pro, baterías adicionales, empuñadura resistente, soportes adhesivos, carcasa protectora y accesorios esenciales para aventuras extremas. Perfecta para deportes, viajes, vlogging y contenido dinámico en exteriores.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/10/Disenosintitulo-2024-09-18T165348.312-1000x1000.webp",
        "categoryId": 3,
        "stock": 10
    },
    {
        "name": "DJI Mic Mini Dual",
        "price": 799900,
        "description": "El DJI Mic Mini Dual es el sistema perfecto para creadores que necesitan audio claro y profesional en un formato compacto. Con dos transmisores ultraligeros, captación nítida y conexión estable, es ideal para entrevistas, vlogs y grabaciones en movimiento. El combo incluye dos micrófonos, receptor, estuche de carga, adaptadores y accesorios esenciales para mejorar cualquier producción. Diseñado para ofrecer sonido limpio, fiable y fácil de usar en todo tipo de proyectos.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2024/11/DJI-Mic-Mini-%EF%BC%88%E4%B8%A4%E5%8F%91%E4%B8%80%E6%94%B6%EF%BC%8C%E5%90%AB%E5%85%85%E7%94%B5%E7%9B%92%EF%BC%89%E2%80%94%E5%B7%A6%E4%BE%A745%E5%BA%A6-DJI-Mic-Mini-%EF%BC%882TX1RXCharging-Case%EF%BC%89%E2%80%94Left-Side-45-Degree-1-scaled.jpg",
        "categoryId": 2,
        "stock": 10
    },
        {
        "name": "DJI Mic 3 Dual",
        "price": 1599900,
        "description": "El DJI Mic 3 Dual ofrece audio profesional con un diseño refinado y un rendimiento superior. Sus dos transmisores garantizan una captura nítida, estable y con excelente rango, ideal para entrevistas, grabaciones en exteriores y contenido de alto nivel. El combo incluye estuche de carga inteligente, receptor mejorado, adaptadores y accesorios esenciales para un flujo de trabajo más cómodo. Perfecto para creadores que buscan calidad, versatilidad y sonido impecable en cualquier situación",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/08/1a935b989b75436114bb65c92db51b4a@origin.jpg",
        "categoryId": 2,
        "stock": 10
    },
    {
        "name": "Adaptador teléfono DJI Mic Mini (Lightning)",
        "price": 119900,
        "description": "El Adaptador para teléfono DJI Mic Mini (Lightning) permite conectar el sistema de micrófono a dispositivos Apple con puerto Lightning. Ofrece transmisión de audio estable y de baja latencia, ideal para grabar contenido móvil con alta calidad. Su diseño compacto y plug-and-play facilita un uso rápido, práctico y profesional.",
        "image": "https://tiendadefotografia.com.co/wp-content/uploads/2025/03/517cd7aa1cd2b1b29462c99cbb4a7d34@origin-scaled.jpg",
        "categoryId": 2,
        "stock": 10
    },
];






export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};


