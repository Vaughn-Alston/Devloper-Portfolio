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
  title: "City Of Manhattan Beach Dial-A-Ride Dispatcher",
  date: "2025 - Present",
  description: "Coordinate senior transportation logistics and manage high-volume dispatch communications. Build trusted relationships with seniors and city personnel to ensure safe and reliable municipal service. Independently planned and executed a municipal program from concept through implementation, demonstrating leadership, accountability, and organizational coordination.",
  image: "assets/images/healthfair.webp"
 
 },




{
  title: "AI Skills Passport Offered by EY and Microsoft",
  date: "2/16/26",
  description: "Knowledge of core Artificial Intelligence and Machine Learning paradigms including supervised learning, unsupervised learning, and reinforcement learning. Understanding of model training workflows, reward shaping strategies, neural network fundamentals, and performance optimization techniques. Familiar with ethical AI principles, bias mitigation, and the application of AI systems for data pattern analysis and sustainability-focused decision support.",
  image: "assets/images/cert.webp"
 
 },


// Object 2 and so on 
{
  title: "AWS DeepRacer – Applied Reinforcement Learning Engineer",
  date: "11/15/24",
  description: "Built and trained a reinforcement learning (RL) model on Amazon Web Services (AWS) to autonomously navigate a racing track. Designed a custom reward function to optimize lane centering and completion performance, iteratively refining policy behavior using Proximal Policy Optimization (PPO) in a cloud-based training environment. Supported live testing by assisting with hardware resets, monitoring model performance, and troubleshooting to ensure successful autonomous runs.",
  image: "assets/images/aws.webp"
 
 },

 {
  title: "Externship UCSD Supercomputer Center",
  date: "11/22/24",
  description: "Participated in an HPC externship at the UCSD Supercomputer Center, gaining exposure to supercomputing architecture, energy consumption, and distributed systems. Completed a hands-on parallel processing simulation modeling how compute nodes collaborate to solve large-scale problems efficiently.",
  image: "assets/images/supercom.webp"
 
 }


 





]; // This will be the end of the Array of objects of experiences.



function removelastCard(){ 

const art = document.getElementById("Work-Container"); // point to the container


 art.lastElementChild.remove(); // This iwll remove one of the elements in the Array Dynamically

}














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


