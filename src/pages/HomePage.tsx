import topGif from "../assets/monster_slam.gif";
import ButtonImg from "../assets/Button.png";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/main");
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#043247]">
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-top mt-25 flex-1 px-4 text-center">
        {/* Top GIF */}
        <img
          src={topGif}
          alt="Top animation"
          className="w-full max-w-40 sm:max-w-sm md:max-w-md lg:max-w-xs h-auto"
        />

        {/* Text Section */}
        <div className=" space-y-6">
          <h1 className="font-extrabold font-mono leading-tight">
            <span className="block text-gray-300 text-lg sm:text-3xl md:text-4xl lg:text-5xl">
              Hello Visitors! I'm Cyril!
            </span>

            <span className="block text-red-600 text-sm sm:text-xl md:text-2xl lg:text-3xl ">
              Once you challenge yourself, even the hardest things become
              possible.
            </span>
          </h1>

          {/* Button GIF */}
          <div
            onClick={handleButtonClick}
            className="cursor-pointer flex justify-center group mt-8"
          >
            <img
              src={ButtonImg}
              alt="Play button"
              className="
      w-40 sm:w-30 md:w-24 lg:w-38 xl:w-52 
      h-auto
      transition-transform duration-300 ease-in-out
      group-hover:-translate-y-2
      group-hover:scale-105
      group-hover:drop-shadow-[0_10px_20px_rgba(0,0,255,0.5)]
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
