import '../style/App.css';
import TopPanel from './TopPanel'
import Slider from './Slider'
import GoDown from './GoDown'
import ProductsPlace from './ProductsPlace'
import { useContext, useState } from 'react';
import {ShopingCartProvider} from './ShopingCartContext.js'
import {ShopingCartContext} from './ShopingCartContext'

window.addEventListener("scroll", (e)=>{
  if(window.pageYOffset>75){
    document.querySelector(".header").style.height="50px"
  }
  else{
    document.querySelector(".header").style.height="75px"
  }
})

function App() {
  // const [ shoppingCartItems, setShoppingCartItems ] = useState([]) //!!!dałem do kontekstu!!!
  const [ shoppingCartItems, setShoppingCartItems ] = useContext(ShopingCartContext)
  const [ searchChars, setSearchChars ] = useState('')


  const handleAddToShoppingCart = (id, name, price, count=1)=>{
    const index = shoppingCartItems.findIndex(item=>{
      return item.id===id
    })
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
    let newArr = shoppingCartItems
    newArr[index].count = newArr[index].count+1
    setShoppingCartItems([...newArr])
  }
  }

  const handleShoppingCartCount = (type, id)=>{
    if(type==="SUBTRACTION"){
      if(shoppingCartItems[id].count<=0)return
      let newArr = shoppingCartItems
        newArr[id].count = newArr[id].count-1
        setShoppingCartItems([...newArr])
    }else{
      let newArr = shoppingCartItems
      newArr[id].count = newArr[id].count+1
      setShoppingCartItems([...newArr])
    }
  }

  const handleFindProduct = (value)=>{
    setSearchChars(value)
  }

  return (
    <ShopingCartProvider>
    <div className="App">
      <div className="firstPage">
        <header className="header">
          <TopPanel 
          shoppingCartItems={shoppingCartItems}
          handleShoppingCartCount={handleShoppingCartCount}
          handleFindProduct={handleFindProduct}
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
        searchChars={searchChars}
        />
      </main>
    </div>
     </ShopingCartProvider>
  );
}

export default App;
