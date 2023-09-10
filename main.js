import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper('.swiper', {
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
 });
 