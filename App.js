import { init } from "./router";
import CartPage from "./src/CartPage";
import ProductDetailPage from "./src/ProductDetailPage";
import ProductListPage from "./src/ProductListPage";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = "";

    if (pathname === "/") {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      new ProductDetailPage({ $target, productId }).render();
    } else if (pathname === "/cart") {
      new CartPage({ $target });
    }
  };

  init(this.route);

  window.addEventListener("popstate", this.route);

  this.route();
}
