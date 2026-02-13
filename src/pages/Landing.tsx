import topGif from "../assets/image/monster_slam.gif";
import ButtonImg from "../assets/image/Button.png";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#043247]">
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-top mt-25 flex-1 px-4 text-center">
        {/* Top GIF */}
        <img
          src={topGif}
          alt="Top animation"
          className="w-full max-w-50 sm:max-w-sm md:max-w-md lg:max-w-54 h-auto"
        />

        {/* Text Section */}
        <div className=" space-y-6">
          <h1 className="">
            <span className="block text-[#fff3de] font-headerfont text-xl sm:text-3xl md:text-4xl lg:text-4xl">
              HELLO! WELCOME
            </span>

            <span className="block text-[#6df7b1] font-pafont text-sm sm:text-xl md:text-2xl lg:text-2xl tracking-wide">
              I’m CYRIL, and this is where I turn ideas into functional and meaningful digital experiences.
            </span>
          </h1>

          {/* Button GIF */}
          <div
            onClick={handleButtonClick}
            className="cursor-pointer flex justify-center group mt-3"
          >
            <img
              src={ButtonImg}
              alt="Play button"
              className="
      w-40 sm:w-30 md:w-24 lg:w-38 xl:w-49 
      h-auto
      transition-transform duration-300 ease-in-out
      group-hover:-translate-y-2
      group-hover:scale-105
      group-hover:drop-shadow-[0_10px_20px_rgba(0,0,255,0.4)]
      active:translate-y-0
      active:scale-95
    "
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
