const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim();
  const greetingName = trimmedValue ? trimmedValue : 'Anonymous';
  nameOutput.textContent = greetingName;
});