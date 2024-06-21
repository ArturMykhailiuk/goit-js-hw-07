const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  const formData = {};

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  formData.email = emailInput.value.trim();
  formData.password = passwordInput.value.trim();

  console.log(formData);

  loginForm.reset();
});
