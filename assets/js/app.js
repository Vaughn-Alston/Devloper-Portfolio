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
 title: "AWS DeepRacer – Applied Reinforcement Learning Engineer",
 date: "11/15/24",
 description: "Designed and deployed an RL-based autonomous driving agent on AWS using PPO. Developed reward shaping strategies to improve policy learning efficiency and driving stability. Iteratively trained models in a cloud environment, optimizing for convergence and performance metrics. Supported live event infrastructure and debugging for autonomous vehicle execution.",
 image: "assets/images/aws.jpeg"

},






// Object 2 and so on 
{
 title: "San Deigo-Externship",
 date: "11/15/24",
 description: "......",
 image: "n/a"

},






]; // This will be the end of the Array of objects of experiences.


function displayExperience(data) {

  // This will act like a pointer for the boxes I want to fill
  const boxes = document.querySelectorAll(".expbox");

  data.forEach((exp, index)  => 
    {
      if(boxes[index]) {
      boxes[index].innerHTML = 
      `
    <div class= "exp-header">
<!-- Im creating a div class so I can manipulate both the title and date on the same line in CSS -->

      <p class = "exp-title"> ${exp.title}</p> 
      <p class = "exp-date">  ${exp.date}</p>
   </div>



<!--This  exp body div class will container my code allowing 
 me to arrange the image and description out of the way of the title and date -->

<div class= "exp-body"> 
      <p class = "exp-decrip">${exp.description}</p>

      <img src="${exp.image}" alt="${exp.title}" loading="lazy"
              class="experience-picture"/>
</div>
</div>
      `;
    }
});


}



  displayExperience(experience);


