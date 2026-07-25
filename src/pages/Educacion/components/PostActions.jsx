import { FiThumbsUp, FiMessageCircle, FiShare2 } from "react-icons/fi";

const PostActions = ({ reactions, postUrl }) => (
  <div className="px-5 pb-5 pt-3 border-t border-white/[0.08]">
    <p className="text-slate-500 text-xs mb-3 h-4">
      {reactions > 0 && `${reactions} ${reactions === 1 ? "reacción" : "reacciones"}`}
    </p>

    <div className="flex items-center justify-between">
     <a
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-slate-300 text-xs font-medium transition-colors duration-200 hover:text-blue-400"
      >
        <FiThumbsUp /> Recomendar
      </a>
      <a
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-slate-300 text-xs font-medium transition-colors duration-200 hover:text-blue-400"
      >
        <FiMessageCircle /> Comentar
      </a>
      <a
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-slate-300 text-xs font-medium transition-colors duration-200 hover:text-blue-400"
      >
        <FiShare2 /> Compartir
      </a>
    </div>
  </div>
);

export default PostActions;