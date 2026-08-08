import avatarMayra from "../../../assets/images/mayra.jpg";
import postPensamientoSistemico from "../../../assets/images/post-pensamiento-sistemico.png";
import postSqlNosql from "../../../assets/images/post-sql-nosql.png";
import postBots from "../../../assets/images/post-bots.png";
import arquitecturaSoftware from "../../../assets/images/post-arquitectura-software.png";

export const linkedinPosts = [
  {
    id: "post-1",
    authorName: "Mayra Yazmin Moyano",
    authorRole: "Desarrolladora Full Stack",
    timeAgo: "5 días",
    avatar: avatarMayra,
    text: "Hoy estuve leyendo sobre las Leyes del Pensamiento Sistémico de Peter Senge y hubo tres que me hicieron reflexionar.",
    image: postPensamientoSistemico,
    reactions: 4,
    postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7485056006255869954/",
  },

  {
    id: "post-2",
    authorName: "Mayra Yazmin Moyano",
    authorRole: "Desarrolladora Full Stack",
    timeAgo: "7 días",
    avatar: avatarMayra,
    text: "¿Cuál es la mejor arquitectura de software? La respuesta es la misma que cuando hablamos de SQL vs NoSQL: depende...",
    image: arquitecturaSoftware,
    reactions: 6,
    postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7488250093884588032/",
  },

  {
    id: "post-3",
    authorName: "Mayra Yazmin Moyano",
    authorRole: "Desarrolladora Full Stack",
    timeAgo: "3 días",
    avatar: avatarMayra,
    text: "¿Cuál es mejor: SQL o NoSQL? La respuesta corta es: ninguna. La verdadera pregunta es: ¿qué problema estás resolviendo?",
    image: postSqlNosql,
    reactions: 1,
    postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7485777467950039041/",
  },
  {
    id: "post-4",
    authorName: "Mayra Yazmin Moyano",
    authorRole: "Desarrolladora Full Stack",
    timeAgo: "1 día",
    avatar: avatarMayra,
    text: "Hace poco tuve dos experiencias completamente opuestas con bots de atención al cliente y me hicieron pensar en algo.",
    image: postBots,
    reactions: 2,
    postUrl: "https://www.linkedin.com/feed/update/urn:li:share:7486479651423281153/",
  },
];