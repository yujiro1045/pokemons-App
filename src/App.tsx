import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Pokemons from "./components/pokemons/Pokemons";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Pokemons />
    </BrowserRouter>
  );
};

export default App;
