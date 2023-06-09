import React from 'react';
import styles from '../../styles/PlansSection.module.css';

const PlansSection = () => {
  return (
    <>
      <h3 className={styles.sectionTitle}>Plans & Pricing</h3>

      <section className={styles.plansSection}>
        <div className={styles.planOptions}>
          <div className={styles.planOption}>
            <h1 className={styles.planTitle}>Free Plan</h1>
            <h2 className={styles.plansPrice}>
              <span className={styles.dollarSign}>$</span>
              <span className={styles.price}>0</span>
              <span className={styles.month}>/month</span>
            </h2>
            <hr className={styles.horizontalLine} />

            <ul className={styles.benefitsList}>
              <li>Create 1 resume</li>
              <li>Create 1 cover letter</li>
              <li>Access to 1 career advice</li>
              <li>Access to 1 learning path</li>
              <li>No interview preparation</li>
            </ul>
            <a href="/auth/signup" className={styles.planButton}>
              Sign Up for Free
            </a>
          </div>

          <div className={styles.planOption}>
            <h1 className={styles.planTitle}>Premium Plan</h1>
            <h2 className={styles.plansPrice}>
              <span className={styles.dollarSign}>$</span>
              <span className={styles.price}>9.99</span>
              <span className={styles.month}>/month</span>
            </h2>
            <hr className={styles.horizontalLine} />

            <ul className={styles.benefitsList}>
              <li >Create unlimited resumes</li>
              <li>Create unlimited cover letters</li>
              <li>Access to all career advice</li>
              <li>Access to all learning paths</li>
              <li>Interview preparation included</li>
              <li>Support 24/7</li>
              <li>Cancel Anytime</li>

            </ul>
            <a href="/auth/signup" className={styles.planButton}>
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansSection;
