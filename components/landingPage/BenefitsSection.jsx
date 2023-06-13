import React from 'react';
import Link from 'next/link';
import styles from '../../styles/LandingPage.module.css'

const BenefitsSection = () => {
  return (
    <>
    <section className={styles.benefits_section}>
      <h1 className={styles.section_title}>Why you should use our services</h1>
      <div className={styles.benefits_container}>
        <div className={styles.benefit_item}>
          
          <img src="/increase.png" alt="Benefit Icon" className={styles.benefit_icon} />
          <h3 className={styles.benefit_title}>Increase Your Chances</h3>
          <p className={styles.benefit_description}>
            Our services help you create outstanding resumes, cover letters, and prepare for interviews, giving you an edge over the competition.
          </p>
        </div>
        <div className={styles.benefit_item}>
          <img src="/timetable.png" alt="Benefit Icon" className={styles.benefit_icon} />
          <h3 className={styles.benefit_title}>Save Time and Effort</h3>
          <p className={styles.benefit_description}>
            Let us handle the heavy job for you, so you can focus on other important aspects of your career development.
          </p>
        </div>
        <div className={styles.benefit_item}>
          <img src="/leader.png" alt="Benefit Icon" className={styles.benefit_icon} />
          <h3 className={styles.benefit_title}>Expert Career Advice</h3>
          <p className={styles.benefit_description}>
            Our career coache tool provide personalized guidance and insights to help you make informed decisions and achieve your career goals.
          </p>
        </div>
        <div className={styles.benefit_item}>
          <img src="/elearning.png" alt="Benefit Icon" className={styles.benefit_icon} />
          <h3 className={styles.benefit_title}>Learning Path</h3>
          <p className={styles.benefit_description}>
            We recommend curated courses, tutorials, and learning resources to develop new skills and stay competitive in the job market.
          </p>
        </div>
        <div className={styles.benefit_item}>
          <img src="/interviewprep.png" alt="Benefit Icon" className={styles.benefit_icon} />
          <h3 className={styles.benefit_title}>Interview Preparation</h3>
          <p className={styles.benefit_description}>
            Get interview preparation, tips, and techniques to perform well in job interviews and gain confidence.
          </p>
        </div>
      </div>
      {/* <Link href="/auth/signup"><button className={styles.CTAbtn}>Start Learning Now</button></Link> */}

      <button type='button' className={styles.CTA_btn}><Link href="/auth/signup">Create Your Free Account</Link></button>
    </section>
    </>
  );
}

export default BenefitsSection;
