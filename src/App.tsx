import "./App.css";
import { Header } from "./Components/Header";
import { RecipeContainer } from "./Containers/RecipeContainer";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <RecipeContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
