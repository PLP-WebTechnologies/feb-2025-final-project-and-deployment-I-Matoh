const toggleBtn = document.getElementById('toggleBtn');
const extraContent = document.getElementById('extraContent');

toggleBtn.addEventListener('click', () => {
  if (extraContent.style.display === 'none') {
    extraContent.style.display = 'block';
    toggleBtn.textContent = 'Read Less';
  } else {
    extraContent.style.display = 'none';
    toggleBtn.textContent = 'Read More';
  }
});


const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission for demo

  const name = form.name.value.trim();
  const email = form.email.value.trim();

  if (name === '' || email === '') {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';  //
    return;
  }

  // Simple regex validation on email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Thank you for contacting us!';
  formMessage.style.color = 'green';

  form.reset();
});
