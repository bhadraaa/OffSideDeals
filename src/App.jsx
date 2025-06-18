import { Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout.jsx';
import Success from './components/success.jsx';
import Homee from './Home.jsx';
import Cart from './components/cart_item.jsx';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <Routes>
      <Route path="/" element={<Homee addToCart={addToCart} />} />
      <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      <Route path="/success" element={<Success />} />
      <Route
        path="/cart"
        element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      />
    </Routes>
  );
}

export default App;
