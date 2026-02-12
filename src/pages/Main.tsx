import sampleImage from "../assets/wolfe.jpg";
import ButtonImg2 from "../assets/quitButton.png";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/*");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#043247]">
      <h1 className="text-5xl font-extrabold mb-2 text-white">Hello</h1>

      <img
        src={sampleImage}
        alt="Sample"
        className="w-80 sm:w-56 md:w-72 lg:w-80 h-auto rounded-xl shadow-lg border-3 border-white"
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
      group-hover:drop-shadow-[0_10px_20px_rgba(0,0,255,0.5)]
      active:translate-y-0
      active:scale-95
    "
            />
          </div>
    </div>
  );
}

export default Main;
