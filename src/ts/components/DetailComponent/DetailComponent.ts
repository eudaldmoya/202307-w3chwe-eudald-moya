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
    <article class= "detail">
      <img class="detail__image">
      <div class="detail__text">
        <h2 class="text__name"></h2>
        <ul class="text__types">
        </ul>
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
    console.log(this.pokemonData.types);
    const imgElement = this.element.querySelector("img");
    imgElement?.setAttribute(
      "src",
      this.pokemonData.sprites.other.dream_world.front_default
    );

    const nameElement = this.element.querySelector(".text__name")!;
    nameElement.textContent = this.pokemonData.name;

    const typesElement = this.element.querySelector(".text__types")!;
    this.pokemonData.types.forEach((type) => {
      const typeElement = document.createElement("li");
      typeElement.textContent = type.type.name;
      typesElement.append(typeElement);
    });
  }
}

export default DetailComponent;
