import { useContext, useState} from 'react'
import { useRouter } from "next/router";

import { ResumeContext } from '@/context/ResumeContext'
import { useAuth } from '@/context/AuthContext'
import  saveCvData  from '@/pages/api/CvProcessing/saveCvData'


const CvSaveButton = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState("")
  const user_id = user.uid;

    const { 
    setCvTitle,
    cvTitle,
    personalDetails,
    workExperiences,
    certificates,
    educations,
    objective,
    summary,
    skills,
    links,
    projects,
    volunteers,
    languages,
     } = useContext(ResumeContext)



    async function handleCvSaveButton() {

      try{
        // Construct the data object to be sent to the API endpoint
        const CvData = {
          personalDetails,
          workExperiences,
          certificates,
          educations,
          objective,
          summary,
          skills,
          links,
          projects,
          volunteers,
          languages
        }

      await saveCvData(user_id, CvData, cvTitle)
      try {
        // Redirect the user to CvsListPage
        router.push('/account/CvsListPage');
      } catch (error) {
        console.error('Error redirecting to CvsListPage:', error);
        setErrorMessage('Error saving CV data');
      }
    } catch(error) {
      console.error("Error saving CV data:", error);
      setErrorMessage('Error saving CV data');
    }
  }

  function cvTitleChange(e){
    setCvTitle(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col rounded-md border-2 px-4 py-4 shadow-lg bg-cyan-900 mt-4'>

        <div className='text-lg'>
            <label htmlFor="cvTitle" className='font-semibold mr-3 text-white text-sm'>Resume Title:</label>
            <input 
            type="text"
            name='cvTitle'
            id='cvTitle'
            value={cvTitle} 
            onChange={cvTitleChange}
            className='border-2 rounded-lg py-1 px-2 text-sm text-cyan-900 mt-2'/>

        </div>
        <button
          type='button' 
          onClick={handleCvSaveButton}
          className='border border-b-gray-400 rounded-md text-white text-sm font-bold bg-cyan-500 hover:bg-cyan-700 hover:text-white px-3 py-2 mt-6 '
        >
          Save Resume
        </button>
    </div>
 

    {errorMessage && <p>Error: {errorMessage}</p>}

  
    </>
  )
}

export default CvSaveButton
