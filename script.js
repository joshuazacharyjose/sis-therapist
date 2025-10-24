// ===================================
// MINDSAKE - MODERN INTERACTIVE FEATURES
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  
  // ===================================
  // 1. SMOOTH SECTION REVEAL ON SCROLL
  // ===================================
  const sections = document.querySelectorAll(".fade-section");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check on page load

  
  // ===================================
  // 2. MOBILE MENU TOGGLE
  // ===================================
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (menuToggle && mobileMenu) {
    // Toggle menu on button click
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  
  // ===================================
  // 3. NAVBAR SCROLL EFFECT
  // ===================================
  const navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  
  // ===================================
  // 4. SMOOTH SCROLL FOR ANCHOR LINKS
  // ===================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      
      // Skip if it's just "#" or empty
      if (href === "#" || href === "") return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  
  // ===================================
  // 5. SCROLL TO TOP BUTTON
  // ===================================
  const scrollToTopBtn = document.getElementById("scrollToTop");
  
  if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  
  // ===================================
  // 6. CONTACT FORM - REDIRECT TO GOOGLE FORMS
  // ===================================
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const GOOGLE_FORM_URL = "https://forms.gle/a23Fe4UPjVquuAVZA";

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Show loading message
      formStatus.textContent = "Redirecting to booking form...";
      formStatus.className = "form-status success";
      
      // Redirect to Google Forms after a short delay
      setTimeout(() => {
        window.open(GOOGLE_FORM_URL, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        formStatus.textContent = "Opening appointment form in new tab! If it doesn't open, click here.";
        formStatus.style.cursor = "pointer";
        
        // Make the status message clickable
        formStatus.addEventListener("click", () => {
          window.open(GOOGLE_FORM_URL, '_blank');
        });
        
        // Hide message after 8 seconds
        setTimeout(() => {
          formStatus.style.display = "none";
        }, 8000);
      }, 500);
    });
  }

  
  // ===================================
  // 7. SUBTLE PARALLAX EFFECT
  // ===================================
  const parallaxElements = document.querySelectorAll(
    ".service, .testimonial-card, .process-step"
  );

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only apply effect when element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const progress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        const movement = (progress - 0.5) * 20; // Subtle movement
        
        // Apply transform with slight delay based on index
        element.style.transform = `translateY(${movement}px)`;
      }
    });
  });

  
  // ===================================
  // 8. ANIMATED COUNTER FOR STATS
  // ===================================
  const statNumbers = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;

    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      hasAnimated = true;

      statNumbers.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes("%");
        const numericValue = parseInt(target.replace(/\D/g, ""));
        
        let current = 0;
        const increment = numericValue / 50; // 50 steps
        const duration = 2000; // 2 seconds
        const stepTime = duration / 50;

        const counter = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            stat.textContent = target;
            clearInterval(counter);
          } else {
            stat.textContent = Math.floor(current) + (isPercentage ? "%" : "+");
          }
        }, stepTime);
      });
    }
  };

  window.addEventListener("scroll", animateCounters);
  animateCounters(); // Check on load

  
  // ===================================
  // 9. SERVICE CARD TILT EFFECT (Desktop Only)
  // ===================================
  const serviceCards = document.querySelectorAll(".service");

  // Only apply on desktop
  if (window.innerWidth > 768) {
    serviceCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
      });
    });
  }

  
  // ===================================
  // 10. FORM INPUT ANIMATION
  // ===================================
  const formInputs = document.querySelectorAll(".form-group input, .form-group textarea, .form-group select");

  formInputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        input.parentElement.classList.remove("focused");
      }
    });
  });

  
  // ===================================
  // 11. LAZY LOAD IMAGES (PERFORMANCE)
  // ===================================
  const images = document.querySelectorAll("img[data-src]");
  
  if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

});


// ===================================
// 12. CONSOLE GREETING
// ===================================
console.log("%c👋 Welcome to Mindsake!", "color: #80B2A9; font-size: 20px; font-weight: bold;");
console.log("%cBuilt with care for emotional wellness 💚", "color: #637593; font-size: 14px;");
console.log("%cBook an appointment: https://forms.gle/a23Fe4UPjVquuAVZA", "color: #E8A87C; font-size: 12px;");
