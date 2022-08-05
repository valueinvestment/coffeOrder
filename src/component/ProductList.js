import { routeChange } from "../../router";

export default function ProductList({ $target, initialState }) {
  this.state = initialState;
  const $productList = document.createElement("ul");
  $target.appendChild($productList);

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    $productList.innerHTML = `
            ${this.state
              .map(
                (product) =>
                  `<li class="Product" data-product-id="${product.id}">
                        <img src="${product.imageUrl}" />
                        <div class="Product__info">
                            <div>${product.name}</div>
                            <div>${product.price}~원</div>
                        </div>
                    </li>`
              )
              .join("")}
        `;
  };

  $productList.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    const { productId } = $li.dataset;

    if (productId) {
      routeChange(`/products/${productId}`);
    }
  });

  this.render();
}
