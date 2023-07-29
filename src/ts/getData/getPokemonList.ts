import { apiBaseUrl } from "../globals/globals.js";
import { type PokemonResponse } from "../types.js";

const getPokemonList = async (): Promise<PokemonResponse> => {
  const response = await fetch(`${apiBaseUrl}`);
  const pokemonData = (await response.json()) as PokemonResponse;
  return pokemonData;
};

export default getPokemonList;
