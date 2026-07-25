import PostHeader from "./PostHeader";
import PostActions from "./PostActions";

const LinkedInPostCard = ({ post }) => (
  <div className="flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.6)]">
    <PostHeader
      avatar={post.avatar}
      name={post.authorName}
      role={post.authorRole}
      timeAgo={post.timeAgo}
    />

    <p className="px-5 pb-4 text-slate-300 text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
      {post.text}
    </p>

    <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={post.image}
        alt={post.text}
        loading="lazy"
        className="w-full aspect-[4/3] object-cover block"
      />
    </a>

    <PostActions reactions={post.reactions} postUrl={post.postUrl} />
  </div>
);

export default LinkedInPostCard;