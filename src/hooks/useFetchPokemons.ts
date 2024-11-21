import { useEffect, useState } from "react";
import { API_URL } from "../constant";
import {
  Pokemon,
  PokemonDetail,
  PokemonResult,
} from "../interfaces/PokemonResponse";

export default function useFetchPokemons(
  url = `${API_URL}?limit=650&offset=0`
) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAllPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const listPokemons = await response.json();
      const { results } = listPokemons;

      const fullPokemonList = await Promise.all(
        results.map((pokemon: PokemonResult) =>
          fetch(pokemon.url).then(async (response) => {
            const poke: PokemonDetail = await response.json();

            return {
              id: poke.id,
              name: poke.name,
              img:
                poke.sprites.other.dream_world.front_default ||
                poke.sprites.front_default,
              abilities: poke.abilities,
              types: poke.types,
            };
          })
        )
      );

      setAllPokemons(fullPokemonList);
      setPokemons(fullPokemonList.slice(0, 20));
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndPaginate = (query: string, page: number) => {
    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    const startIndex = (page - 1) * 20;
    setPokemons(filtered.slice(startIndex, startIndex + 20));
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  return {
    allPokemons,
    currentPage,
    filterAndPaginate,
    loading,
    pokemons,
    setCurrentPage,
  };
}
