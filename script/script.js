const portfolio = {};

portfolio.hamNavToggle = () => {
    // Hamburger nav slide-out toggle
    hamNavToggle = document.querySelector(".hamNavIcon");
    portfolio.hamNav = document.querySelector(".hamNav");
    
    hamNavToggle.addEventListener("click", () => {
        portfolio.hamNav.classList.toggle("openNav");
    });
    // Remove Hamburger Nav from view once links are clicked
    const hamLinks = document.querySelectorAll(".hamLinks");

    hamLinks.forEach(hamLinks => {
        hamLinks.addEventListener('click', () => portfolio.hamNav.classList.remove("openNav"))
    });
}

// Typewriter Function 
portfolio.typeWriter = () => {
    const text = document.querySelector(".secondText");
    
    const textAnimation = () => {
        setTimeout(() => {
            text.textContent = "scuba diver"
        }, 0);
        setTimeout(() => {
            text.textContent = "traveler"
        }, 3000);
        setTimeout(() => {
            text.textContent = "educator"
        }, 6000);
        setTimeout(() => {
            text.textContent = "vegan"
        }, 9000);
    }
    textAnimation();
    setInterval(textAnimation, 12000);

};

//Toggle nightmode and daymode
// portfolio.lightMode = () => {
//     const checkbox = document.getElementById('checkbox');

//     checkbox.addEventListener('click', () => {
//         // change the theme of the website
//         document.body.classList.toggle('light');
//     })
// }

// Reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 




//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
    portfolio.typeWriter();
    portfolio.lightMode();
}

portfolio.init();


