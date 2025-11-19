"use client"

import { useAuth } from '@/contexts/AuthContext';
import { Order } from '@/interfaces/IOrders';
import { getAllOrders } from '@/Services/orders.Services';
import React, { useEffect, useState } from 'react'

function OrderList () {
  const {dataUser} = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsloading] =useState<boolean>(false);
  const [error, setError] = useState <string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!dataUser?.token) {
        setOrders([]);
        return
      }

      setIsloading(true);
      setError(null);
      
      try {
        const ordersResponse = await getAllOrders(dataUser?.token);
        setOrders(ordersResponse)
      } catch (error) {
        console.error("Error al traer la informacion", error);
        setError("opps no pudismos cargar la informacion")
        setOrders([]);
      } finally {
        setIsloading(false)
      }
    };

    fetchOrders();

  }, [dataUser?.token])

  return (

    <div className="w-full p-4">


<div className="bg-gray-100 p-4 rounded-lg shadow mb-6 w-full max-w-md">
    <h3 className="text-lg font-semibold mb-2 text-gray-700 ">Datos del Usuario</h3>

    <p className="text-sm text-gray-600">
      <span className="font-semibold">Nombre:</span> {dataUser?.user?.name}
    </p>

    <p className="text-sm text-gray-600">
      <span className="font-semibold">Email:</span> {dataUser?.user?.email}
    </p>

    <p className="text-sm text-gray-600">
      <span className="font-semibold">Rol:</span> {dataUser?.user?.role || "Cliente"}
    </p>

    <p className="text-sm text-gray-600">
      <span className="font-semibold">ID:</span> {dataUser?.user?.id}
    </p>

    <p className="text-sm text-gray-600">
      <span className="font-semibold">Direccion:</span> {dataUser?.user?.address}
    </p>

    <p className="text-sm text-gray-600">
      <span className="font-semibold">Telefono:</span> +57 {dataUser?.user?.phone}
    </p>
  </div>


      <h2 className="text-xl font-bold mb-4 mx-auto w-fit">Listado de Órdenes</h2>

      {/* Loading */}
      {isLoading && (
        <p className="text-blue-600 font-semibold">Cargando órdenes...</p>
      )}

      {/* Error */}
      {error && (
        <div>
          <p className="text-red-500 font-semibold bg-red-100 p-2 rounded">
          {error}
          </p>
          <button onClick={() => window.location.reload}>
          Reintentar
          </button>
        </div>
      )}

      {/* Si no hay órdenes */}
      {!isLoading && !error && orders.length === 0 && (
        <p className="text-gray-600">No hay órdenes registradas.</p>
      )}

      {/* Tabla */}
      {!isLoading && !error && orders.length > 0 && (
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Productos</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Fecha</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.products?.length || 0 } Productos</td>
                  <td className="px-4 py-2">{order.status || "Procesada"} </td>
                  <td> {new Date(order.date || Date.now()).toLocaleDateString()} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrderList;