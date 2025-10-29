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
        "name": "DJI Mini 4K",
        "price": 1599900,
        "description": "El DJI Mini 4K es un dron ultraligero y portátil con cámara 4K, estabilización precisa y modos de vuelo inteligentes, perfecto para creadores en movimiento. La versión sencilla incluye el dron, una batería, control remoto, hélices de repuesto, cable USB-C, protector del gimbal y herramientas de montaje esenciales.",
        "image": "https://dronerossantander.com/wp-content/uploads/2023/03/DJI-Mini-2-SE-2-scaled.jpg",
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


