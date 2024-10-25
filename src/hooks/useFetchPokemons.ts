import { useEffect, useState } from "react";
import { API_URL } from "../constant";
import {
  Pokemon,
  PokemonDetail,
  PokemonResult,
} from "../interfaces/PokemonResponse";

export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState("");

  const getPokemons = async (url = API_URL) => {
    const response = await fetch(url);
    const listPokemons = await response.json();
    const { next, results } = listPokemons;

    const newPokemons = await Promise.all(
      results.map(async (pokemon: PokemonResult) => {
        const response = await fetch(pokemon.url);
        const poke: PokemonDetail = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      })
    );

    return { next, newPokemons };
  };

  const fetchPokemons = async () => {
    const { next, newPokemons } = await getPokemons();
    setPokemons(newPokemons);
    setNextUrl(next);
  };

  const morePokemons = async () => {
    const { next, newPokemons } = await getPokemons(nextUrl);
    setPokemons((prev) => [...prev, ...newPokemons]);
    setNextUrl(next);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  return { pokemons, morePokemons };
}
