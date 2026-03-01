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
 description: "Trained a reinforcement learning model using PPO on AWS to autonomously complete a racing track. Engineered a reward function to incentivize lane centering, track adherence, and lap efficiency. Iteratively tuned hyperparameters to improve performance and model convergence. Assisted with live testing and operational debugging during competitive autonomous vehicle trials.",
 image: "assets/images/AWSDEEP.jpg"

},






// Object 2 and so on 
{
 title: "San Deigo Externship",
 date: "12/12/12",
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
      boxes[index].innerHTML = ""
      
      `

    <div class= "exp-header">
<!-- Im creating a div class so I can manipulate both the title and date on the same line in CSS -->

      <p class = "exp-title"> ${exp.title}</p> 
      <p class = "exp-date">  ${exp.date}</p>

    </div>

      <p class = "exp-decrip">       ${exp.description}</p>

     

     
     <!-- I want to add a image to it -->
     <div class="experience-picture">
      <img
              src=" ${exp.image} "
              alt="Planning Ideas"
              loading="lazy"
              class="project-pic"
            />
      </div>
      
      `
      ;
    }
});


}



  displayExperience(experience);


