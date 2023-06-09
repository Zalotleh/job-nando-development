import React from 'react';

const ProfessionalDevelopmentCard = ({ formData, setFormData }) => {


  const handleProfessionalDevelopmentOppChange = (e) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        professionalDevelopment:{
          ...prevFormData.professionalDevelopment,
          professionalDevelopmentOpp: e.target.value,
        }
      }));
  };
 
  const handlePreferredLearningChange = (e) => {
    console.log(e.target.value)
    setFormData((prevFormData) => ({
        ...prevFormData,
        professionalDevelopment:{
          ...prevFormData.professionalDevelopment,
          preferredLearning: e.target.value,
        }
      }));
  };

  return (
    <div className='flex flex-col'>
      <h2 className='ml-5 mt-2 mb-8 text-4xl text-cyan-900'>Professional Development</h2>
      <label htmlFor="professionalDevelopment" className='ml-5 text-2xl text-cyan-900'>Are you interested in professional development opportunities, such as continuing education, certifications, or mentorship programs?</label>
      <textarea
        id="professionalDevelopment"
        name='professionalDevelopment'
        value={formData.professionalDevelopment?.professionalDevelopmentOpp||''}
        onChange={handleProfessionalDevelopmentOppChange}
        placeholder="Describe your interest in professional development"
        className='text-lg text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-6 mb-10 px-2 py-2'
      ></textarea>

      <label htmlFor="preferredLearning" className='ml-5 text-2xl text-cyan-900'>How do you prefer to enhance your skills or learn new ones? Please specify your preferred mode of learning: online courses, workshops, conferences, or other:</label>
      <textarea
        id="preferredLearning"
        name='preferredLearning'
        value={formData.professionalDevelopment?.preferredLearning||''}
        onChange={handlePreferredLearningChange}
        placeholder="Describe preferred learning methods or skills to enhance"
        className='text-lg text-cyan-900 font-normal border border-cyan-300 rounded focus:outline-none focus:ring focus:ring-cyan-500 focus:border-cyan-500 mt-6 mb-10 px-2 py-2'
      ></textarea>
    </div>
  );
};

export default ProfessionalDevelopmentCard;
