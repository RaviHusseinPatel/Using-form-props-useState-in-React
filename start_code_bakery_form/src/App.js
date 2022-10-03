import NavBar from "./NavBar";
import Title from "./Title";
import Search from "./Search";
import CakeForm from "./CakeForm";
import NewRecipe from "./components/NewRecipe";
import RecipeContainer from "./containers/RecipeContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <Search />
        <RecipeContainer />
        <CakeForm />
      </main>
    </>
  );
}

export default App;
