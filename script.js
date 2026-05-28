// Typing Animation

var typed = new Typed("#typing", {

    strings: [
        "Web Developer",
        "Frontend Developer",
        "Programmer",
        "Student"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});


// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});