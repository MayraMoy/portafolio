import chatbot1 from '../../../assets/images/chatbot1.png';
import chatbot2 from '../../../assets/images/chatbot2.png';
import login1 from '../../../assets/images/circulapp1.png';
import register1 from '../../../assets/images/circulapp2.png';
import turismo1 from '../../../assets/images/turismo1.png';
import turismo2 from '../../../assets/images/turismo2.png';
import cm1 from '../../../assets/images/cm1.png';
import cm2 from '../../../assets/images/cm2.png';
import gestion1 from '../../../assets/images/gestion1.png';

export const projectsData = [
        {
            title: "Plataforma de Intercambio Comunitario",
            role: "Desarrollador Full Stack | Sep 2023 - Presente",
            description: "Plataforma web colaborativa para la gestión y trueque de productos/servicios en tiempo real.",
            longDescription: "Diseño e implementación end-to-end de un sistema de intercambio comunitario escalable. Lideré el relevamiento de requisitos con clientes y el modelado de la arquitectura de datos, garantizando una UX fluida y alta usabilidad.",
            features: [
                "Liderazgo end-to-end desde entrevistas de requisitos hasta despliegue",
                "Modelado y optimización de base de datos en MongoDB",
                "Desarrollo de API RESTful con Node.js y Express",
                "Frontend modular y reactivo construido con React"
            ],
            stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            images: [login1, register1], 
            repoLink: "https://github.com/MayraMoy/circulapp_info.git",
            demoLink: "https://youtube.com/playlist?list=PL2TQRpsf4rxBl4-f_gXE4DuhFWjA2k7vb&si=MxFeHYNP4kvoEK5I"
        },
        {
            title: "Sistema de Gestión de Información Institucional",
            role: "Desarrolladora Full Stack | En Desarrollo",
            description: "Plataforma empresarial para centralizar la gestión de noticias, resoluciones y comunicaciones académicas.",
            longDescription: "Sistema en desarrollo orientado a digitalizar y automatizar procesos institucionales, sustituyendo flujos manuales por un panel con roles, auditoría y reportes estructurados.",
            features: [
                "Control de acceso basado en roles (RBAC) con Spring Security",
                "Módulo de procesamiento e ingreso de noticias y resoluciones",
                "Generación automática de reportes y consultas dinámicas"
            ],
            stack: ["Spring Boot", "Java", "Spring Security", "MySQL"],
            status: "in-progress",
            images: [gestion1],
        },
        {
            title: "Página Web de Turismo",
            role: "Desarrolladora Frontend",
            description: "Portal turístico interactivo y responsive para la difusión de destinos, actividades y hospedaje.",
            longDescription: "Plataforma de promoción turística enfocada en la velocidad de carga y navegación intuitiva. Diseñada para ofrecer una experiencia fluida tanto en dispositivos móviles como de escritorio.",
            features: [
                "Maquetación Mobile-First 100% responsive",
                "Galería dinámica e interactiva de atractivos locales",
                "Secciones de contacto optimizadas para conversión"
            ],
            stack: ["React", "JavaScript", "Tailwind CSS"],
            images: [turismo1, turismo2],
            repoLink: "https://github.com/MayraMoy/serrezuela01.git",
            demoLink: "https://serrezuela01.vercel.app/"
        },
        {
            title: "Portafolio para Community Manager",
            role: "Desarrolladora Frontend",
            description: "Sitio web profesional a medida orientado a la exhibición y venta de servicios de marketing digital.",
            longDescription: "Desarrollo web personalizado para destacar servicios de gestión de redes, diseño y creación de contenido. Estructurado para guiar al usuario hacia la contratación mediante llamados a la acción claros.",
            features: [
                "Estructura orientada a conversión y captura de clientes",
                "Selector de planes y paquetes de servicios dinámicos",
                "Diseño coherente con la identidad visual de la marca"
            ],
            stack: ["React", "JavaScript", "CSS"],
            images: [cm1, cm2],
            demoLink: "https://portafolio-melina.vercel.app/"
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