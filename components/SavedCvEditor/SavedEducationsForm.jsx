import React, { useContext,useEffect } from "react";
import { SavedResumeContext } from '@/context/SavedResumeContext';

 export default function SavedEducationsForm (props) {
  const { educations, setEducations } = useContext(SavedResumeContext);

  useEffect(() => {
    setEducations(props.educations)
  }, [])

  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now(),
        degree: "",
        fieldOfStudy: "",
        institutionName: "",
        location: "",
        graduationDate: "",
        additionalInfo: "",
      },
    ]);
  };

  const handleDeleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setEducations(
        educations.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      )
    );
  };

  
    return (
      <>
      <div className="mb-8 shadow-lg border py-4">
        <h2 className="text-2xl font-bold mb-4">Educations:</h2>
        {educations.map((edu) => (
          <>
          <div key={edu.id} className="mb-10 mt-5 px-2">
            <label htmlFor={`degree_${edu.id}`}className="text-lg font-bold ">Degree:</label>
            <input
              type="text"
              name="degree"
                  id={`degree_${edu.id}`}
                  value={edu.degree}
                  initialvalues={props.InitialValues.degree}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="block text-lg w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`fieldOfStudy_${edu.id}`}className="text-lg font-bold ">Field of Study:</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  id={`fieldOfStudy_${edu.id}`}
                  value={edu.fieldOfStudy}
                  initialvalues={props.InitialValues.fieldOfStudy}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`institutionName_${edu.id}`}className="text-lg font-bold ">Institution Name:</label>
                <input
                  type="text"
                  name="institutionName"
                  id={`institutionName_${edu.id}`}
                  value={edu.institutionName}
                  initialvalues={props.InitialValues.institutionName}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />

                <label htmlFor={`location_${edu.id}`}className="text-lg font-bold ">Location:</label>
                <input
                  type="text"
                  name="location"
                  id={`location_${edu.id}`}
                  value={edu.location}
                  initialvalues={props.InitialValues.location}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`graduationDate_${edu.id}`}className="text-lg font-bold ">Graduation Date:</label>
                <input
                  type="text"
                  name="graduationDate"
                  id={`graduationDate_${edu.id}`}
                  value={edu.graduationDate}
                  initialvalues={props.InitialValues.graduationDate}
                  onChange={(e) => handleChange(e, edu.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                
                <label htmlFor={`additionalInfo_${edu.id}`}className="text-lg font-bold ">Additional Info:</label>
                <textarea
                  name="additionalInfo"
                  id={`additionalInfo_${edu.id}`}
                  value={edu.additionalInfo}
                  initialvalues={props.InitialValues.additionalInfo}
                  onChange={(e) => handleChange(e, edu.id)}
                  rows={4}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
      
                  <button
                    type="button"
                    onClick={() => handleDeleteEducation(edu.id)}
                    className="mt-2 mr-2 px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                    </button>
                  </div>
                  <hr />
                  </>
            ))}
        <button
          type="button"
          onClick={handleAddEducation}
          className="mt-4 px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add New Education
        </button>
      </div>
    </>
  );
  
}  

