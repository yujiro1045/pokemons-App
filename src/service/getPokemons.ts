import { API_URL } from "../constant";
import { PokemonApiResponse } from "../interfaces/PokemonResponse";

export const getPokemons = async (
  limit: number = 20,
  offset: number = 0
): Promise<PokemonApiResponse> => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }

  const data: PokemonApiResponse = await response.json();
  return data;
};
