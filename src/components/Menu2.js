import React, { useState } from 'react';

import SearchProduct from './SearchProduct'
import ShopingCartPlace from './ShopingCartPlace'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Menu2 = ({shoppingCartItems, handleShoppingCartCount, handleFindProduct}) => {

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return ( 
        <div className="menu2">
            <div className="fai"><FontAwesomeIcon icon={faUser} size="2x" /></div>
            <div className="fai search">
                <FontAwesomeIcon icon={faSearch} size="2x" 
                onClick={()=>setIsSearchOpen(prev=>!prev)}
                />
                {isSearchOpen && <SearchProduct
                handleFindProduct={handleFindProduct}
                />}
                </div>
            <div className="fai shoppingCart">
                <FontAwesomeIcon className="icon" icon={faShoppingCart} size="2x" />
                <span className="notificationSpan" style={shoppingCartItems.length?{display:'inline'}:{display:'none'}} >{shoppingCartItems.length}</span>
                <ShopingCartPlace 
                shoppingCartItems={shoppingCartItems}
                handleShoppingCartCount={handleShoppingCartCount}
                />
            </div>
        </div>
     );
}
 
export default Menu2;