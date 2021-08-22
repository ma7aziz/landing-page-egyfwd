/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let sections = document.querySelectorAll("section");
let navList = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

let deleteActiveClasses = () => {
  let li = document.querySelectorAll("nav li ");
  //remove active class from nav
  li.forEach((l) => l.classList.remove("active"));
  // remove active class from section body
  sections.forEach((sect) => sect.classList.remove("your-active-class"));
};

let addActiveClass = function (section) {
  let selector = `nav li a[href="#${section}"]`;
  //add active class to nav
  document.querySelector(selector).parentElement.classList.add("active");
  //add active class to section body
  document.getElementById(section).classList.add("your-active-class");
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let buildNav = function () {
  for (let section of sections) {
    // create new list item //
    let newLi = document.createElement("li");
    let linkText = document.createTextNode(
      section.querySelector("h2").innerText
    );
    navList.appendChild(newLi);
    // create new nection link and append it to list item
    let link = document.createElement("a");
    newLi.appendChild(link);
    link.appendChild(linkText);
    // set link href  == section id
    link.setAttribute("href", `#${section.getAttribute("id")}`);
    newLi.style.cssText = "color : red ; padding : 10px ";
  }
};

// Add class 'active' to section when near top of viewport
onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop || window.pageYOffset;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.3 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.3
    ) {
      deleteActiveClasses();
      addActiveClass(section.attributes.id.value);
      section.classList.add("you-active-class");
    }
  });
};

// Scroll to anchor ID using scrollTO event
navList.addEventListener("click", (e) => {
  e.preventDefault();
  let selector = e.target.attributes.href;
  if (selector) {
    let section = document.querySelector(selector.value);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    //Set sections as active
    sections.forEach((section) =>
      section.classList.remove("your-active-class")
    );

    section.classList.add("your-active-class");
    // hide nav menu if on mobile
    navList.classList.remove("show");
  }
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener("load", buildNav());

// mobile Nav menu
let menuBtn = document.querySelector(".mobile-menu");
menuBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});
