import React from 'react';

const IndustryPreferencesCard = ({ formData, setFormData }) => {
  const handleIndustryPreferencesChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      industryPreferences: e.target.value,
    }));
  };

  return (
    <div className='flex flex-col'>
      <h2 className='ml-5 mt-2 mb-8 text-4xl text-cyan-900'>Industry Preferences</h2>
      <label htmlFor="industryPreferences" className='ml-5 text-2xl text-cyan-900'>Which industries or sectors are you interested in? Please describe the type of work or industries you would enjoy or have always been curious about</label>
      <textarea 
      id="industryPreferences"
      name='industryPreferences'
      value={formData.industryPreferences} 
      onChange={handleIndustryPreferencesChange}
      placeholder="Describe the industries or sectors you are interested in"
      className='text-lg  text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-6 mb-10 px-2 py-2'
      />
    </div>
  );
};

export default IndustryPreferencesCard;
