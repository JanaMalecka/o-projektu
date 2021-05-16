'use strict!';
console.log('ahoj2');
/*..........zprovozneni navigace - reakce na klik...*/

const navBtnEl = document.querySelector('#nav-btn');
const navEl = document.querySelector('nav');
const navLinkEl = document.querySelectorAll('.nav-link');

navBtnEl.addEventListener('click', () => {
  navEl.classList.toggle('nav-closed');
});

for (let i = 0; i < navLinkEl.length; i++) {
  navLinkEl[i].addEventListener('click', () => {
    navEl.classList.add('nav-closed');
  });
}
