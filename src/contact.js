// Create the title
const titleDiv = document.createElement("div");
titleDiv.classList.add("title-container");
titleDiv.innerHTML = "<h1>Lorem Ipsum Dining, Inc</h1>";

// Display the contact page in the given div
const displayContact = function (parent) {
  parent.appendChild(titleDiv);
};

export default displayContact;
