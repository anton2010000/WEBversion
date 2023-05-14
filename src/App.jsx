import { useEffect, useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  let cartVar = cart;

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.product.id == product.id);
    if (index >= 0) {
      cart[index].count++;
      setCart([...cart]);
    } else setCart([...cart, { count: 1, product }]);

    cartVar = cart;
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.product.id == productId);
    if (index >= 0) {
      cart.splice(index, 1);
      setCart([...cart]);
    }

    cartVar = cart;
  };

  useEffect(() => {
    if (cart.length) {
      window.Telegram?.WebApp.MainButton.setText(
        `В корзине: ${cart.reduce((sum, item) => {
          sum += item.count;
          return sum;
        }, 0)}`
      );
      if (!window.Telegram?.WebApp.MainButton.isVisible)
        window.Telegram?.WebApp.MainButton.show();
    } else {
      if (window.Telegram?.WebApp.MainButton.isVisible)
        window.Telegram?.WebApp.MainButton.hide();
    }
  }, [cart]);

  useEffect(() => {
    window.Telegram?.WebApp.MainButton.onClick(() => {
      window.Telegram?.WebApp.sendData(JSON.stringify(cartVar));
    });
  }, []);

  return (
    <main>
      <Header cart={cart} onCartRemove={removeFromCart} />
      <Outlet context={[cart, addToCart]} />
    </main>
  );
}

export default App;
