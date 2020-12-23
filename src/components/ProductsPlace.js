import React from 'react';

import Product from './Product'

import {items} from './products.json'

//xd
import img from '../img/premix_xd.jpg'


const ProductsPlace = ({addToShoppingCart, searchChars}) => {


    const itemsFiltered = items.filter(item=>item.name.toUpperCase().includes(searchChars.toUpperCase()))

    const products = itemsFiltered.map((item, key)=>(
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