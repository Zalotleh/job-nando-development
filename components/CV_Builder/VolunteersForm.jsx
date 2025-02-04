import React, { useContext, useState } from "react";
import { ResumeContext } from '@/context/ResumeContext';
import axios from "axios";

export default function VolunteersForm () {
  const { volunteers, setVolunteers } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddVolunteer = () => {
    setVolunteers([
      ...volunteers,
      {
        id: Date.now(),
        organizationName: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleDeleteVolunteer = (id) => {
    setVolunteers(volunteers.filter((volunteer) => volunteer.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setVolunteers(
      volunteers.map((volunteer) =>
      volunteer.id === id ? { ...volunteer, [name]: value } : volunteer
      )
    );
  };

  const handleDescriptionChange = (e, id) => {
    const {name, value} = e.target
    setVolunteers(
        volunteers.map((volunteer)=>
        volunteer.id ===id? {...volunteer,description: value }: volunteer
        ));
  };

  const handleGpt3Response = (response, id) => {
    setVolunteers(
        volunteers.map((volunteer)=>
        volunteer.id ===id? {...volunteer,description: response }: volunteer
        ));
    setLoading(false);
    setError("");
  };

  const handleDescriptionGpt3 = async (e, id) => {
    e.preventDefault();
    
    
    // retrieve the text from the responsibilities field
    const obj = volunteers.find(item=> item.id === id)
    const text = obj.description;
    console.log(text)

    // make an API call to the OpenAI GPT-3 endpoint
    if (!text) {
        setError("Description is required");
        return;
      }

      setLoading(true);
      try {
        const gpt3Response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/volunteerDescriptionTunning", { text });
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
            <h2 className="text-base font-bold mb-4">Volunteers:</h2>
            {volunteers.map((volunteer) => (
              <>
              <div key={volunteer.id} className="mb-10 mt-5 px-2">
                <label htmlFor={`organizationName_${volunteer.id}`} className="text-sm font-bold">Organization Name:</label>
                <input
                  type="text"
                  name="organizationName"
                  id={`organizationName_${volunteer.id}`}
                  value={volunteer.organizationName}
                  onChange={(e) => handleChange(e, volunteer.id)}
                  className="block w-full text-sm px-2 py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                <label htmlFor={`role_${volunteer.id}`} className="text-sm font-bold">Role:</label>
                <input
                  type="text"
                  name="role"
                  id={`role_${volunteer.id}`}
                  value={volunteer.role}
                  onChange={(e) => handleChange(e, volunteer.id)}
                  className="block w-full text-sm px-2 py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                <label htmlFor={`startDate_${volunteer.id}`} className="text-sm font-bold">Start Date:</label>
                <input
                  type="text"
                  name="startDate"
                  id={`startDate_${volunteer.id}`}
                  value={volunteer.startDate}
                  onChange={(e) => handleChange(e, volunteer.id)}
                  className="block w-full text-sm px-2 py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                <label htmlFor={`endDate_${volunteer.id}`} className="text-sm font-bold">End Date:</label>
                <input
                  type="text"
                  name="endDate"
                  id={`endDate_${volunteer.id}`}
                  value={volunteer.endDate}
                  onChange={(e) => handleChange(e, volunteer.id)}
                  className="block w-full text-sm px-2 py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                <label htmlFor={`description_${volunteer.id}`} className="text-sm font-bold">Description:</label>
                <textarea
                  name="description"
                  id={`description_${volunteer.id}`}
                  value={volunteer.description}
                  onChange={(e) => handleDescriptionChange(e, volunteer.id)}
                  rows={8}
                  className="block w-full text-sm px-2 py-1 mb-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                {loading&&loading}
                {error&&error}
                <div className="flex justify-between content-center ">
                <button
                  className="bg-cyan-500 hover:bg-cyan-700 text-sm text-white font-bold py-2 px-4 mt-2 rounded flex gap-4 content-center justify-center"
                  onClick={(e) => handleDescriptionGpt3(e, volunteer.id)}
                  >
                    <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> AI Magic
                </button>
      
                <button
                  type="button"
                  onClick={() => handleDeleteVolunteer(volunteer.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent  font-medium rounded-md text-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
          onClick={handleAddVolunteer}
          className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
          Add New Volunteer
        </button>
      </div>
    </>
  );
  
}  


