let Navbar = document.querySelector(".navbar");
let Farbars = document.querySelector('.fa-bars');

Farbars.onclick = () =>{
    Navbar.classList.toggle('active')
};

//Go to top button 
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("goTop").style.display = "block";
    }
else{
    document.getElementById("goTop").style.display = "none";
}
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
///////

// var swiper = new Swiper(".home-slid", {
//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
// },
// });

var swiper = new Swiper('.home-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true, // Optional: Loop through slides
    autoplay: {  // Optional: Auto slide transition
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'slide', // Optional: Can be 'fade', 'cube', etc.
  });
  

   



