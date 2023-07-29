import { type PokemonData } from "../types";

const getPokemonData = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url);
  const pokemonData = (await response.json()) as PokemonData;

  return pokemonData;
};

export default getPokemonData;
