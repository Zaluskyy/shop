import '../style/App.css';
import TopPanel from './TopPanel'
import Slider from './Slider'
import GoDown from './GoDown'
import ProductsPlace from './ProductsPlace'
import { useState } from 'react';

function App() {
  const [ shoppingCartItems, setShoppingCartItems ] = useState([])


  const handleAddToShoppingCart = (id, name, price, count=1)=>{
    const index = shoppingCartItems.findIndex(item=>{
      return item.id===id
    })
    // console.log(index);
    if(index===-1){
      setShoppingCartItems(
        [
          ...shoppingCartItems,
          {
            id: id,
            name: name,
            price: price,
            count: count
          }
        ]
      )
  } else{
    // setShoppingCartItems(prev =>{
    //   const newArray = [...shoppingCartItems]
    //   newArray[index].count = newArray[index].count +1
    //   return newArray
    // })
    let newArr = shoppingCartItems
    newArr[index].count = newArr[index].count+1
    setShoppingCartItems([...newArr])
  }
  }

  const handleShoppingCartCount = (type, id)=>{
    console.log(id);
    if(type==="SUBTRACTION"){
      if(shoppingCartItems[id].count<=0)return
      let newArr = shoppingCartItems
        newArr[id].count = newArr[id].count-1
        console.log(newArr);
        setShoppingCartItems([...newArr])
    }else{
      let newArr = shoppingCartItems
      newArr[id].count = newArr[id].count+1
      console.log(newArr);
      setShoppingCartItems([...newArr])
    }
  }


    // console.log(shoppingCartItems);
  return (
    <div className="App">
      <div className="firstPage">
        <header>
          <TopPanel 
          shoppingCartItems={shoppingCartItems}
          handleShoppingCartCount={handleShoppingCartCount}
          />
        </header>
        <aside>
          <Slider/>
        </aside>
        <section>
          <GoDown/>
        </section>
      </div>
      <main>
        <ProductsPlace 
        addToShoppingCart={handleAddToShoppingCart} 
        />
      </main>
    </div>
  );
}

export default App;
