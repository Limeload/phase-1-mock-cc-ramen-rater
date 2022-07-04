// write your code here
const ramenMenu = document.querySelector("#ramen-menu");
const baseUrl = "http://localhost:3000";

fetch(baseUrl + "/ramens")
  .then((res) => res.json())
  .then((ramensData) => renderRamens(ramensData));

function renderRamens(ramens) {
  updateRamenDetails(ramens[0]);
  ramens.forEach(appendRamenImage);
}

function appendRamenImage(ramen) {
  const img = document.createElement("img");
  img.src = ramen.image;
  img.details = ramen;
  img.addEventListener("click", () => updateRamenDetails(ramen));
  ramenMenu.append(img);
}

function updateRamenDetails(ramen) {
    //   let ramen = e.target.details;
    const name = document.querySelector(".name");
    name.innerText = ramen.name;
    const image = document.querySelector(".detail-image");
    image.src = ramen.image;
    const restaurant = document.querySelector(".restaurant");
    restaurant.innerText = ramen.restaurant;
    const rating = document.querySelector("#rating-display");
    rating.innerText = ramen.rating;
    const comment = document.querySelector("#comment-display");
    comment.innerText = ramen.comment;
  }

  const ramenForm = document.querySelector("#new-ramen");
ramenForm.addEventListener("submit", createRamen);

function createRamen(event) {
  event.preventDefault();
  const name = document.querySelector("#new-name").value;
  const restaurant = document.querySelector("#new-restaurant").value;
  const image = document.querySelector("#new-image").value;
  const rating = document.querySelector("#new-rating").value;
  const comment = document.querySelector("#new-comment").value;
  //   console.log(name, restaurant, image, rating, comment);
  const ramen = { name, restaurant, image, rating, comment };
  console.log(ramen);
  appendRamenImage(ramen);
}

