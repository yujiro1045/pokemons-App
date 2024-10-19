import { useEffect, useState } from "react";
import { API_URL } from "../constant";

export default function useFetchPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setPokemons(res.results || []);
      });
  }, [API_URL]);
  return pokemons;
}
