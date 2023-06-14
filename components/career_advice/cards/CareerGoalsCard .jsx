import React from 'react';

const CareerGoalsCard = ({ formData, setFormData }) => {
  const handleShortTermGoalsChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      careerGoals: {
        ...prevFormData.careerGoals,
        shortTermGoals: e.target.value,
      },
    }));
  };

  const handleLongTermGoalsChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      careerGoals: {
        ...prevFormData.careerGoals,
        longTermGoals: e.target.value,
      },
    }));
  };

  return (
    <div className='flex flex-col max-w-[750px]'>
      <h2 
        className='ml-5 mb-4 text-lg font-medium text-cyan-900'
      >
        -Career Goals:
      </h2>
      <label 
        htmlFor="shortTermGoals" 
        className='ml-5 text-base text-cyan-900'
      >
        What are your short-term career goals? Please describe what you aim to achieve in the near future:
      </label>

      <textarea 
        id="shortTermGoals"
        name='shortTermGoals'
        value={formData.careerGoals?.shortTermGoals|| ''} 
        onChange={handleShortTermGoalsChange}
        placeholder="Describe your short-term career goals"
        rows={5}
        cols={100}

        className='text-sm ml-5 mt-2 px-1 py-1 text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 '
      />

      <label 
        htmlFor="longTermGoals" 
        className='ml-5 mt-8 text-base text-cyan-900'
      >
        What are your long-term career goals? Please describe your aspirations for your professional life:
      </label>
      
      <textarea 
        type="text" 
        id="longTermGoals"
        name='longTermGoals'
        value={formData.careerGoals?.longTermGoals|| ''} 
        onChange={handleLongTermGoalsChange}
        placeholder="Describe your long-term career goals"
        rows={5}
        className='text-sm ml-5 mt-2 px-1 py-1 text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 '
      />
    </div>
  );
};

export default CareerGoalsCard;
