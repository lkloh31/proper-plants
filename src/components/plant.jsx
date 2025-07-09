export default function Plant({ plant, addPlant }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addPlant(plant)}>Add to cart</button>
    </li>
  );
}
