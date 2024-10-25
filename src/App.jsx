import Navbar from "./components/Navbar";
import Pokemons from "./components/Pokemons";
import Searching from "./components/Searching";

const App = () => {
  return (
    <>
      <Navbar />
      <Searching />
      <Pokemons />
    </>
  );
};

export default App;
