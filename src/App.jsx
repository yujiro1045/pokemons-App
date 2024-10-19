import useFetchPokemons from "./hooks/useFetchPokemons";

const App = () => {
  const pokemons = useFetchPokemons();
  return (
    <div className="flex h-screen justify-center items-center">
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <div
              key={pokemon.name}
              className="flex justify-center items-center"
            >
              <h1 className="text-black">{pokemon.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default App;
