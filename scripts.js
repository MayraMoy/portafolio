// ==========================================
// UTILIDADES
// ==========================================

/**
 * Debounce function para optimizar eventos que se disparan frecuentemente
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Verifica si estamos en modo móvil
 */
function isMobile() {
  return window.innerWidth <= 1024;
}

// ==========================================
// MENÚ SIDEBAR
// ==========================================

class SidebarMenu {
  constructor() {
    this.menuToggle = document.getElementById('menuToggle');
    this.sidebar = document.getElementById('sidebar');
    this.overlay = document.getElementById('overlay');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    if (!this.menuToggle || !this.sidebar || !this.overlay) {
      console.warn('Elementos del menú no encontrados');
      return;
    }
    
    this.init();
  }
  
  init() {
    // Configurar atributos ARIA iniciales
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    this.sidebar.setAttribute('aria-hidden', 'true');
    
    // Event listeners
    this.menuToggle.addEventListener('click', () => this.toggle());
    this.overlay.addEventListener('click', () => this.close());
    
    // Cerrar menú al hacer click en links (solo móvil)
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMobile()) {
          this.close();
        }
      });
    });
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
    
    // Trap focus cuando el menú está abierto
    this.sidebar.addEventListener('keydown', (e) => this.trapFocus(e));
  }
  
  isOpen() {
    return this.sidebar.classList.contains('active');
  }
  
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open() {
    this.sidebar.classList.add('active');
    this.overlay.classList.add('active');
    this.menuToggle.classList.add('active');
    document.body.classList.add('no-scroll', 'sidebar-open');
    
    // Actualizar ARIA
    this.menuToggle.setAttribute('aria-expanded', 'true');
    this.menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
    this.sidebar.setAttribute('aria-hidden', 'false');
    
    // Enfocar primer enlace para accesibilidad
    setTimeout(() => {
      const firstLink = this.sidebar.querySelector('.nav-link');
      if (firstLink) firstLink.focus();
    }, 100);
  }
  
  close() {
    this.sidebar.classList.remove('active');
    this.overlay.classList.remove('active');
    this.menuToggle.classList.remove('active');
    document.body.classList.remove('no-scroll', 'sidebar-open');
    
    // Actualizar ARIA
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    this.sidebar.setAttribute('aria-hidden', 'true');
    
    // Devolver foco al botón
    this.menuToggle.focus();
  }
  
  /**
   * Trap focus dentro del sidebar cuando está abierto
   */
  trapFocus(e) {
    if (!this.isOpen() || e.key !== 'Tab') return;
    
    const focusableElements = this.sidebar.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}

// ==========================================
// SMOOTH SCROLL Y NAVEGACIÓN ACTIVA
// ==========================================

class SmoothScroll {
  constructor() {
    this.sections = document.querySelectorAll('.section[id]');
    this.navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    this.init();
  }
  
  init() {
    // Smooth scroll al hacer click
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.scrollToSection(e));
    });
    
    // Actualizar link activo al hacer scroll
    window.addEventListener('scroll', debounce(() => this.updateActiveLink(), 100));
    
    // Verificar link activo al cargar
    this.updateActiveLink();
  }
  
  scrollToSection(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop;
      const offset = isMobile() ? 80 : 100; // Ajuste según altura del header
      
      window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }
  
  updateActiveLink() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 200;
    
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
}

// ==========================================
// ANIMACIÓN DE ESCRITURA (TYPEWRITER)
// ==========================================

class TypeWriter {
  constructor(element, text, options = {}) {
    this.element = element;
    this.text = text;
    this.speed = options.speed || 100;
    this.delay = options.delay || 1000;
    this.cursor = options.cursor || document.querySelector('.cursor');
    this.onComplete = options.onComplete || null;
    this.charIndex = 0;
  }
  
  start() {
    setTimeout(() => {
      this.element.textContent = '';
      this.type();
    }, this.delay);
  }
  
