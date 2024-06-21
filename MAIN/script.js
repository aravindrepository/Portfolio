// nav
const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});

document.getElementById('navbarToggle').addEventListener('click', function() {
  const icon = this.querySelector('i');
  icon.classList.toggle('rotate');
});


 //for buttons

 const resumeHeading = document.querySelector(".resume-heading");
 const resumeTabs = document.querySelectorAll(".resume-tab");
 
 resumeHeading.onclick = (event) => {
   event.preventDefault();
   const clickedItemId = event.target.dataset.id;
   if (clickedItemId) {
     resumeHeading.querySelector(".active").classList.remove("active");
     event.target.classList.add("active");
 
     resumeTabs.forEach((tab) => {
       tab.classList.remove("active");
     });
     const correspondingTab = document.getElementById(clickedItemId);
     correspondingTab.classList.add("active");
   }
 };
 //loader
//cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 12)+"px; left: "+(e.pageX - 16)+"px;")
})
document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
      cursor.classList.remove("expand");
  }, 500)
})
//loader
var loader = document.getElementById("pre-loader");
  window.addEventListener("load",function(){
    setTimeout(function(){
      loader.style.display="none";
    },1500);
  });