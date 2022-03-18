var contactForm = document.querySelector('#contact-form');

// handle event
function handleSubmit(event) {
  event.preventDefault();
  // define variables to result of the values of the inputs
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var message = contactForm.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('Message Data', messageData);
  contactForm.reset();
}

// handle the submit
contactForm.addEventListener('submit', handleSubmit);
