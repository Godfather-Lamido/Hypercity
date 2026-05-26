const specialDays = document.getElementById("specialDays");

const specialDaysList = [
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
    fDeals: true,
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
    fDeals: true,
    image: "./Assests/images/mouse.svg",
    description: "Boom Speaker with Woofer with Ga...",
    price1: "$40,000",
    price2: "$35,000",
  },
];

const buildSpecialDays = () => {
  specialDaysList.forEach((item) => {
    return buildEachSpecial(
      item.icon1,
      item.image,
      item.description,
      item.price1,
      item.price2,
      item.fDeals,
    );
  });
};

const buildEachSpecial = (icon, image, description, price1, price2, fDeals) => {
  const eachSpecialDays = document.createElement("div");
  eachSpecialDays.className = "each-specialDays";
  eachSpecialDays.innerHTML = `
  <div>
    <img src="./Assests/icons/${icon}" class="heart-icon" alt="heart-icon">
    ${
      fDeals
      ? `<div class="flash-sale">
      <p>Flash Sales</p>      
      </div>`
      : ""
    }
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
  specialDays?.appendChild(eachSpecialDays);
};

buildSpecialDays();
