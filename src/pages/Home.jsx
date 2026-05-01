import React from 'react';
import '../styles/home.css';

const Home = () => {
    return (
        <section id="inicio" className="home">
            {/* Animated glowing orbs for background */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            
            <div className="home-content">
                <h1 className="home-title">Mayra Yazmin Moyano</h1>
                <h2 className="home-subtitle">Desarrolladora Full Stack</h2>
                
                <p className="home-description">
                    Especializada en el ecosistema JavaScript, creando soluciones funcionales, escalables y orientadas a producto.
                </p>
                
                <div className="home-buttons">
                    <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
                    <a href="#contacto" className="btn btn-secondary">Contactarme</a>
                </div>
            </div>
        </section>
    );
};

export default Home;