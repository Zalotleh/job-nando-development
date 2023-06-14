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
        className='ml-5 mb-4 text-lg font-medium text-cyan-900'
      >
        -Interests and Passions:
      </h2>
      <label
       htmlFor="interests"
       className='ml-5 text-base text-cyan-900'
      >
        What are your interests, hobbies, or passions? Please describe them:
      </label>
      <textarea
        id="interests" 
        name='interests'
        value={formData.interests} 
        onChange={handleInterestsChange}
        placeholder="Describe your interests, hobbies, or passions"
        rows={6}
        cols={100}
        className='text-sm ml-5 mt-2 px-1 py-1 text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 '

      ></textarea>    
      
      </div>
  );
};

export default InterestsPassionsCard;
