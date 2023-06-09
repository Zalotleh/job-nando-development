import React, { useContext, useEffect, useState } from 'react';
import { SavedResumeContext } from '@/context/SavedResumeContext';
import axios from 'axios';

export default function SavedObjectiveForm(props) {
  const { objective, setObjective } = useContext(SavedResumeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setObjective(props.objective)
  }, [])

  const handleChange = (e) => {
    setObjective({
      ...objective,
      [e.target.name]: e.target.value,
    });
  };

  const handleGpt3Response = (response) => {
    setObjective({
      ...objective,
      objectiveText:response ,
    });
    setLoading(false);
    setError("");
  };

  const handleObjectiveGpt3 = async (e) => {
    e.preventDefault();

    // retrieve the text from the responsibilities field
    const text = objective.objectiveText;
    console.log(text)

    if (!text) {
        setError("Objective Text is required");
        return;
      }
      
      setLoading(true);
      try {
        const response = await axios.post("/api/CvProcessing/cv_tunning_gptapi/objectiveTunning", { text });
        handleGpt3Response(response.data);
      } catch (error) {
        setError("An error occurred while generating the objective");
        setLoading(false);
        console.log(error)
      }
    };
 
  return (
    <div className="mb-8 shadow-lg border py-4">
    <h2 className="text-2xl font-bold mb-4">Objective:</h2>
    <form className="space-y-4 px-2">

      <div>
        <label htmlFor="objectiveText" className="block font-bold mb-1">
        </label>
        <textarea
          name="objectiveText"
          id="objectiveText"
            value={objective.objectiveText}
            initialvalues = {props.InitialValues}
            onChange={handleChange}
            className="w-full text-lg border border-gray-300 px-4 py-2 rounded-sm"
            rows="6"
          />
        </div>
        {loading && <p>Waiting for the AI response, hold on...</p>}
        {error && <p>{error}</p>}
        <button
          className="flex gap-5 content-center justify-center bg-cyan-500 hover:bg-cyan-700 text-lg text-white font-bold py-2 px-4 rounded"
          onClick={handleObjectiveGpt3}
        >
          <img src="/wand.png" alt="magic wand icon"  className="max-w-[25px]"/> AI Magic
        </button>
      </form>
    </div>
  );
}
