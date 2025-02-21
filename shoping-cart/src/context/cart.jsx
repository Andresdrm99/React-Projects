import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        const productIndexToAdd = cart.findIndex(item => item.id === product.id);
        console.log(productIndexToAdd)
        if(productIndexToAdd >=0){
            const newCart = structuredClone(cart)
            newCart[productIndexToAdd].quantity+= 1;
            return setCart(newCart)
        }

        return setCart(prevState =>([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const clearCart = () =>{
        setCart([])
    }

    return <CartContext.Provider value={{cart, addToCart, clearCart}}>
        {children}
    </CartContext.Provider>
}

