import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./layouts/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.product.id == product.id);
    if (index >= 0) {
      cart[index].count++;
      setCart([...cart]);
    } else setCart([...cart, { count: 1, product }]);
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.product.id == productId);
    if (index >= 0) {
      cart.splice(index, 1);
      setCart([...cart]);
    }
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

  const sendDataToTelegram = useCallback(() => {
    const prices = cart.map((item) => ({
      label: `${item.product.name} x ${item.count}`,
      amount: item.count * item.product.price * 100,
    }));
    window.Telegram?.WebApp.sendData(JSON.stringify(prices));
  }, [cart]);

  useEffect(() => {
    window.Telegram?.WebApp.MainButton.onClick(sendDataToTelegram);
    return () => {
      window.Telegram?.WebApp.MainButton.offClick(sendDataToTelegram);
    };
  }, [sendDataToTelegram]);

  return (
    <main>
      <Header cart={cart} onCartRemove={removeFromCart} />
      <Outlet context={[cart, addToCart]} />
    </main>
  );
}

export default App;
