const hamburger = document.querySelector('.hamburger');
const activeElement = document.querySelectorAll(".active");

hamburger.addEventListener('click', function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('show');
    }
})


// const hamburger = document.querySelector(".hamburger");

// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wrapper = document.querySelector(".wrapper")

// hamburger.addEventListener('click', function () {
//     iconBurger.classList.toggle('show');
//     iconX.classList.toggle('show');
//     column.classList.toggle('show');
//     wrapper.classList.toggle('show');
// })