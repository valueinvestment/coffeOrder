import { request } from "../api/api";
import ProductDetail from "./component/ProductDetail";

export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
    product: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $page = document.createElement("div");
  $page.innerHTML = "상품 상세 페이지";
  $page.className = "ProductDetailPage";

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = "Loading...";
    } else {
      $target.innerHTML = "";
      $target.appendChild($page);
      new ProductDetail({ $target: $page, initialState: this.state });
    }
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/products/${productId}`);
    this.setState({
      product: product,
      selectedOptions: [],
    });
  };

  this.fetchProduct();
}
