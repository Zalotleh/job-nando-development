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
    <div className='flex flex-col max-w-[750px]'>
      <h2 className='ml-5 mb-4 text-lg font-medium text-cyan-900'>-Work Environment and Culture:</h2>
      <label htmlFor="workEnvironment" className='ml-5 text-base text-cyan-900'>Describe your ideal work environment?Please select the scenario that best suits you eg: collaborative, independent, fast-paced.":</label>
      <textarea
        id="workEnvironment"
        name='workEnvironment'
        value={formData.workEnvironmentCulture?.workEnvironment||''}
        onChange={handleWorkEnvironmentChange}
        placeholder="Describe your ideal work environment"
        rows={7}
        className='text-sm ml-5 mt-2 px-1 py-1 text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 '
      ></textarea>

      <label htmlFor="companyCulture" className='ml-5 mt-6 text-base text-cyan-900'>Provide examples of companies you admire in terms of culture:</label>
      <textarea
        id="companyCulture"
        name='companyCulture'
        value={formData.workEnvironmentCulture?.companyCulture||''}
        onChange={handleCompanyCultureChange}
        placeholder="List companies with cultures you admire"
        rows={7}
        className='text-sm ml-5 mt-2 px-1 py-1 text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 '
      ></textarea>
    </div>
  );
};

export default WorkEnvironmentCultureCard;
