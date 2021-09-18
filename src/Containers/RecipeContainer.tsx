import { RecipeList } from "../Components/RecipeList";
import { useGetRecipes } from "../hooks/useGetRecipes";
import { RecipeContainerWrapper } from "../styles";

export const RecipeContainer = () => {
  const ingredients = "apples";
  const { data: recipes } = useGetRecipes(ingredients);

  const getRecipeList = () => {
    return <RecipeList recipes={recipes} />;
  };

  return (
    <RecipeContainerWrapper className="wrapper">
      {getRecipeList()}
    </RecipeContainerWrapper>
  );
};
