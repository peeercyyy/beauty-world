const toggleButton = document.getElementById("mobileMenuBtn");
const navBar = document.getElementById("nav");
const navEl = document.getElementById("navEl");


window.onload = () => { 
  toggleButton.addEventListener('click', () => { 
    navBar.classList.add('visible'); 
  });  
   
  closeBtn.addEventListener('click', () => { 
    navBar.classList.remove('visible'); 
  }); 

  navEl.addEventListener('click', () => {
    navBar.classList.remove('visible');
  } )
};