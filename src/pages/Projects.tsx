import sampleImage from "../assets/image/baby-boy1.jpg";
import ButtonImg2 from "../assets/image/quitButton.png";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#043247]">
      <NavBar />

      <div className="flex flex-col items-center justify-top mt-35 flex-1 px-4 text-center">
        <h1 className="text-2xl lg:text-5xl font-headerfont font-extrabold text-[#fff3de] tracking-wider">
          UNDER DEVELOPMENT!{" "}
        </h1>
        <h1 className="text-5xl font-headerfont text-red-600 font-extrabold">
          GAME OVER
        </h1>
        <h6 className="text-xl font-headerfont text-yellow-400 font-extrabold mb-5">
          SORRY :(
        </h6>

        <img
          src={sampleImage}
          alt="Sample"
          className="w-80 sm:w-56 md:w-72 lg:w-80 h-auto rounded-xl shadow-lg border-3 border-[#fff3de]"
        />

        {/* Button GIF */}
        <div
          onClick={handleButtonClick}
          className="cursor-pointer flex justify-center group mt-8"
        >
          <img
            src={ButtonImg2}
            alt="Play button"
            className="
      w-40 sm:w-30 md:w-24 lg:w-38 xl:w-52 
      h-auto
      transition-transform duration-300 ease-in-out
      group-hover:-translate-y-2
      group-hover:scale-105
      group-hover:drop-shadow-[0_10px_20px_rgba(255,0,100,0.5)]
      active:translate-y-0
      active:scale-95"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
