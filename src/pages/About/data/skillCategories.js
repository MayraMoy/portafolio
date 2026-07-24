import { FaLayerGroup, FaServer, FaTools } from "react-icons/fa";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    Icon: FaLayerGroup,
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Backend & Bases de Datos",
    Icon: FaServer,
    skills: ["Node.js", "Express", "Spring Boot", "APIs REST", "MongoDB", "MySQL", "SQLite"],
  },
  {
    id: "herramientas",
    title: "Herramientas & Estrategia",
    Icon: FaTools,
    skills: ["Git & GitHub", "Postman", "SEO Técnico", "UI/UX Principles"],
  },
];