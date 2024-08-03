const menuButton = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.main-layout .screen-overlay');
const uil = document.querySelector('.navbar .theme-button .uil');
menuButton.forEach(button => {
     button.addEventListener('click',() => {
          document.body.classList.toggle('sidebar-hidden');
     });
});
screenOverlay.addEventListener('click',() => {
     document.body.classList.toggle('sidebar-hidden');
});
if(localStorage.getItem('darkMode') === 'enabled'){
     document.body.classList.add('dark-mode');
     uil.classList.replace('uil-moon','uil-sun');
}else{
     uil.classList.replace('uil-sun','uil-moon');
}
uil.addEventListener('click',() => {
     const isDarkMode = document.body.classList.toggle('dark-mode');
     localStorage.setItem('darkMode',isDarkMode ? 'enabled' : 'disabled');
     uil.classList.toggle('uil-sun',isDarkMode);
     uil.classList.toggle('uil-moon',!isDarkMode);
});
if(window.innerWidth >= 768){
     document.body.classList.remove('sidebar-hidden');
}