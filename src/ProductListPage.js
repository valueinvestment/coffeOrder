import { request } from "../api/api";
import ProductList from "./component/ProductList";

export default function ProductListPage({ $target, initialState }) {
  this.state = initialState;
  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    const products = await request("/products");
    this.setState(products);
  };

  const $page = document.createElement("div");
  $page.className = "ProductListPage";
  $page.innerHTML = "<h1>상품 목록</h1>";

  this.render = async () => {
    await fetchProducts();

    const prodcutList = new ProductList({
      $target: $page,
      initialState: this.state,
    });

    $target.appendChild($page);
  };
}
