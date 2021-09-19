export const RecipeCard = (props: any) => {
  const { recipeObj } = props;

  return (
    <div>
      <img src={recipeObj.image} alt="" style={{ height: '15%', width: '15%'}}/>
      <p>{recipeObj.title}</p>
    </div>
  );
};
