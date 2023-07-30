import getPokemonList from "../../getData/getPokemonList.js";
import { apiBaseUrl } from "../../globals/globals.js";
import { type Pokemon } from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

class AppComponent extends Component {
  private pokemons: Pokemon[] = [];
  private previous: string;
  private next: string;
  private pokemonCounter = 0;

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
      <span class="pokemon-counter">0/1281</span> 
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

  private removeActualList(): void {
    const ulElement = this.element.querySelector(".pokemon-list")!;

    ulElement.innerHTML = "";
  }

  private handleButtons(): void {
    const previousButtonElement = this.element.querySelector(".previous");
    const nextButtonElement = this.element.querySelector(".next");

    previousButtonElement?.addEventListener("click", async () => {
      if (this.previous !== null) {
        const spanElement = this.element.querySelector(".pokemon-counter")!;
        const newPokemonList = await getPokemonList(this.previous);

        this.pokemons = newPokemonList.results;
        this.next = newPokemonList.next;
        this.previous = newPokemonList.previous;
        this.pokemonCounter -= 20;
        spanElement.textContent = `${this.pokemonCounter}/1281`;
        this.removeActualList();
        this.renderPokemonList();
      }
    });

    nextButtonElement?.addEventListener("click", async () => {
      if (this.next !== null) {
        const spanElement = this.element.querySelector(".pokemon-counter")!;
        const newPokemonList = await getPokemonList(this.next);

        this.pokemons = newPokemonList.results;
        this.next = newPokemonList.next;
        this.previous = newPokemonList.previous;
        this.pokemonCounter += 20;
        spanElement.textContent = `${this.pokemonCounter}/1281`;
        this.removeActualList();
        this.renderPokemonList();
      }
    });
  }
}

export default AppComponent;
