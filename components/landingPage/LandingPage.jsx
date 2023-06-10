import React from 'react'
import styles from '../../styles/LandingPage.module.css'
import Header from './Header'
import ServicesSection from './ServicesSection'
import BenefitsSection from './BenefitsSection'
import PlansSection from './PlansSection'
import LandingPageNavbar from './LandingPageNavbar'
import Footer from '../Footer'
import QA from './Q&A'

function LandingPage() {
  return (
    <body className={styles.mainPage}>
      <LandingPageNavbar/>
      <main className={styles.main}>
        <Header/>
        <ServicesSection/>
        <PlansSection/>

        <BenefitsSection/>
        <QA/>
      </main>
      <Footer/>
    </body>
  )
}

export default LandingPage