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
    icon: "",
    title: "Electronics",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 3,
    icon: "",
    title: "Groceries",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 4,
    icon: "",
    title: "Phones",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 5,
    icon: "",
    title: "Laptops",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 6,
    icon: "",
    title: "Wine & Spirits",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 7,
    icon: "",
    title: "Home Furnishing",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 8,
    icon: "",
    title: "Stationery",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 9,
    icon: "",
    title: "Toys & Games",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 10,
    icon: "",
    title: "Lifestyle",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 11,
    icon: "",
    title: "Butchery",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
  {
    id: 12,
    icon: "",
    title: "Fresh Fruits & Vegetables",
    subCategories: ['laptops', 'lamps', 'Gadgets', 'electric kettles'],
  },
];

const buildCategoryContent = () => {
  categories.map((item, index) => {
    return buildEachCategory(item.title, item.icon, item.subCategories);
  });
};

const buildEachCategory = (label, icon, subCategories) => {
  const eachCategory = document.createElement("div");
  eachCategory.className = "each-category";
  eachCategory.innerHTML = `
    <div style="margin-bottom: 14px; padding-bottom:10px;.;l border-bottom: 1px solid #D9D9D9; width:100%; display:flex; flex-direction:row; justify-content:space-between; align-items:center">
      <div style="display:flex; flex-direction:row; gap:15px; align-items:center; font-size:14px; color:#090B0E;"> 
        <img
          src="./Assests/icons/${icon}"
          alt="cake-icon"          
          width="24px"
        />
        <p>${label}</p>
      </div>
      
      <img 
        src="./Assests/icons/ChevronRight.svg"
        alt="chevron-right"
        width="20px"
      />
    </div>    
      `;
    subCategories.map((item, index)=>{
        return buildSubCategory(item, eachCategory)
    })
  categoryBox.appendChild(eachCategory);
};

const buildSubCategory = (item, eachCategory) =>{
    const subCategory = document.createElement('div');
    subCategory.className = 'subcategory'
    subCategory.innerHTML = `<p> ${item} </p>`

    eachCategory.appendChild(subCategory)
}

buildCategoryContent();
