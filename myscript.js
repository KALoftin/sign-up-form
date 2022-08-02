const pwrd = document.querySelector("input[name='password']");
const confirmPwrd = document.querySelector("input[name='confirm-password']");
const message = document.querySelector('#message');

pwrd.addEventListener('change', updateValue);
confirmPwrd.addEventListener('change', updateValue);

function updateValue() {
  if (pwrd.value === confirmPwrd.value) {
    confirmPwrd.setCustomValidity('');
    confirmPwrd.style.border = '2px solid green';
    message.innerHTML = '';
  } else {
    confirmPwrd.setCustomValidity('Passwords do not match');
    confirmPwrd.style.border = '2px solid red';
    message.style.color = 'red';
    message.innerHTML = 'Passwords do not match';
  }
}
