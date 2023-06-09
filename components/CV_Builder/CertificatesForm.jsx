import React, { useContext, useState } from "react";
import { ResumeContext } from '@/context/ResumeContext';
import axios from "axios";

const CertificatesForm = () => {
  const { certificates, setCertificates } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddCertificate = () => {
    setCertificates([
      ...certificates,
      {
        id: Date.now(),
        title: "",
        issuingOrganization: "",
        issueDate: "",
        description: "",
      },
    ]);
  };

  const handleDeleteCertificates = (id) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setCertificates(
      certificates.map((cert) =>
        cert.id === id ? { ...cert, [name]: value } : cert
      )
    );
  };

  const handleDescriptionChange = (e, id) => {
    console.log(id)
    const {name, value} = e.target
    setCertificates(
      certificates.map((cert)=>
        cert.id ===id? {...cert,description: value }: cert
        ));
  };

  const handleGpt3Response = (response, id) => {
    setCertificates(
      certificates.map((cert)=>
        cert.id ===id? {...cert,description: response }: cert
        ));
    setLoading(false);
    setError("");
  };

  const handleDescriptionGpt3 = async (e, id) => {
    e.preventDefault();
    
    
    // retrieve the text from the responsibilities field
    const obj = certificates.find(item=> item.id === id)
    const text = obj.description;
    console.log(text)

    if (!text) {
        setError("Description is required");
        return;
      }
      
      setLoading(true);
      try {
        const gpt3Response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/certificateDescriptionTunning", { text });
        const response = gpt3Response.data
        handleGpt3Response(response, id);
      } catch (error) {
        setError("An error occurred while generating the description");
        setLoading(false);
        console.log(error)
      }
    };
  
    return (
        <>
          <div className="mb-8 shadow-lg border py-4">
            <h2 className="text-2xl font-bold mb-4">Certificates:</h2>
            {certificates.map((cert) => (
              <>
              <div key={cert.id} className="mb-10 mt-5 px-2">
                <label htmlFor={`title_${cert.id}`} className="text-lg font-bold ">Title:</label>
                <input
                  type="text"
                  name="title"
                  id={`title_${cert.id}`}
                  value={cert.title}
                  onChange={(e) => handleChange(e, cert.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`issuingOrganization_${cert.id}`}className="text-lg font-bold ">Issuing Organization:</label>
                <input
                  type="text"
                  name="issuingOrganization"
                  id={`issuingOrganization_${cert.id}`}
                  value={cert.issuingOrganization}
                  onChange={(e) => handleChange(e, cert.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <label htmlFor={`issueDate_${cert.id}`}className="text-lg font-bold ">Issuing Date:</label>
                <input
                  type="text"
                  name="issueDate"
                  id={`issueDate_${cert.id}`}
                  value={cert.issueDate}
                  onChange={(e) => handleChange(e, cert.id)}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                
                <label htmlFor={`description_${cert.id}`}className="text-lg font-bold ">Description:</label>
                <textarea
                  name="description"
                  id={`description_${cert.id}`}
                  value={cert.description}
                  onChange={(e) => handleDescriptionChange(e, cert.id)}
                  rows={8}
                  className="block w-full text-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {loading && <p>waiting for the AI response, hold on...</p>}

                {error&&error}

                <div className="flex justify-between content-center ">
                <button
                  className="bg-cyan-500 hover:bg-cyan-700 text-lg text-white font-bold py-2 px-4 mt-2 rounded flex gap-5 content-center justify-center"
                  onClick={(e) => handleDescriptionGpt3(e, cert.id)}
                  >
                  <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> AI Magic
                </button>
      
                <button
                  type="button"
                  onClick={() => handleDeleteCertificates(cert.id)}
                  className="mt-2 mr-2 px-4 py-2 border border-transparent  font-medium rounded-md text-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
          onClick={handleAddCertificate}
          className="mt-4 px-4 py-2 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        > 
          Add New Certificate
        </button>
      </div>
    </>
  );
  
}  
export default CertificatesForm;



