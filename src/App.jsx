import recipes from "./data/recipes.json";
import RecipeList from "./components/RecipeList";

export default function App() {
  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>🍳 Budget Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}
