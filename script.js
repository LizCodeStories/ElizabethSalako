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

    // Loading screen
   // Wait for the page to finish loading
window.addEventListener('load', function() {
  // Set the delay time in milliseconds (8 seconds = 8000 milliseconds)
  var delayTime = 200;

  // Get a reference to the loading screen element
  var loadingScreen = document.getElementById('loading-screen');

  // Delay the removal of the loading screen
  setTimeout(function() {
    // Remove the loading screen by hiding or removing it from the DOM
    loadingScreen.style.display = 'none';
    // Alternatively, you can remove the loading screen element from the DOM completely:
    // loadingScreen.parentNode.removeChild(loadingScreen);
  }, delayTime);
});



//Navbar

document.addEventListener('DOMContentLoaded', function() {
  var textElement = document.querySelector('.opening');
  var text = textElement.innerText;
  textElement.innerText = '';

  var i = 0;
  var typingEffect = setInterval(function() {
    if (i < text.length) {
      textElement.innerText += text.charAt(i);
      i++;
    } else {
      clearInterval(typingEffect);
    }
  }, 100);
});


