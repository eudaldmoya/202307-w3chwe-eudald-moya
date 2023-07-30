import DetailComponent from "./components/DetailComponent/DetailComponent.js";

const appContainer = document.querySelector(".app-detail");

if (!appContainer) {
  throw new Error("App container is missing");
}

const detailComponent = new DetailComponent(appContainer);
detailComponent.render();
