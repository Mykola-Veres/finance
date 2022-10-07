const screenWidth = window.innerWidth;
console.log('scroll', screenWidth);

const headerEl = document.querySelector('.header');

document.addEventListener('scroll', function (event) {
  const scrollPosition = window.scrollY;

  const headerDimensions = screenWidth < 768 ? 120 : 70;
  console.log('headerDimensions', headerDimensions);

  if (scrollPosition >= headerDimensions) {
    headerEl.classList.add('header-scroll');
  } else {
    headerEl.classList.remove('header-scroll');
  }
});
