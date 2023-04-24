const form = document.getElementById('forget-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  fetch('#', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = 'An email has been sent to reset your password.';
  })
  .catch(error => {
    console.error(error);
  });
});
