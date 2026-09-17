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

      <img scr="${exp.companylogo}" alt = ${exp.title}" loading="lazy"
        class="company-logo"/>


   </div>



<!--This  exp body div class will container my code allowing 
 me to arrange the image and description out of the way of the title and date -->

<div class= "exp-body"> 


<ul class="exp-descrip"> 

${exp.description.map(item => `<li>${item}</li>`).join("")}

</ul> 
      <img src="${exp.image}" alt="${exp.title}" loading="lazy"
              class="experience-picture"/>


</div>
</div>
      `;
    }
});


}



  displayExperience(experience);


