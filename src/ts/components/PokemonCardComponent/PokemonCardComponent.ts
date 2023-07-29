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

  private setVariables(): void {
    const imgElement = this.element.querySelector("img");
    imgElement?.setAttribute(
      "src",
      this.pokemonData.sprites.other.dream_world.front_default
    );

    const nameElement = this.element.querySelector(".card__name")!;
    nameElement.textContent = this.pokemonData.name;
  }
}

export default PokemonCardComponent;
