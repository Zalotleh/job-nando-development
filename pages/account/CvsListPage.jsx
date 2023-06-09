import { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { ResumeContext } from '@/context/ResumeContext';
import getCvsList from '../api/CvProcessing/getCvsList';
import styles from '../../styles/DocumentsLists.module.css'
import Layout from '@/components/Layout';

export default function CvsListPage() {
  const { cvsList, setCvsList } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const user_id = user.uid;

 
  useEffect(() => {
    const fetchCvs = async () => {
      setLoading(true);
      try {
        const fetchedCvsList = await getCvsList(user_id);
        setCvsList(fetchedCvsList);
      } catch (error) {
        console.error('Error fetching Cvs:', error);
      } finally {
        setLoading(false);
      }
    };
    if (user_id) {
      fetchCvs();
    }
  }, []);

  

  return (
    <>
      <Layout 
        metaTitle={'Your Resume Lists - 365 Talent Hub'}
        pageTitle={'Your Resume List'}
        notificationText={<p>* Here you can see your resumes list, click on the resume to view it or click on the "Create Resume button" to create a new one</p>}
      >
        <div className={styles.list_section}>
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <>
              <div className={styles.card_container}>
                {cvsList.length > 0 ? (
                  cvsList.map((cv) => (
                    <div key={cv.id} className={styles.card}>
                      <Link 
                        href={`./cvs/${cv.id}`} 
                        as={`./cvs/${cv.id}`}
                      >
                        <h2 className={styles.card_title}>{cv.cvTitle}</h2>
                        <div className={styles.card_view}>
                          Click here to view... <img src="/eye.png" alt="eye icon to view the resume" />
                        </div>
                      </Link>
                    </div>
                  ))
                ) : null}
              </div>
              {cvsList.length > 0 ? null : (
                <div className={styles.create_section}>
                  <h2 className={styles.create_section_h2}>Click Here to create your first resume</h2>
                </div>
              )}
              <div className={styles.create_section}>
                <Link href={'../CreateCVPage'}>
                  <button type='button' className={styles.create_section_btn}>
                    Create Resume
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>

        <div className={styles.articles_section}>
            <h2 className={styles.section_title}>Tips for you</h2>
            <div className={styles.articles_container}>
    
            <Link href={'/Tips'}>
                <div className={styles.article_card}>
                  <h2>Tips and Tricks</h2>
                  <img src="/interview.png" alt="" />
                  <div className={styles.article_card_text} >
                  8 tips will help you navigate the process and increase your chances of success.
                  </div>
                  Click To Read...
                </div>
                </Link>
                <Link href={'/HowItWorks'}>
                <div className={styles.article_card}>
                  <h2>How it Works</h2>
                  <img src="/writing-resume.png" alt="writing resume image" />
                  <div className={styles.article_card_text} >
                  Discover how our platform can empower you in your career journey. 
                  </div>
                  Click To Read...
                </div>
                </Link>
    
            </div>
            </div>
      </Layout>
    </>
  );
}  