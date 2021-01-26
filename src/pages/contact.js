import element from "../element";
const contactSection = element("div", "class", "contact-section");
const addressSection = element("div", "class", "address-section");
const reserveSection = element("div", "class", "reserve-section");

addressSection.innerHTML =
  "<h3>Address</h3><p>123 Fake Street<br/>Toronto,ON<br/>T06 0F1</p><h3>Hours</h3><p>Tuesday: 12:00 - 22:00<br/>Wednesday: 12:00 - 22:00<br/>Thursday: 12:00 - 22:00<br/>Friday: 12:00 - 23:30<br/>Saturday: 12:00 - 23:30<br/>Sunday: 12:00 - 23:30</p><h3>Contact Us</h3><p>p: 123-456-7890<br/>e: pizzarestaurant@notarealemail.com</p>";

reserveSection.innerHTML =
  '<h2>Book A Table</h2><form class="contact-form"><div class="user"><div class="user-det"><label for="date">Date</label><input type="date" id="date" required></div><div class="user-det"><label for="time">Time</label><input type="time" id="time" required></div><div class="user-det"><label for="guest">Guest</label><input type="number" id="guest"></div></div><div class="email-input"><input type="email" id="email" placeholder="Enter your email" required></div><input type="submit" id="form-btn"value="Check Availability"></form>';

contactSection.appendChild(addressSection);
contactSection.appendChild(reserveSection);
export { contactSection };
