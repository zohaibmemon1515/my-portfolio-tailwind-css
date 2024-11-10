import React from "react";

type SkillBarProps = {
  skill: string;
  percentage: number;
  color: string;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color }) => {
  return (
    <div className="flex items-center w-full mb-4">
      <h1 className="text-white font-semibold lg:w-40 md:w-32 w-28">{skill}</h1>
      <div className="flex-1 mx-4 bg-[#43366A] rounded-full h-4 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-2 mt-1 justify-center rounded"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
      <h1 className="text-white font-semibold w-12 text-right">
        {percentage}%
      </h1>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="bg-[#170550] h-auto flex flex-col justify-center items-center px-4 pb-20 font-sans">
      <h1 className="flex justify-center items-center gap-2 font-semibold text-2xl sm:text-3xl mb-10 sm:mb-16 border-b-2 border-white pt-16 sm:pt-20">
        <span className="text-white">My</span>
        <span className="text-[#F86F03]">Skills</span>
      </h1>

      <div className="max-w-6xl w-full px-8 lg:px-24 space-y-10 mt-5">
        <SkillBar skill="HTML" percentage={65} color="#F86F03" />
        <SkillBar skill="CSS" percentage={70} color="#F86F03" />
        <SkillBar skill="JavaScript" percentage={60} color="#F86F03" />
        <SkillBar skill="TypeScript" percentage={65} color="#F86F03" />
        <SkillBar skill="Next.js" percentage={55} color="#F86F03" />
        <SkillBar skill="Tailwind CSS" percentage={70} color="#F86F03" />
        <SkillBar skill="Adobe Photoshop" percentage={90} color="#F86F03" />
        <SkillBar skill="Adobe Illustrator" percentage={95} color="#F86F03" />
      </div>
    </div>
  );
};

export default Skills;
