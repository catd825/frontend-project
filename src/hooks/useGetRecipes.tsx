import { useQuery } from "react-query";
import axios from "axios";

const KEY = process.env.REACT_APP_SPOONACULAR_API_KEY

const getRecipes = async () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${KEY}`;
  const result = await axios.get(url, {
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  });
  return result.data;
};

export const useGetRecipes = () => {
  return useQuery("recipes", () => getRecipes());
};
