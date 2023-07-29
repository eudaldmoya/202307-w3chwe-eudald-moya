import getPokemonList from "../../getData/getPokemonList.js";
import { type Pokemon } from "../../types.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  private pokemons: Pokemon[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const pokemonList = await getPokemonList();
      console.log(pokemonList.results);
      this.pokemons = pokemonList.results;
      this.renderPokemonList();
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `<h1 class="title">Pokemon List</h1>
    <ul class="pokemon-list">
    </ul>
    <div class= "buttons-container"></div> 
    `;
  }

  private renderPokemonList(): void {
    const ulElement = document.querySelector(".pokemon-list")!;

    this.pokemons.forEach((pokemon) => {
      const liElement = document.createElement("li")!;

      const linkElement = document.createElement("a")!;
      const linkToDetail = `#`;
      linkElement.textContent = pokemon.name;
      linkElement.setAttribute("href", linkToDetail);

      liElement.append(linkElement);
      ulElement.append(liElement);
    });
  }
}

export default AppComponent;
