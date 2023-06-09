import { useContext, useState} from 'react'
import { SavedResumeContext } from '@/context/SavedResumeContext'
import { useAuth } from '@/context/AuthContext'
import  updateCvData  from '@/pages/api/CvProcessing/updateCvData'
import { useRouter } from "next/router";



const CvUpdateButton = () => {
  const router = useRouter();
  const { user } = useAuth();
  const user_id = user.uid;
  const [errorMessage, setErrorMessage] = useState("")

  const {
    savedCvId,
    personalDetails,
    objective,
    certificates,
    educations,
    languages,
    links,
    projects,
    skills,
    summary,
    volunteers,
    workExperiences,
  } = useContext(SavedResumeContext)

    async function handleCvUpdateButton() {

      try{
        // Construct the data object to be sent to the API endpoint
        const cv_id = savedCvId
        console.log("cv_id inside update cv button component",cv_id)
        const CvData = {
          personalDetails,
          objective,
          certificates,
          educations,
          languages,
          links,
          projects,
          skills,
          summary,
          volunteers,
          workExperiences,
        }

        const cvId = await updateCvData(user_id, CvData, cv_id)
        if (cvId) {
          // Redirect the user to CvsListPage
          router.push('/account/CvsListPage');
        } else{
          setErrorMessage('Error updating CV data');
        }
      
    } catch(error) {
      setErrorMessage('Error updating CV data');
    }
  }

  return (
    <>
        <button type='button' onClick={handleCvUpdateButton}>Update Resume</button>
        {errorMessage && <p>Error: {errorMessage}</p>}
    </>

  )
}

export default CvUpdateButton
