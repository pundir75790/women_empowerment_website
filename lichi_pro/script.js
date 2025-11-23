// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for shadow effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Scroll to Top Button
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Scroll Animation (Fade In on Scroll)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.about-card, .skill-card, .safety-card, .earning-card, .entrepreneurship-card, .scheme-card, .contact-form, .info-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in-scroll');
        observer.observe(el);
    });
});

// ============================================
// Contact Form Validation
// ============================================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

// Validation functions
function validateName(name) {
    if (name.trim() === '') {
        return 'Name is required';
    }
    if (name.trim().length < 2) {
        return 'Name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        return 'Name can only contain letters and spaces';
    }
    return '';
}

function validateEmail(email) {
    if (email.trim() === '') {
        return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validateMessage(message) {
    if (message.trim() === '') {
        return 'Message is required';
    }
    if (message.trim().length < 10) {
        return 'Message must be at least 10 characters';
    }
    return '';
}

// Real-time validation
nameInput.addEventListener('blur', () => {
    const error = validateName(nameInput.value);
    nameError.textContent = error;
    if (error) {
        nameInput.style.borderColor = '#e74c3c';
    } else {
        nameInput.style.borderColor = '#2ecc71';
    }
});

nameInput.addEventListener('input', () => {
    if (nameError.textContent) {
        const error = validateName(nameInput.value);
        if (!error) {
            nameError.textContent = '';
            nameInput.style.borderColor = '';
        }
    }
});

emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value);
    emailError.textContent = error;
    if (error) {
        emailInput.style.borderColor = '#e74c3c';
    } else {
        emailInput.style.borderColor = '#2ecc71';
    }
});

emailInput.addEventListener('input', () => {
    if (emailError.textContent) {
        const error = validateEmail(emailInput.value);
        if (!error) {
            emailError.textContent = '';
            emailInput.style.borderColor = '';
        }
    }
});

messageInput.addEventListener('blur', () => {
    const error = validateMessage(messageInput.value);
    messageError.textContent = error;
    if (error) {
        messageInput.style.borderColor = '#e74c3c';
    } else {
        messageInput.style.borderColor = '#2ecc71';
    }
});

messageInput.addEventListener('input', () => {
    if (messageError.textContent) {
        const error = validateMessage(messageInput.value);
        if (!error) {
            messageError.textContent = '';
            messageInput.style.borderColor = '';
        }
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.classList.remove('show');
    
    // Reset border colors
    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    messageInput.style.borderColor = '';
    
    // Validate all fields
    const nameErrorMsg = validateName(nameInput.value);
    const emailErrorMsg = validateEmail(emailInput.value);
    const messageErrorMsg = validateMessage(messageInput.value);
    
    let hasError = false;
    
    if (nameErrorMsg) {
        nameError.textContent = nameErrorMsg;
        nameInput.style.borderColor = '#e74c3c';
        hasError = true;
    }
    
    if (emailErrorMsg) {
        emailError.textContent = emailErrorMsg;
        emailInput.style.borderColor = '#e74c3c';
        hasError = true;
    }
    
    if (messageErrorMsg) {
        messageError.textContent = messageErrorMsg;
        messageInput.style.borderColor = '#e74c3c';
        hasError = true;
    }
    
    if (hasError) {
        // Scroll to first error
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // If validation passes, show success message
    formSuccess.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
    formSuccess.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Reset border colors
    nameInput.style.borderColor = '';
    emailInput.style.borderColor = '';
    messageInput.style.borderColor = '';
    
    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formSuccess.classList.remove('show');
    }, 5000);
});

// ============================================
// Active Navigation Link Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');

function highlightActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveNav);

// ============================================
// Add active class styling (if needed)
// ============================================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-pink);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// Parallax Effect for Hero Section (Optional)
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// Initialize on page load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero elements if not already visible
    const heroElements = document.querySelectorAll('.hero-title, .hero-tagline, .cta-button');
    heroElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.opacity = '1';
        }
    });
    
    // Highlight active nav on load
    highlightActiveNav();
});

