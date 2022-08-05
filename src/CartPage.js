import { routeChange } from "../router";
import { getItem } from "../storage";
import { request } from "../api/api";
import Cart from "./component/Cart";

export default function CartPage({ $target }) {
  const $page = document.createElement("div");
  $page.innerHTML = "장비구니 페이지";
  $page.className = "CartPage";

  const cartData = getItem("products_cart", []);
  this.state = {
    products: null,
  };

  console.log(JSON.parse(localStorage.getItem("products_cart")));

  let cartComponent = null;

  this.render = () => {
    if (cartData.length === 0) {
      alert("장바구니가 비어있습니다.");
      routeChange("/");
    } else {
      $target.appendChild($page);
      // Cart 컴포넌트 생성
      if (this.state.products && !cartComponent) {
        cartComponent = new Cart({
          $target: $page,
          initialState: this.state.products,
        });
      }
    }
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.fetchProducts = async () => {
    const products = await Promise.all(
      cartData.map(async (cartItem) => {
        const product = await request(`/products/${cartItem.productId}`);
        const selectedOption = product.productOptions.find(
          (option) => option.id === cartItem.optionId
        );

        return {
          imageUrl: product.imageUrl,
          productName: product.name,
          quantity: cartItem.quantity,
          productPrice: product.price,
          optionName: selectedOption.name,
          optionPrice: selectedOption.price,
        };
      })
    );

    this.setState({ products });
  };

  this.fetchProducts();
}
