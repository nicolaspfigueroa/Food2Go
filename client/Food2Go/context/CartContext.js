import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({children})=>{
    const [cart, setCart]= useState([]);
    const [numInCart, setNum]= useState(0);
    const [favorites, setFavorites]= useState([]);
    return (
        <CartContext.Provider value={{cart, setCart, numInCart, setNum, favorites, setFavorites}}>
            {children}
        </CartContext.Provider>

    )
}

export { CartContext , CartProvider} 