import React from 'react';
const Skillss = [
  { name: 'HTML', percentage: 95, color: 'bg-orange-500' }, // Orange
  { name: 'CSS/tailwindcss', percentage: 90, color: 'bg-blue-500' },   // Blue
  { name: 'JavaScript', percentage: 95, color: 'bg-yellow-500' }, // Yellow
  { name: 'React', percentage: 95, color: 'bg-cyan-500' }, // Cyan
  { name: 'Python', percentage: 90, color: 'bg-blue-400' }, // Light Blue
  { name: 'Django', percentage: 85, color: 'bg-green-600' }, // Dark Green
];

const Skills = () => {
  return (
    <div className='ping-text w-full bg-lightGray'>
      <p className='c absolute md:text-[250px] text-[120px] text-white ml-4 mt-0 z-[-2]'>SKILLS</p>
    <div className="max-w-2xl mx-auto md:ml-28 ml-5">
      <p className='p1 text-4xl mt-16 md:ml-20 font-bold ml-8 pt-10'>my skills</p>
      {Skillss.map(skill => (
        <div key={skill.name} className="mb-4">
          <span className="font-semibold">{skill.name}</span>
          <div className="relative pt-1">
            <div className="flex items-center">
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className={`h-full rounded-full ${skill.color} transition-all duration-700`}
                  style={{ width: `${skill.percentage}%`, transition: 'width 0.7s ease-in-out' }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;