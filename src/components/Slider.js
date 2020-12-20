import React, { useEffect, useState } from 'react';

import banner0 from '../img/banner0.jpg'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4.jpg'

const buttons = [0, 1, 2, 3, 4]

const banners = [
    {
        id: 0,
        src: banner0
    },
    {
        id: 1,
        src: banner1
    },
    {
        id: 2,
        src: banner2
    },
    {
        id: 3,
        src: banner3
    },
    {
        id: 4,
        src: banner4
    },
]


let interval 
const Slider = () => {

    const [ current, setCurrent ] = useState(0)


    const nextBanner = ()=>{     
        setCurrent(prev=>{
            if(prev===4) return 0
            return prev+1
        })

    }

    useEffect(()=>{
        interval = setInterval(nextBanner, 15000)
    }, [])

    const handleChangeSlideClick = (id)=>{
        clearInterval(interval)
        interval = setInterval(nextBanner, 15000)
        setCurrent(id)
    }


    const btns = buttons.map((item)=>(
        <div key={item}
         onClick={()=>handleChangeSlideClick(item)}
         style={current===item?{backgroundColor:"transparent", boxShadow:"0 0 15px 5px red"}:{backgroundColor:"transparent"}}
         ></div>
    ))



    return ( 
        <div className="slider">
            <div className="img" style={{backgroundImage: `url(${banners[current].src})`}} ></div>
            <div className="controller">
                {btns}
            </div>
        </div>
     );
}
 
export default Slider;