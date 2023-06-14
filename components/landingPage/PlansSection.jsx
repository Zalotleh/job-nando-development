import React,{useEffect} from 'react';
import styles from '../../styles/PlansSection.module.css';
import Link from 'next/link';
import AOS from 'aos'
import 'aos/dist/aos.css'


const PlansSection = () => {

  useEffect(()=>{
    AOS.init({
      duration:'2500',
      once:true,
  })
  },[])
  return (
    <>
      <h3 className={styles.section_title}>Plans & Pricing</h3>

      <section className={styles.plans_section}>
        <div className={styles.plan_options}>

          <div className={styles.plan_option} data-aos="flip-down">
            <h1 className={styles.plan_title}>Free Plan</h1>
            <h2 className={styles.plans_price}>
              <span className={styles.dollar_sign}>$</span>
              <span className={styles.price}>0</span>
              <span className={styles.month}>/month</span>
            </h2>
            <hr className={styles.horizontal_line} />

            <ul className={styles.benefits_list}>
              <li>Create 1 resume</li>
              <li>Create 1 cover letter</li>
              <li>Access to 1 career advice</li>
              <li>Access to 1 learning path</li>
              <li>No interview preparation</li>
            </ul>
            <Link href="/auth/signup" className={styles.plan_button}>
              Sign Up for Free
            </Link>
          </div>

          <div className={styles.plan_option} data-aos="flip-down">
            <h1 className={styles.plan_title}>Premium Plan</h1>
            <h2 className={styles.plans_price}>
              <span className={styles.dollar_sign}>$</span>
              <span className={styles.price}>9.99</span>
              <span className={styles.month}>/month</span>
            </h2>
            <hr className={styles.horizontal_line} />

            <ul className={styles.benefits_list}>
              <li >Create unlimited resumes</li>
              <li>Create unlimited cover letters</li>
              <li>Access to all career advice</li>
              <li>Access to all learning paths</li>
              <li>Interview preparation included</li>
              <li>Support 24/7</li>
              <li>Cancel Anytime</li>

            </ul>
            <Link href="/auth/signup" className={styles.plan_button}>
              Buy Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansSection;
