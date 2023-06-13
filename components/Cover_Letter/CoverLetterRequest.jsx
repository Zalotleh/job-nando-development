import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import {ResumeContext} from '@/context/ResumeContext';
import saveCoverLetterFunction from '@/pages/api/cover_letter/saveCoverLetter';


export default function CoverLetterRequest({cvData, cv_id}) {
  const {user} = useAuth()
  const [loading, setLoading] = useState(false)
  const [coverLetterTitle, setCoverLetterTitle] = useState('')
  const [coverLetter, setCoverLetter] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const {jobDescription,setJobDescription} = useContext(ResumeContext);
  const router = useRouter()

  
  const handleChange = (e) => {
    setJobDescription(e.target.value);
  };
  const handleChangeCLTitle = (e) => {
    setCoverLetterTitle(e.target.value);
  };

  const handleGetCoverLetterButton = async ()=>{
    // Validate input fields
    if (!jobDescription) {
      setErrorMessage('Job description is required');
      return;
    }
    try{
    setLoading(true)
    const response = await axios.post("/api/cover_letter/createCoverLetter", {
      cvData,
      jobDescription
    });
    const generatedcoverLetter  = response.data;
      // Set the generated cover letter
    setCoverLetter(generatedcoverLetter);
    } catch (error) {
      setErrorMessage(error.message)
      console.log('Error generating cover letter:', error);
    }finally{
      setLoading(false);
    }
  };

  const handleSaveCoverLetterButton = async()=>{
    // Validate input fields
    if (!coverLetterTitle) {
      setErrorMessage('Cover letter title is required');
      return;
    }
    try{
      const user_id = user.uid
      const coverLetter_id = await saveCoverLetterFunction({
        user_id, 
        coverLetter,
        cv_id,
        coverLetterTitle
      });
      if (coverLetter_id) {
        router.push(`/account/coverLetters/${coverLetter_id}`);
      } else {
        throw new Error('Error saving cover letter');
      }
    }catch(error){
    setErrorMessage(error.message)
    console.log(error)
    }
  }

  return (

    <div className="mb-8 w-[70%] mx-auto ">
      <h2 className="text-base font-medium mt-4 mb-2 px-2 py-4">Please add the job description & any other relevant information here:</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="jobDescriptionText" className="block font-bold mb-1">
          </label>
          <textarea
            name="jobDescriptionText"
            id="jobDescriptionText"
            value={jobDescription}
            onChange={handleChange}
            placeholder='Job description and information here...'
            disabled = {loading}
            className=" text-sm w-full border border-cyan-500 px-4 py-2 rounded-sm shadow-lg shadow-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            rows={14}
          />
        </div>
      </form>

      {loading? (
        <>
        <div className="text-center mt-20">
          <h2 className="text-base font-bold mb-4">Thank you for submitting!</h2>
          <p className="text-black-600">This may take a while.</p>
          <p className="text-black-600">Waiting for the cover letter to be generated.</p>
        </div>
        <div className="flex items-center justify-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500 "></div>
          <span className="ml-2">Loading...</span>
        </div>
      </>
        
      ):(
        <div>
          <button 
            onClick={handleGetCoverLetterButton}
            className="ml-5 mt-6 mb-10 mr-2 px-4 py-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-900 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            disabled={loading} // Disable the button when loading is true

          >
            Get Cover Letter
          </button>


      {coverLetter && (
        <div>
        <h2 className="text-base font-medium mb-4 px-2 py-4">Your Cover Letter is ready:</h2>
        <textarea
        name="coverLetterText"
        id="coverLetterText"
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        disabled={loading} // Disable the textarea when loading is true
        className=" text-sm w-full border border-cyan-500 px-4 py-2 rounded-sm shadow-lg shadow-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        rows="20"
        />
        <div>
          <div className='mb-5 mt-5 text-cyan-900 text-xs'>
            <p>If required you can edit the generated cover letter.</p>
            <p>Give it a relevant title and click the 'Save Cover Letter' button.</p>
          </div>

        <label
         htmlFor="coverLetterTitle" 
         className="text-sm text-cyan-900 font-medium mb-4 px-2 py-4"
        >
          Cover Letter Title
        </label>
        <input 
        type="text"
        name='coverLetterTitle'
        id='coverLetterTitle'
        value={coverLetterTitle} 
        onChange={handleChangeCLTitle}
        disabled={loading} // Disable the input when loading is true
        className="w-auto text-sm py-1 px-2 mb-2 mr-5 border border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
        </div>
        
        <button 
        type='button' 
        onClick={handleSaveCoverLetterButton}
        className=" mt-4 mb-10 mr-2 px-4 py-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-900 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        disabled={loading} // Disable the input when loading is true
        >
        Save Cover Letter
        </button>
        {errorMessage&& <p className="text-2xl text-red-500 font-small mb-4 px-2 py-2"> *Error: {errorMessage}</p> }
        </div>
        )}
        </div>
        )
        
      }
    </div>

  );
}
