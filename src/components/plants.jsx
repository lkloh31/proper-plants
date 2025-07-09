import Plant from "./plant";

export default function Plants({ plants, addPlant }) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addPlant={addPlant} />
        ))}
      </ul>
    </section>
  );
}
