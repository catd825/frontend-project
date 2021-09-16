export const RecipeCard = (data: any) => {
  // fix this data mapping
  // console.log(data.data);
  return (
    <div>
      <img src={data.data.image} alt="" />
      {data.data.title}
    </div>
  );
};
