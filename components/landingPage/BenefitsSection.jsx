import React from 'react';
import styles from '../../styles/LandingPage.module.css'

const BenefitsSection = () => {
  return (
    <>
    <section className={styles.benefitsSection}>
    <h1 className={styles.sectionTitle}>Why you should use our services</h1>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitItem}>
          
          <img src="/increase.png" alt="Benefit Icon" className={styles.benefitIcon} />
          <h3 className={styles.benefitTitle}>Increase Your Chances</h3>
          <p className={styles.benefitDescription}>
            Our services help you create outstanding resumes, cover letters, and prepare for interviews, giving you an edge over the competition.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <img src="/timetable.png" alt="Benefit Icon" className={styles.benefitIcon} />
          <h3 className={styles.benefitTitle}>Save Time and Effort</h3>
          <p className={styles.benefitDescription}>
            Let us handle the heavy job for you, so you can focus on other important aspects of your career development.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <img src="/leader.png" alt="Benefit Icon" className={styles.benefitIcon} />
          <h3 className={styles.benefitTitle}>Expert Career Advice</h3>
          <p className={styles.benefitDescription}>
            Our career coache tool provide personalized guidance and insights to help you make informed decisions and achieve your career goals.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <img src="/elearning.png" alt="Benefit Icon" className={styles.benefitIcon} />
          <h3 className={styles.benefitTitle}>Learning Path</h3>
          <p className={styles.benefitDescription}>
            We recommend curated courses, tutorials, and learning resources to develop new skills and stay competitive in the job market.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <img src="/interviewprep.png" alt="Benefit Icon" className={styles.benefitIcon} />
          <h3 className={styles.benefitTitle}>Interview Preparation</h3>
          <p className={styles.benefitDescription}>
            Get interview preparation, tips, and techniques to perform well in job interviews and gain confidence.
          </p>
        </div>
      </div>
      <button type='button' className={styles.CTAbtn}>Click Here To Create Your Free Account</button>
    </section>
    </>
  );
}

export default BenefitsSection;
