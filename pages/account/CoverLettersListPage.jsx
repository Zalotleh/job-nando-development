import { useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import {ResumeContext} from '@/context/ResumeContext'
import getCoverLettersList from '../api/cover_letter/getCoverLettersList'
import styles from '../../styles/DocumentsLists.module.css'
import Layout from '@/components/Layout';

export default function CoverLettersListPage () {
  const {coverLettersList, setCoverLettersList} = useContext(ResumeContext)
  const [loading, setLoading] = useState(false)
  const {user} = useAuth()
  const user_id = user.uid

  useEffect(() => {
    const fetchCoverLetters = async () => {
      setLoading(true);
      try{
        const fetchedCoverLetters = await getCoverLettersList(user_id)
        setLoading(false)
        setCoverLettersList(fetchedCoverLetters)
      }catch(error){
        console.error('Error fetching cover letters:', error);
      }finally {
        setLoading(false);
      }
    }
    
    fetchCoverLetters()
    
  }, [])

  return (
    <>
      <Layout 
        metaTitle={'Your Cover Letters List- 365 Talent Hub'}
        pageTitle={'Your Cover Letters List'}
        notificationText={<p>* Here you can see your cover letters list, click on the cover letter to view it or click on the "Create Cover Letter button" to create a new one</p>}
      >

      <div className={styles.list_section}>  
      {loading?(
          <div className={styles.loader}></div>
        ):(
          <>
        <div className={styles.card_container}>
          {coverLettersList.length > 0 ? (
            coverLettersList.map(coverLetter => (
            <div key={coverLetter.id} className={styles.card}>
              <Link 
                href={`./coverLetters/${coverLetter.id}`} 
                as={`./coverLetters/${coverLetter.id}`}
              >
                <h2 className={styles.card_title}>{coverLetter.coverLetterTitle}</h2>
                <div className={styles.card_view}>
                Click here to view... <img src="/eye.png" alt="eye icon to view the resume" />
                </div>
              </Link>
            </div>
            ))
          ) : null}
        </div>
      :{coverLettersList.length > 0 ? null : (
                <div className={styles.create_section}>
                  <h2 className={styles.create_section_h2}>Click Here to create your first cover letter</h2>
                </div>
              )}
              <div className={styles.create_section}>
                <Link href={'../CreateCoverLetter'}>
                  <button type='button' className={styles.create_section_btn}>
                    Create Cover Letter
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>

        <div className={styles.articles_section}>
          <h2 className={styles.section_title}>Tips for you</h2>
          <div className={styles.articles_container}>

            <Link href={'/articles/InterviewTips'}>
                <div className={styles.article_card}>
                  <h2>Interview Tips</h2>
                  <img src="/interview_tips_thumbnail.png" alt="" className={styles.article_image} />
                  <div className={styles.article_card_text} >
                    8 tips will help you navigate the process and increase your chances of success.
                    
                    ...read more
                  </div>
                </div>
            </Link>
            <Link href={'/about/HowItWorks'}>
            <div className={styles.article_card}>
              <h2>How it Works</h2>
              <img src="/how-it-works-article-thumbnail.png" alt="" className={styles.article_image} />
              <div className={styles.article_card_text} >
              Discover how our platform can empower you in your career journey. 
              ...read more
              </div>
            </div>
            </Link>

          </div>
        </div>
      </Layout>
    </>
  );
}  