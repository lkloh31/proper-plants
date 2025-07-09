import { useState } from "react";
import "./index.css";
import PLANTS from "./data";
import Plants from "./components/plants";
import Cart from "./components/cart";

export default function App() {
  const [inCart, setCart] = useState([]);

  const addPlant = (plant) => {
    const plantInCart = inCart.find((item) => item.id === plant.id);
    if (plantInCart) {
      setCart(
        inCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newItem = { ...plant, quantity: 1 };
      setCart([...inCart, newItem]);
    }
  };

  const removePlant = (plantToRemove) => {
    setCart(
      inCart
        .map((plant) =>
          plant.id === plantToRemove.id
            ? { ...plant, quantity: plant.quantity - 1 }
            : plant
        )
        .filter((plant) => plant.quantity > 0)
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} addPlant={addPlant} />
        <Cart inCart={inCart} addPlant={addPlant} removePlant={removePlant} />
      </main>
    </>
  );
}
