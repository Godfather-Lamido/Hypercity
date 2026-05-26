const topDeals = document.getElementById("topDeals");

const topDealsList = [
  {
    id: 1,
    image: "./Assests/images/iphone.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 2,
    image: "./Assests/images/earbuds.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 3,
    image: "./Assests/images/headset.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 4,
    image: "./Assests/images/applepud.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
  {
    id: 5,
    image: "./Assests/images/mouse.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
];

const buildTopDeals = () => {
  topDealsList.forEach((item) => {
    return buildEachDeals(
      item.image,
      item.description,
      item.price1,
      item.price2,
    );
  });
};

const buildEachDeals = (image, description, price1, price2) => {
  console.log("name");
  const eachDeals = document.createElement("div");
  eachDeals.className = "each-deals";
  eachDeals.innerHTML = `
  <div class="flash-sale">
      <p>Flash Sales</p>      
  </div>

    <img src="${image}" alt="product-image" width="100%" object-fit="contain">

    <div class="product-description">
      <p style="font-size: 13px; line-height: 1.4;">${description}</p>
      <div class="product-price">
        <p class="price1" style="font-size: 16px; font-weight: bold; ">${price1}</p>
        <p class="price2" style="font-size: 12px; color: #ccc; text-decoration: line-through;">${price2}</p>
      </div>
    </div>
    
    `;
  // console.log(eachDeals);
  topDeals?.appendChild(eachDeals);
};

buildTopDeals();
