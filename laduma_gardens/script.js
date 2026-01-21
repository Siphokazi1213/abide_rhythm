// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.background = "white";
        nav.style.padding = "20px";
        nav.style.boxShadow = "0 10px 10px rgba(0,0,0,0.1)";
    }
}

// Form Submission Logic
document.getElementById('detailedForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect data
    const name = this.first_name.value;
    const service = this.main_service.value;
    
    alert(`Thank you, ${name}! Your request for ${service} has been received. Paul or Priscilla will contact you shortly.`);
    this.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});