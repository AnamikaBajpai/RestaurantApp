import React, {  Fragment, useState} from 'react';
 import Header from './Components/Layout/Header';
 import Meals from './Components/Meals/Meals';
 import Cart from './Components/Cart/Cart';
import CartProvider from './Components/store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);

};
  
  return (
    <div>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
      
    </div>
  );
}

export default App;
