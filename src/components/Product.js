import React, { useState } from 'react';

// import img from '../img/premix_xd.jpg'

const Product = ({ id, name, image, price, addToShoppingCart }) => {

    const [ isOn, setIsOn ] = useState(false)

    const opacityHover = .5

    const handleHoverBtn = (e)=>{
        // console.log(e.type);
        if(e.type==="mouseleave"){
            setIsOn(false)
        } 
        if(e.type==="mouseenter"){
            setIsOn(true)
        }
    }

    return ( 
        <div 
        className="product number"
        onMouseEnter={handleHoverBtn} 
        onMouseLeave={handleHoverBtn}
        >
            <div className="image"
            style={isOn?{opacity:opacityHover}:{opacity:"1"}}>
                <img src={image} alt="item" />
            </div>
            <div className="description"
            style={isOn?{opacity:opacityHover}:{opacity:"1"}}>
                <font>{name}</font>
            </div>
            <div className="price"
            style={isOn?{opacity:opacityHover}:{opacity:"1"}}>
                <font>{price}zł</font>
            </div>
            <button 
            style={isOn?{display:"block"}:{display:"none"}} 
            onClick={()=>addToShoppingCart(id, name, price)}
            >Dodaj do koszyka</button>
        </div>
     );
}
 
export default Product;