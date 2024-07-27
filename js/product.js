const navbar = document.querySelector(".nav__collection");
const API__URL = "https://fakestoreapi.com";
const content = document.querySelector(".content");

async function fetchSingleData(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  console.log(query);
  let response = await fetch(`${api}/products/${id}`);
  response
    .json()
    .then((res) => createContent(res))
    .catch((err) => console.log(err));
  console.log(response);
}
fetchSingleData(API__URL);
function createContent(data) {
  // console.log("ok");
  console.log(data);
  content.innerHTML = `
     <div class="box">
      <div class= "card__foto">
     <img class= "foto" src= ${data.image} alt="">
     </div>
     <div class="content">
     <div class="meta">
     <div class="theme">
     <h1 class ="title" title ="${data.title}">${data.title}</h1>
     <div class="box__icon"> 
       <div class="box__star">
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       </div>
          <p class= "rating">${data.rating.rate}</p>
          <p class= "category">${data.category}</p>
        </div>
       </div>
       </div>
       <div class="creat">
          <p class="pric">$${data.price}</p>
       <p class ="rect">${data.description}</p>
       <hr>
       </div>
       
       <div class="box__wrapper">
            <div class="box__colors">
                <p class="chek">Colours:</p>
                <input style="background: #E07575;" type="checkbox">
                <input style="background: #A0BCE0;" type="checkbox">
            </div>
            <div class="box__btr">
                <p class="chek">Size:</p>
                <div class="box__button">
                    <button class="box__size">XS</button>
                    <button class="box__size">S</button>
                    <button class="box__size">M</button>
                    <button class="box__size">L</button>
                    <button class="box__size">XL</button>
                </div>
            </div>
            <div class="box__shop">
                <div class="box__much">
                    <button class="math">-</button>
                    <button class="number">2</button>
                    <button class="math">+</button>
                </div>
                <button class="now">Buy Now</button>
                <button class="heart"><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="box__free">
                <div class="box__diliver">
                    <div class="box__card">
                        <img src="../images/icon-delivery.png" alt="">
                    </div>
                    <div class="box__info">
                        <p class="Return">Free Delivery</p>
                        <a class="box__desc" href="#">Enter your postal code for Delivery Availability</a>
                    </div>
                </div>
                <hr class="hr">
                <div class="box__diliver">
                    <div class="box__card">
                        <img src="../images/Icon-return.png" alt="">
                    </div>
                    <div class="box__info">
                        <p class="Return">Return Delivery</p>
                        <a class="box__desc" href="#">Enter your postal code for Delivery Availability</a>
                    </div>
                </div>
            </div>
      </div>
    
     

    
    </div>
           
    `;
}
function toggleShow() {
  navbar.classList.toggle("show");
}
