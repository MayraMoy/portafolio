import React from 'react';
import '../styles/about.css';
import { FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import programacionImg from '../assets/images/programacion.jpg'; 

const About = () => {
    return (
        <section id="sobre-mi" className="about">
            <div className="about-container">

                <div className="about-header-content">

                    <div className="about-header-image">
                        <img src={programacionImg} alt="Sobre mí" />
                    </div>

                    <div className="about-header-text">
                        <h2 className="section-title">Sobre Mí</h2>
                        <div className="title-underline"></div>
                        <p className="section-intro">
                            Actualmente curso el tercer año de la Tecnicatura en Desarrollo de Software.
                            Poseo el título de Programadora Profesional otorgado por el Ministerio de Educación
                            y certificaciones en Inteligencia Artificial y Ciencia de Datos.
                            <br></br>
                            Desarrollo aplicaciones web utilizando React, Node.js y APIs REST.
                            Me interesa especialmente la integración de Inteligencia Artificial y análisis de datos
                            para optimizar procesos y mejorar la experiencia de usuario.
                            <br></br>
                            Mi enfoque combina análisis de requisitos, diseño de soluciones y desarrollo técnico,
                            priorizando siempre que cada sistema responda a necesidades reales y aporte valor.
                        </p>

                    </div>

                </div>

                {/* EDUCACIÓN */}
                <div className="education-section">
                    <h3 className="subsection-title">Educación y Formación</h3>
                    <div className="education-list">

                        <div className="education-item">
                            <div className="timeline-dot"></div>
                            <h4>Tecnicatura en Desarrollo de Software</h4>
                            <p className="timeline-institution">UPC Instituto Superior "Dr. Bernardo Houssay"</p>
                            <p className="timeline-date">2024 – Actualidad</p>
                        </div>

                        <div className="education-item">
                            <div className="timeline-dot"></div>
                            <h4>Formación Complementaria</h4>
                            <div className="skill-tags">
                                <span>Ciberseguridad</span>
                                <span>Marketing Digital</span>
                                <span>SEO</span>
                                <span>Inteligencia Artificial</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* STACK */}
                <div className="skills-section">
                    <h3 className="subsection-title">Stack Tecnológico</h3>
                    <div className="skills-grid">

                        <div className="skill-category-card">
                            <div className="skcard-header">
                                <FaLayerGroup className="skcard-icon" />
                                <h4>Frontend</h4>
                            </div>
                            <div className="skill-tags">
                                <span>React</span>
                                <span>JavaScript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Tailwind</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>

                        <div className="skill-category-card">
                            <div className="skcard-header">
                                <FaServer className="skcard-icon" />
                                <h4>Backend & Base de Datos</h4>
                            </div>
                            <div className="skill-tags">
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>APIs REST</span>
                                <span>MongoDB</span>
                                <span>MySQL</span>
                                <span>SQLite</span>
                            </div>
                        </div>

                        <div className="skill-category-card">
                            <div className="skcard-header">
                                <FaTools className="skcard-icon" />
                                <h4>Herramientas</h4>
                            </div>
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