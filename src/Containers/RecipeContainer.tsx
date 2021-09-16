import { RecipeCard } from "../Components/RecipeCard";
import { useGetRecipes } from "../hooks/useGetRecipes";
import { RecipeContainerDiv, RecipeContainerWrapper } from "../styles";

export const RecipeContainer = () => {
  const ingredients = "apples";
  const { data: recipes } = useGetRecipes(ingredients);

  const getRecipes = () => {
    return recipes?.map((recipe: any) => (
      <RecipeCard key={recipe.id} data={recipe} />
    ));
  };

  return (
    <RecipeContainerWrapper className="wrapper">
      <RecipeContainerDiv className="container">
        {getRecipes()}
      </RecipeContainerDiv>
    </RecipeContainerWrapper>
  );
};
