import element from "../element";

const menuSection = element("div", "class", "menu-section");
const lunchSection = element("div", "class", "lunch-section");
const dinnerSection = element("div", "class", "dinner-section");
const lunchTitle = element("h2", "class", "lunch-title");
const dinnerTitle = element("h2", "class", "dinner-title");
lunchTitle.textContent = "Lunch";
dinnerTitle.textContent = "Dinner";

menuSection.appendChild(lunchTitle);
menuSection.appendChild(lunchSection);
menuSection.appendChild(dinnerTitle);
menuSection.appendChild(dinnerSection);

const mealCard = (name, ingredients, price) => {
  const card = element("div", "class", "card");
  const mealName = element("h3", "class", "meal-name");
  mealName.textContent = name;
  const mealIng = element("p", "class", "meal-ingr");
  mealIng.textContent = ingredients;
  const mealPrice = element("p", "class", "meal-price");
  mealPrice.textContent = price;

  card.appendChild(mealName);
  card.appendChild(mealIng);
  card.appendChild(mealPrice);
  return card;
};

//Meals
let lunchArray = [
  mealCard("Margarita", "cheese, basil, love", "14"),
  mealCard(
    "Quatro Fomage",
    "Artichoke, Mozzerella, Basil, rich tomato sauce",
    "16"
  ),
  mealCard(
    "Anchovy & Onion",
    "All the shrooms, spicy peperoni, rich tomato sauce",
    "20"
  ),
];

let dinnerArray = [
  mealCard("Margarita", "cheese, basil, love", "14"),
  mealCard(
    "Capricosa",
    "Artichoke, Mozzerella, Basil, rich tomato sauce, love",
    "14"
  ),
  mealCard(
    "Al Fungi",
    "All the shrooms, spicy peperoni, rich tomato sauce",
    "20"
  ),
];

lunchArray.map((meal) => lunchSection.appendChild(meal));
dinnerArray.map((meal) => dinnerSection.appendChild(meal));

export { menuSection };
