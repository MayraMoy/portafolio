import React, { useState } from 'react';
import '../styles/projects.css';
import chatbot1 from '../assets/images/chatbot1.png';
import chatbot2 from '../assets/images/chatbot2.png';
import login1 from '../assets/images/login1.png';
import register1 from '../assets/images/register1.png';

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
                    <p className="modal-description">{project.description}</p>
                    
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
                    <a href={project.repoLink} className="action-btn btn-repo" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Repositorio
                    </a>
                    <a href={project.demoLink} className="action-btn btn-demo" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            title: "Chatbot de Captación de Leads",
            role: "Desarrollador Full Stack | Abril 2026 - Presente",
            description: "Flujo conversacional estructurado para obtener información útil de los usuarios. Interfaz desarrollada en React y persistencia de leads mediante integración con Google Sheets API.",
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
        {
            title: "Plataforma de Intercambio Comunitario",
            role: "Desarrollador Full Stack | Sep 2023 - Presente",
            description: "Aplicación web completa para la gestión de usuarios y publicaciones. Arquitectura end-to-end desde el relevamiento de requisitos hasta la implementación de frontend y backend.",
            features: [
                "Desarrollo de frontend priorizando usabilidad",
                "Backend y APIs REST con Node.js y Express",
                "Modelado de base de datos para intercambios"
            ],
            stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            images: [login1, register1], 
            repoLink: "https://github.com/MayraMoy/circulapp_info.git",
            demoLink: "https://youtube.com/playlist?list=PL2TQRpsf4rxBl4-f_gXE4DuhFWjA2k7vb&si=MxFeHYNP4kvoEK5I"
        }
    ];

    return (
        <section id="proyectos" className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="section-title">Mis Proyectos</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            onOpenDetails={setSelectedProject} 
                        />
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