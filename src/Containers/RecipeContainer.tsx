import { recipeApi } from "../apiResponse";
import { RecipeList } from "../Components/RecipeList";
// import { useGetRecipes } from "../hooks/useGetRecipes";
import { RecipeContainerWrapper } from "../styles";

export const RecipeContainer = () => {
  // disabled to reduce spoonacular api calls - to work on formatting only
  // const ingredients = "apples";
  // const number = 25;
  // const { data: recipes } = useGetRecipes(ingredients, number);

  const recipes = recipeApi;

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
