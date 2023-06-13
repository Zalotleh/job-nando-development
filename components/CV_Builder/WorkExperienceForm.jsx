import React, { useContext, useState } from "react";
import { ResumeContext } from '@/context/ResumeContext';
import axios from "axios";

const WorkExperienceForm = () => {
  const { workExperiences, setWorkExperiences } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        id: Date.now(),
        company: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
    ]);
  };

  const handleDeleteWorkExperience = (id) => {
    setWorkExperiences(workExperiences.filter((exp) => exp.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setWorkExperiences(
      workExperiences.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      )
    );
  };

  const handleResponsibilitiesChange = (e, id) => {
    console.log(id)
    const {name, value} = e.target
    setWorkExperiences(
        workExperiences.map((exp)=>
        exp.id ===id? {...exp,responsibilities: value }: exp
        ));
  };

  const handleGpt3Response = (response, id) => {
    setWorkExperiences(
        workExperiences.map((exp)=>
        exp.id ===id? {...exp,responsibilities: response }: exp
        ));
    setLoading(false);
    setError("");
  };

  const handleResponsibilitiesGpt3 = async (e, id) => {
    e.preventDefault();
    
    
    // retrieve the text from the responsibilities field
    const obj = workExperiences.find(item=> item.id === id)
    const text = obj.responsibilities;
    console.log(text)

    if (!text) {
        setError("Responsibilities are required");
        return;
      }
  
      setLoading(true);
      try {
        const gpt3Response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/workExperienceTunning", { text });
        const response = gpt3Response.data
        handleGpt3Response(response, id);
      } catch (error) {
        setError("An error occurred while generating the description");
        setLoading(false);
      }
    };
  
    return (
        <> 
          <div className="mb-8 shadow-lg border py-4">
            <h2 className="text-base font-bold mb-4">Work Experience:</h2>
            {workExperiences.map((exp) => (
              <>
              <div key={exp.id} className="mb-10 mt-5 px-2">
                <label htmlFor={`company_${exp.id}`} className="text-sm font-bold ">Company:</label>
                <input
                  type="text"
                  name="company"
                  id={`company_${exp.id}`}
                  value={exp.company}
                  onChange={(e) => handleChange(e, exp.id)}
                  className="block w-full text-sm rounded-md px-2 py-1 mb-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`jobTitle_${exp.id}`} className="text-sm font-bold ">Job Title:</label>
                <input
                  type="text"
                  name="jobTitle"
                  id={`jobTitle_${exp.id}`}
                  value={exp.jobTitle}
                  onChange={(e) => handleChange(e, exp.id)}
                  className="block w-full text-sm  px-2 py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`startDate_${exp.id}`} className="text-sm font-bold ">Start Date:</label>
                <input
                  type="text"
                  name="startDate"
                  id={`startDate_${exp.id}`}
                  value={exp.startDate}
                  onChange={(e) => handleChange(e, exp.id)}
                  className="block w-full text-sm px-2  py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`endDate_${exp.id}`}className="text-sm font-bold ">End Date:</label>
                <input
                  type="text"
                  name="endDate"
                  id={`endDate_${exp.id}`}
                  value={exp.endDate}
                  onChange={(e) => handleChange(e, exp.id)}
                  className="block w-full text-sm px-2  py-1  mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`responsibilities_${exp.id}`} className="text-sm font-bold">Responsibilities:</label>
                <textarea
                  name="responsibilities"
                  id={`responsibilities_${exp.id}`}
                  value={exp.responsibilities}
                  onChange={(e) => handleResponsibilitiesChange(e, exp.id)}
                  rows={10}
                  className="block w-full text-sm px-2 py-1  mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {loading && <p>waiting for the AI response, hold on...</p>}
                {error&&error}

                <div className="flex justify-between ">
                <button
                  className="flex gap-4 content-center justify-center ml-2 mt-2  bg-cyan-500 hover:bg-cyan-700 text-sm text-white font-bold py-2 px-2 rounded"
                  onClick={(e) => handleResponsibilitiesGpt3(e, exp.id)}
                  >
                  <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> AI Magic
                </button>
      
                <button
                  type="button"
                  onClick={() => handleDeleteWorkExperience(exp.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                  Delete
                </button>
                </div>
              </div>
              <hr />
              </>

            ))}
        <button
          type="button"
          onClick={handleAddWorkExperience}
          className="mt-4 px-2 py-2 border border-transparent font-medium rounded-md text-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add New Work Experience
        </button>
      </div>
       
    </>
  );
  
}  
export default WorkExperienceForm;



