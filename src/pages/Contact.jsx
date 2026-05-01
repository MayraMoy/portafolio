import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <section id="contacto" className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">Contáctame</h2>
                    <div className="title-underline"></div>
                    <p className="contact-subtitle">
                        ¿Tienes un proyecto en mente o quieres que trabajemos juntos? ¡Hablemos! 
                        Puedes contactarme a través de estos canales:
                    </p>
                </div>

                <div className="contact-links">
                    <a href="mailto:mayra.moyano@ejemplo.com" className="contact-card email-card">
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className="contact-info">
                            <h3>Email</h3>
                            <p>Envíame un correo</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/mayramoyano" target="_blank" rel="noreferrer" className="contact-card linkedin-card">
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </div>
                        <div className="contact-info">
                            <h3>LinkedIn</h3>
                            <p>Conecta conmigo</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;