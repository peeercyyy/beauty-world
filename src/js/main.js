import './mobile-menu';
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
}

document.addEventListener('DOMContentLoaded', init);