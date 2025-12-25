const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        const navLinks = document.querySelectorAll('.nav-link');

        // Inicializar atributo aria
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');

        menuToggle.addEventListener('click', () => {
            const isOpen = sidebar.classList.toggle('active');
            overlay.classList.toggle('active', isOpen);
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);

            if (isOpen) {
                // Enfocar primer enlace para accesibilidad
                const firstLink = document.querySelector('.nav-menu .nav-link');
                if (firstLink) firstLink.focus();
            } else {
                menuToggle.focus();
            }
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
            menuToggle.focus();
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    sidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    document.body.classList.remove('no-scroll');
                    menuToggle.focus();
                }
            });
        });

        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
                menuToggle.focus();
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

// Animación de escritura para el nombre
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Opcional: ocultar cursor después de terminar
            setTimeout(() => {
                document.querySelector('.cursor').style.display = 'none';
            }, 1000);
        }
    }
    
    type();
}

// Ejecutar cuando la página carga
window.addEventListener('load', function() {
    const nameElement = document.querySelector('.typing-name');
    const fullName = 'Hola, Soy Mayra Moyano';
    
    // Esperar 1 segundo antes de empezar a escribir el nombre
    setTimeout(() => {
        typeWriter(nameElement, fullName, 150); // 150ms por letra
    }, 1000);
});