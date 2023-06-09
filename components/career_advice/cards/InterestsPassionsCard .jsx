import React from 'react';

const InterestsPassionsCard = ({ formData, setFormData }) => {
  const handleInterestsChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      interests: e.target.value,
    }));
  };

  return (
    <div>
      <h2
        className='ml-5 mt-2 mb-8 text-4xl text-cyan-900'
      >
        Interests and Passions
      </h2>
      <label
       htmlFor="interests"
       className='ml-5 text-2xl text-cyan-900'
      >
        What are your interests, hobbies, or passions? Please describe them:
      </label>
      <textarea
        id="interests" 
        name='interests'
        value={formData.interests} 
        onChange={handleInterestsChange}
        placeholder="Describe your interests, hobbies, or passions"
        rows={10}
        cols={100}
        className='text-lg  text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-8 px-2 py-2'

      ></textarea>    
      
      </div>
  );
};

export default InterestsPassionsCard;
