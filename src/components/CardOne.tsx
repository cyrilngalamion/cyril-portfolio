import { POdata } from "../data/POdata";

function CardOne() {
  const professionalData = POdata[0];

  return (
    <div className="h-auto w-full lg:w-130 bg-[#252a32]/40 border-2 border-[#afb1a1]/20 rounded-md flex flex-col items-center justify-center px-4 lg:px-6 py-4 lg:py-2 overflow-y-auto">
      <div className="">
        <h1 className="text-2xl lg:text-4xl font-headerfont text-[#6df7b1] text-center">
          {professionalData.ftext}
        </h1>
        <h1 className="text-xl lg:text-3xl font-headerfont text-[#cfc1b1]/80 mb-2 lg:mb-4 text-center">
          {professionalData.Stext}
        </h1>
      </div>
      <p className="font-pafont text-sm lg:text-lg text-[#fff3de] tracking-wide text-center leading-relaxed">
        {professionalData.description}
      </p>
    </div>
  );
}

export default CardOne;