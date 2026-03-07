/**
 * ECOTECH LANDING PAGE - MAIN JAVASCRIPT
 * All-in-one vanilla JavaScript file
 */

// ===================================
// GLOBAL VARIABLES
// ===================================
let butterflies = [];
const butterflyCount = 6;
let activeAudienceCard = null;

// ===================================
// SERVICES DATA
// ===================================
const services = [
    {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>`,
        title: 'Green Energy Solutions',
        description: 'Renewable energy systems that reduce carbon footprint while maximizing efficiency.'
    },
    {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>`,
        title: 'Smart Agriculture',
        description: 'IoT-enabled precision farming tools that optimize water usage and crop yields.'
    },
    {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>`,
        title: 'Waste Management',
        description: 'Advanced recycling and waste reduction technologies for circular economy.'
    },
    {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>`,
        title: 'Environmental Monitoring',
        description: 'Real-time air and water quality tracking with predictive analytics.'
    },
    {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`,
        title: 'Green Building',
        description: 'Sustainable architecture with smart building management systems.'
    },
    {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`,
        title: 'Carbon Offsetting',
        description: 'Comprehensive carbon tracking and offset programs with verified credits.'
    }
];

// ===================================
// AUDIENCE DATA
// ===================================
const audiences = [
    {
        id: 'enterprises',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`,
        title: 'Enterprises',
        subtitle: 'Large organizations',
        shortDesc: 'Streamline operations with sustainable technology',
        detail: 'Transform your organization\'s environmental impact with enterprise-grade sustainable solutions for Fortune 500 companies.'
    },
    {
        id: 'startups',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>`,
        title: 'Startups',
        subtitle: 'Growing companies',
        shortDesc: 'Build sustainability into your foundation',
        detail: 'Start your journey with sustainability at the core with affordable, scalable solutions that grow with your startup.'
    },
    {
        id: 'municipalities',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>`,
        title: 'Municipalities',
        subtitle: 'Cities & governments',
        shortDesc: 'Smart city solutions for communities',
        detail: 'Transform your city into a sustainable community with comprehensive smart city solutions for municipalities.'
    },
    {
        id: 'nonprofits',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>`,
        title: 'Non-Profits',
        subtitle: 'Mission-driven orgs',
        shortDesc: 'Amplify your environmental impact',
        detail: 'Access powerful sustainability tools at reduced rates with features designed for non-profit needs and limited budgets.'
    }
];

// ===================================
// PORTFOLIO DATA
// ===================================
const projects = [
    {
        title: 'Urban Solar Grid',
        category: 'Energy',
        description: 'Integrated solar infrastructure for metropolitan area serving 2M residents',
        impact: '45% carbon reduction'
    },
    {
        title: 'Smart Irrigation',
        category: 'Agriculture',
        description: 'AI-powered water management system for sustainable farming',
        impact: '60% water savings'
    },
    {
        title: 'Waste-to-Energy',
        category: 'Recycling',
        description: 'Municipal waste conversion plant generating clean electricity',
        impact: '100K tons diverted'
    },
    {
        title: 'Air Quality Network',
        category: 'Monitoring',
        description: 'City-wide sensor network for real-time pollution tracking',
        impact: '250+ sensors deployed'
    },
    {
        title: 'Green Building Hub',
        category: 'Architecture',
        description: 'LEED Platinum commercial complex with net-zero emissions',
        impact: 'Net-zero achieved'
    },
    {
        title: 'Ocean Cleanup',
        category: 'Conservation',
        description: 'Coastal monitoring and cleanup coordination platform',
        impact: '50 tons removed'
    }
];

// ===================================
// DOM READY
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 EcoTech Landing Page Loaded');
    
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initScrollToTop();
    initButterflies();
    renderServices();
    renderAudienceCards();
    renderPortfolio();
    initContactForm();
});

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking links
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (!scrollBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.pointerEvents = 'auto';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.pointerEvents = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// BUTTERFLY ANIMATIONS
// ===================================
function createButterflyElement() {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerHTML = `
        <div class="butterfly-wing left"></div>
        <div class="butterfly-wing right"></div>
        <div class="butterfly-body"></div>
    `;
    return butterfly;
}

function initButterflies() {
    const container = document.getElementById('butterfly-container');
    if (!container) return;
    
    for (let i = 0; i < butterflyCount; i++) {
        const butterfly = createButterflyElement();
        container.appendChild(butterfly);
        
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight / 2);
        
        butterfly.style.left = x + 'px';
        butterfly.style.top = y + 'px';
        
        butterflies.push({
            element: butterfly,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            speed: 0.5 + Math.random() * 0.5
        });
    }
    
    animateButterflies();
}

