const ingredients = [
  "cartoshka",
  "griby",
  "chesnok",
  "pomidory",
  "zelen",
  "pripravy",
];

const ulList = document.querySelector("#ingredients");
const ingredientsEl = ulList.map((el) => {
  const li = document.createElement("li");
  li.innerHTML = `<p>${el}</p>`;
});

ulList.append(...ingredients);
// =================


const ul = documen.querySelector('#gallery')
const galleryElement = 


