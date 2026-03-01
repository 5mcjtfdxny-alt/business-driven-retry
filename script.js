// ===================================
// Service Data
// ===================================
const servicesData = [
    {
        id: 1,
        title: "Business Growth Strategy",
        description: "Comprehensive growth planning tailored to your business goals, helping you identify opportunities and create actionable roadmaps for success.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>`,
        benefits: [
            "Custom growth roadmap aligned with your vision",
            "Market analysis and competitive positioning",
            "Revenue optimization strategies",
            "Scalable business model development",
            "Quarterly review and strategy adjustments"
        ],
        whoItsFor: "Small to medium businesses looking to scale, startups seeking structured growth, and established companies entering new markets.",
        expectedResults: "Typically see 30-50% revenue increase within 12 months, clearer business direction, improved decision-making framework, and sustainable growth trajectory."
    },
    {
        id: 2,
        title: "Digital Presence Development",
        description: "Build and enhance your online presence across social media platforms, ensuring your brand reaches and engages your target audience effectively.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>`,
        benefits: [
            "Multi-platform digital strategy",
            "Brand consistency across channels",
            "Content strategy and calendar",
            "Audience engagement optimization",
            "Online reputation management"
        ],
        whoItsFor: "Businesses with limited online visibility, companies rebranding, and organizations looking to modernize their digital footprint.",
        expectedResults: "Average 200% increase in online engagement within 6 months, stronger brand recognition, higher quality leads, and improved customer trust."
    },
    {
        id: 3,
        title: "Performance Optimisation",
        description: "Analyse and improve your business operations, streamlining processes and maximising efficiency to drive better results.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>`,
        benefits: [
            "Operational efficiency audit",
            "Process automation recommendations",
            "Resource allocation optimization",
            "Performance metrics implementation",
            "Continuous improvement framework"
        ],
        whoItsFor: "Companies experiencing operational bottlenecks, businesses scaling rapidly, and organizations seeking cost reduction without quality compromise.",
        expectedResults: "15-25% cost reduction through efficiency gains, faster delivery times, improved team productivity, and higher customer satisfaction scores."
    },
    {
        id: 4,
        title: "Marketing & Brand Positioning",
        description: "Strategic marketing guidance to position your brand effectively in the market and stand out from competitors.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>`,
        benefits: [
            "Comprehensive brand audit",
            "Target audience profiling",
            "Unique value proposition development",
            "Marketing campaign strategy",
            "ROI-focused marketing tactics"
        ],
        whoItsFor: "Businesses struggling to differentiate, companies entering competitive markets, and brands seeking to reposition themselves.",
        expectedResults: "Clearer brand identity, 40-60% improvement in marketing ROI, stronger customer loyalty, and increased market share within target segments."
    },
    {
        id: 5,
        title: "Consultancy & Advisory",
        description: "Expert advisory services providing strategic insights and practical solutions to your business challenges.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>`,
        benefits: [
            "One-on-one strategic sessions",
            "Expert problem-solving support",
            "Industry best practices guidance",
            "Decision-making frameworks",
            "Ongoing advisory access"
        ],
        whoItsFor: "Business owners needing expert guidance, executives facing strategic decisions, and entrepreneurs navigating complex challenges.",
        expectedResults: "Faster problem resolution, more confident decision-making, access to proven strategies, and reduced business risk through expert validation."
    },
    {
        id: 6,
        title: "Social Media Growth",
        description: "Proven strategies and tools to grow your social media presence and engage with your audience authentically.",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>`,
        benefits: [
            "Platform-specific growth strategies",
            "Content creation guidelines",
            "Engagement tactics and tools",
            "Analytics and performance tracking",
            "Community building techniques"
        ],
        whoItsFor: "Businesses dependent on social media visibility, B2C companies, personal brands, and service providers looking to build thought leadership.",
        expectedResults: "3-5x follower growth within 6 months, significantly higher engagement rates, increased website traffic from social, and more qualified leads."
    }
];

// ===================================
// Scroll Functionality
// ===================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = 80;
        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Mobile Menu
// ===================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// ===================================
// Service Modal
// ===================================
function openServiceModal(serviceIndex) {
    const service = servicesData[serviceIndex];
    const modal = document.getElementById('serviceModal');
    
    document.getElementById('modalIcon').innerHTML = service.icon;
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalDescription').textContent = service.description;
    document.getElementById('modalWhoItsFor').textContent = service.whoItsFor;
    document.getElementById('modalExpectedResults').textContent = service.expectedResults;
    
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = service.benefits.map(benefit => `
        <div class="benefit-item-modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>${benefit}</span>
        </div>
    `).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

// ===================================
// ROI Calculator
// ===================================
function calculateROI() {
    const currentRevenue = parseFloat(document.getElementById('currentRevenue').value) || 0;
    const growthTarget = parseFloat(document.getElementById('growthTarget').value) || 0;
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    
    if (currentRevenue === 0 || growthTarget === 0 || investmentAmount === 0) {
        alert('Please fill in all fields with valid numbers');
        return;
    }
    
    const projectedRevenue = currentRevenue * (1 + growthTarget / 100);
    const revenueIncrease = projectedRevenue - currentRevenue;
    const roi = ((revenueIncrease - investmentAmount) / investmentAmount) * 100;
    const monthsToROI = Math.ceil(investmentAmount / (revenueIncrease / 12));
    
    const formatCurrency = (num) => {
        return '£' + num.toLocaleString('en-GB', { maximumFractionDigits: 0 });
    };
    
    document.getElementById('projectedRevenue').textContent = formatCurrency(projectedRevenue);
    document.getElementById('revenueIncrease').textContent = '+' + formatCurrency(revenueIncrease) + ' increase';
    document.getElementById('roiPercentage').textContent = roi.toFixed(1) + '%';
    document.getElementById('monthsToROI').textContent = `ROI achieved in ~${monthsToROI} months`;
    
    const resultsDiv = document.getElementById('roiResults');
    resultsDiv.style.display = 'block';
    
    setTimeout(() => {
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// ===================================
// Form Handling
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return;
            }
        });
    }
});

// ===================================
// Smooth Scroll for Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target !== '#') {
            scrollToSection(target.substring(1));
        }
    });
});

// ===================================
// Set Current Year in Footer
// ===================================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===================================
// Animation on Scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .metric-card, .testimonial-card, .benefit-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

console.log('%c👋 Welcome to Business Driven Limited!', 'color: #0EA5E9; font-size: 20px; font-weight: bold;');
console.log('%cLooking for business growth? Contact us at 07933 000903', 'color: #4B5563; font-size: 14px;');
