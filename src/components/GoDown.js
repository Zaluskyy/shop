import React from 'react';

const GoDown = () => {

    const showProducts = ()=>{
        window.scrollTo({
            top: window.innerHeight-50,
            behavior: "smooth"
        })
    }

    return ( 
        <button onClick={showProducts}><font>Zobacz produkty</font></button>
     );
}
 
export default GoDown;