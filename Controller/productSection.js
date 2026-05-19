const featuredProducts = document.getElementById("featuredProducts");

const featuredProductsList = [
  {
    id: 1,
    icon1: "heart.svg",
    image: "./Assests/images/iphone.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 2,
    icon1: "heart.svg",
    image: "./Assests/images/earbuds.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 3,
    icon1: "heart.svg",
    image: "./Assests/images/headset.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 4,
    icon1: "heart.svg",
    image: "./Assests/images/applepud.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 5,
    icon1: "heart.svg",
    image: "./Assests/images/mouse.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 6,
    icon1: "heart.svg",
    image: "./Assests/images/mouse.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 7,
    icon1: "heart.svg",
    image: "./Assests/images/iphone.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 8,
    icon1: "heart.svg",
    image: "./Assests/images/applepud.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
  },
  {
    id: 9,
    icon1: "heart.svg",
    image: "./Assests/images/headset.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
    title: "Add to Cart",
    icon2: "cart.svg",
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

const buildFeaturedProducts = () => {
  featuredProductsList.forEach((item) => {
    return buildEachProducts(item.icon1, item.image, item.description, item.price1, item.price2);
  });
};

const buildEachProducts = (icon, image, description, price1, price2) => {
  const eachProduct = document.createElement("div");
  eachProduct.className = "each-product";
  eachProduct.innerHTML = `
  
    <img src="./Assests/icons/${icon}" alt="heart-icon" width="24px"
  
  `
  featuredProducts.appendChild(eachProduct);
}

buildFeaturedProducts();