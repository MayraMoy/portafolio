import heroCollage from "../../assets/images/hero-collage.png";
import { useVideoModal } from "./hooks/useVideoModal";
import HomeContent from "./components/HomeContent";
import VideoCard from "./components/VideoCard";
import VideoModal from "./components/VideoModal";

const YOUTUBE_VIDEO_ID = "u9nt7UxA4-8?si=4OgwKueTZJ7GgAvK";

const Home = () => {
  const { isVideoOpen, openVideo, closeVideo } = useVideoModal();

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex justify-center items-center overflow-hidden box-border pt-[130px] px-[5%] pb-[60px] bg-[#0b0d12] bg-[radial-gradient(circle_at_12%_20%,rgba(129,140,248,0.1)_0%,transparent_40%),radial-gradient(circle_at_88%_75%,rgba(99,102,241,0.08)_0%,transparent_40%)] font-poppins text-white max-[580px]:pt-[110px] max-[580px]:pb-[40px]
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] before:bg-[length:40px_40px] before:pointer-events-none"
    >
      <div className="relative z-[2] w-full max-w-[1200px] grid grid-cols-[1.15fr_0.85fr] items-center gap-14 max-[968px]:grid-cols-1 max-[968px]:gap-12">
        <HomeContent />

        <div className="max-[968px]:order-[-1]">
          <VideoCard image={heroCollage} onOpen={openVideo} />
        </div>
      </div>

      {isVideoOpen && (
        <VideoModal videoId={YOUTUBE_VIDEO_ID} onClose={closeVideo} />
      )}
    </section>
  );
};

export default Home;