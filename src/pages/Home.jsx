import React from 'react';
import '../styles/home.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import profileImg from '../assets/images/mayra.jpg'; 

const Home = () => {
    return (
        <section id="inicio" className="home">
            
            <div className="home-container">
                <div className="home-content">
                        <h1 className="home-title">
                            Mayra Yazmin Moyano
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

                </div> 
                <div className="home-visual">
                    <div className="orbital-wrapper">
                        <div className="profile-circle">
                            <img src={profileImg} alt="Mayra" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;