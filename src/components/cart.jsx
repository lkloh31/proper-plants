export default function Cart({ inCart, addPlant, removePlant }) {
  return (
    <section className="cart">
      <h2>Cart</h2>

      {inCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {inCart.map((plant) => {
            return (
              <li key={plant.id} className="cart-item">
                <div>
                  {plant.image} {plant.name}
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => removePlant(plant)}>-</button>
                  <span>{plant.quantity}</span>
                  <button onClick={() => addPlant(plant)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
