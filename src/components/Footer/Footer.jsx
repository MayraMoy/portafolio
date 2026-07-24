import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Branding / Isotipo */}
                <div className="footer-brand">
                    <a href="#inicio" className="footer-logo">
                        Mayra<span>.dev</span>
                    </a>
                    <p className="footer-tagline">
                        Desarrolladora Full Stack dedicada a crear soluciones web elegantes y escalables.
                    </p>
                </div>

                {/* Enlaces de Navegación Rápida */}
                <div className="footer-nav">
                    <h4>Navegación</h4>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobre-mi">Sobre Mí</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Redes / Social Links */}
                <div className="footer-social">
                    <h4>Conectemos</h4>
                    <div className="social-icons">
                        <a 
                            href="https://github.com/MayraMoyano" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/mayra-yazmin-moyano/" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="LinkedIn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Separador y Copyright */}
            <div className="footer-bottom">
                <p>© {currentYear} Mayra Moyano. Desarrollado con React & CSS Modules.</p>
            </div>
        </footer>
    );
};

export default Footer;