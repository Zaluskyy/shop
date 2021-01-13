import React, {createContext, useState} from 'react';

export const ShopingCartContext = createContext();

export const ShopingCartProvider = (props)=>{

    const [ shoppingCartItems, setShoppingCartItems ] = useState([])

    

    return(
        <ShopingCartContext.Provider value={[shoppingCartItems, setShoppingCartItems]} >
            {props.children}
        </ShopingCartContext.Provider>
    )
}