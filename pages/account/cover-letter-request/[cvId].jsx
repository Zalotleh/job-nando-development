import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CoverLetterRequest from '@/components/Cover_Letter/CoverLetterRequest';
import fetchCvData from '@/pages/api/CvProcessing/fetchCvData';
import { useAuth } from '@/context/AuthContext';
import Layout from '@/components/Layout';


export default function CoverLetterRequestPage() {
    const router = useRouter();
    const { cvId } = router.query;
    const {user} = useAuth()
    const [cvData, setCvData] = useState(null);
    const user_id = user.uid
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
      const fetchCvDataById = async () => {
        try {
        const fetchedCvData = await fetchCvData(cvId, user_id);
        setCvData(fetchedCvData.CvData);
      } catch (error) {
        setErrorMessage('Error fetching cvData.'); // Handle the error and display an appropriate message
      } finally {
        setLoading(false);
      }
      };
  
      if (cvId) {
        fetchCvDataById();
      }
    }, [cvId]);
  
    if (loading) {
      return <div>Loading...</div>; // Show a loading state while fetching the cvData
    }

    if (errorMessage) {
      return <div> Error: {errorMessage}</div>; // Show an error message if an error occurred
    }

    return (
      <div>
        <Layout 
        metaTitle={'Create Cover Letter'}
        pageTitle={'Create Cover Letter'}
        notificationText={ 
          <>
            <p>
            <pre-line> * To create a cover letter, simply add the job description you are applying for and any relevant details. Then, click on the 'Get Cover Letter' button to generate a personalized cover letter.</pre-line>
            <pre-line> * You can further edit and customize the cover letter as needed. All your saved cover letters can be found in the "Your Resumes and Cover Letters Lists" section of your Dashboard page.</pre-line>
            </p>
          </>
        }
        >
        <CoverLetterRequest cvData={cvData} cv_id={cvId} />
        </Layout>
      </div>
    );
  }