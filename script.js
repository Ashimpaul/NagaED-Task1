document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  
  let errors = [];

  
  if (!name || name.length < 3) {
    errors.push('Name must be at least 3 characters long.');
  }

  
  if (!email || !emailPattern.test(email)) {
    errors.push('Please enter a valid email address.');
  }

  
  if (!message || message.length < 10) {
    errors.push('Message must be at least 10 characters long.');
  }

  if (errors.length > 0) {
    alert(errors.join('\n')); 
  } else {
    
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    
    document.getElementById('successMessage').style.display = 'block';

    
    document.getElementById('contactForm').reset();
  }
});
