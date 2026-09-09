import chatbot1 from '../../../assets/images/chatbot1.png';
import chatbot2 from '../../../assets/images/chatbot2.png';
import horas1 from '../../../assets/images/horas1.png'
import horas2 from '../../../assets/images/horas2.png'
import horas3 from '../../../assets/images/horas3.png'
import circular1 from '../../../assets/images/circular1.png'
import circular2 from '../../../assets/images/circular2.png'
import portfolio1 from '../../../assets/images/portafolio1.png'
import portfolio2 from '../../../assets/images/portafolio2.png'

export const projectsData = [

        {
            title: "Sistema Web para el Registro y Seguimiento de Horas de Práctica Técnica",
            role: "Desarrollador Backend | Jun 2026 - Presente",
            description: "Plataforma web para digitalizar el registro, validación y seguimiento de horas técnicas en instituciones educativas.",
            longDescription: "Desarrollo de una aplicación web orientada a reemplazar el proceso manual de registro de horas técnicas mediante una solución centralizada. El sistema permite a los estudiantes registrar sus actividades, a los docentes validar las horas realizadas y a la institución realizar un seguimiento del progreso de cada alumno.",
            features: [
                "Se utiliza una API REST para separar el frontend del backend y facilitar futuras integraciones.",
                "Se utiliza una base de datos relacional porque el sistema maneja entidades relacionadas que requieren integridad entre sus datos.",
                "Se implementa una arquitectura por capas para separar responsabilidades y facilitar el mantenimiento del proyecto.",
                "Se utilizan DTOs y Mappers para desacoplar las entidades de la API y controlar la información expuesta."
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
            images: [horas1, horas2, horas3],
            repoLink: "https://github.com/MayraMoy/tecnica.git",
            demoLink: ""
        },
        {
            title: "Plataforma de Economía Circular",
            role: "Desarrolladora Full Stack | Septiembre 2025 – Diciembre 2025 · Scrum Master | Julio 2026 – Presente · Córdoba, Argentina",
            description: "Plataforma web comunitaria que facilita el intercambio, reutilización y recuperación de materiales, conectando a personas interesadas en darles una nueva utilidad a recursos que ya no necesitan.",
            longDescription: "Proyecto orientado a promover la economía circular mediante una plataforma web donde los usuarios pueden publicar y gestionar materiales disponibles para intercambio o reutilización. Participé en el desarrollo Full Stack de la aplicación, trabajando en el frontend, backend y gestión de datos. También participé en el desarrollo de funcionalidades de autenticación, gestión de usuarios y roles, publicaciones, validación de materiales y contenidos educativos. Actualmente desempeño el rol de Scrum Master, facilitando la organización del equipo, el seguimiento del trabajo y la coordinación del desarrollo.",
            features: [
                "La plataforma incorpora autenticación y gestión de roles para controlar el acceso a las diferentes funcionalidades según los permisos de cada usuario.",
                "Los materiales publicados son sometidos a validaciones para verificar que cumplan con los criterios definidos por la plataforma.",
                "Las imágenes de las publicaciones se gestionan mediante Cloudinary para facilitar su almacenamiento y visualización.",
                "El frontend se comunica con el backend mediante una API REST desarrollada con Node.js y Express.",
                "Se utiliza MongoDB con Mongoose para gestionar la información de usuarios, publicaciones, materiales y demás entidades del sistema.",
                "Actualmente desempeño el rol de Scrum Master, facilitando la organización del equipo, el seguimiento de tareas y la coordinación de las actividades de desarrollo."
            ],
            stack: [
                "React",
                "JavaScript",
                "Vite",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "Mongoose",
                "JWT",
                "Cloudinary",
            ],
            images: [circular1, circular2],
            repoLink: "",
        },
        {
            title: "Portafolio Personal",
            role: "Frontend Developer | Jul 2026 - Presente",
            description: "Portafolio profesional desarrollado para presentar proyectos, experiencia y habilidades mediante una interfaz moderna, modular y responsive.",
            longDescription: "Diseño e implementación de un portafolio personal con una arquitectura frontend escalable utilizando React, Vite y Tailwind CSS. El proyecto fue reorganizado mediante una estructura modular basada en componentes reutilizables, separación por páginas y gestión desacoplada de datos, facilitando el mantenimiento y la incorporación de nuevas funcionalidades. Además, se trabajó en la optimización de la experiencia de usuario mediante una interfaz responsive, navegación fluida y una identidad visual consistente.",
            features: [
                "Se utiliza una arquitectura modular para separar responsabilidades y facilitar el mantenimiento del proyecto.",
                "Se migró de CSS tradicional a Tailwind CSS para agilizar el desarrollo y mantener estilos consistentes.",
                "Se utiliza React Router para gestionar la navegación sin recargar la aplicación.",
                "Se implementó un diseño responsive para garantizar una experiencia adecuada en distintos dispositivos.",
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
                "Se implementó una interfaz conversacional para representar de forma clara el flujo que se busca validar con el cliente.",
                "Se utilizó Google Apps Script como intermediario con Google Sheets para reducir el tiempo de desarrollo de la demostración.",
                "Se utilizó Google Sheets como almacenamiento temporal para visualizar los datos de los prospectos sin incorporar una base de datos propia.",
                "Se estructuraron los datos en tiempo real para facilitar la revisión y adaptación del flujo conversacional.",
            ],
            stack: ["React", "JavaScript", "Google Apps Script", "Google Sheets API"],
            images: [chatbot1, chatbot2], 
            repoLink: "https://github.com/MayraMoy/ChatBot.git",
            demoLink: "https://demo-chat-red.vercel.app/"
        },
    ];