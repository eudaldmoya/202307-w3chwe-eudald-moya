import getPokemonList from "../../getData/getPokemonList.js";
import { type Pokemon, type PokemonData } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class AppComponent extends Component {
  private pokemons: Pokemon[] = [];
  private readonly pokemonsData: PokemonData[];

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const pokemonList = await getPokemonList();

      this.pokemons = pokemonList.results;
      this.renderPokemonList();
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `<h1 class="title">Pokedex</h1>
    <ul class="pokemon-list">
    </ul>
    <div class= "buttons-container"></div>
    `;
  }

  private renderPokemonList(): void {
    const ulElement = document.querySelector(".pokemon-list")!;

    this.pokemons.forEach((pokemon) => {
      const liElement = document.createElement("li")!;

      const card = new PokemonCardComponent(liElement, pokemon.url);
      card.render();

      ulElement.append(liElement);
    });
  }
}

export default AppComponent;
