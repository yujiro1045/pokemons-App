import Pokemons from "./components/pokemons/Pokemons";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Pokemons />
    </BrowserRouter>
  );
};

export default App;
