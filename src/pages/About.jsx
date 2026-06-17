import React from 'react';
import '../styles/about.css';
// Cambiá esta línea en el import:
import { FaGraduationCap, FaRocket, FaSearch, FaChartBar, FaPencilRuler, FaCode, FaChartLine, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

const About = () => {
    return (
        <section id="sobre-mi" className="about">
            <div className="about-container">

                <div className="about-header">
                    <h2 className="section-title">Sobre Mí</h2>
                    <div className="title-underline"></div>
                    <p className="section-intro">
                        Mi enfoque combina análisis de requisitos, diseño de soluciones y desarrollo técnico,
                        priorizando siempre que cada sistema responda a necesidades reales y aporte valor.
                    </p>
                </div>

                {/* TARJETAS DESTACADAS */}
                <div className="about-highlights">
                    <div className="highlight-card">
                        <div className="hcard-icon"><FaGraduationCap /></div>
                        <h3>Formación</h3>
                        <p>Actualmente curso el tercer año de la Tecnicatura en Desarrollo de Software.</p>
                        <p>Poseo el título de Programadora Profesional otorgado por el Ministerio de Educación
                        y certificaciones en Inteligencia Artificial y Ciencia de Datos.</p>
                    </div>
                    <div className="highlight-card">
                        <div className="hcard-icon"><FaRocket /></div>
                        <h3>Especialización</h3>
                        <p>Desarrollo aplicaciones web utilizando React, Node.js y APIs REST.</p>
                        <p>Me interesa especialmente la integración de Inteligencia Artificial y análisis de datos
                        para optimizar procesos y mejorar la experiencia de usuario.</p>
                    </div>
                </div>

                {/* PROCESO */}
                <div className="process-section">
                    <h3 className="subsection-title">Cómo transformo una idea en una solución</h3>
                    <div className="process-grid">

                        <div className="process-card">
                            <div className="process-num">01</div>
                            <div className="process-icon"><FaSearch /></div>
                            <h4>Relevamiento</h4>
                            <p>Entiendo el problema, los objetivos y las necesidades del usuario.</p>
                            <span className="process-arrow"><FiChevronRight /></span>
                        </div>

                        <div className="process-card">
                            <div className="process-num">02</div>
                            <div className="process-icon"><FaChartBar /></div>
                            <h4>Análisis</h4>
                            <p>Analizo procesos, datos y oportunidades para definir la mejor estrategia.</p>
                            <span className="process-arrow"><FiChevronRight /></span>
                        </div>

                        <div className="process-card">
                            <div className="process-num">03</div>
                            <div className="process-icon"><FaPencilRuler /></div>
                            <h4>Diseño</h4>
                            <p>Defino funcionalidades, flujos de usuario y arquitectura de la solución.</p>
                            <span className="process-arrow"><FiChevronRight /></span>
                        </div>

                        <div className="process-card">
                            <div className="process-num">04</div>
                            <div className="process-icon"><FaCode /></div>
                            <h4>Desarrollo</h4>
                            <p>Construyo aplicaciones escalables, seguras y orientadas a producto.</p>
                            <span className="process-arrow"><FiChevronRight /></span>
                        </div>

                        <div className="process-card">
                            <div className="process-num">05</div>
                            <div className="process-icon"><FaChartLine /></div>
                            <h4>Resultado</h4>
                            <p>Entrego soluciones que generan valor real y optimizan procesos.</p>
                        </div>

                    </div>
                </div>

                {/* EDUCACIÓN */}
                <div className="education-section">
                    <h3 className="subsection-title">Educación y Formación</h3>
                    <div className="timeline">

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Tecnicatura en Desarrollo de Software</h4>
                            <p className="timeline-institution">UPC Instituto Superior "Dr. Bernardo Houssay"</p>
                            <p className="timeline-date">2024 – Actualidad</p>
                        </div>

                        <div className="timeline-item">
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