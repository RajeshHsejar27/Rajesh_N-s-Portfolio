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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {categories.map(([category, skills]) => (
        <div
          key={category}
          className="border-l border-gray-300 pl-4"
        >
          <h3 className="text-base font-semibold text-gray-800 mb-4 text-center">
            {category}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon!;
              return (
                // <div
                //   key={index}
                //   className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-transform hover:scale-110"
                // >
                //   <Icon className="text-4xl text-black-600" />
                // </div>


                <div
                    key={index}
                    className="relative group flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-transform hover:scale-110"
                    >
                    {/* Icon */}
                    <Icon className="text-4xl text-black-600" />

                    {/* Tooltip text */}
                    <span
                        className="absolute -top-8 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 text-xs font-medium 
                                bg-gray-800 text-white px-2 py-1 rounded"
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
