import { useContext, useEffect, useState } from 'react';
import { SavedResumeContext } from '@/context/SavedResumeContext';
import axios from 'axios';

export default function SavedSummaryForm(props) {
  const { 
    personalDetails,
    workExperiences,
    certificates,
    educations,
    objective,
    summary,
    setSummary,
    skills,
    links,
    projects,
    volunteers,
    languages,  } = useContext(SavedResumeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setSummary(props.summary)
  }, [])

  const handleChange = (e) => {
    setSummary({
      ...summary,
      [e.target.name]: e.target.value,
    });
  };

  const cvData = {
    personalDetails,
    workExperiences,
    certificates,
    educations,
    objective,
    summary,
    skills,
    links,
    projects,
    volunteers,
    languages,
  }

  const handleGpt3Response = (response) => {
    setSummary({
      ...summary,
      summaryText:response ,
    });
    setLoading(false);
    setError("");
  };
  
  const handleImproveSummaryGpt3 = async (e) => {
    e.preventDefault();

    // retrieve the text from the responsibilities field
    const text = summary.summaryText;

    if (text) {
      setLoading(true);
      try {
        const response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/createOrImproveSummary", { text });
        handleGpt3Response(response.data);
      } catch (error) {
        setError("An error occurred while generating the Summary");
        setLoading(false);
        console.log(error)
      }
    
      }else{
        setError("please provide your summary or request the AI to create a professional summary for you")
      }
      
    }

    const handleCreateSummaryGpt3 = async (e) => {
      e.preventDefault();
  
      // retrieve the text from the responsibilities field
  
  
      if (cvData) {
        setLoading(true);
        try {
          const response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/createOrImproveSummary", { cvData });
          handleGpt3Response(response.data);
        } catch (error) {
          setError("An error occurred while generating the Summary");
          setLoading(false);
          console.log(error)
        }
      
        }else{
          setError("please provide your summary or request the AI to create a professional summary for you")
        }
        
      }


  return (
    <div className="mb-8 shadow-lg border py-4">
      <h2 className="text-base font-bold mb-4">Summary:</h2>
      <form className="space-y-4 px-2">
 
        <div>
          <label htmlFor="summaryText" className="block font-bold mb-1">
          </label>
          <textarea
            name="summaryText"
            id="summaryText"
            value={summary.summaryText}
            initialvalues = {props.InitialValues.summaryText}
            onChange={handleChange}
            className="w-full text-sm border border-gray-300 px-2 py-2 rounded-sm"
            rows="8"
          />
        </div>
        {loading && <p>Waiting for the AI response, hold on...</p>}
        {error && <p>{error}</p>}
        <button
          className=" flex gap-4 content-center justify-center ml-2 m-r2 bg-cyan-500 hover:bg-cyan-700 text-sm text-white font-bold py-2 px-2 rounded"
          onClick={handleCreateSummaryGpt3}
        >
           <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> Auto Create Summary
        </button>
        <button
          className=" flex gap-4 content-center justify-center ml-2 m-r2 bg-cyan-500 hover:bg-cyan-700 text-sm text-white font-bold py-2 px-2 rounded"
          onClick={handleImproveSummaryGpt3}
        >
           <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> Improve Existing summary
        </button>
      </form>
    </div>
  );
}
