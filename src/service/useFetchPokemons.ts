import { useEffect, useState } from "react";
import { API_URL } from "../constant";

export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(API_URL);
      const listPokemons = await response.json();
      const { results } = listPokemons;

      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      });

      setPokemons(await Promise.all(newPokemons));
    };
    getPokemons();
  }, []);
  return pokemons;
}

/* fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setPokemons(res.results || []);
      }); */
