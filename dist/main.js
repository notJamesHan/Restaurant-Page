(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("about");const n=document.createElement("h3");return n.classList.add("subTitle"),n.textContent="Welcome to Maraziro!",e.appendChild(n),e.appendChild(t("We have all the pizzas and special italian foods you have never tried!")),e.appendChild(t("Come to our restaurant to experience the italian food!")),e.appendChild(t("Please contact us or come to our address!")),e}())};const n=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(function(t,e,n){const a=document.createElement("div");a.classList.add("menuItem");const d=document.createElement("h3");d.textContent=t;const c=document.createElement("p");c.textContent="$ 5.99";const o=document.createElement("p");o.textContent="Peperoni Pizza that you cannot have in other place!";const s=document.createElement("img");return s.src=`image/menu/${t.toLowerCase()}.jpg`,s.alt="Pizza",a.appendChild(d),a.appendChild(c),a.appendChild(s),a.appendChild(o),a}("Pizza")),t}())};!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const a=document.createElement("h1");return a.classList.add("name"),a.textContent="Maraziro",t.appendChild(a),t.appendChild(function(){const t=document.createElement("nav"),a=document.createElement("button"),d=document.createElement("button"),c=document.createElement("button");return a.textContent="home",d.textContent="menu",c.textContent="contact",a.classList.add("button-nav"),d.classList.add("button-nav"),c.classList.add("button-nav"),a.addEventListener("click",(t=>{t.target.classList.contains("active")||e()})),d.addEventListener("click",(t=>{t.target.classList.contains("active")||n()})),t.appendChild(a),t.appendChild(d),t.appendChild(c),t}()),t}()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent="Created by James Han",e.classList.add("created");const n=document.createElement("a");n.href="https://github.com/jameshan2002",n.target="_blank";const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),t.appendChild(e),n.appendChild(a),t.appendChild(n),t}()),e()}()})();