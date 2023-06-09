import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Dashboard.module.css';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import getCvsList from '../api/CvProcessing/getCvsList'
import Footer from '@/components/Footer';



function Dashboard() {
  const {user} = useAuth()
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
    <Head>
      <title>Your Dashboard and Profile settings page</title>
    </Head>

    <Navbar/>
    <section className={styles.title}>
      <h1>Dashboard</h1>
    </section>

    <section className={styles.notificationSection}>
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
                  <button className={styles.closeButton} onClick={closeNotification}>
                    Close
                  </button>
                </div>
              </>
            )}
          </>
      )}
    </section>

    <div className={styles.dashboard}>
    <section className={styles.profileSection}>
        <h2 className={styles.sectionTitle}></h2>
        <div className={styles.profileContainer}>
        <div className={styles.profileWelcome}>
                <p>Hello, {userName} </p>
                <img src="/user.png" alt="profile icon" />
              </div>
          <div className={styles.profileDetails}>
            <div className={styles.profileDetailsText}>
              
            <hr />
            <h2>Profile Information:</h2>
              <h3>-User Name: {userName}</h3>
              <h3>-Email address: {userEmail}</h3>
              <h3>-Plan: Premium</h3>
            </div>
          <div className={styles.updateProfile}>
          
            <Link 
              href={'/account/updateProfile'} 
              className={styles.profileLink}> 
              <img src="/update.png" alt="update icon"/>
              Update Profile Details
            </Link>
          </div>
          
          </div>

          <div className={styles.accountSettings}>
            <h2>Account Settings:</h2>

            <Link 
              href={'/auth/updatePassword'} 
              className={styles.profileLink}>
                <img src="/lock.png" alt="lock" />
                Change Password 
            </Link>

            <Link 
              href={'/account/SubscriptionPage'} 
              className={styles.profileLink}> 
              <img src="/subscription.png" alt="plan or subscription details" /> 
              Subscription Details
            </Link>

            <Link 
              href={'/account/deleteProfile'} 
              className={styles.profileLink}> 
              <img src="/delete.png" alt="remove user icon" /> 
              Delete Accoun
            </Link>

          </div>

          <div className={styles.lists}>
            <h2>Your Reumes & Cover Letters Lists:</h2>
            <Link 
              href={'/account/CvsListPage'} 
              className={styles.profileLink}>
                <img src="/list.png" alt="list icon" />
                Your Resumes
            </Link>
            <Link 
              href={'/account/CoverLettersListPage'} 
              className={styles.profileLink}>
                <img src="/list.png" alt="list icon" />
                Your Cover Letters
            </Link>

          </div>

        </div>
      </section>
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <div className={styles.cardContainer}>
          <Link href={'/CreateCVPage'}>
            <div className={styles.card}>
              <h2>Create Resume</h2>
              <img src="/interview.png" alt="" />
              <div className={styles.gocorner}>
                <div className={styles.gostar}>
                  *
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/CreateCoverLetter'}>
            <div className={styles.card}>
              <h2>Create Cover Letter</h2>
              <img src="/interview.png" alt="" />
              <div className={styles.gocorner}>
                <div className={styles.gostar}>
                *
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/GetCareerAdvice'}>
            <div className={styles.card}>
              <h2>Your Career Advisor</h2>
              <img src="/interview.png" alt="" />
              <div className={styles.gocorner} href="#">
                <div className={styles.gostar}>
                  *
                </div>
              </div>
            </div>
          </Link>

          <Link href={'/LearningPathPage'}>
            <div className={styles.card}>
            <h2>Learn New Skill</h2>
            <img src="/interview.png" alt=""/>
              <div className={styles.gocorner} >
                <div className={styles.gostar}>
                  *
                </div>
              </div>
            </div>
            </Link>

            <Link href={'/InterviewRoom'}>
            <div className={styles.card}>
              <h2>Interview Room</h2>
              <img src="/interview.png" alt=""/>
              <div className={styles.gocorner} >
                <div className={styles.gostar}>
                  *
                </div>
              </div>
            </div>
            </Link>

        </div>
        <hr />
        <div className={styles.articlesSection}>
        <h2 className={styles.sectionTitle}>Tips for you</h2>
        <div className={styles.articlesContainer}>

        <Link href={'/articles/InterviewTips'}>
            <div className={styles.articleCard}>
              <h2>Interview Tips</h2>
              <img src="/interview.png" alt="" />
              <div className={styles.article_card_text} >
                8 tips will help you navigate the process and increase your chances of success.
                
              </div>
              Click To Read...
            </div>
            </Link>
            <Link href={'/about/HowItWorks'}>
            <div className={styles.articleCard}>
              <h2>How it Works</h2>
              <img src="/writing-resume.png" alt="" />
              <div className={styles.article_card_text} >
              Discover how our platform can empower you in your career journey. 
              </div>
              Click To Read...
            </div>
            </Link>

        </div>
        </div>
      </section>
      
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard;
