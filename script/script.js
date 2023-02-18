// Scroll up button

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

const text = document.querySelector(".secondText");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);

  setTimeout(() => {
    text.textContent = "Scuba Diver";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Vegan";
  }, 8000);

  setTimeout(() => {
    text.textContent = "Learner";
  }, 12000);

  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 16000);

}

textLoad();
setInterval(textLoad, 20000);