function animateButterflies() {
    butterflies.forEach(butterfly => {
        // Update position
        butterfly.x += butterfly.vx * butterfly.speed;
        butterfly.y += butterfly.vy * butterfly.speed;
        
        // Boundary check
        if (butterfly.x <= 0 || butterfly.x >= window.innerWidth - 40) {
            butterfly.vx *= -1;
        }
        if (butterfly.y <= 0 || butterfly.y >= window.innerHeight - 40) {
            butterfly.vy *= -1;
        }
        
        // Add random movement
        butterfly.vx += (Math.random() - 0.5) * 0.1;
        butterfly.vy += (Math.random() - 0.5) * 0.1;
        
        // Limit velocity
        const maxSpeed = 2;
        butterfly.vx = Math.max(-maxSpeed, Math.min(maxSpeed, butterfly.vx));
        butterfly.vy = Math.max(-maxSpeed, Math.min(maxSpeed, butterfly.vy));
        
        // Apply position
        butterfly.element.style.left = butterfly.x + 'px';
        butterfly.element.style.top = butterfly.y + 'px';
    });
    
    requestAnimationFrame(animateButterflies);
}

// ===================================
// RENDER SERVICES
// ===================================
function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    
    grid.innerHTML = services.map(service => `
        <div class="card group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div class="mb-6">
                <div class="w-16 h-16 bg-eco-green/20 rounded-2xl flex items-center justify-center group-hover:bg-eco-green group-hover:scale-110 transition-all duration-300">
                    <svg class="w-8 h-8 text-eco-green group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${service.icon}
                    </svg>
                </div>
            </div>
            <h3 class="font-display text-xl font-semibold text-dark-text mb-3 group-hover:text-eco-green transition-colors">
                ${service.title}
            </h3>
            <p class="text-dark-text/70 leading-relaxed">
                ${service.description}
            </p>
        </div>
    `).join('');
}

// ===================================
// RENDER AUDIENCE CARDS
// ===================================
function renderAudienceCards() {
    const container = document.getElementById('audience-cards');
    if (!container) return;
    
    container.innerHTML = audiences.map(audience => `
        <div class="card cursor-pointer transition-all duration-500 hover:shadow-xl" data-audience="${audience.id}">
            <div class="card-content">
                <div class="w-16 h-16 bg-eco-green/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-eco-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${audience.icon}
                    </svg>
                </div>
                <h3 class="font-display text-2xl font-semibold text-dark-text mb-2">
                    ${audience.title}
                </h3>
                <p class="text-sm text-eco-green font-medium mb-3">
                    ${audience.subtitle}
                </p>
                <p class="text-dark-text/70 mb-4">
                    ${audience.shortDesc}
                </p>
                <div class="text-eco-green font-medium">
                    Learn More →
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    const cards = container.querySelectorAll('[data-audience]');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const audienceId = this.dataset.audience;
            toggleAudienceCard(audienceId, this);
        });
    });
}

function toggleAudienceCard(audienceId, cardElement) {
    // Simple toggle for now - you can enhance this
    const audience = audiences.find(a => a.id === audienceId);
    if (audience) {
        alert(`${audience.title}\n\n${audience.detail}`);
    }
}

// ===================================
// RENDER PORTFOLIO
// ===================================
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    
    grid.innerHTML = projects.map(project => `
        <div class="card group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div class="aspect-video rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-eco-green to-deep-green flex items-center justify-center">
                <span class="text-white font-display text-2xl font-bold">${project.category}</span>
            </div>
            <h3 class="font-display text-xl font-semibold text-dark-text mb-2 group-hover:text-eco-green transition-colors">
                ${project.title}
            </h3>
            <p class="text-dark-text/70 mb-4 leading-relaxed">
                ${project.description}
            </p>
            <div class="flex items-center gap-2 text-eco-green font-medium">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-sm">${project.impact}</span>
            </div>
        </div>
    `).join('');
}

// ===================================
// CONTACT FORM
// ===================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
        
        // Reset form
        form.reset();
    });
}

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🌿 EcoTech Landing Page', 'color: #6A8F4E; font-size: 20px; font-weight: bold;');
console.log('%cSustainable Technology Solutions', 'color: #8FAA78; font-size: 14px;');
