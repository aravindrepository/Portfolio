const contactForm = document.getElementById('contact-form'); // Ensure correct ID

let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        email: email.value,
        name: name.value,
        message: message.value
    };

    console.log('Form Data:', formData); // Log form data for debugging

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json'); // Ensure correct header is set
    
    xhr.onload = function() {
        console.log('Response:', xhr.responseText); // Log response for debugging
        if (xhr.status >= 200 && xhr.status < 300) {
            if (xhr.responseText === 'success') {
                alert('Email Sent');
                email.value = '';
                name.value = '';
                message.value = '';
            } else {
                alert('Something went wrong');
            }
        } else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    };

    xhr.onerror = function() {
        alert('Request failed');
    };

    xhr.send(JSON.stringify(formData)); // Ensure data is sent as JSON
});