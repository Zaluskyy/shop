import React from 'react';
import logo from '../img/logo2.png'

import Menu from './Menu'
import Menu2 from './Menu2'

const TopPanel = ({shoppingCartItems,handleShoppingCartCount}) => {
    return ( 
        <div className="TopPanel">
            <img src={logo} alt="logo" />
            <div className="center">
                <Menu/>
            </div>
            <div className="right">
                <Menu2 
                shoppingCartItems={shoppingCartItems}
                handleShoppingCartCount={handleShoppingCartCount}
                />
            </div>
        </div>
     );
}
 
export default TopPanel;