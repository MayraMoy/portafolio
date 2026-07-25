import chatbot1 from '../../../assets/images/chatbot1.png';
import chatbot2 from '../../../assets/images/chatbot2.png';
import horas1 from '../../../assets/images/horas1.png'
import horas2 from '../../../assets/images/horas2.png'
import portfolio1 from '../../../assets/images/portafolio1.png'
import portfolio2 from '../../../assets/images/portafolio2.png'


export const projectsData = [

        {
            title: "Sistema Web de Gestión de Horas Técnicas",
            role: "Desarrollador Backend | Jun 2026 - Presente",
            description: "Plataforma web para digitalizar el registro, validación y seguimiento de horas técnicas en instituciones educativas.",
            longDescription: "Desarrollo de una aplicación web orientada a reemplazar el proceso manual de registro de horas técnicas mediante una solución centralizada. El sistema permite a los estudiantes registrar sus actividades, a los docentes validar las horas realizadas y a la institución realizar un seguimiento del progreso de cada alumno.",
            features: [
                "Diseño e implementación de una API REST con Spring Boot",
                "Modelado de la base de datos y relaciones utilizando JPA/Hibernate",
                "Sistema de autenticación basado en roles (Estudiante y Docente)",
                "Arquitectura por capas aplicando DTOs, Mappers, Services y Repositories"
            ],
            stack: [
                "Java",
                "Spring Boot",
                "Spring Data JPA",
                "Hibernate",
                "MySQL",
                "Maven",
                "Lombok",
                "REST API"
            ],
            images: [horas1, horas2],
            repoLink: "https://github.com/MayraMoy/tecnica.git",
            demoLink: ""
        },
        {
            title: "Portafolio Personal",
            role: "Frontend Developer | Jul 2026 - Presente",
            description: "Portafolio profesional desarrollado para presentar proyectos, experiencia y habilidades mediante una interfaz moderna, modular y responsive.",
            longDescription: "Diseño e implementación de un portafolio personal con una arquitectura frontend escalable utilizando React, Vite y Tailwind CSS. El proyecto fue reorganizado mediante una estructura modular basada en componentes reutilizables, separación por páginas y gestión desacoplada de datos, facilitando el mantenimiento y la incorporación de nuevas funcionalidades. Además, se trabajó en la optimización de la experiencia de usuario mediante una interfaz responsive, navegación fluida y una identidad visual consistente.",
            features: [
                "Arquitectura modular basada en componentes reutilizables",
                "Migración de CSS tradicional a Tailwind CSS",
                "Organización del proyecto por páginas, componentes, hooks y fuentes de datos",
                "Diseño responsive adaptable a distintos dispositivos",
                "Optimización de la navegación y experiencia de usuario",
                "Código mantenible y escalable siguiendo buenas prácticas de React"
            ],
            stack: [
                "React",
                "Vite",
                "Tailwind CSS",
                "JavaScript",
                "React Router",
                "CSS"
            ],
            images: [portfolio1, portfolio2],
            repoLink: "https://github.com/MayraMoy/portafolio.git",
            demoLink: "https://portafolio-jade-delta.vercel.app/"
        },
        {
            title: "Chatbot de Captación de Leads",
            role: "Desarrollador Full Stack | Abril 2026 - Presente",
            description: "Asistente conversacional interactivo para la captura y sincronización de leads sin backend complejo.",
            longDescription: "Solución ligera de automatización de ventas que captura datos de clientes potenciales a través de una interfaz conversacional en React y los persiste directamente en tiempo real.",
            features: [
                "Diseño e implementación del flujo conversacional interactivo",
                "Integración serverless con Google Sheets API vía Google Apps Script",
                "Estructuración inmediata de datos de prospectos en tiempo real"
            ],
            stack: ["React", "JavaScript", "Google Apps Script", "Google Sheets API"],
            images: [chatbot1, chatbot2], 
            repoLink: "https://github.com/MayraMoy/ChatBot.git",
            demoLink: "https://demo-chat-red.vercel.app/"
        },
    ];