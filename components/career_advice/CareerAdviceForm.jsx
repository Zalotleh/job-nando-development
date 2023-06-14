import React, { useState, useEffect } from 'react';
import InterestsPassionsCard from './cards/InterestsPassionsCard ';
import CareerGoalsCard from './cards/CareerGoalsCard ';
import IndustryPreferencesCard from './cards/IndustryPreferencesCard ';
import GeographicPreferencesCard from './cards/GeographicPreferencesCard ';
import WorkEnvironmentCultureCard from './cards/WorkEnvironmentCultureCard ';
import ProfessionalDevelopmentCard from './cards/ProfessionalDevelopmentCard ';
import ResumeSelection from './ResumeSelection';
import getCvsList from '@/pages/api/CvProcessing/getCvsList';
import fetchCvData from '@/pages/api/CvProcessing/fetchCvData';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

const CareerAdviceForm = () => {
  const [cvsList, setCvsList] = useState([]);
  const [selectedResumeId, setSelectedResumeId] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [apiErrorMessage, setApiErrorMessage] = useState('');
  const [isResumeSelected, setIsResumeSelected] = useState(false);
  const [careerAdvice, setCareerAdvice] = useState('')
  const [formData, setFormData] = useState({
    interests: '',
      careerGoals: {
        shortTermGoals:'',
        longTermGoals:'',
      },
      geographicPreferences: {
        relocation: 'yes',
        preferredLocation: '',
      },
      industryPreferences: '',
      workEnvironmentCulture: {
        workEnvironment:'',
        companyCulture:'',
      },
      professionalDevelopment: {
        professionalDevelopmentOpp:'',
        preferredLearning:'',
      },
  });

  const { user } = useAuth();
  const user_id = user.uid;

  useEffect(() => {
    // Fetch the list of user's resumes
    const fetchedResumes = async () => {
      const userResumes = await getCvsList(user_id);
      setCvsList(userResumes);
    };

    fetchedResumes();
  }, [user_id]);


  const handleSelectResume = (resumeId) => {
    setSelectedResumeId(resumeId);
    if (resumeId === '') {
      setErrorMessage('Please Select Resume to proceed');
      setIsResumeSelected(false);
    } else {
      setErrorMessage('');
      setIsResumeSelected(true);
    }
  };

  const cards = [
    <InterestsPassionsCard key={'interest'} formData={formData} setFormData={setFormData} name ='interests' />,
    <CareerGoalsCard key={'careerGoals'} formData={formData} setFormData={setFormData} name ="careerGoals.shortTermGoals,careerGoals.longTermGoals"/>,
    <IndustryPreferencesCard key={'industryPreferences'} formData={formData} setFormData={setFormData} name='industryPreferences'/>,
    <GeographicPreferencesCard key={'geographicPreferences'} formData={formData} setFormData={setFormData} name='geographicPreferences.relocation,geographicPreferences.preferredLocation'/>,
    <WorkEnvironmentCultureCard key={'workEnvironmentCulture'} formData={formData} setFormData={setFormData} name='workEnvironmentCulture.workEnvironment,workEnvironmentCulture.companyCulture'/>,
    <ProfessionalDevelopmentCard key={'professionalDevelopment'} formData={formData} setFormData={setFormData} name= 'professionalDevelopment.professionalDevelopmentOpp,professionalDevelopment.preferredLearning'/>,
  ];


  const handleNextCard = () => {
    const currentCard = cards[currentCardIndex];
    const requiredFields = currentCard.props.name.split(',');
  
    for (const field of requiredFields) {
      const fieldPath = field.split('.');
      let fieldValue = formData;
  
      for (const path of fieldPath) {
        fieldValue = fieldValue[path];
        if (!fieldValue) {
          return;
        }
      }
    }

    if (
      currentCard === GeographicPreferencesCard &&
      !formData.geographicPreferences.preferredLocation
    ) {
      return;
    }
  
  
    setCurrentCardIndex(prevIndex => prevIndex + 1);
  };
  
  
 
  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
    setErrorMessage('');
    setApiErrorMessage()
  };

  const handleSubmit = async () => {
  
      // Check if a resume is selected
    if (!selectedResumeId) {
      console.log('Please select a resume.');
      setErrorMessage('Ops it seems that you forgot to select a resume.')
      return;
    }
      try {
      setLoading(true)
      setErrorMessage('');
      setApiErrorMessage('');
      // Fetch the selected resume data
      const resumeData = await fetchCvData(selectedResumeId, user_id);
      const cvData = resumeData?.CvData
      
      // Submit the data to the API endpoint for career advice
        const gptResponse = await axios.post(
          'api/career_advice/careerAdvice',
          {cvData, formData}
         )
         setCareerAdvice(gptResponse.data)
      }catch(error){
        console.log(error)
        setApiErrorMessage("Something wrong happened while generating your career advice, please try again..")
      }finally {
        setLoading(false);
      }
  }
  const handleStartOver = () => {
    setCareerAdvice('');
    setCurrentCardIndex(0);
    setErrorMessage('');
    setApiErrorMessage('');
    setSelectedResumeId('');
    setFormData({
      interests: '',
      careerGoals: {
        shortTermGoals:'',
        longTermGoals:'',
      },
      geographicPreferences: {
        relocation: '',
        preferredLocation: '',
      },
      industryPreferences: '',
      workEnvironmentCulture: {
        workEnvironment:'',
        companyCulture:'',
      },
      professionalDevelopment: {
        professionalDevelopmentOpp:'',
        preferredLearning:'',
      },
    });
  };
  const currentCard = cards[currentCardIndex];
