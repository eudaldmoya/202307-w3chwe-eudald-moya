export interface PokemonData extends Pokemon {
  id: number;
  type: { types: Type[] };
  height: number;
  weight: number;
  sprites: { other: { dream_world: { front_default: string } } };
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
  typeName: { type: { name: string } };
}

export interface ComponentStructure {
  render: () => void;
  remove: () => void;
}
