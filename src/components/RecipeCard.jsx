export default function RecipeCard({ recipe }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
      <h2>{recipe.title}</h2>
      <p>💸 {recipe.cost}</p>

      <strong>Ingredients</strong>
      <ul>
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <strong>Steps</strong>
      <ol>
        {recipe.steps.map((s, idx) => (
          <li key={idx}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
