'use client';

import React from 'react';
import { SKILLS } from '@/lib/constants';
import Image from 'next/image';

export const SkillsIconsGrid = () => {
  // Group skills by category
  const skillsByCategory = SKILLS.reduce(
    (acc, skill) => {
      if (!skill.icon) return acc;
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SKILLS>
  );

  const categories = Object.entries(skillsByCategory);

  return (
    //  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
    <div className="grid grid-cols-1 gap-8 py-6 sm:grid-cols-2 xl:grid-cols-3">
      {categories.map(([category, skills]) => (
        // <div
        //   key={category}
        //   className="border-l border-gray-300 pl-4"
        // >

        <div
          key={category}
          className="min-w-0 border-l border-gray-300 pl-4 dark:border-gray-700"
        >
          {/* <h3 className="text-base font-semibold text-gray-800 mb-4 text-center">
            {category}
          </h3> */}

          <h3 className="mb-4 text-center text-base font-semibold text-gray-800 dark:text-gray-200">
            {category}
          </h3>
          {/* <div className="grid grid-cols-3 gap-4"> */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
                  className="group/icon relative flex items-center justify-center rounded-lg 
             bg-gray-100 p-4 
             shadow transition-transform hover:scale-110 hover:shadow-lg dark:bg-gray-800/50"
                >
                  {/* Icon */}
                  <Icon className="text-4xl text-gray-800 dark:text-gray-200" />
                  {/* Tooltip text - Optional: flip colors for visibility */}
                  <span
                    className="pointer-events-none absolute -top-8 rounded 
                   bg-gray-900 px-2 py-1
                   text-xs font-medium text-white opacity-0 
                   transition-opacity duration-200 group-hover/icon:opacity-100 dark:bg-gray-100 dark:text-gray-900"
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
  const textOnlySkills = SKILLS.filter((skill) => !skill.icon);

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Other Expertise & Concepts
      </h2>

      <div className="flex flex-wrap gap-3">
        {textOnlySkills.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-full border border-transparent bg-gray-200 
                       px-3 py-1 
                       text-sm text-gray-800 
                       dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