const requiredFields = currentCard.props.name.split(',');

let isNextButtonDisabled = false;

for (const field of requiredFields) {
  const fieldPath = field.split('.');
  let fieldValue = formData;

  for (const path of fieldPath) {
    fieldValue = fieldValue[path];
    if (!fieldValue) {
      isNextButtonDisabled = true;
      break;
    }
  }

  if (isNextButtonDisabled) {
    break;
  }
}

const formatText = (text) =>{
  const lines = text.split('\n');
  const formattedLines = lines.map((line,index) =>(
    <span key={index}>
      {line}
      <br/>
    </span>
  ));
  return formattedLines
}

  return (
      <>
        {loading ? (
          <>
            <div className="text-center">
              <h2 className="text-base font-bold mb-4 text-cyan-900">Thank you for submitting!</h2>
              <p className="text-cyan-700">This may take a while, hang on we will provide you with a personalized career advice.</p>
            </div>
            <div className="flex items-center justify-center h-24">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-900"></div>
              <span className="ml-2">Loading...</span>
            </div>
          </>
        ) :(
          <>
            {careerAdvice? (
              <>
                <div className=' mt-16 mb-20 '>
                  <div className='px-6 py-6 mb-4 border-4 border-cyan-500 shadow-md shadow-cyan-500'>
                    <h1 className='text-base text-cyan-900 mb-8 font-bold'>Your Career Advice is Ready...</h1>
                    <p className='text-sm text-cyan-900 mb-10'>{formatText(careerAdvice)}</p>
                  </div>
                  <button 
                    onClick={handleStartOver}
                    className=" mt-2 mr-2 px-5 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-900 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                    Start Over
                  </button>
                </div>
              </>
            ):(
              <>
                <ResumeSelection
                  cvsList={cvsList}
                  selectedResumeId={selectedResumeId}
                  onSelectResume={handleSelectResume}
                />
                {!isResumeSelected && (
                  <p className='ml-5 mb-4 text-red-500'>Please select a resume.</p>
                )}
                {errorMessage&&<p className='ml-5 mb-4 text-red-500'>{errorMessage}</p>}
              
                <div>
                <hr />
                  <div className='ml-5 mt-4 mb-6 text-base text-black '>
                    <span className=' text-white bg-green-600 border border-grey-600 rounded-md px-2 py-2'>
                      Step {currentCardIndex + 1}
                    </span> / {cards.length}
                    
                  </div>

                  {cards[currentCardIndex]}

                  <div className='flex justify-between content-center mt-2 max-w-[750px]'>

                    {currentCardIndex > 0 && (
                      <button 
                        onClick={handlePreviousCard}
                        className="ml-5 mt-2 mr-2 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-cyan-900 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        Back
                      </button>
                    )}

                    {currentCardIndex < cards.length -1 && (
                      <>
                        <div className='flex flex-row flex-wrap content-center justify-center '>

                          {isNextButtonDisabled && (
                            <p className="ml-5 mt-2 py-2 text-red-500">
                              Please fill in the required field to proceed.
                            </p>
                          )}
                          <button
                            onClick={handleNextCard}
                            disabled={isNextButtonDisabled}
                            className={`ml-5 mt-2 mr-2 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white ${
                              isNextButtonDisabled
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-[#08aa00] hover:bg-[#0edc03]'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500`}
                            >
                            Next
                          </button>
                          {errorMessage&&<p className='ml-5 mb-4 text-red-500'>{errorMessage}</p>}
                        </div>
                      </>
                    )}
                  
                    {currentCardIndex === cards.length - 1 && (
                      <button 
                        onClick={handleSubmit}
                        className="ml-5 mt-2 mr-2 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#08aa00] hover:bg-[#0edc03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        Submit
                      </button>
                    )}
                  </div>

                  {apiErrorMessage&& <p className='ml-5 text-red-500' >{apiErrorMessage}</p>}
                </div>
              </>
              )
            }
          </>
        )}
      </>
    
    );
  };

export default CareerAdviceForm;