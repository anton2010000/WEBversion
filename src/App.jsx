import { useEffect, useState } from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.product.id == product.id);
    if (index >= 0) {
      cart[index].count++;
      setCart([...cart]);
    } else setCart([...cart, { count: 1, product }]);
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
      window.Telegram?.WebApp.sendData(JSON.stringify([...cart]));
    });
  });

  return (
    <main>
      <ProductsList addToCart={addToCart} cart={cart} />
    </main>
  );
}

export default App;
