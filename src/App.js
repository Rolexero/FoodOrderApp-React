import React, {useState, useCallback} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CardProvider from "./Components/Store/CardProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = useCallback(()=>{
      setCartIsShown(true)
    },[])

    const hideCartHandler = ()=>{
        setCartIsShown(false)
    }

  return (
    <CardProvider>
      { cartIsShown && <Cart onHideCart={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
