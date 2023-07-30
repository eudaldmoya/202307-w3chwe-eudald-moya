import getPokemonData from "../../getData/getPokemonData.js";
import { type PokemonData } from "../../types";
import Component from "../Component/Component.js";

class PokemonCardComponent extends Component {
  pokemonData: PokemonData;
  private id: number;

  constructor(parentElement: Element, url: string) {
    super(parentElement, "article", "card");

    (async () => {
      const pokemonData = await getPokemonData(url);
      this.pokemonData = pokemonData;
      this.id = pokemonData.id;
      this.setVariables();
      this.handleClick();
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
    const imgElement = this.element.querySelector("img")!;
    imgElement.setAttribute(
      "src",
      this.pokemonData.sprites.other.dream_world.front_default
    );
    imgElement.setAttribute("alt", `${this.pokemonData.name} artwork`);

    const nameElement = this.element.querySelector(".card__name")!;
    nameElement.textContent = this.pokemonData.name;
  }

  private handleClick(): void {
    this.element.addEventListener("click", () => {
      localStorage.setItem("id", `${this.id}`);
      window.location.href = `/pokemonDetail.html?id=${this.id}`;
    });
  }
}

export default PokemonCardComponent;
