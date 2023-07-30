import PokemonCardComponent from "./PokemonCardComponent";

describe("Given a PokemonCardComponent", () => {
  describe("When it receives a div and 'https://pokeapi.co/api/v2/pokemon/1'", () => {
    test("Then it should show a card with a heading saying bulbasaur", () => {
      const url = "https://pokeapi.co/api/v2/pokemon/1";
      const divElement = document.createElement("div");
      const expectedName = "bulbasaur";

      const cardComponent = new PokemonCardComponent(divElement, url);
      cardComponent.render();

      setTimeout(() => {
        const headingElement = divElement.querySelector("h2")!;

        expect(headingElement.textContent).toBe(expectedName);
      }, 2000);
    });
  });
});
