"use client"
import { IProducts } from "@/interfaces/Iproducts";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import swal from 'sweetalert';
import Swal from "sweetalert2";


const CARTLOCALSTORAGE = "cart"

interface CartContextProps {
    cartItems : IProducts[];
    addToCart: (product: IProducts) => void;
    removeFromCart : (productId: number) => void;
    clearCart:  () => void;
    getTotal: () => number;
    getIdItems: ()=> number[];
    getItemsCount: ()=> number;
    

}

const CartContext =createContext<CartContextProps> ({
    
    cartItems : [],
    addToCart : () =>{},
    removeFromCart : () =>{},
    clearCart:  () => {},
    getTotal: () => 0,
    getIdItems: ()=> [],
    getItemsCount: ()=> 0,
})



interface CartProviderProps {
    children: React.ReactElement;
}


export const CartProvider: React.FC<CartProviderProps> = ({children}) => {

    const {dataUser} =useAuth ();
    const [cartItems, setCarItem] = useState<IProducts[]> ([]);
    const userId = dataUser?.user.id; 
    const CART_KEY = userId ? `cart_${userId}` : null;


// useEffect(()=> {
//     if(cartItems.length > 0){
//         localStorage.setItem(CARTLOCALSTORAGE, JSON.stringify(cartItems))
//     }
// }, [cartItems])

// useEffect (()=> {
//     if (typeof window !== "undefined" && window.localStorage) {
//         const cartInfo = localStorage.getItem(CARTLOCALSTORAGE);
//         if (cartInfo){
//             setCarItem(JSON.parse(cartInfo))
//         }
//     }
// }, []);

useEffect(() => {
    if (!CART_KEY) return; // si no hay usuario, no se carga nada

    const saved = localStorage.getItem(CART_KEY);
    if (saved) {
      setCarItem(JSON.parse(saved));
    } else {
      setCarItem([]); // si no existe, inicializa vacío
    }
  }, [CART_KEY]);

  // 2. Guardar carrito cada vez que cambie
  useEffect(() => {
    if (!CART_KEY) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems, CART_KEY]);


    const addToCart = (product : IProducts) => {
        if (!dataUser){
            Swal.fire({
                title: "Ooops",
                text: "Debes estar logueado para añadir productos al carrito de compras",
                icon: "warning",
                timer: 3000, 
                showConfirmButton: false, 
              })
            return;
        }

        const ExistingProduct : boolean = cartItems.some(
            (item) => item.id === product.id
        );
        if (ExistingProduct){
            Swal.fire({
                title: "Ooops",
                text: "Solo es permitido seleccionar 1 unidad por usuario",
                icon: "warning",
                timer: 3000, 
                showConfirmButton: false, 
              })
            return 
        }
        else {
            Swal.fire({
                title: "¡Agregado!",
                text: "El producto fue agregado al carrito correctamente.",
                icon: "success",
                timer: 3000, 
                showConfirmButton: false, 
              })
        }
        setCarItem((prevItems)=> [...prevItems, product])

    }

    const removeFromCart =(productId: number) => {
        setCarItem((prevItems)=> 
        prevItems.filter((item) => item.id !== productId))
    };

    const clearCart = () => {
        setCarItem([])
        if (typeof window !== "undefined" && window.localStorage) {
            localStorage.removeItem(CARTLOCALSTORAGE)
        }; 
    }

    const getTotal = () => {
        return cartItems.reduce((total , item) => total + item.price, 0,);
    };

    const getIdItems= () => {
        return cartItems.map((item) => item.id)
    }

    const getItemsCount = ()=> {
        return cartItems.length
    }

    return(
    <CartContext.Provider
     value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        getIdItems,
        getItemsCount,
        }}
    > 
        {children}
    </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext)
