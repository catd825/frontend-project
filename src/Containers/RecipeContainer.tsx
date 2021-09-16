import { useGetRecipes } from "../hooks/useGetRecipes";
import { RecipeContainerDiv, RecipeContainerWrapper } from "../styles";

export const RecipeContainer = () => {
  const { data: getRecipes } = useGetRecipes();

  console.log(getRecipes)

  return (
    <RecipeContainerWrapper className="wrapper">
      <RecipeContainerDiv className="container">
        Here is the recipe container
      </RecipeContainerDiv>
    </RecipeContainerWrapper>
  );
};
