import Navbar from "./components/Navbar";
import Searching from "./components/Searching";
import useFetchPokemons from "./service/useFetchPokemons";

const App = () => {
  const pokemons = useFetchPokemons();
  return (
    <>
      <Navbar />
      <div className="flex h-auto justify-center items-center my-10 flex-col">
        <div className="border border-gray-300 rounded-md justify-center items-center mb-10">
          <Searching />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className="p-5 border border-gray-300 shadow-md rounded-lg justify-center items-center flex flex-col"
              >
                <img
                  className="w-28 h-28"
                  src={pokemon.img}
                  alt={pokemon.name}
                />
                <p className="text-center  mt-2">{pokemon.name}</p>
                <span className="text-center ">{pokemon.id}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
