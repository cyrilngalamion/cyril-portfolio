import { useState } from "react";
import { skillsData } from "../data/SkillsData";
import type { Skill } from "../data/SkillsData";
import arrowInd1 from "../assets/image/arrowindicator.png";
import arrowInd2 from "../assets/image/arrowindicator1.png";

export default function SkillsDropdown() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="text-[#fff3de] w-full lg:w-65 border-b border-t border-[#6df7b1]/10">
      {skillsData.map((skill: Skill) => (
        <div key={skill.id} className="">
          <button
            onClick={() => toggleDropdown(skill.id)}
            className="w-full flex items-center justify-end gap-2 lg:gap-4 font-pafont text-base lg:text-xl tracking-wide px-2 lg:px-4 pt-1 hover:bg-[#0d5a70] transition-colors duration-200"
          >
            <span>{skill.name}</span>
            <span className="">
              <img 
                src={openDropdown === skill.id ? arrowInd2 : arrowInd1} 
                alt={openDropdown === skill.id ? "Collapse" : "Expand"}
                className="w-3 h-2 lg:w-4 lg:h-3"
              />
            </span>
          </button>
          
          {/* Dropdown content with animation */}
          <div
            className={`overflow-hidden transition-all duration-300 text-end ease-in-out ${
              openDropdown === skill.id ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="font-pafont rounded-lg text-sm lg:text-md tracking-wider text-gray-100 px-2 lg:px-4">
              {skill.description}
            </div>
          </div> 
        </div>
      ))}
    </div>
  );
}