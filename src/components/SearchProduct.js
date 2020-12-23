import React, { useState } from 'react';

const SearchProduct = ({handleFindProduct}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInput = (e)=>{
        setInputValue(e.target.value)
        handleFindProduct(e.target.value)
    }

    return ( 
        <div className="searchProduct">
            <input 
            type="text" 
            value={inputValue} 
            onChange={handleInput} 
            />
        </div>
     );
}
 
export default SearchProduct;