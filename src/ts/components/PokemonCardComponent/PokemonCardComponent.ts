import getPokemonData from "../../getData/getPokemonData.js";
import { type PokemonData } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  pokemonData: PokemonData;

  constructor(parentElement: Element, url: string) {
    super(parentElement, "article", "card");

    (async () => {
      const pokemonData = await getPokemonData(url);
      console.log(`pokemonData:`, pokemonData);
      this.pokemonData = pokemonData;
      console.log(pokemonData.sprites);
      this.setVariables();
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `
      <h2 class="card__name"></h2>
      <img class="card__image">
    `;
  }
}

export default PokemonCardComponent;
