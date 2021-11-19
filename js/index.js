// const html = document.getElementById('html');
// const body = document.getElementById('body');
// const burger = document.getElementById('burger');
// const navlink = document.getElementById('navlink');
// const main = document.querySelector('main');
// window.addEventListener("scroll", () => {
//     let y = html.scrollTop;
//     if(y>10){
//         nav.style.borderBottom = "1px solid rgb(229, 229, 229) ";
//     }else{
//         nav.style.borderBottom = "none";
//     }
// })

// burger.addEventListener('click', () => {
//    navlink.classList.toggle('navactive');
// })

// main.addEventListener('click', () =>{
//     if(navlink.classList.contains('navactive')){
//         navlink.classList.remove("navactive");
//     }
// })


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}