const navbar = document.querySelector(".nav__collection");
console.log(navbar);
const API__URL = "https://fakestoreapi.com";
console.log(API__URL);
const skeleton = document.querySelector(".skeleton");
const wrapper = document.querySelector(".wrapper");
const semore = document.querySelector(".semore");
const collection = document.querySelector(".collection");
for (let i = 0; i < 12; i++) {
  let skeletonItem = document.createElement("div");
  skeletonItem.classList.add("skeleton__item");
  skeletonItem.innerHTML = `
      <div class="skeletton__images skelete__inme"></div>
                    <div class="skeleton__line skelete__inme"></div>
                    <div class="skeleton__line skelete__inme"></div>
                    <div class="skeleton__line skelete__inme"></div>
    `;
  skeleton.append(skeletonItem);
}
let perPageCount = 6;
let offset = 1;
let category = "";
async function fetchData(api, limit, category) {
  let response = await fetch(`${api}/products${category}?limit=${limit}`);
  console.log(api);
  response
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      skeleton.style.display = "none";
    });
}
fetchData(API__URL, perPageCount, category);

function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }

  data.forEach((product) => {
    let cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.dataset.id = product.id;
    cardItem.innerHTML = `
        <div class="icon"><i class="fa-solid fa-heart"></i></div>
        <img class= "card__image" src=${product.image} alt="">
        <p  class = "desck one" title="${product.title}">${product.title}</p>
        <p class= "desck" title ="${product.description}">${product.description}</p>
   
  </div>
        <button class= "buy">Buy now</button>
        `;
    wrapper.appendChild(cardItem);
  });
}
semore.addEventListener("click", () => {
  offset++;
  fetchData(API__URL, perPageCount * offset, category);
});

function createCategory(data) {
  data.forEach((category) => {
    let list = document.createElement("li");
    list.className = "item";
    list.innerHTML = `
        <data value="/category/${category}">${category}</data>
        `;
    collection.appendChild(list);
  });
}
// collection.addEventListener("click", (e) => {
//   if (e.target.tagName === "DATA") {
//     let val = e.target.value;
//     let category = val;
//     fetchData(API__URL, perPageCount * offset, category);
//   }
// });
wrapper.addEventListener("click", (e) => {
  if (e.target.className.includes("card__image"))
    //console.log(e.target.closest(".card").dataset.id);
    window.open(
      `/pages/product.html?id=${e.target.closest(".card").dataset.id} `,
      "_self"
    );
});

function toggleShow() {
  navbar.classList.toggle("show");
}
