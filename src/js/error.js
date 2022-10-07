const form = document.querySelector('.callback__form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputs = form.querySelectorAll('.callback__input');
  inputs.forEach(input => {
    console.log('input.previousElementSibling', input.previousElementSibling);
    console.log('input.nextElementSibling', input.nextElementSibling);
    input.previousElementSibling.classList.remove('callback__error-show');

    if (input.checkValidity()) {
      input.previousElementSibling.classList.add('callback__error-show');
    } else {
      input.previousElementSibling.classList.remove('callback__error-show');
    }
  });
});
