import { RecipeCardStyle } from "../styles";

export const RecipeCard = (props: any) => {
  const { recipeObj } = props;
  return (
    <RecipeCardStyle>
      <img height="231px" width="312px" src={recipeObj.image} alt="" />
      <p>{recipeObj.title}</p>
    </RecipeCardStyle>
  );
};
