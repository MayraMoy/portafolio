import { FaLinkedin } from "react-icons/fa";

const PostHeader = ({ avatar, name, role, timeAgo }) => (
  <div className="flex items-start justify-between gap-3 p-5 pb-3">
    <div className="flex items-center gap-3 min-w-0">
      <img
        src={avatar}
        alt={name}
        className="w-11 h-11 rounded-full object-cover border border-white/10 flex-shrink-0"
      />
      <div className="min-w-0">
        <p className="text-white text-sm font-semibold truncate">{name}</p>
        <p className="text-slate-400 text-xs truncate">{role}</p>
      </div>
    </div>

    <div className="flex flex-col items-end gap-1">
      <p className="text-slate-500 text-xs">{timeAgo}</p>
      <FaLinkedin className="text-blue-500 text-xl flex-shrink-0" />
    </div>
  </div>
);

export default PostHeader;