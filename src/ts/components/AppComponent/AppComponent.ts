import getPokemonList from "../../getData/getPokemonList.js";
import { apiBaseUrl } from "../../globals/globals.js";
import { type Pokemon } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class AppComponent extends Component {
  private pokemons: Pokemon[] = [];
  private previous: string;
  private next: string;

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const pokemonList = await getPokemonList(apiBaseUrl);

      this.next = pokemonList.next;
      this.previous = pokemonList.previous;
      this.pokemons = pokemonList.results;
      this.renderPokemonList();
      this.handleButtons();
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `<h1 class="title">Pokedex</h1>
    <ul class="pokemon-list">
    </ul>
    <div class= "buttons-container">
      <button class="previous">previous</button>
      <span>/1281</span> 
      <button class="next">next</button>
    </div>
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

  private handleButtons(): void {
    const previousButtonElement = this.element.querySelector(".previous");
    const nextButtonElement = this.element.querySelector(".next");

    previousButtonElement?.addEventListener("click", async () => {
      if (this.previous !== null) {
        const newPokemonList = await getPokemonList(this.previous);

        this.pokemons = newPokemonList.results;
        this.renderPokemonList();
      }
    });

    nextButtonElement?.addEventListener("click", async () => {
      if (this.next !== null) {
        const newPokemonList = await getPokemonList(this.next);

        this.pokemons = newPokemonList.results;
        this.renderPokemonList();
      }
    });
  }
}

export default AppComponent;