  type() {
    if (this.charIndex < this.text.length) {
      this.element.textContent += this.text.charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.speed);
    } else {
      this.complete();
    }
  }
  
  complete() {
    // Ocultar cursor después de terminar
    if (this.cursor) {
      setTimeout(() => {
        this.cursor.style.opacity = '0';
        this.cursor.style.animation = 'none';
      }, 1000);
    }
    
    // Ejecutar callback si existe
    if (this.onComplete) {
      this.onComplete();
    }
  }
}

// ==========================================
// LIGHTBOX PARA CERTIFICADOS
// ==========================================

class CertificateLightbox {
  constructor() {
    this.certificateImages = document.querySelectorAll('.certificate-image');
    this.lightbox = null;
    this.init();
  }
  
  init() {
    this.createLightbox();
    
    this.certificateImages.forEach(img => {
      img.addEventListener('click', () => this.open(img));
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      img.setAttribute('aria-label', 'Ver certificado en tamaño completo');
      
      // Permitir abrir con Enter o Space
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.open(img);
        }
      });
    });
  }
  
  createLightbox() {
    this.lightbox = document.createElement('div');
    this.lightbox.className = 'lightbox';
    this.lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Cerrar">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <img src="" alt="">
      </div>
    `;
    
    document.body.appendChild(this.lightbox);
    
    // Event listeners
    const closeBtn = this.lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => this.close());
    
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.close();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
        this.close();
      }
    });
  }
  
  open(imgElement) {
    const img = imgElement.querySelector('img');
    const lightboxImg = this.lightbox.querySelector('img');
    
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Enfocar botón de cerrar
    setTimeout(() => {
      this.lightbox.querySelector('.lightbox-close').focus();
    }, 100);
  }
  
  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================
// ANIMACIONES AL HACER SCROLL
// ==========================================

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    this.init();
  }
  
  init() {
    // Elementos que se animarán al entrar en viewport
    const animatedElements = document.querySelectorAll(
      '.skill-card, .education-item'
    );
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, this.observerOptions);
    
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });
  }
}

// ==========================================
// PERFORMANCE: LAZY LOADING DE IMÁGENES
// ==========================================

class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }
  
  init() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      
      this.images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback para navegadores antiguos
      this.images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }
}

// ==========================================
// MANEJO DE ERRORES DE IMÁGENES
// ==========================================

function handleImageErrors() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Crear placeholder si la imagen no carga
      this.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))';
      this.style.display = 'flex';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.alt = 'Imagen no disponible';
    });
  });
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

function init() {
  // Inicializar menú sidebar
  new SidebarMenu();
  
  // Inicializar smooth scroll y navegación activa
  new SmoothScroll();
  
  // Inicializar animación de escritura
  const nameElement = document.querySelector('.typing-name');
  if (nameElement) {
    const typewriter = new TypeWriter(
      nameElement,
      'Hola, Soy Mayra Moyano',
      {
        speed: 150,
        delay: 1000,
        onComplete: () => console.log('Animación de nombre completada')
      }
    );
    typewriter.start();
  }
  
  // Inicializar lightbox para certificados
  new CertificateLightbox();
  
  // Inicializar animaciones al scroll
  new ScrollAnimations();
  
  // Inicializar lazy loading (si usas data-src en las imágenes)
  new LazyLoader();
  
  // Manejo de errores de imágenes
  handleImageErrors();
}

// Ejecutar cuando el DOM esté completamente cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ==========================================
// UTILIDAD: COPIAR EMAIL AL CLIPBOARD
// ==========================================

function setupEmailCopy() {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  
  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.href.replace('mailto:', '');
      
      navigator.clipboard.writeText(email).then(() => {
        // Mostrar feedback visual
        const originalText = this.textContent;
        this.textContent = '✓ Email copiado!';
        this.style.color = '#4ade80';
        
        setTimeout(() => {
          this.textContent = originalText;
          this.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Error al copiar email:', err);
        // Fallback: abrir cliente de email
        window.location.href = this.href;
      });
    });
  }
}

// Ejecutar después de la inicialización
document.addEventListener('DOMContentLoaded', setupEmailCopy);