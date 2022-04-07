import "./style.css";
import displayHome from "./home.js";
import displayMenu from "./menu.js";

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");
const contentDiv = document.querySelector(".content");

const tabs = [homeTab, menuTab, contactTab];

// Clears all children of the given div
const clear = function (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// Changes to the given tab on click
const changeTab = function (index) {
  for (let i = 0; i < tabs.length; i++) {
    if (i === index) {
      tabs[i].classList.add("active");
    } else {
      tabs[i].classList.remove("active");
    }
  }

  if (index == 0) {
    clear(contentDiv);
    displayHome(contentDiv);
  } else if (index == 1) {
    clear(contentDiv);
    displayMenu(contentDiv);
  } else if (index == 2) {
    return;
  }
};

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    changeTab(i);
  });
}

displayHome(contentDiv);
