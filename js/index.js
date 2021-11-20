const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let nav = document.getElementById('nav');

window.addEventListener("scroll", ()  => {
    let y = window.scrollY;
    if(y>20){
        nav.style.borderBottom = "1px rgb(229, 229, 229) solid"
    }else{
        nav.style.borderBottom = "none";
    }
});

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}