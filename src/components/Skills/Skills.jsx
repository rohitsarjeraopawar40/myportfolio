import React from "react";
import { SkillsInfo } from "../../constant";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw]  md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
    >
      {/* section title  */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various project and experiances
        </p>
      </div>
      {/* skills catagery  */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>
            {/* skills item  */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start gap-3 bg-gray-900 border border-green-600 rounded-2xl py-3 px-4 hover:shadow-lg hover:border-green-400 transition duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <span className="text-sm sm:text-sm text-gray-300 ">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
