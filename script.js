// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// // Update form submit handler
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   emailjs.sendForm('service_dye423f', 'template_7oi145c', this)
//     .then(function() {
//       alert('Message sent successfully!');
//     }, function(error) {
//       alert('Failed to send message: ' + JSON.stringify(error));
//     });
// });

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
  const templateParams = {
    name: document.querySelector('[name="name"]').value,
    email: document.querySelector('[name="email"]').value,
    message: document.querySelector('[name="message"]').value
  };

  // Send email
  emailjs.send('service_dye423f', 'template_7oi145c', templateParams)
    .then(function(response) {
      alert('Thank you! Your message has been sent.');
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Oops! Something went wrong. Please try again.');
      console.error('EmailJS error:', error);
    });
});


