import AppComponent from "./AppComponent";

describe("Given an AppComponent class", () => {
  describe("When it receives div", () => {
    test("Then it should show 'Pokemon List' inside a heading", () => {
      const divElement = document.createElement("div");
      const expectedText = "Pokemon List";

      const appComponent = new AppComponent(divElement);
      appComponent.render();

      const headerElement = divElement.querySelector("h1");

      expect(headerElement?.textContent).toBe(expectedText);
    });
  });
});
