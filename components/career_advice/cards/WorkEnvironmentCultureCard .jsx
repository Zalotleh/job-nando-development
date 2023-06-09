import React from 'react';

const WorkEnvironmentCultureCard = ({ formData, setFormData }) => {


  const handleWorkEnvironmentChange = (e) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        workEnvironmentCulture:{
          ...prevFormData.workEnvironmentCulture,
          workEnvironment: e.target.value,
        }
      }));
  };

  const handleCompanyCultureChange = (e) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        workEnvironmentCulture:{
          ...prevFormData.workEnvironmentCulture,
          companyCulture: e.target.value,
        }
      }));
  };

  return (
    <div className='flex flex-col'>
      <h2 className='ml-5 mt-2 mb-8 text-4xl text-cyan-900'>Work Environment and Culture</h2>
      <label htmlFor="workEnvironment" className='ml-5 text-2xl text-cyan-900'>Describe your ideal work environment?Please select the scenario that best suits you eg: collaborative, independent, fast-paced.":</label>
      <textarea
        id="workEnvironment"
        name='workEnvironment'
        value={formData.workEnvironmentCulture?.workEnvironment||''}
        onChange={handleWorkEnvironmentChange}
        placeholder="Describe your ideal work environment"
        rows={7}
        cols={100}
        className='text-lg text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-6 mb-10 px-2 py-2'
      ></textarea>

      <label htmlFor="companyCulture" className='ml-5 text-2xl text-cyan-900'>Provide examples of companies you admire in terms of culture:</label>
      <textarea
        id="companyCulture"
        name='companyCulture'
        value={formData.workEnvironmentCulture?.companyCulture||''}
        onChange={handleCompanyCultureChange}
        placeholder="List companies with cultures you admire"
        rows={7}
        cols={100}
        className='text-lg text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-6 mb-10 px-2 py-2'
      ></textarea>
    </div>
  );
};

export default WorkEnvironmentCultureCard;
