import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/LandingPage.module.css'
import Header from './Header'
import ServicesSection from './ServicesSection'
import BenefitsSection from './BenefitsSection'
import PlansSection from './PlansSection'
import PageNavbar from './PageNavbar'
import Footer from '../Footer'
import QA from './Q&A'
import AOS from 'aos'
import 'aos/dist/aos.css'


function LandingPage() {

useEffect(()=>{
  AOS.init({
    duration:'2500',
    once:true,
    });
},[])



  return (
    <body className={styles.main_page}>
      <header>
      <PageNavbar/>
      <div data-aos='zoom-in'>
        <Header/>
      </div>
      </header>
      <main className={styles.page_container}>
        <ServicesSection/>
        <BenefitsSection/>
        <PlansSection/>
        <QA/>
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
            <Link href={'/articles/JobSearchTips'}>
              <div className={styles.article_card}>
                <h2>How it Works</h2>
                <img src="/job_search_thumbnail.png" alt="" className={styles.article_image} />
                <div className={styles.article_card_text} >
                Discover how our platform can empower you in your career journey. 
                ...read more
                </div>
              </div>
            </Link>

          </div>
        </div>
      </main>
      <Footer/>
    </body>
  )
}

export default LandingPage