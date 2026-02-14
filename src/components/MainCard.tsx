import Profile from "../assets/image/cy.jpg";
import Banner from "../assets/image/Banner.png";
import Ficon from "../assets/image/fbicon.png";
import Iicon from "../assets/image/igicon.png";
import Gicon from "../assets/image/gmailicon.png";
import SkillsDropdown from "./CoreSkillsDropdown";

function CardThree() {
  return (
    <div className="h-auto w-full lg:w-auto bg-[#252a32]/40 border-2 pb-6 lg:pb-10 border-[#afb1a1]/20 rounded-md flex flex-col gap-3 lg:gap-5 p-2 lg:p-3">
      {/* Top section - Profile */}
      <div className="w-full h-auto lg:h-105 shrink-0 relative">
        <img
          src={Banner}
          alt="Banner Background"
          className="w-full h-auto lg:h-auto object-cover"
        />

        {/* Profile and Name */}
        <div className="w-full flex flex-col items-center justify-center absolute top-0 gap-3 lg:gap-3">
          <img
            src={Profile}
            alt="Profile"
            className="h-40 w-40 lg:h-40 lg:w-40 rounded-full mt-17 lg:mt-23 object-cover border-3 lg:border-5 border-[#66c1ee]/25"
          />
          <div className="flex flex-col font-bold tracking-wide font-headerfont items-center">
            <div className="flex items-center gap-1 lg:gap-2">
              <h3 className="text-sm lg:text-base text-[#d9d5d0]">CYRIL</h3>
              <h3 className="text-sm lg:text-base text-[#6df7b1]">JED KYLE</h3>
            </div>
            <h3 className="text-sm lg:text-base text-[#d9d5d0]">KILAT</h3>
            <h3 className="text-sm lg:text-base text-[#6df7b1]">ESTRELLADA</h3>
            <h4 className="text-[10px] lg:text-xs font-pafont text-[#d9d5d0]/80 tracking-widest">
              INFO TECH
            </h4>
          </div>
        </div>
      </div>

      {/* Middle section - Skills */}
      <div className="flex-1 flex flex-col items-center justify-start gap-7 lg:gap-10 px-2 lg:px-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-1 lg:gap-2">
            <h4 className="text-xs lg:text-base text-[#d9d5d0]/60 font-headerfont tracking-wider">
              CORE
            </h4>
            <h4 className="text-xs lg:text-base text-[#ffe822] font-headerfont mb-1 tracking-wider">
              SKILLS
            </h4>
          </div>
          <hr className="w-70 lg:w-65 border lg:border-2 border-[#afb1a1]/20" />
        </div>

        <SkillsDropdown />

        <div className="flex flex-col items-center w-full">
          <h4 className="text-xs lg:text-base text-[#ffe822] font-headerfont tracking-wider">
            CONTACT
          </h4>
          <hr className="w-70 lg:w-65 border lg:border-2 border-[#afb1a1]/20" />

          <div className="w-full flex flex-col text-[#fff3de] tracking-wider gap-2 lg:gap-4 mt-4 lg:mt-10">
            {/* Gmail - Centered on mobile, right-aligned on desktop */}
            <div className="flex items-center text-sm lg:text-xl justify-center lg:justify-end px-1 lg:px-2 gap-2 lg:gap-4">
              <span className="font-pafont mt-1 text-xs lg:text-base">
                estrelladacyril@gmail.com
              </span>
              <img
                src={Gicon}
                alt="Gmail Icon"
                className="w-4 h-4 lg:w-7 lg:h-7"
              />
            </div>

            {/* Facebook - Centered on mobile, right-aligned on desktop */}
            <div className="flex items-center text-sm lg:text-xl justify-center lg:justify-end px-1 lg:px-2 gap-2 lg:gap-4">
              <span className="font-pafont mt-1 text-xs lg:text-base">
                Cyril Jed Kyle Estrellada
              </span>
              <img
                src={Ficon}
                alt="Facebook Icon"
                className="w-4 h-4 lg:w-7 lg:h-7"
              />
            </div>

            {/* Instagram - Centered on mobile, right-aligned on desktop */}
            <div className="flex items-center text-sm lg:text-xl justify-center lg:justify-end px-1 lg:px-2 gap-2 lg:gap-4">
              <span className="font-pafont mt-1 text-xs lg:text-base">
                cokenamasarap
              </span>
              <img
                src={Iicon}
                alt="Instagram Icon"
                className="w-4 h-4 lg:w-7 lg:h-7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardThree;
