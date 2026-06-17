import React from 'react';
import '../styles/home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import profileImg from '../assets/images/profile.png'; // ← tu foto

const Home = () => {
    return (
        <section id="inicio" className="home">
            {/* Animated glowing orbs for background */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            
            <div className="home-container">
                <div className="home-content">
                    <span className="home-badge">
                        Hola, soy Mayra
                    </span>
                        <h1 className="home-title">
                            Diseño soluciones digitales
                            <br />
                                que nacen de
                                <span className="highlight">
                                {" "}problemas reales.
                    </span>

                    </h1>
                
                    <p className="home-description">
                        Desarrolladora Full Stack especializada en React, Node.js e integración de Inteligencia Artificial.
                        Combino análisis de requerimientos, diseño de procesos y desarrollo técnico para construir
                        productos que generan valor.
                    </p>

                
                    <div className="home-buttons">
                        <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
                        <a href="#contacto" className="btn btn-secondary">Contactarme</a>
                    </div>


                    <div className="home-stats">
                        <div className="home-stat">
                            <strong>3+</strong>
                            <span>Proyectos</span>
                        </div>

                        <div className="home-stat">
                            <strong>3</strong>
                            <span>Certificaciones</span>
                        </div>

                        <div className="home-stat">
                            <strong>2024</strong>
                            <span>Formación activa</span>
                        </div>
                    </div>
                </div> 
                <div className="home-visual">
                    <div className="orbital-wrapper">
                        <div className="profile-circle">
                            <img src={profileImg} alt="Mayra" />
                        </div>
                        <span className="orbital-node node-top">Analizo<br/>necesidades</span>
                        <span className="orbital-node node-right">Automatizo<br/>procesos</span>
                        <span className="orbital-node node-bottom-right">Desarrollo<br/>productos</span>
                        <span className="orbital-node node-bottom-left">Diseño<br/>soluciones</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;