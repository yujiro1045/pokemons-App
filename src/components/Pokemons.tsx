import React from "react";
import useFetchPokemons from "../hooks/useFetchPokemons";
import Pokemon from "./PokemonCards";

const Pokemons: React.FC = () => {
  const { pokemons, morePokemons } = useFetchPokemons();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10 max-w-7xl mx-auto">
      {pokemons.map((pokemon) => (
        <Pokemon {...pokemon} key={pokemon.id} />
      ))}
      <button onClick={morePokemons}>Mostrar mas pokemones</button>
    </section>
  );
};

export default Pokemons;
