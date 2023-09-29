const menu = document.getElementById('menu');
const navbar = document.querySelector('.nav-container');
const li = document.querySelector('.nav-wrapper');
const close = document.getElementById('close');
const active = document.getElementById('navbar');
const button = document.getElementsByClassName('btn');

menu.onclick = () => {
  navbar.classList.add('open');
  li.classList.add('open');
  menu.style.display = 'none';
  close.style.display = 'block';
};
close.onclick = () => {
  navbar.classList.remove('open');
  li.classList.remove('open');
  menu.style.display = 'block';
  close.style.display = 'none';
};
// Active link
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// Sticky Nav
let nav = document.getElementById('sticky');
let sticky = nav.offsetTop;
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
window.onscroll = function () {
  stickyFunction();
};
