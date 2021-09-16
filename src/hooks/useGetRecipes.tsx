import { useQuery } from "react-query";
import axios from "axios";

const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const getRecipes = async (ingredients: string) => {
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${KEY}`;
  const result = await axios.get(url, {
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  });
  return result.data;
};

export const useGetRecipes = (ingredients: string) => {
  return useQuery("recipes", () => getRecipes(ingredients));
};
