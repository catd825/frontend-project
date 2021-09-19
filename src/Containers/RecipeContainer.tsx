import { RecipeList } from "../Components/RecipeList";
import { useGetRecipes } from "../hooks/useGetRecipes";
import { RecipeContainerWrapper } from "../styles";

export const RecipeContainer = () => {
  const ingredients = "apples";
  const number = 25;
  const { data: recipes } = useGetRecipes(ingredients, number);

  const getRecipeList = () => {
    //iterate to determine properties needed
    return <RecipeList recipes={recipes} />;
  };

  return (
    <RecipeContainerWrapper className="wrapper">
      {getRecipeList()}
    </RecipeContainerWrapper>
  );
};
