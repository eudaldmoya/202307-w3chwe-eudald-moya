import Component from "../Component/Component.js";

class DetailComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "section", "detail-section");
    const url = window.location.search;
    const params = new URLSearchParams(url);
    console.log(params.get("id"));
  }

  public render(): void {
    super.render();

    this.element.innerHTML = `<button class="back">back to home page</button>  
    <article class= "card-detail"></article>`;

    this.handleBackButton();
  }

  public handleBackButton(): void {
    const backButtonElement = this.element.querySelector(".back")!;

    backButtonElement.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

export default DetailComponent;
