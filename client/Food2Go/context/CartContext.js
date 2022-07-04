import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children})=>{
    const [cart, setCart]= useState([]);
    const [numInCart, setNum]= useState(0);
    return (
        <CartContext.Provider value={{cart, setCart, numInCart, setNum}}>
            {children}
        </CartContext.Provider>

    )
}

export { CartContext , CartProvider} 