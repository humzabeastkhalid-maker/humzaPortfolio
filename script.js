// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a subtle animation to the toggle
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
});

// Smooth scroll animations on load
window.addEventListener('load', function() {
    // Add staggered animation to elements
    const animatedElements = document.querySelectorAll('.profile-section, .bio-section, .social-section, .projects-section');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});

// Interactive hover effects for social links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing animation to name
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name');
    const nameText = nameElement.textContent;
    nameElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < nameText.length) {
            nameElement.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 500);
});

// Add parallax effect to background
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    
    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        container.style.background = `
            radial-gradient(circle at ${x}% ${y}%, 
                rgba(74, 144, 226, 0.1) 0%, 
                transparent 50%
            )
        `;
    });
});

// Add click animation to profile photo
document.addEventListener('DOMContentLoaded', function() {
    const profilePhoto = document.querySelector('.profile-photo');
    
    profilePhoto.addEventListener('click', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// Add floating animation to coming soon section
document.addEventListener('DOMContentLoaded', function() {
    const comingSoon = document.querySelector('.coming-soon');
    
    setInterval(() => {
        comingSoon.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            comingSoon.style.transform = 'translateY(0)';
        }, 2000);
    }, 4000);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 't' || e.key === 'T') {
        document.getElementById('themeToggle').click();
    }
});

// Add smooth transitions for all interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('button, .social-link, .profile-photo');
    
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});
