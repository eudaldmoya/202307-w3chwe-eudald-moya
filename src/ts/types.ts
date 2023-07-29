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

export interface Type {
  name: string;
}
