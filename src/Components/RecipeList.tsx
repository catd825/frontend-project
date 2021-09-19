import { RecipeContainerDiv } from "../styles";
import { RecipeCard } from "./RecipeCard";

// need to define props
export const RecipeList = (props: any) => {
  // need to define props
  const { recipes } = props;
  const getRecipe = () => {
    return recipes?.map((recipeObj: any) => (
      <RecipeCard key={recipeObj.id} recipeObj={recipeObj} />
    ));
  };

  return <RecipeContainerDiv>{getRecipe()}</RecipeContainerDiv>;
};
