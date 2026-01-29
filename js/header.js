const header = document.querySelector('.header');
let isSmall = false;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 80 && !isSmall) {
    header.classList.add('is-small');
    isSmall = true;
  }

  if (scrollY <= 80 && isSmall) {
    header.classList.remove('is-small');
    isSmall = false;
  }
});
