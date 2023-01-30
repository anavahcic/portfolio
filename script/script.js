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
// portfolio.nightMode = () => {
//     const icon = document.getElementById("icon");
//     const body = document.querySelector("body");
//     icon.onclick = () => {
//         body.classList.toggle("nightMode");
//         if (document.body.classList.contains("nightMode")){
//             icon.src = "assets/lightMode.png"
//         } else {
//             icon.src = "assets/darkMode.png"
//         }
//     }
// }

//init function
portfolio.init = () => {
    portfolio.hamNavToggle();
    portfolio.typeWriter();
    portfolio.nightMode();
}

portfolio.init();

