import element from "../element";
const homeSection = element("div", "class", "home-section");
const heroSection = element("div", "class", "hero-section");

const hero = element("img", "class", "hero-img");
hero.src = "../imgs/pizza_hero_image.jpg";

heroSection.innerHTML =
  '<h1 class="hero-title">Pizza Restaurant</h1><h3 class="hero-text">Best pizza in the world!</h3>';

homeSection.appendChild(hero);
homeSection.appendChild(heroSection);

export { homeSection };
