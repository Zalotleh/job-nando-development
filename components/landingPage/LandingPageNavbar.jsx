import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const LandingPageNavbar = ({ children }) => {

  
  return (
    <>
        <section className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>365 Talent Hub</span>
          </Link>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
              <>
                <li className={`${styles.navLink} ${styles.dropdown}`}>
                  <span className={styles.dropdownToggle}>Services</span>
                  <div className={styles.dropdownContent}>
                    <Link href="/CreateCVPage">Create Resume</Link>
                    <Link href="/CreateCoverLetter">Create Cover Letter</Link>
                    <Link href="/GetCareerAdvice">Get Career Advice</Link>
                    <Link href="/LearningPathPage">Learn New Skill</Link>
                    <Link href="/InterviewRoom">Interview Room</Link>
                  </div>
                </li>
                <li className={`${styles.navLink} ${styles.dropdown}`}>
                  <span className={styles.dropdownToggle}>About</span>
                  <div className={styles.dropdownContent}>
                    <Link href="/about/AboutUs">About Us</Link>
                    <Link href="/terms/TermsAndConditions">Terms and Conditions</Link>
                    <Link href="/terms/PrivacyPolicy">Privacy Policy</Link>
                  </div>
                </li>

                <li className={`${styles.navLink} ${styles.dropdown}`}>
                  <span className={styles.dropdownToggle}>Useful Tips</span>
                  <div className={styles.dropdownContent}>
                    <Link href="/articles/InterviewTips">Interview Tips</Link>
                    <Link href="/articles/JobSearchTips">Job Search Tips</Link>
                    <Link href="/articles/ResumeTips">Resume Tips</Link>
                  </div>
                </li>

                <li className={styles.navLink}>
                  <Link href="/about/HowItWorks">How It Works</Link>
                </li>

                <li className={styles.log_in_btn}>
                  <Link href={'/auth/login'}>Log In</Link>
                </li>

                <li className={styles.sign_up_btn}>
                  <Link href={'/auth/signup'}>Sign Up</Link>
                </li>
              </>
          </ul>
        </nav>
      </section>
      {children}
    </>
  );
};

export default LandingPageNavbar;
