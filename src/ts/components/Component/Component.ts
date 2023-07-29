import { type ComponentStructure } from "../../types";

class Component implements ComponentStructure {
  protected readonly element: Element;

  constructor(
    private readonly parentElement: Element,
    tag: string,
    className: string
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }
}

export default Component;
