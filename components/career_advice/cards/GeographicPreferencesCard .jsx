import React from 'react';

const GeographicPreferencesCard = ({ formData, setFormData }) => {

  const handleRelocationChange = (e) => {
    const value = e.target.value === 'yes' ? true : e.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      geographicPreferences:{
        ...prevFormData.geographicPreferences,
        relocation: value,
      }
    }));
  };


  const handlePreferredLocationChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      geographicPreferences: {
        ...prevFormData.geographicPreferences,
        preferredLocation: e.target.value
      }
    }));
  };

  return (
    <div className='flex flex-col'>
      <h2 className='ml-5 mt-2 mb-8 text-4xl text-cyan-900'>Geographic Preferences</h2>
      <label htmlFor="relocation" className='ml-5 text-2xl text-cyan-900'>Are you willing to relocate for work?</label>
      <select
        id="relocation"
        name="relocation"
        value={formData.geographicPreferences?.relocation || 'yes'} // Convert boolean to string
        onChange={handleRelocationChange}
        className='text-lg text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500  mt-6 mb-10 px-2 py-2 max-w-md '
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br />
      <label htmlFor="preferredLocation" className='ml-5 text-2xl text-cyan-900'>If you have specific regions, cities, or countries in mind for working, please specify:"</label>
      <input
        type="text"
        id="preferredLocation"
        name='preferredLocation'
        value={formData.geographicPreferences?.preferredLocation|| ''}
        onChange={handlePreferredLocationChange}
        placeholder="Enter your preferred location"
        className='text-lg text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-6 mb-10 px-2 py-2 max-w-md'
        />
     </div>
  );
};

export default GeographicPreferencesCard;