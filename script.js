/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - HARSHIT KUMAWAT
 * Features: Dark/Light Mode Toggle, Mobile Drawer, Active Scroll Spy,
 * Scroll Reveal Animations, Email Copy Helper, Contact Form Handler
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. THEME TOGGLE (DARK / LIGHT MODE)
  // ------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const rootElement = document.documentElement;

  // Retrieve saved preference or system preference (default: dark)
  const savedTheme = localStorage.getItem('hk_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'dark');
  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = rootElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem('hk_portfolio_theme', theme);

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
      themeToggleBtn.setAttribute(
        'title',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  // ------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION MENU
  // ------------------------------------------------------------------------
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          menuToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(event.target) &&
        !menuToggleBtn.contains(event.target)
      ) {
        navMenu.classList.remove('open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. SCROLL SPY (ACTIVE NAVIGATION HIGHLIGHT)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = 90;

    sections.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop - headerHeight;
      const sectionId = currentSection.getAttribute('id');
      const matchingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingNavLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          matchingNavLink.classList.add('active');
        } else {
          matchingNavLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // ------------------------------------------------------------------------
  // 4. SCROLL REVEAL ENTRANCE ANIMATIONS
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('active'));
  }

  // ------------------------------------------------------------------------
  // 5. COPY EMAIL TO CLIPBOARD HELPER
  // ------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailInput = document.getElementById('email-input');

  if (copyEmailBtn && emailInput) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailToCopy = emailInput.value.trim();
      
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers
          emailInput.select();
          document.execCommand('copy');
        }

        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Copied!</span>
        `;
        copyEmailBtn.classList.add('btn-primary');

        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.classList.remove('btn-primary');
        }, 2200);
      } catch (err) {
        console.error('Could not copy email:', err);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. CONTACT FORM DEMO SUBMISSION HANDLER
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Front-end interactive confirmation demo
      formFeedback.textContent = "Thank you for reaching out! This placeholder form is ready — you can connect Formspree or EmailJS to receive emails directly.";
      formFeedback.classList.add('success');
      formFeedback.style.display = 'block';

      contactForm.reset();

      setTimeout(() => {
        formFeedback.style.display = 'none';
        formFeedback.classList.remove('success');
      }, 6000);
    });
  }

  // ------------------------------------------------------------------------
  // 7. BACK TO TOP BUTTON
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
