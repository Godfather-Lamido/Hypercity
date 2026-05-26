const limitedStockDeals = document.getElementById("limitedStockDeals");

const limitedStockDealsList = [
  {
    id: 1,
    icon1: "heart.svg",
    image: "./Assests/images/iphone.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 2,
    icon1: "heart.svg",
    image: "./Assests/images/earbuds.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 3,
    icon1: "heart.svg",
    image: "./Assests/images/headset.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 4,
    icon1: "heart.svg",
    image: "./Assests/images/applepud.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 5,
    icon1: "heart.svg",
    image: "./Assests/images/mouse.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 6,
    icon1: "heart.svg",
    image: "./Assests/images/mouse.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 7,
    icon1: "heart.svg",
    image: "./Assests/images/iphone.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 8,
    icon1: "heart.svg",
    image: "./Assests/images/applepud.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 9,
    icon1: "heart.svg",
    image: "./Assests/images/headset.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 10,
    icon1: "heart.svg",
    image: "./Assests/images/earbuds.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
];

const buildLimitedStockDeals = () => {
  limitedStockDealsList.forEach((item) => {
    return buildEachLimitedStockDeals(item.icon1, item.image, item.description, item.price1, item.price2);
  });
};

const buildEachLimitedStockDeals = (icon, image, description, price1, price2) => {
  const eachStockDeals = document.createElement("div");
  eachStockDeals.className = "each-StockDeals";
  eachStockDeals.innerHTML = `
    <img src="./Assests/icons/${icon}" class="heart-icon" alt="heart-icon">
    <img src="${image}" alt="product-image" width="100%" object-fit="contain">

    <div class="product-description">
      <p style="font-size: 13px; line-height: 1.4;">${description}</p>
      <div class="product-price">
        <p class="price1" style="font-size: 16px; font-weight: bold; ">${price1}</p>
        <p class="price2" style="font-size: 12px; color: #ccc; text-decoration: line-through;">${price2}</p>
      </div>
    </div>

    <div class="add-to-cart">
      <button class="add-to-cart-btn">Add to Cart <img src="./Assests/icons/shopping-cart.svg" alt="cart-icon" width="18px">
      </button>
    </div>
  `;
  limitedStockDeals?.appendChild(eachStockDeals);
}

buildLimitedStockDeals();
