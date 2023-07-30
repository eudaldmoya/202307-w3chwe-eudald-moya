import AppComponent from "./AppComponent";

describe("Given an AppComponent class", () => {
  describe("When it receives div", () => {
    test("Then it should show 'Pokemon List' inside a heading", () => {
      const divElement = document.createElement("div");
      const expectedText = "Pokedex";

      const appComponent = new AppComponent(divElement);
      appComponent.render();

      const headerElement = divElement.querySelector("h1");

      expect(headerElement?.textContent).toBe(expectedText);
    });
  });
});

describe("Given an AppComponent class", () => {
  describe("When it receives div", () => {
    test("Then it should render a button next", () => {
      const divElement = document.createElement("div");
      const expectedText = "next";

      const appComponent = new AppComponent(divElement);
      appComponent.render();

      const buttonElement = divElement.querySelector(".next")!;
      setTimeout(() => {
        expect(buttonElement.textContent).toBe(expectedText);
      }, 2000);
    });
  });
});
