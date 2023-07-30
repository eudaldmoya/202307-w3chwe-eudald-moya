import { type PokemonResponse } from "../types.js";

const getPokemonList = async (url: string): Promise<PokemonResponse> => {
  const response = await fetch(url);
  const pokemonData = (await response.json()) as PokemonResponse;
  return pokemonData;
};

export default getPokemonList;
