import element from "./element";

const navSection = element("div", "id", "nav-section");
const logo = element("h2", "id", "logo");
logo.textContent = "Pizza";

navSection.appendChild(logo);

let pages = ["menu", "about", "contact"];

const navigation = () => {
  const nav = element("ul", "id", "nav");
  nav.setAttribute("class", "topnav");
  pages.forEach((page) => {
    nav.innerHTML += `<li id="${page}-nav">${page.toUpperCase()}</li>`;
  });
  nav.innerHTML += `<li class="icon"><i class="fa fa-bars"></i></li>`;
  navSection.appendChild(nav);
  return navSection;
};

document.body.insertBefore(navigation(), document.body.firstChild);

export default navigation;
