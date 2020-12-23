import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

const ShopingCartPlace = ({shoppingCartItems, handleShoppingCartCount}) => {

    let totalAmmount = 0
    shoppingCartItems.forEach(item=>{
        totalAmmount = totalAmmount + item.price*item.count
    })

    const shoppingCartItem = shoppingCartItems.map((item, index)=>(
        <div className="itemContainer" key={item.id} >
            <div className="itemName">{item.name}</div>
            <div className="itemPrice">{item.price}zł</div>
            <div className="itemCount">
                    <button onClick={()=>handleShoppingCartCount("SUBTRACTION", index)}>-</button>
                <font>{item.count}</font>
                    <button onClick={()=>handleShoppingCartCount("ADDITION", index)}>+</button>
            </div>
        </div>
    ))
    return ( 
        <div className="shopingCartPlace">
            {shoppingCartItem}
            <div className="summaryAndBuy">
                <div>Łączna kwota: <span>{totalAmmount.toFixed(2)}</span>zł</div>
                <button>Przejdź do kasy</button>
            </div>
        </div>
     );
}
 
export default ShopingCartPlace;