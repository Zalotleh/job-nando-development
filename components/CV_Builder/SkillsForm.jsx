import React, { useContext } from "react";
import { ResumeContext } from '@/context/ResumeContext';

const SkillsForm = () => {
  const { skills, setSkills } = useContext(ResumeContext);


  const handleAddSkill = () => {
    setSkills([
      ...skills,
      {
        id: Date.now(),
        name: "",
      },
    ]);
  };

  const handleDeleteSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [name]: value } : skill
      )
    );
  };

  
    return (
        <>
          <div className="mb-8 shadow-lg border py-4">
            <h2 className="text-base font-bold mb-4">Skills:</h2>
            {skills.map((skill) => (
            <>
              <div key={skill.id} className="mb-6 mt-5 px-2">
                <label htmlFor={`name_${skill.id}`}></label>
                <input
                  type="text"
                  name="name"
                  id={`name_${skill.id}`}
                  value={skill.name}
                  onChange={(e) => handleChange(e, skill.id)}
                  className="block text-sm px-2 py-1  mb-2 w-full rounded-md border-black-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
      
                <button
                  type="button"
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                  Delete
                </button>
              </div>
              <hr />
            </>
            ))}
        <button
          type="button"
          onClick={handleAddSkill}
          className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add New Skill
        </button>
      </div>
    </>
  );
  
}  
export default SkillsForm;



