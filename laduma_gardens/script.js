// Function to scroll to contact form and auto-select the service
function scrollToContact(serviceType) {
    const section = document.getElementById('contact');
    const selector = document.getElementById('serviceSelect');
    
    // Auto-select the dropdown option
    selector.value = serviceType;
    updateFormTheme();
    
    // Smooth scroll
    section.scrollIntoView({ behavior: 'smooth' });
}

// Visual feedback: Change form button color based on service selected
function updateFormTheme() {
    const service = document.getElementById('serviceSelect').value;
    const submitBtn = document.querySelector('.submit-btn');
    
    if (service === 'Garden') {
        submitBtn.style.backgroundColor = '#2d6a4f'; // Green
        submitBtn.innerText = 'Request Garden Quote';
    } else if (service === 'Truck') {
        submitBtn.style.backgroundColor = '#e67e22'; // Orange
        submitBtn.innerText = 'Request Truck Hire';
    }
}

// Basic Form Submission Alert
document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const service = document.getElementById('serviceSelect').value;
    alert(`Thank you! Your ${service} inquiry has been sent to Laduma Gardens.`);
});