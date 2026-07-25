import { linkedinPosts } from "./data/linkedinPosts";
import EducationHeader from "./components/EducationHeader";
import LinkedInPostCard from "./components/LinkedInPostCard";

const Education = () => {
  return (
    <section
      id="publicaciones"
      className="relative overflow-hidden w-full box-border bg-[#0b0d12] text-white font-poppins px-[5%] py-[70px] md:py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <EducationHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {linkedinPosts.map((post) => (
            <LinkedInPostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;