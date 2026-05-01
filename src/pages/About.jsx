import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <section id="sobre-mi" className="about">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="section-title">Sobre Mí</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    {/* Columna Izquierda: Texto y Educación */}
                    <div className="about-text-column">
                        <p className="about-description">
                            Trabajo con un enfoque orientado a producto, analizando necesidades concretas para diseñar soluciones funcionales y escalables. He desarrollado aplicaciones y flujos conversacionales enfocados en la captación y gestión de usuarios.
                        </p>
                        <p className="about-description">
                            Actualmente estoy profundizando en la integración de inteligencia artificial en aplicaciones web, especialmente en automatización de procesos, estructuración de datos y mejora de la interacción usuario-sistema.
                        </p>

                        <div className="education-section">
                            <h3 className="subsection-title">Educación & Formación</h3>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <h4>Tecnicatura en Desarrollo de Software</h4>
                                    <p className="timeline-institution">UPC Instituto Superior “Dr. Bernardo Houssay”</p>
                                    <p className="timeline-date">2024 - Actualidad</p>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <h4>Formación Complementaria</h4>
                                    <ul className="complementary-list">
                                        <li>Ciberseguridad</li>
                                        <li>Marketing Digital</li>
                                        <li>SEO y Optimización Web</li>
                                        <li>Inteligencia Artificial</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Habilidades Técnicas */}
                    <div className="about-skills-column">
                        <h3 className="subsection-title">Habilidades Técnicas</h3>
                        
                        <div className="skill-category">
                            <h4>Frontend</h4>
                            <div className="skill-tags">
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Tailwind CSS</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Backend & Base de Datos</h4>
                            <div className="skill-tags">
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>APIs REST</span>
                                <span>MongoDB</span>
                                <span>MySQL</span>
                                <span>SQLite</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4>Herramientas</h4>
                            <div className="skill-tags">
                                <span>Git</span>
                                <span>GitHub</span>
                                <span>Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;