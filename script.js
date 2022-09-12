const hamburger = document.querySelector('.hamburger');
const mobileDropdown = document.querySelector('.mobile__dropdown');
const cancelDropdown = document.querySelector('.cancel');

hamburger.addEventListener('click', () => {
  mobileDropdown.classList.toggle('visibility');
  hamburger.classList.toggle('no__display');
});

cancelDropdown.addEventListener('click', () => {
  mobileDropdown.classList.toggle('visibility');
  hamburger.classList.toggle('no__display');
});