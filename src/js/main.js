import $ from "jquery";
import 'slick-carousel';
import {TabsManager} from './tabs.js';

function init() {
   new TabsManager(document.getElementById('serviceTabs'));

   const registerForm = document.getElementById('register-form');

   registerForm.addEventListener('submit', event => {
      event.preventDefault();

      const { clientName } = registerForm.elements;
      const { clientTel } = registerForm.elements;
      console.log('Имя:', clientName.value, 'Телефон:', clientTel.value);
      alert('Запись создана');
      registerForm.reset();
   })

   $('.our-works__switch').slick({
      prevArrow: '.btn-prev',
      nextArrow: '.btn-next',
      slidesToShow: 4,
      infinite: true,
      responsive: [{
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
         },
      },
      {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         },
      },
      {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
      }],
   });

   $('.our-works__cards')
    .on('mouseenter', function() {
        $(this).find('.our-works__cards_action').show();
    })
    .on('mouseleave', function() {
        $(this).find('.our-works__cards_action').hide();
   });

     
}

document.addEventListener('DOMContentLoaded', init);