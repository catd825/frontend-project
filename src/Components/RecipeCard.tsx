export const RecipeCard = (props: any) => {
  const { recipeObj } = props;
  console.log(recipeObj)
  return (
    <div>
      <img src={recipeObj.image} alt="" />
      <p>{recipeObj.title}</p>
    </div>
  );
};
