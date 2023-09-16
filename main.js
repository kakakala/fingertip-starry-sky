import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
    autoplay: { 
      delay: 5000,
    },
     breakpoints: {
       768: {
         autoplay: {
           enabled: false,
         }
       }
     },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
 });
 