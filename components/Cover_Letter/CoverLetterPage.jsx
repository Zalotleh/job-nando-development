import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useReactToPrint } from 'react-to-print';

import { useAuth } from '@/context/AuthContext';
import fetchCoverLetterData from '@/pages/api/cover_letter/fetchCoverLetterData';
import deleteCoverLetterFunction from '@/pages/api/cover_letter/deleteCoverLetter';
import Layout from '../Layout';
import styles from '../../styles/CoverLetterPage.module.css'


export default function CoverLetterPage({coverLetterId}) {
  const [coverLetterData, setCoverLetterData] = useState(null);
  const [loading, setLoading] = useState(true); // Add the loading state
  const [errorMessage, setErrorMessage] = useState("")
  const { user } = useAuth();
  const router = useRouter();
  const componentRef = useRef();
  const user_id = user.uid;

  console.log(coverLetterId)
  useEffect(() => {
    const fetchCoverLetterDataById = async () => {
      try{
        const fetchedCoverLetterData = await fetchCoverLetterData(coverLetterId, user_id)
        setCoverLetterData(fetchedCoverLetterData)
        setLoading(false); // Set loading to false after data is fetched
      }catch(error){
        setErrorMessage('Error fetching cover letter data')
        setLoading(false);
      }
    };

    if (user_id && coverLetterId) {
      fetchCoverLetterDataById();
    }

  }, [user_id, coverLetterId]);

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
  
  const handleDeleteCoverLetter = async ()=>{
    const confirmDelete = window.confirm('Are you sure you want to delete this Cover Letter?');
    if (confirmDelete) {

    try{
      await deleteCoverLetterFunction(user_id, coverLetterId)
      router.push("/account/CoverLettersListPage");
    }
    catch(error){
      setErrorMessage("something wrong happened while deleting the Cover Letter")
      console.log("something wrong happened while deleting the Cover Letter: ",error)
    }
  }
  }
  // const docTitle = coverLetterData.coverLetterTitle
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: coverLetterData?.coverLetterTitle || 'cover_Letter',
    onAfterPrint: () => alert("Print Successful!"),
  });

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.loadingSpinner}></div>
          <span>Loading...</span>
        </div>
      ) : errorMessage ? (
        <div className={styles.error}>{errorMessage}</div>
      ) : (
        <Layout 
        metaTitle={'Cover letter Preview Page'}
        pageTitle= {coverLetterData?.coverLetterTitle || ""}
        notificationText={
          <p>
          Here, you can preview, print, or delete your cover letter: 
          "{coverLetterData?.coverLetterTitle}"
          </p>
        }
    
        >
        <div className={styles.coverLetterPage}>
          
        <div className={styles.buttonGroup}>
            <button
              className={styles.deleteButton}
              onClick={handleDeleteCoverLetter}
            >
              Delete Cover Letter 
              <img src="/delete.png" alt="delete icon" />
            </button>
            <button className={styles.printButton} onClick={handlePrint}>
              Print Cover Letter
              <img src="/printer.png" alt="delete icon" />
            </button>
          </div>

        <div className={styles.coverLetterContainer1}>
          <div className={styles.coverLetterContainer}>
            <div ref={componentRef} className={styles.coverLetterContent}>
              <p>{formatText(coverLetterData.coverLetter)}</p>
            </div>
            </div>

          </div>
          
        </div>
        </Layout>
      )}
      </>
  );

}
