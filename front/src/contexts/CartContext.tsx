"use client"
import { cartItem } from "@/interfaces/ICart";
import { IProducts } from "@/interfaces/Iproducts";
import { Children, createContext } from "react";



interface CartContextProps {
    cartItem : IProducts[];
    addToCart : (product : IProducts) => void;
    removeFromCart : (productId: number) => void;
    clearCart:  () => void;
    getTotal: () => number;
    getIdItems: ()=> number[];
    getItemsCount: ()=> number;

}

const CartContext =createContext<CartContextProps> ({
    
    cartItem : [],
    addToCart : () => {},
    removeFromCart : () =>{},
    clearCart:  () => {},
    getTotal: () => 0,
    getIdItems: ()=> [],
    getItemsCount: ()=> 0,
})



interface CartProvider {
    children: React.ReactElement;
}


const CratProvider: React.FC<CartProvider> = {(children)} => {

}X