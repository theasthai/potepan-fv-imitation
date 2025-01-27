const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.global__nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});
