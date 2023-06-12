import React from 'react'
import styles from '../../styles/LandingPage.module.css'
import Header from './Header'
import ServicesSection from './ServicesSection'
import BenefitsSection from './BenefitsSection'
import PlansSection from './PlansSection'
import PageNavbar from './PageNavbar'
import Footer from '../Footer'
import QA from './Q&A'

function LandingPage() {
  return (
    <body className={styles.main_page}>
      <header>
      <PageNavbar/>
      <Header/>
      </header>
      <main className={styles.page_container}>
        <ServicesSection/>
        <BenefitsSection/>
        <PlansSection/>
        <QA/>
      </main>
      <Footer/>
    </body>
  )
}

export default LandingPage