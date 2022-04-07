import Booth from "./images/booth.jpg";

// Create the title
const titleDiv = document.createElement("div");
titleDiv.classList.add("title-container");
titleDiv.innerHTML = "<h1>Lorem Ipsum Dining, Inc</h1>";

// Create an array of the other elements on the page

// Introductory paragraph
const introP = document.createElement("div");
introP.classList.add("content-container");
introP.innerHTML =
  "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium non soluta sed maxime? Consequuntur exercitationem sit, sapiente corporis voluptatibus officia perferendis ab aliquam ad quos sunt dicta placeat modi excepturi.</p>";

// Quote
const quote = document.createElement("div");
quote.classList.add("content-container");
quote.innerHTML =
  "<figure><blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia facilis quis temporibus aspernatur, quas esse voluptates odit alias? Aut, error libero? Debitis deleniti sapiente dolore nostrum ab laborum eveniet recusandae?</blockquote> <figcaption>Abraham Lincoln</figcaption></figure>";

// Hours
const hours = document.createElement("div");
hours.classList.add("content-container", "centered-text");
hours.innerHTML =
  "<h2>Hours</h2><ul><li>Sunday: 6am - 3pm</li><li>Monday: 6am - 5pm</li><li>Tuesday: 6am - 5pm</li><li>Wednesday: 6am - 5pm</li><li>Thursday: 6am - 5pm</li><li>Friday: 6am - 10pm</li><li>Saturday: 6am - 10pm</li></ul>";

// Bottom image
const bottomImage = document.createElement("div");
bottomImage.classList.add("image-container");
const boothImage = new Image();
boothImage.src = Booth;
bottomImage.appendChild(boothImage);

// Function to display the home page in the given div
const displayHome = function (parent) {
  parent.appendChild(titleDiv);
  parent.appendChild(introP);
  parent.appendChild(quote);
  parent.appendChild(hours);
  parent.appendChild(bottomImage);
};

export default displayHome;
