import $ from "jquery";
import 'slick-carousel';
import 'jquery-validation';
import {TabsManager} from './tabs.js';
import {OrderForm} from './forms/forms.js';


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
   var im = new Inputmask({"mask": "+7 (999) 999-99-99"});
   im.mask(document.querySelectorAll(".form__tel"));

   new OrderForm(document.getElementById('register-form'));
   new OrderForm(document.getElementById('order-form'));

   $('#order-form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
         phone: {
            required: true,
         }
		},
		messages: {
			name: {
				required: "Поле 'Имя' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			phone: {
				required: "Поле 'Номер телефона' обязательно к заполнению",
			},
		}
	});
}


document.addEventListener('DOMContentLoaded', init);