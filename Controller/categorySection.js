const categoryBox = document.getElementById("categoryBox");



const categories = [
  {
    id: 1,
    icon: "cake.svg",
    title: "Cakes & Pastries",
    subCategories: ["cake1", "cake2", "cake3", "cake4"],
  },
  {
    id: 2,
    icon: "cake.svg",
    title: "Electronics",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 3,
    icon: "cake.svg",
    title: "Groceries",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 4,
    icon: "cake.svg",
    title: "Phones",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 5,
    icon: "cake.svg",
    title: "Laptops",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 6,
    icon: "cake.svg",
    title: "Wine & Spirits",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 7,
    icon: "cake.svg",
    title: "Home Furnishing",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 8,
    icon: "cake.svg",
    title: "Stationery",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 9,
    icon: "cake.svg",
    title: "Toys & Games",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 10,
    icon: "cake.svg",
    title: "Lifestyle",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 11,
    icon: "cake.svg",
    title: "Butchery",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
  {
    id: 12,
    icon: "cake.svg",
    title: "Fresh Fruits & Vegetables",
    subCategories: ["laptops", "lamps", "Gadgets", "electric kettles"],
  },
];

const buildCategoryContent = () => {  
  categories.forEach((item) => {
    return buildEachCategory(item.title, item.icon, item.subCategories);
  });
};

const buildEachCategory = (title, icon, subCategories) => {
  const eachCategory = document.createElement("div");
  eachCategory.className = "each-category";
  eachCategory.innerHTML = `
    <div style="margin-bottom: 5px; padding-bottom:10px; border-bottom: 1px solid black; width:100%; display:flex; flex-direction:row; justify-content:space-between; align-items:center font-size:8px; color:#090B0E;">
      <div style="display:flex; flex-direction:row; gap:15px; align-items:center; color:#090B0E;"> 
        <img
          src="./Assests/icons/${icon}"
          alt="cake-icon"          
          width="18px"
        />
        <p>${title}</p>
      </div>
      
      <img 
        src="./Assests/icons/ChevronRight.svg"
        alt="chevron-right"
        width="20px"
      />
    </div>    
      `;

   subCategories.forEach((item) => {
    return buildSubCategory(item, eachCategory);
  });

  categoryBox?.appendChild(eachCategory);
};

const buildSubCategory = (item, eachCategory) => {
  const subCategory = document.createElement("div");
  subCategory.className = "subcategory";
  subCategory.style.display = "none";
  subCategory.innerHTML = `<p> ${item} </p>`;

  eachCategory.addEventListener("click", () => {
    // console.log(subCategory.style.display);
    if (subCategory.style.display === "flex") {
      subCategory.style.display = "none";
    } else if (subCategory.style.display === "none") {
      subCategory.style.display = "flex";
    }
  });
  eachCategory?.appendChild(subCategory);
};

buildCategoryContent();