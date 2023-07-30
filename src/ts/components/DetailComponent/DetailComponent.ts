import getPokemonData from "../../getData/getPokemonData.js";
import { apiBaseUrl } from "../../globals/globals.js";
import { type PokemonData } from "../../types.js";
import Component from "../Component/Component.js";

class DetailComponent extends Component {
  private pokemonData: PokemonData;
  private readonly id: number;

  constructor(parentElement: Element) {
    super(parentElement, "section", "detail-section");

    this.id = parseInt(localStorage.getItem("id")!, 10);

    (async () => {
      const pokemonData = await getPokemonData(`${apiBaseUrl}/${this.id}`);
      this.pokemonData = pokemonData;

      this.setVariables();
    })();
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `<button class="button back">back to home page</button>  
    <article class= "card-detail">
      <img class="card__image">
      <div class="card_text">
        <h2 class="card__name"></h2>
      </div>
    </article>`;

    this.handleBackButton();
  }

  public handleBackButton(): void {
    const backButtonElement = this.element.querySelector(".back")!;

    backButtonElement.addEventListener("click", () => {
      window.location.href = "index.html";
    });
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

export default DetailComponent;
