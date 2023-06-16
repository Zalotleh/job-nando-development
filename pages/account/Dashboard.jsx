import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';
import { useAuth } from '@/context/AuthContext';
import getCvsList from '../api/CvProcessing/getCvsList'
import Layout2 from '@/components/Layout2';
import userSubscriptionStatus from '@/stripe/useSubscriptionStatus';


function Dashboard() {
  const {user} = useAuth()
  const userIsSubscribed = userSubscriptionStatus(user);
  const [showNotification, setShowNotification] = useState(true);
  const [cvsList, setCvsList] = useState([])
  const [isLoading, setIsLoading] = useState(true); // State for loading status


  const userName = user.displayName
  const userEmail = user.email
  const user_id = user.uid

  const closeNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    const fetchCvs = async ()=>{
      try{
        const fetchedCvsList = await getCvsList(user_id)
        
          setCvsList(fetchedCvsList)
      }catch(error){
        console.error('Error fetching Cvs:', error);
      }finally{
        setIsLoading(false); // Set loading status to false when data is fetched
      }
    }
    if(user_id){
      fetchCvs()
    }
  }, [])

  return (
    <>

    <Layout2
      metaTitle={'Your Dashboard and Profile settings page'}
      pageTitle={'Dashboard'}
    >


    <section className={styles.notification_section}>
      {/* Show loader if data is still loading */}
      {isLoading ? (
            <div className={styles.loader}></div>
          ) : (
            <>
            {cvsList.length === 0 && showNotification && (
              <>
                <div className={styles.notification}>
                  <p>* Welcome to your personal career coach and advisor, lets start by creating your first resume.
                    please click on Create Resume service below to get started.
                  </p>
                  <button className={styles.close_button} onClick={closeNotification}>
                    Close
                  </button>
                </div>
              </>
            )}
          </>
      )}
    </section>

    <div className={styles.dashboard}>
      <section className={styles.profile_section}>
        <div className={styles.profile_container}>
          <div className={styles.profile_welcome}>
            <p>Hello, {userName} </p>
            <img src="/user.png" alt="profile icon" />
          </div>
          <div className={styles.profile_details}>
            <div className={styles.profile_details_text}>
              
              <hr />
                <h2>Profile Information:</h2>
                <h3>-User Name: <span className={styles.user_data}>{userName}</span> </h3>
                <h3>-Email address: <span className={styles.user_data}>{userEmail}</span></h3>
                <h3>-Subscription status: <span className={styles.user_data}>{userIsSubscribed? 'Active':'Canceled'}</span></h3>
            </div>
            <div className={styles.update_profile}>
            
              <Link 
                href={'/account/updateProfile'} 
                className={styles.profile_link}> 
                <img src="/update.png" alt="update icon"/>
                Update Profile Details
              </Link>
            </div>
          </div>

          <div className={styles.account_settings}>
            <h2>Account Settings:</h2>

            <Link 
              href={'/auth/updatePassword'} 
              className={styles.profile_link}>
                <img src="/lock.png" alt="lock" />
                Change Password 
            </Link>

            <Link 
              href={'https://billing.stripe.com/p/login/9AQ2bgg9H4xuaJy288'} 
              className={styles.profile_link}
              target = "_blank"
              >
              <img src="/subscription.png" alt="plan or subscription details" /> 
              Subscription Details
            </Link>

            <Link 
              href={'/account/deleteProfile'} 
              className={styles.profile_link}> 
              <img src="/delete.png" alt="remove user icon" />
              Delete Account
            </Link>

          </div>

          <div className={styles.lists}>
            <h2>Your Reumes & Cover Letters Lists:</h2>
            <Link 
              href={'/account/CvsListPage'} 
              className={styles.profile_link}>
                <img src="/list.png" alt="list icon" />
                Your Resumes
            </Link>
            <Link 
              href={'/account/CoverLettersListPage'} 
              className={styles.profile_link}>
                <img src="/list.png" alt="list icon" />
                Your Cover Letters
            </Link>

          </div>

        </div>
      </section>
      <section className={styles.services_section}>
        <h2 className={styles.section_title}>Services</h2>
        <div className={styles.card_container}>
          <Link href={'/CreateCVPage'}>
            <div className={styles.card}>
              <h2>Create Resume</h2>
              <img src="/writing-resume.png" alt="" />
              <div className={styles.go_corner}>
                <div className={styles.go_star}>
                  *
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/CreateCoverLetter'}>
            <div className={styles.card}>
              <h2>Create Cover Letter</h2>
              <img src="/fingers-snapping.png" alt="" />
              <div className={styles.go_corner}>
                <div className={styles.go_star}>
                *
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/GetCareerAdvice'}>
            <div className={styles.card}>
              <h2>Your Career Advisor</h2>
              <img src="/career-coach.png" alt="" />
              <div className={styles.go_corner} href="#">
                <div className={styles.go_star}>
                  *
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/LearningPathPage'}>
            <div className={styles.card}>
            <h2>Learn New Skill</h2>
            <img src="/learning-path.png" alt=""/>
              <div className={styles.go_corner} >
                <div className={styles.go_star}>
                  *
                </div>
              </div>
            </div>
            </Link>

            <Link href={'/InterviewRoom'}>
            <div className={styles.card}>
              <h2>Interview Room</h2>
              <img src="/interview.png" alt=""/>
              <div className={styles.go_corner} >
                <div className={styles.go_star}>
                  *
                </div>
              </div>
            </div>
            </Link>

        </div>
        <hr />
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
      </section>
      
    </div>
    </Layout2>

    </>
  )
}

export default Dashboard;
