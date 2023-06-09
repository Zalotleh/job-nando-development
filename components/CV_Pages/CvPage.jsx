import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

import SavedCvEditorPage from '@/components/CV_Pages/SavedCvEditorPage';
import SavedCvPreviewPage from './SavedCvPreviewPage';

import fetchCvData from '@/pages/api/CvProcessing/fetchCvData';
import deleteCvFunction from '@/pages/api/CvProcessing/deleteCvFunction';
import CvUpdateButton from '../CV_Buttons/CvUpdateButton'

import Layout from '../Layout';

import styles from '../../styles/ResumePreview.module.css'


import { useRouter } from "next/router";

export default function CvPage({cvId}) {
  const [cvData, setCvData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [deletErrorMessage, setDeletErrorMessage] = useState('')
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  const { user } = useAuth();
  const user_id = user.uid;

  useEffect(() => {
    const fetchCvDataById = async () => {
      try{
        const fetchedCvData = await fetchCvData(cvId, user_id);
        setCvData(fetchedCvData);
        setLoading(false);
      }catch(error){
        console.log("Error fetching CV data:", error);
        setErrorMessage('Error fetching CV data')
        setLoading(false);
      }
    };

    if (user_id && cvId) {
      fetchCvDataById();
    }
  }, [user_id, cvId]);

    const handleDeleteCv = async (cvId) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this CV?');
      if (confirmDelete) {
        try {
          setLoading(true);
          await deleteCvFunction(user_id, cvId);
          router.push("/account/CvsListPage");
        } catch (error) {
          console.log('Something went wrong while deleting the CV: ', error);
          setDeletErrorMessage('Something went wrong while deleting the CV')
        }
      }
    };

  return (
    <>
      {loading ? (
        <>
          <div className="flex items-center justify-center h-24">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              <span className="ml-2">Loading...</span>
          </div>
        </>
      ) : errorMessage ?(
        <>
          <div className="flex items-center justify-center h-24">
            <span className="ml-2">{errorMessage}</span>
          </div>
        </>
      ):(
        <>
          <Layout
            metaTitle={"Preview,Edit,Print and Download your Resume"}
            pageTitle={cvData.cvTitle}
            notificationText={
              <>
                <p>
                *Useful Tips:<n />
                  - Utilize the left resume builder to edit your resume information.<n />
                  - Take advantage of the real-time resume preview available in the right section to see how your resume looks as you make changes.<n />
                  - Enhance your content by using the "AI Magic" button, which employs our AI-powered model to provide improved text tailored to each section of your resume.<n />
                  - Personalize your resume summary by either creating your own or using the AI-powered model to generate a summary based on your filled-in information.<n />
                  - Exclude any sections you do not wish to include in your resume by leaving them empty. If necessary, click the "Delete" button to remove a section from the resume builder.<n />
                  - When you have completed your resume, simply click the "Update Resume" button to securely store your finished document. You can then choose to download it in PDF format or print it for your convenience.<n /> 
                </p>
              </>
            }
          >
            <div className={styles.page}> 
              {/* the page styles are inside ResumePreview.module.css file */}

              <section className={styles.forms_section}>

                <div className='flex flex-col border-2 rounded-md px-5 py-5 shadow-lg bg-cyan-900 mt-5'>
                  <div className='flex flex-col border border-b-gray-400 rounded-md text-white text-xl font-bold bg-cyan-500 hover:bg-cyan-700 hover:text-white px-5 py-5 mt-10'>
                    <CvUpdateButton/>
                  </div>
                  <button
                   onClick={() => handleDeleteCv(cvId)}
                   className='border border-b-gray-400 rounded-md text-white hover:text-red-200 text-xl font-bold bg-[#ef3737] hover:bg-red-700 px-5 py-5 mt-10 '
                  >
                    Delete Resume
                  </button>
                </div>

                {deletErrorMessage &&
                  <>
                    <div className="flex items-center justify-center h-24">
                      <span className="ml-2">{deletErrorMessage}</span>
                    </div>
                  </>
                }

                <SavedCvEditorPage cvData={cvData} cvId={cvId} />

              </section>
              
              <section className={styles.preview_section}>

                <SavedCvPreviewPage cvTitle={cvData.cvTitle}/>

              </section>

            </div>
          </Layout>
        </>          
      )}
    </>
  );

}
