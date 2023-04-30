const hamburgerIcon=document.querySelector(".hamburger-icon");
const crossIcon=document.querySelector(".cross-icon");
const hamburgerMenu=document.querySelector(".hamburger-menu");
const nav=document.querySelector("nav");

hamburgerIcon.addEventListener("click",function(){
    hamburgerMenu.classList.add("show-hamburger-menu")
    hamburgerMenu.style.display="block";
    nav.style.display="block";
})

crossIcon.addEventListener("click",function(){
    hamburgerMenu.classList.remove("show-hamburger-menu")
})

const showProductMenu=document.querySelector("#show-product-menu");
showProductMenu.addEventListener("mouseenter",function(e){
    const div = e.target.childNodes[5];
    div.style.animation = 'show 0.35s 1';
    div.style.display = 'flex';
})
showProductMenu.addEventListener("mouseleave",function(e){
    const div = e.target.childNodes[5];
    div.style.display = 'none';
})


const showMoreMenu=document.querySelector("#show-more-menu");
showMoreMenu.addEventListener('mouseenter', function (e) {
    const ul = e.target.childNodes[5];
    ul.style.animation = 'showUp 0.35s 1';
    ul.style.display = 'block';
  });
  
  showMoreMenu.addEventListener('mouseleave', function (e) {
    const ul = e.target.childNodes[5];
    ul.style.display = 'none';
  });
  