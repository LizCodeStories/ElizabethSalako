const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
   
})

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListenerListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var pageContainer = document.getElementById('page-container');
    
    
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;
    
    darkModeToggle.addEventListener('change', function() {
      if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    });