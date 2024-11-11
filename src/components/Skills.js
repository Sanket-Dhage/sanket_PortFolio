import React from 'react';

const frontendSkills = [
  { name: 'HTML', icon: '🌐', percentage: 90 },
  { name: 'CSS', icon: '🎨', percentage: 85 },
  { name: 'JavaScript', icon: '💻', percentage: 80 },
  { name: 'React', icon: '⚛️', percentage: 85 },
  { name: 'Tailwind CSS', icon: '💠', percentage: 90 },
  { name: 'Figma', icon: '🎨', percentage: 70 },
  { name: 'Responsive Design', icon: '📱', percentage: 80 },
];

const backendSkills = [
  { name: 'Node.js', icon: '🌳', percentage: 80 },
  { name: 'Flask', icon: '🐍', percentage: 70 },
  { name: 'Laravel', icon: '🛠️', percentage: 75 },
  { name: 'Python', icon: '🐍', percentage: 80 },
];

const databaseSkills = [
  { name: 'SQL', icon: '💾', percentage: 85 },
  { name: 'NumPy', icon: '🔢', percentage: 75 },
  { name: 'Pandas', icon: '📊', percentage: 70 },
  { name: 'MongoDB', icon: '📊', percentage: 70 },
];

const otherSkills = [
  { name: 'Git & GitHub', icon: '🔧', percentage: 90 },
  { name: 'Time Management', icon: '⏳', percentage: 80 },
  { name: 'Project Planning', icon: '🗂️', percentage: 75 },
  { name: 'Communication', icon: '💬', percentage: 85 },
  { name: 'Team Work', icon: '🤝', percentage: 90 },
];

const SkillCard = ({ skill }) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col items-center">
    <span className="text-3xl md:text-4xl mb-4 block">{skill.icon}</span>
    <h3 className="text-lg md:text-xl font-semibold mb-2">{skill.name}</h3>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div
        className="bg-green-500 h-2 rounded-full"
        style={{ width: `${skill.percentage}%` }}
      />
    </div>
    <span className="text-sm">{skill.percentage}%</span>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="py-16 px-4 bg-gray-600 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">My Skills</h2>

      {/* Frontend Skills */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-6">Frontend Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-6">Backend Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          {backendSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Database Skills */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-200 mb-6">Database Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          {databaseSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-100 mb-6">Other Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {otherSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
