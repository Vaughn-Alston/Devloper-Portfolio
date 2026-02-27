// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav")

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });


  // Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);




// I want to create an array of objects that I will use to display my work and job experience

// experience is the array name
let experience = [


{
 title: "AWS Deep Racer",
 club: "Computing Club",
 date: "12/12/12",
 description: "......"
},

{
 title: "San Deigo Externship",
 club: "Computing Club",
 date: "12/12/12",
 description: "......"
},



];


experience.forEach(job => console.log(job));


