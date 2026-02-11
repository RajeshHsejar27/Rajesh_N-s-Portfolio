'use client';

import React from "react";
import { SKILLS } from "@/lib/constants";

export const SkillsIconsGrid = () => {
  // Group skills by category
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!skill.icon) return acc;
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  const categories = Object.entries(skillsByCategory);
  

  return (
  //  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 py-6">
      {categories.map(([category, skills]) => (
        // <div
        //   key={category}
        //   className="border-l border-gray-300 pl-4"
        // >

<div key={category} className="border-l border-gray-300 dark:border-gray-700 pl-4 min-w-0">

          {/* <h3 className="text-base font-semibold text-gray-800 mb-4 text-center">
            {category}
          </h3> */}

          <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
  {category}
</h3>
          {/* <div className="grid grid-cols-3 gap-4"> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

            {skills.map((skill, index) => {
              const Icon = skill.icon!;
              return (
                // <div
                //   key={index}
                //   className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-transform hover:scale-110"
                // >
                //   <Icon className="text-4xl text-black-600" />
                // </div>


//                 <div
//                     key={index}
//                     className="relative group/icon flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-transform hover:scale-110"

//                     >
//                     {/* Icon */}
//                     <Icon className="text-4xl text-black-600" />

//                     {/* Tooltip text */}
// <span
//   className="pointer-events-none absolute -top-8 opacity-0 
//              group-hover/icon:opacity-100 transition-opacity duration-200
//              text-xs font-medium bg-gray-800 text-white px-2 py-1 rounded"
// >
//   {skill.name}
// </span>

//                     </div>

// Inside SkillsIconsGrid - for dark mode support
<div
  key={index}
  className="relative group/icon flex items-center justify-center p-4 
             bg-gray-100 dark:bg-gray-800/50 
             rounded-lg shadow hover:shadow-lg transition-transform hover:scale-110"
>
  {/* Icon */}
  <Icon className="text-4xl text-gray-800 dark:text-gray-200" />
  
  {/* Tooltip text - Optional: flip colors for visibility */}
  <span className="pointer-events-none absolute -top-8 opacity-0 
                   group-hover/icon:opacity-100 transition-opacity duration-200
                   text-xs font-medium bg-gray-900 dark:bg-gray-100 
                   text-white dark:text-gray-900 px-2 py-1 rounded"
  >
    {skill.name}
  </span>
</div>

              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export const SkillsTextGrid = () => {
  const textOnlySkills = SKILLS.filter(
    (skill) => !skill.icon
  );

  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Other Expertise & Concepts
      </h2>

      <div className="flex flex-wrap gap-3">
        {textOnlySkills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm rounded-full 
                       bg-gray-200 text-gray-800 
                       dark:bg-gray-800 dark:text-gray-200 
                       border border-transparent dark:border-gray-700"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};