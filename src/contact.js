import Sign from "./images/sign.jpg";

// Create the title
const titleDiv = document.createElement("div");
titleDiv.classList.add("title-container");
titleDiv.innerHTML = "<h1>Contact Us!</h1>";

// Add contact info
const contactInfo = document.createElement("div");
contactInfo.classList.add("content-grid");

const phone = document.createElement("div");
phone.classList.add("content-container", "centered-text");
phone.innerHTML = "<h2>Phone</h2><p>555-0134</p>";
contactInfo.appendChild(phone);

const email = document.createElement("div");
email.classList.add("content-container", "centered-text");
email.innerHTML = "<h2>Email</h2><p><a href='#'>foo@bar.com</a></p>";
contactInfo.appendChild(email);

// Add a bottom photo
const photo = document.createElement("div");
photo.classList.add("image-container");
const sign = new Image();
sign.src = Sign;
photo.appendChild(sign);

// Display the contact page in the given div
const displayContact = function (parent) {
  parent.appendChild(titleDiv);
  parent.appendChild(contactInfo);
  parent.appendChild(photo);
};

export default displayContact;
