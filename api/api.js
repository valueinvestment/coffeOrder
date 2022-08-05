const detail = {
  id: 1,
  name: "커피 컵",
  price: 10000,
  imageUrl:
    "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
  productOptions: [
    {
      id: 1,
      name: "100개 묶음",
      price: 4500,
      stock: 5,
      created_at: "2021-08-23T22:52:17.634Z",
      updated_at: "2021-08-23T22:52:17.638Z",
    },
    {
      id: 2,
      name: "200개 묶음",
      price: 8000,
      stock: 5,
      created_at: "2021-08-23T22:52:34.248Z",
      updated_at: "2021-08-23T22:52:34.252Z",
    },
    {
      id: 24,
      name: "10개 묶음",
      price: 500,
      stock: 555,
      created_at: "2021-08-23T23:03:04.873Z",
      updated_at: "2021-08-23T23:03:04.879Z",
    },
  ],
};

const list = [
  {
    id: 1,
    name: "커피 컵",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
    price: 10000,
  },
  {
    id: 2,
    name: "커피컵 종이홀더",
    imageUrl:
      "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
    price: 1000,
  },
];

export const request = async (url, options = {}) => {
  try {
    if (url.includes("products/1")) {
      return detail;
    } else if (url.includes("carts")) {
    } else {
      return list;
    }
  } catch (e) {
    alert(e.message);
  }
};
