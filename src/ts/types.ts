export interface PokemonData extends Pokemon {
  id: number;
  name: string;
  types: Type[];
  height: number;
  weight: number;
  sprites: { other: { dream_world: { front_default: string } } };
}

export interface Pokemon {
  url: string;
}

export interface PokemonResponse {
  previous: string;
  next: string;
  results: Pokemon[];
}

export interface Type {
  type: { name: string };
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}
