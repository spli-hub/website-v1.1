// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Slider Setup
    const slides = document.querySelectorAll('.slide');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Show specific slide
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Go to specific slide
    function goToSlide(n) {
        showSlide(n);
        resetInterval();
    }

    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto play
    function goToSlide(n) { ... }      // Pindah ke slide tertentu
    function changeSlide(direction) {} // Maju/mundur 1 slide
    setInterval(() => changeSlide(1), 5000) // Auto ganti tiap 5 detik
    }

    // Reset interval
    function resetInterval() {
        clearInterval(slideInterval);
        startAutoPlay();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Start auto play
    startAutoPlay();

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        startAutoPlay();
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#' || href === '#layanan') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation to elements
    const animateElements = document.querySelectorAll('.service-card, .service-item, .feature-item, .industry-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Header Scroll Effect
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });
});

// Add CSS for dots dynamically
const style = document.createElement('style');
style.textContent = `
    .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.3s;
    }

    .dot.active {
        background: var(--primary-color);
        width: 30px;
        border-radius: 6px;
    }

    .dot:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    /* Mobile Menu Styles */
    @media (max-width: 968px) {
        .nav-menu {
            position: fixed;
            top: 80px;
            left: -100%;
            width: 100%;
            background: white;
            padding: 20px;
            transition: left 0.3s;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .nav-menu.active {
            left: 0;
            display: block;
        }

        .nav-menu ul {
            flex-direction: column;
            gap: 0;
        }

        .nav-menu li {
            padding: 15px 0;
            border-bottom: 1px solid #eee;
        }

        .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            padding-left: 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s;
        }

        .dropdown:hover .dropdown-menu {
            max-height: 500px;
        }
    }
`;
document.head.appendChild(style);
