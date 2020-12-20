import React from 'react';

import Product from './Product'

import {items} from './products.json'

//xd
import img from '../img/premix_xd.jpg'

// console.log(items);

const ProductsPlace = ({addToShoppingCart}) => {

    const products = items.map((item, key)=>(
        <Product 
        key={key} 
        id={item.id} 
        name={item.name} 
        image={img} 
        price={item.price} 
        addToShoppingCart={addToShoppingCart} 
        />
    ))

    return (
        <div className="productList">
            {products}
        </div>
     );
}
 
export default ProductsPlace;