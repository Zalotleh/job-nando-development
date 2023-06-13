import React, { useContext, useState } from "react";
import { ResumeContext } from '@/context/ResumeContext';
import axios from "axios";

export default function ProjectsForm () {
  const { projects, setProjects } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        projectTitle: "",
        description: "",
      },
    ]);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setProjects(
        projects.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      )
    );
  };

  const handleDescriptionChange = (e, id) => {
    const {name, value} = e.target
    setProjects(
        projects.map((project)=>
        project.id ===id? {...project,description: value }: project
        ));
  };

  const handleGpt3Response = (response, id) => {
    setProjects(
        projects.map((project)=>
        project.id ===id? {...project,description: response }: project
        ));
    setLoading(false);
    setError("");
  };

  const handleDescriptionGpt3 = async (e, id) => {
    e.preventDefault();
    
    
    // retrieve the text from the responsibilities field
    const obj = projects.find(item=> item.id === id)
    const text = obj.description;
    console.log(text)

    if (!text) {
        setError("Description is required");
        return;
      }
  
      setLoading(true);
      try {
        const gpt3Response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/projectDescriptionTunning", { text });
        const response = gpt3Response.data
        handleGpt3Response(response, id);
      } catch (err) {
        setError("An error occurred while generating the description");
        setLoading(false);
      }
    };

  
    return (
        <>
          <div className="mb-8 shadow-lg border py-4">
            <h2 className="text-base font-bold mb-4">Projects:</h2>
            {projects.map((project) => (
              <>
              <div key={project.id} className="mb-10 mt-5 px-2">
                <label htmlFor={`projectTitle_${project.id}`} className="text-sm px-2 py-1 font-bold">Project Title:</label>
                <input
                  type="text"
                  name="projectTitle"
                  id={`projectTitle_${project.id}`}
                  value={project.projectTitle}
                  onChange={(e) => handleChange(e, project.id)}
                  className="block w-full text-sm px-2 py-1 mb-2  rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                <label htmlFor={`description_${project.id}`} className="text-sm px-2 py-1 font-bold">Description:</label>
                <textarea
                  type="textarea"
                  name="description"
                  id={`description_${project.id}`}
                  value={project.description}
                  onChange={(e) => handleDescriptionChange(e, project.id)}
                  rows={6}
                  className="block w-full text-sm px-2 py-1  mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />

                {loading && <p>waiting for the AI response, hold on...</p>}
                {error&&error}

                <div className="flex justify-between content-center ">
                <button
                  className="bg-cyan-500 hover:bg-cyan-700 text-sm  text-white font-bold py-2 px-4 mt-2 rounded flex gap-4 content-center justify-center"
                  onClick={(e) => handleDescriptionGpt3(e, project.id)}
                  >
                    <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> AI Magic
                </button>
                
      
                <button
                  type="button"
                  onClick={() => handleDeleteProject(project.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent  font-medium rounded-md text-sm  text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
          onClick={handleAddProject}
          className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add New Project
        </button>
      </div>
    </>
  );
  
}


