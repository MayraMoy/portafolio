import React, { useState } from 'react';
import '../styles/projects.css';
import chatbot1 from '../assets/images/chatbot1.png';
import chatbot2 from '../assets/images/chatbot2.png';
import login1 from '../assets/images/circulapp1.png';
import register1 from '../assets/images/circulapp2.png';
import turismo1 from '../assets/images/turismo1.png';
import turismo2 from '../assets/images/turismo2.png';
import cm1 from '../assets/images/cm1.png';
import cm2 from '../assets/images/cm2.png';
import gestion1 from '../assets/images/gestion1.png';

const ProjectCard = ({ project, onOpenDetails }) => {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        if (project.images && project.images.length > 0) {
            setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (project.images && project.images.length > 0) {
            setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
        }
    };

    return (
        <div className="project-card">
            <div className="project-image-container">
                {project.images && project.images.length > 0 ? (
                    <>
                        <img 
                            src={project.images[currentImg]} 
                            alt={`${project.title} screenshot`} 
                            className="project-image"
                            width="360"
                            height="220"
                            loading="lazy"
                        />
                        {project.images.length > 1 && (
                            <>
                                <button className="carousel-btn prev-btn" onClick={prevImage}>❮</button>
                                <button className="carousel-btn next-btn" onClick={nextImage}>❯</button>
                                <div className="carousel-indicators">
                                    {project.images.map((_, idx) => (
                                        <span 
                                            key={idx} 
                                            className={`indicator ${idx === currentImg ? 'active' : ''}`}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImg(idx); }}
                                        ></span>
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="project-placeholder-bg"></div>
                )}
                {project.status === 'in-progress' && (
                    <span className="status-badge">En Desarrollo</span>
                )}
            </div>
            
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-short-description">
                    {project.description}
                </p>

                <div className="project-stack">
                    {project.stack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="stack-tag">{tech}</span>
                    ))}
                    {project.stack.length > 3 && (
                        <span className="stack-tag">+{project.stack.length - 3}</span>
                    )}
                </div>
                
                <div className="project-actions">
                    <button className="action-btn btn-more" onClick={() => onOpenDetails(project)}>
                        Ver Más
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                
                <h2 className="modal-title">{project.title}</h2>
                <p className="modal-role">{project.role}</p>
                
                <div className="modal-body">
                    <p className="modal-description">{project.longDescription}</p>
                    
                    <h4 className="modal-subtitle">Características Clave</h4>
                    <ul className="modal-features">
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>

                    <h4 className="modal-subtitle">Tecnologías</h4>
                    <div className="modal-stack">
                        {project.stack.map((tech, i) => (
                            <span key={i} className="stack-tag">{tech}</span>
                        ))}
                    </div>
                </div>

                <div className="modal-actions">
                    {project.repoLink && (
                        <a href={project.repoLink} className="action-btn btn-repo" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Repositorio
                        </a>
                    )}
                    {project.demoLink && (
                        <a href={project.demoLink} className="action-btn btn-demo" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [slideIndex, setSlideIndex] = useState(0);

    const projectsData = [
        {
            title: "Plataforma de Intercambio Comunitario",
            role: "Desarrollador Full Stack | Sep 2023 - Presente",
            description: "Aplicación web completa para la gestión de usuarios y publicaciones. Arquitectura end-to-end desde el relevamiento de requisitos hasta la implementación de frontend y backend.",
            longDescription: "Desarrolle un sistema funcional de intercambio bajo restricciones de tiempo y recursos técnicos específicos. Donde lideré el desarrollo end-to-end, desde las entrevistas con el cliente para el relevamiento de requisitos hasta el modelado de la base de datos en MongoDB y el desarrollo del backend en Node.js/Express. Finalmente entregué una arquitectura escalable que prioriza la usabilidad y claridad en la interacción del frontend (React), cumpliendo con los objetivos de negocio planteados inicialmente",
            features: [
                "Desarrollo de frontend priorizando usabilidad",
                "Backend y APIs REST con Node.js y Express",
                "Modelado de base de datos para intercambios"
            ],
            stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            images: [login1, register1], 
            repoLink: "https://github.com/MayraMoy/circulapp_info.git",
            demoLink: "https://youtube.com/playlist?list=PL2TQRpsf4rxBl4-f_gXE4DuhFWjA2k7vb&si=MxFeHYNP4kvoEK5I"
        },
         {
            title: "Sistema de Gestión de Información Institucional",
            role: "Desarrolladora Full Stack | En Desarrollo",
            description: "Plataforma web para gestionar noticias y resoluciones académicas, permitiendo la participación de la comunidad mediante comentarios estructurados.",
            longDescription: "Proyecto actualmente en desarrollo orientado a centralizar la gestión de información institucional, reemplazando procesos manuales por un sistema digital con control de usuarios, carga de datos y generación de reportes. Se encuentra en etapa activa de construcción, abarcando tanto el diseño de la base de datos como el desarrollo de frontend y backend.",
            features: [
                "Módulo de carga y consulta de información institucional",
                "Generación de reportes",
                "Gestión de usuarios y permisos"
            ],
            stack: ["Spring Boot", "Java", "Spring Security", "MySQL"],
            status: "in-progress",
            images: [gestion1],
        },
        {
            title: "Página Web de Turismo",
            role: "Desarrolladora Frontend",
            description: "Sitio web informativo para promocionar destinos y servicios turísticos, con diseño responsive y secciones dedicadas a atractivos, alojamiento y contacto.",
            longDescription: "Desarrollé un sitio web junto a un compañero, orientado en la promoción turística, con el fin de mostrar de forma clara y atractiva los destinos, actividades y servicios disponibles para los visitantes. Trabajé en la maquetación responsive, la organización de contenido visual y la optimización de la experiencia de navegación para distintos dispositivos.",
            features: [
                "Diseño responsive adaptado a múltiples dispositivos",
                "Galería de destinos y atractivos turísticos",
                "Secciones de contacto e información de servicios"
            ],
            stack: ["React", "JavaScript", "Tailwind CSS"],
            images: [turismo1, turismo2],
            repoLink: "https://github.com/MayraMoy/serrezuela01.git",
            demoLink: "https://serrezuela01.vercel.app/"
        },
        {
            title: "Portafolio para Community Manager",
            role: "Desarrolladora Frontend",
            description: "Sitio portafolio a medida para una Community Manager, pensado para exhibir servicios en creación de contenido y gestión de redes sociales.",
            longDescription: "Diseñé y desarrollé un portafolio personal para una Community Manager, con el objetivo de presentar de forma profesional sus servicios: gestión de redes sociales, producción de contenido y diseño/impresión para negocios, junto con sus planes y precios. Prioricé una estética visual atractiva y coherente con la identidad de marca de la clienta, junto con una navegación simple para destacar cada servicio.",
            features: [
                "Sección de servicios: gestión de redes, producción de contenido y diseño/impresión",
                "Planes y precios de Community Manager seleccionables",
                "Maquetación a medida según identidad de marca"
            ],
            stack: ["Producción de contenido", "Edición de contenido", "Impresión y diseño"],
            images: [cm1, cm2],
            demoLink: "https://portafolio-melina.vercel.app/"
        },
        {
            title: "Chatbot de Captación de Leads",
            role: "Desarrollador Full Stack | Abril 2026 - Presente",
            description: "Flujo conversacional estructurado para obtener información útil de los usuarios. Interfaz desarrollada en React y persistencia de leads mediante integración con Google Sheets API.",
            longDescription: "Existía una necesidad de automatizar la captación de prospectos y organizar la información de forma inmediata. Por el cual diseñé un flujo conversacional estructurado en React, integrando Google Sheets API mediante Apps Script para la persistencia de datos. Al final logré una simplicidad operativa total para el cliente, permitiendo la captura y estructuración de leads en tiempo real sin infraestructuras complejas.",
            features: [
                "Análisis y definición de flujo conversacional",
                "Interfaz interactiva en tiempo real",
                "Persistencia de datos vía Google Apps Script"
            ],
            stack: ["React", "JavaScript", "Google Apps Script", "Google Sheets API"],
            images: [chatbot1, chatbot2], 
            repoLink: "https://github.com/MayraMoy/ChatBot.git",
            demoLink: "https://demo-chat-red.vercel.app/"
        },
    ];

    const projectsPerSlide = 2;
    const totalSlides = Math.ceil(projectsData.length / projectsPerSlide);

    const nextSlide = () => {
        setSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const visibleProjects = projectsData.slice(
        slideIndex * projectsPerSlide,
        slideIndex * projectsPerSlide + projectsPerSlide
    );

    return (
        <section id="proyectos" className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="section-title">Mis Proyectos</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-slider">
                    <button
                        className="slider-arrow slider-arrow-left"
                        onClick={prevSlide}
                        aria-label="Proyectos anteriores"
                    >
                        ❮
                    </button>

                    <div className="projects-grid">
                        {visibleProjects.map((project) => (
                            <ProjectCard 
                                key={project.title} 
                                project={project} 
                                onOpenDetails={setSelectedProject} 
                            />
                        ))}
                    </div>

                    <button
                        className="slider-arrow slider-arrow-right"
                        onClick={nextSlide}
                        aria-label="Proyectos siguientes"
                    >
                        ❯
                    </button>
                </div>

                <div className="slider-dots">
                    {Array.from({ length: totalSlides }).map((_, idx) => (
                        <span
                            key={idx}
                            className={`slider-dot ${idx === slideIndex ? 'active' : ''}`}
                            onClick={() => setSlideIndex(idx)}
                        ></span>
                    ))}
                </div>
            </div>

            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
};

export default Projects;