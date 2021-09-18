import { RecipeContainerDiv } from "../styles";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = (props: any) => {
  const { recipes } = props;
  const getRecipe = () => {
    return recipes?.map((recipeObj: any) => (
      <RecipeCard key={recipeObj.id} recipeObj={recipeObj} />
    ));
  };

  return <RecipeContainerDiv>{getRecipe()}</RecipeContainerDiv>;
};
