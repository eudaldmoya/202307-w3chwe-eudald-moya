#interface PokemonData extends Pokemon
hp: number;
attack: number;
defense: number;
speed: number;
type: Type[];
height: number;
weight: number;

#interface Pokemon
name: string;
url: string;

#interface PokemonResponse
previous: string;
next: string;
results: Pokemon[];

#interface Type
name: string;

#Data Layer

- interface ComponentStructure
  - render: () => void;
  - remove: () => void;

#Component Structure

- Component
- AppComponent
- DetailComponent
