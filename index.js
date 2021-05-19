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
/*..............responvivita obrazku na hlavni strance....*/

const Polaroid = ({ polaroidText, imageText }) => {
  let resultHTML = `
  <div class="image-wrapper">
    <img
      class="illustration"
      src="img/hradejov.png"
      alt="picture of main Hradilov characters"
    />
    <div class="polaroid-text">${polaroidText}</div>
    
      <div class="image-text image-text--off">${imageText}
    </div>
 `;
  return resultHTML + '</div>';
};

document.querySelector('.polaroid').innerHTML = Polaroid({
  polaroidText: 'Click here to see more.',
  imageText: "We can't show you more!",
});

const imageTextEl = document.querySelector('.image-text');

document.querySelector('.polaroid').addEventListener('click', () => {
  imageTextEl.classList.toggle('image-text--on');
});
