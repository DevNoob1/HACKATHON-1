const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch('#', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    window.location.href = '/dashboard';
  })
  .catch(error => {
    console.error(error);
  });
});
