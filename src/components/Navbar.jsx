import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="divlogo">
                <a href="#inicio">
                    <img className="logo" style={{ height: '40px' }} src={logo} alt="Logo" />
                </a>
            </div>
            
            <div className={`divlinks ${isMenuOpen ? 'active' : ''}`}>
                <ul className="links">
                    <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="#sobre-mi" onClick={toggleMenu}>Sobre Mí</a></li>
                    <li><a href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
                    <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </div>

            <div className="navbar-actions">
                <div className="divsocial">
                    <a href="https://github.com/MayraMoy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1035a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/mayra-yazmin-moyano/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1035a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
                
                <div className="divbutton">
                    <a href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`} aria-label="Contáctame" className="button">Contáctame</a>
                </div>

                <div className="divhamburguer" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;