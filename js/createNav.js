let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let navList = document.getElementById("navbar__list");
// ALL SECTIONS
let sections = document.querySelectorAll("section");
// console.log(sections);
for (let section of sections) {
  // create new list item //
  let newLi = document.createElement("li");
  let linkText = document.createTextNode(section.querySelector("h2").innerText);
  navList.appendChild(newLi);
  // create new nection link and append it to list item
  let link = document.createElement("a");
  newLi.appendChild(link);
  link.appendChild(linkText);
  // set link href  == section id
  link.setAttribute("href", `#${section.getAttribute("id")}`);
  newLi.style.cssText = "color : red ; padding : 10px ";
}
