const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please enter your username and password');
    return;
  }
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      window.location.href = '/dashboard';
    } else {
      alert('Incorrect username or password');
    }
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while logging in');
  });
});
