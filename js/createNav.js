let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let navList = document.getElementById("navbar__list");
console.log(navList);
// ALL SECTIONS
let sections = document.querySelectorAll("section");
// console.log(sections);
for (let section of sections) {
  let newLi = document.createElement("li");
  let liText = document.createTextNode(section.querySelector("h2").innerText);
  newLi.appendChild(liText);
  navList.appendChild(newLi);
  newLi.style.cssText = "color : red ; padding : 10px ";
}

// NAVBAR
