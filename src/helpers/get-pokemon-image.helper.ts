import { IMAGE_URL } from "../constant";

export const getPokemonImage = (pokemonId: number): string => {
  return `${IMAGE_URL}${pokemonId}.png`;
};
