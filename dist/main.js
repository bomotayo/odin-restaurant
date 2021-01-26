(()=>{"use strict";const e=(e,t,i)=>{const a=document.createElement(e);return a.setAttribute(t,i),a},t=e("div","class","about-section");t.innerHTML="<h2>Pizza Restaurant</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod</p>";const i=e("div","class","home-section"),a=e("div","class","hero-section"),s=e("img","class","hero-img");s.src="../imgs/pizza_hero_image.jpg",a.innerHTML='<h1 class="hero-title">Pizza Restaurant</h1><h3 class="hero-text">Best pizza in the world!</h3>',i.appendChild(s),i.appendChild(a);const n=e("div","class","menu-section"),l=e("div","class","lunch-section"),c=e("div","class","dinner-section"),r=e("h2","class","lunch-title"),o=e("h2","class","dinner-title");r.textContent="Lunch",o.textContent="Dinner",n.appendChild(r),n.appendChild(l),n.appendChild(o),n.appendChild(c);const d=(t,i,a)=>{const s=e("div","class","card"),n=e("h3","class","meal-name");n.textContent=t;const l=e("p","class","meal-ingr");l.textContent=i;const c=e("p","class","meal-price");return c.textContent=a,s.appendChild(n),s.appendChild(l),s.appendChild(c),s};let u=[d("Margarita","cheese, basil, love","14"),d("Quatro Fomage","Artichoke, Mozzerella, Basil, rich tomato sauce","16"),d("Anchovy & Onion","All the shrooms, spicy peperoni, rich tomato sauce","20")],p=[d("Margarita","cheese, basil, love","14"),d("Capricosa","Artichoke, Mozzerella, Basil, rich tomato sauce, love","14"),d("Al Fungi","All the shrooms, spicy peperoni, rich tomato sauce","20")];u.map((e=>l.appendChild(e))),p.map((e=>c.appendChild(e)));const m=e("div","class","contact-section"),h=e("div","class","address-section"),v=e("div","class","reserve-section");h.innerHTML="<h3>Address</h3><p>123 Fake Street<br/>Toronto,ON<br/>T06 0F1</p><h3>Hours</h3><p>Tuesday: 12:00 - 22:00<br/>Wednesday: 12:00 - 22:00<br/>Thursday: 12:00 - 22:00<br/>Friday: 12:00 - 23:30<br/>Saturday: 12:00 - 23:30<br/>Sunday: 12:00 - 23:30</p><h3>Contact Us</h3><p>p: 123-456-7890<br/>e: pizzarestaurant@notarealemail.com</p>",v.innerHTML='<h2>Book A Table</h2><form class="contact-form"><div class="user"><div class="user-det"><label for="date">Date</label><input type="date" id="date" required></div><div class="user-det"><label for="time">Time</label><input type="time" id="time" required></div><div class="user-det"><label for="guest">Guest</label><input type="number" id="guest"></div></div><div class="email-input"><input type="email" id="email" placeholder="Enter your email" required></div><input type="submit" id="form-btn"value="Check Availability"></form>',m.appendChild(h),m.appendChild(v);const b=e("div","id","nav-section"),C=e("h2","id","logo");C.textContent="Pizza",b.appendChild(C);let y=["menu","about","contact"];document.body.insertBefore((()=>{const t=e("ul","id","nav");return t.setAttribute("class","topnav"),y.forEach((e=>{t.innerHTML+=`<li id="${e}-nav">${e.toUpperCase()}</li>`})),t.innerHTML+='<li class="icon"><i class="fa fa-bars"></i></li>',b.appendChild(t),b})(),document.body.firstChild);const g=document.getElementById("about-nav"),A=document.getElementById("logo"),L=document.getElementById("menu-nav"),z=document.getElementById("contact-nav"),T=document.querySelector(".icon");let f=document.getElementById("content");f.appendChild(i),T.addEventListener("click",(()=>{let e=document.getElementById("nav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"})),A.addEventListener("click",(()=>{f.innerHTML="",L.removeAttribute("class","active"),z.removeAttribute("class","active"),g.removeAttribute("class","active"),f.appendChild(i)})),g.addEventListener("click",(()=>{f.innerHTML="",g.setAttribute("class","active"),L.removeAttribute("class","active"),z.removeAttribute("class","active"),f.appendChild(t)})),L.addEventListener("click",(()=>{f.innerHTML="",L.setAttribute("class","active"),g.removeAttribute("class","active"),z.removeAttribute("class","active"),f.appendChild(n)})),z.addEventListener("click",(()=>{f.innerHTML="",z.setAttribute("class","active"),g.removeAttribute("class","active"),L.removeAttribute("class","active"),f.appendChild(m)}))})();
//# sourceMappingURL=main.js.map