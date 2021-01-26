import { aboutSection } from "./pages/about";
import { homeSection } from "./pages/home";
import { menuSection } from "./pages/menu";
import { contactSection } from "./pages/contact";

import navigation from "./navigation";

const aboutNav = document.getElementById("about-nav");
const homeNav = document.getElementById("logo");
const menuNav = document.getElementById("menu-nav");
const contactNav = document.getElementById("contact-nav");
const icon = document.querySelector(".icon");

let content = document.getElementById("content");
content.appendChild(homeSection);

icon.addEventListener("click", () => {
  let x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

homeNav.addEventListener("click", () => {
  content.innerHTML = "";
  menuNav.removeAttribute("class", "active");
  contactNav.removeAttribute("class", "active");
  aboutNav.removeAttribute("class", "active");
  content.appendChild(homeSection);
});

aboutNav.addEventListener("click", () => {
  content.innerHTML = "";
  aboutNav.setAttribute("class", "active");
  menuNav.removeAttribute("class", "active");
  contactNav.removeAttribute("class", "active");
  content.appendChild(aboutSection);
});

menuNav.addEventListener("click", () => {
  content.innerHTML = "";
  menuNav.setAttribute("class", "active");
  aboutNav.removeAttribute("class", "active");
  contactNav.removeAttribute("class", "active");
  content.appendChild(menuSection);
});

contactNav.addEventListener("click", () => {
  content.innerHTML = "";
  contactNav.setAttribute("class", "active");
  aboutNav.removeAttribute("class", "active");
  menuNav.removeAttribute("class", "active");
  content.appendChild(contactSection);
});
