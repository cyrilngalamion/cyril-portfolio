import { EducationData } from "../data/EducationData";
import type { Education } from "../data/EducationData";

function CardTwo() {
  return (
    <div className="h-auto w-full lg:w-130 bg-[#252a32]/40 border-2 border-[#afb1a1]/20 rounded-md flex flex-col items-center justify-start px-4 lg:px-6 pt-2 pb-6 lg:pb-10 overflow-y-auto">
      {/* Title Section */}
      <div className="w-full">
        <h1 className="text-2xl lg:text-4xl flex font-headerfont text-[#6df7b1] text-center">
          EDUCATIONAL
        </h1>
        <h1 className="text-xl lg:text-3xl flex font-headerfont text-[#cfc1b1]/80 mb-3 text-center">
          JOURNEY 
        </h1>
      </div>

      {/* Education Timeline */}
      <div className="w-full flex flex-col gap-3 lg:gap-5 px-2 lg:px-4">
        {EducationData.map((edu: Education) => (
          <div 
            key={edu.id} 
            className="w-full flex flex-col items-center"
          >
            {/* Level and Status */}
            <div className="w-full">
              <h3 className="text-base lg:text-xl flex justify-end items-center font-pafont tracking-wider text-[#ffe822]">
                {edu.level}
              </h3>
              <span className="text-xs lg:text-sm flex justify-end items-center font-headerfont mb-1 text-[#fff3de]">
                {edu.school}
              </span>

              <span className="w-full flex items-center">
                <p className="w-full text-[#afb1a1] flex items-center text-sm lg:text-md font-pafont">
                  {edu.status}
                </p>
                <p className="w-full flex justify-end text-[#6df7b1] tracking-wide font-pafont text-sm lg:text-md">
                  {edu.year}
                </p>
              </span>
              <hr className="border border-[#afb1a1]/20"></hr>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardTwo;