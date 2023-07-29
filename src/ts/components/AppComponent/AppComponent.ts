import getPokemonList from "../../getData/getPokemonList.js";
import { type Pokemon } from "../../types.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  private pokemons: Pokemon[];

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const pokemonList = await getPokemonList();

      this.pokemons = pokemonList.results;
    })();
  }
}

export default AppComponent;
