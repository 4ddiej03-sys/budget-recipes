import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  return recipes.map(r => (
    <RecipeCard key={r.id} recipe={r} />
  ));
}
