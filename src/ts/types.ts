export interface PokemonData extends Pokemon {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  type: Type[];
  height: number;
  weight: number;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  previous: string;
  next: string;
  results: Pokemon[];
}

export interface Type {
  name: string;
}
