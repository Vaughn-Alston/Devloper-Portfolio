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

 // This will be the first objcet 

// Title represents the company or experience name.
// Date will show the date of that experience.
// The the description will describe the event.

//Object one 
{
 title: "AWS Deep Racer",
 date: "12/12/12",
 description: "......"
},
// Object 2 and so on 
{
 title: "San Deigo Externship",
 date: "12/12/12",
 description: "......"
},






]; // This will be the end of the Array of objects of experiences.


function displayExperience(data) {

  // This will act like a pointer for the boxes I want to fill
  const boxes = document.querySelectorAll(".expbox");

  data.forEach((exp, index)  => 
    {
      if(boxes[index]) {
      boxes[index].innerHTML = `
      <p>${exp.title}</p> 
      `;
    }
});


}



  displayExperience(experience);


