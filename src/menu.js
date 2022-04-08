import Coffee from "./images/coffee.jpg";
import Matcha from "./images/matcha.jpg";
import GingerBeer from "./images/ginger-beer.jpg";
import Pancakes from "./images/pancakes.jpg";
import Waffle from "./images/waffle.jpg";
import Bagel from "./images/bagel.jpg";
import Burger from "./images/Burger.jpg";
import NoodleBowl from "./images/noodle-bowl.jpg";
import RiceBowl from "./images/rice-bowl.jpg";
import Cookies from "./images/cookies.jpg";
import IceCream from "./images/ice-cream.jpg";
import Pie from "./images/pie.jpg";

// Menu title
const titleDiv = document.createElement("div");
titleDiv.classList.add("title-container");
titleDiv.innerHTML = "<h1>Our Menu</h1>";

// Section titles
const beverageTitle = document.createElement("div");
beverageTitle.classList.add("title-container");
beverageTitle.innerHTML = "<h2>Beverages</h2>";

const breakfastTitle = document.createElement("div");
breakfastTitle.classList.add("title-container");
breakfastTitle.innerHTML = "<h2>Breakfast</h2>";

const lunchTitle = document.createElement("div");
lunchTitle.classList.add("title-container");
lunchTitle.innerHTML = "<h2>Lunch</h2>";

const dessertTitle = document.createElement("div");
dessertTitle.classList.add("title-container");
dessertTitle.innerHTML = "<h2>Dessert</h2>";

// Beverage cards
const beverageGrid = document.createElement("div");
beverageGrid.classList.add("content-grid");

const coffeeCard = document.createElement("div");
coffeeCard.classList.add("menu-card");
coffeeCard.innerHTML =
  '<h3>Coffee</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$5</p>';
const coffeeImage = new Image();
coffeeImage.src = Coffee;
coffeeCard.prepend(coffeeImage);

const matchaCard = document.createElement("div");
matchaCard.classList.add("menu-card");
matchaCard.innerHTML =
  '<h3>Matcha Latte</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$5</p>';
const matchaImage = new Image();
matchaImage.src = Matcha;
matchaCard.prepend(matchaImage);

const gingerCard = document.createElement("div");
gingerCard.classList.add("menu-card");
gingerCard.innerHTML =
  '<h3>Ginger Beer</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$4</p>';
const gingerImage = new Image();
gingerImage.src = GingerBeer;
gingerCard.prepend(gingerImage);

beverageGrid.appendChild(coffeeCard);
beverageGrid.appendChild(matchaCard);
beverageGrid.appendChild(gingerCard);

// Breakfast cards
const breakfastGrid = document.createElement("div");
breakfastGrid.classList.add("content-grid");

const pancakeCard = document.createElement("div");
pancakeCard.classList.add("menu-card");
pancakeCard.innerHTML =
  '<h3>Pancakes</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$8</p>';
const pancakeImage = new Image();
pancakeImage.src = Pancakes;
pancakeCard.prepend(pancakeImage);

const waffleCard = document.createElement("div");
waffleCard.classList.add("menu-card");
waffleCard.innerHTML =
  '<h3>Waffle</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$7</p>';
const waffleImage = new Image();
waffleImage.src = Waffle;
waffleCard.prepend(waffleImage);

const bagelCard = document.createElement("div");
bagelCard.classList.add("menu-card");
bagelCard.innerHTML =
  '<h3>Bagel</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$4</p>';
const bagelImage = new Image();
bagelImage.src = Bagel;
bagelCard.prepend(bagelImage);

breakfastGrid.appendChild(pancakeCard);
breakfastGrid.appendChild(waffleCard);
breakfastGrid.appendChild(bagelCard);

// Lunch cards
const lunchGrid = document.createElement("div");
lunchGrid.classList.add("content-grid");

const burgerCard = document.createElement("div");
burgerCard.classList.add("menu-card");
burgerCard.innerHTML =
  '<h3>Burger</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$10</p>';
const burgerImage = new Image();
burgerImage.src = Burger;
burgerCard.prepend(burgerImage);

const noodleCard = document.createElement("div");
noodleCard.classList.add("menu-card");
noodleCard.innerHTML =
  '<h3>Noodle Bowl</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$10</p>';
const noodleImage = new Image();
noodleImage.src = NoodleBowl;
noodleCard.prepend(noodleImage);

const riceCard = document.createElement("div");
riceCard.classList.add("menu-card");
riceCard.innerHTML =
  '<h3>Rice Bowl</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$9</p>';
const riceImage = new Image();
riceImage.src = RiceBowl;
riceCard.prepend(riceImage);

lunchGrid.appendChild(burgerCard);
lunchGrid.appendChild(noodleCard);
lunchGrid.appendChild(riceCard);

// Dessert cards
const dessertGrid = document.createElement("div");
dessertGrid.classList.add("content-grid");

const cookieCard = document.createElement("div");
cookieCard.classList.add("menu-card");
cookieCard.innerHTML =
  '<h3>Fresh-Baked Cookies</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, a.</p><p class="price">$3</p>';
const cookieImage = new Image();
cookieImage.src = Cookies;
cookieCard.prepend(cookieImage);

const iceCreamCard = document.createElement("div");
iceCreamCard.classList.add("menu-card");
iceCreamCard.innerHTML =
  '<h3>Ice Cream</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, nesciunt?</p><p class="price">$4</p>';
const iceCreamImage = new Image();
iceCreamImage.src = IceCream;
iceCreamCard.prepend(iceCreamImage);

const pieCard = document.createElement("div");
pieCard.classList.add("menu-card");
pieCard.innerHTML =
  '<h3>Pie</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p class="price">$6</p>';
const pieImage = new Image();
pieImage.src = Pie;
pieCard.prepend(pieImage);

dessertGrid.appendChild(cookieCard);
dessertGrid.appendChild(iceCreamCard);
dessertGrid.appendChild(pieCard);

// Display the menu page in the given div
const displayMenu = function (parent) {
  parent.appendChild(titleDiv);

  parent.appendChild(beverageTitle);
  parent.appendChild(beverageGrid);

  parent.appendChild(breakfastTitle);
  parent.appendChild(breakfastGrid);

  parent.appendChild(lunchTitle);
  parent.appendChild(lunchGrid);

  parent.appendChild(dessertTitle);
  parent.appendChild(dessertGrid);
};

export default displayMenu;
