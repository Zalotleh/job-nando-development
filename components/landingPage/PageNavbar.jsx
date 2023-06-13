import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import styles from "@/styles/PageNavbar.module.css";

const PageNavbar = ({ children }) => {
  const {user,logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/auth/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(user.uid)

  return (
    <>

      <section className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logo_text}>365 Talent Hub</span>
          </Link>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.nav_links}>
              <>
                
                <li className={`${styles.nav_link} ${styles.dropdown}`}>
                  <span className={styles.dropdown_toggle}>Services</span>
                  <div className={styles.dropdown_content}>
                    <Link href="/CreateCVPage">Create Resume</Link>
                    <Link href="/CreateCoverLetter">Create Cover Letter</Link>
                    <Link href="/GetCareerAdvice">Get Career Advice</Link>
                    <Link href="/LearningPathPage">Learn New Skill</Link>
                    <Link href="/InterviewRoom">Interview Room</Link>
                  </div>
                </li>
                
                <li className={`${styles.nav_link} ${styles.dropdown}`}>
                  <span className={styles.dropdown_toggle}>About</span>
                  <div className={styles.dropdown_content}>
                    <Link href="/about/AboutUs">About Us</Link>
                    <Link href="/terms/TermsAndConditions">Terms and Conditions</Link>
                    <Link href="/terms/PrivacyPolicy">Privacy Policy</Link>
                  </div>
                </li>

                <li className={`${styles.nav_link} ${styles.dropdown}`}>
                  <span className={styles.dropdown_toggle}>Useful Tips</span>
                  <div className={styles.dropdown_content}>
                    <Link href="/articles/InterviewTips">Interview Tips</Link>
                    <Link href="/articles/JobSearchTips">Job Search Tips</Link>
                    <Link href="/articles/ResumeTips">Resume Tips</Link>
                  </div>
                </li>

                <li className={styles.nav_link}>
                  <Link href="/about/HowItWorks">How It Works</Link>
                </li>

                {user.uid?(
                    <>
                    <li className={styles.nav_link}>
                        <Link href="/account/Dashboard">Dashboard</Link>
                    </li>

                    <li >
                        <button onClick={handleLogout} className={styles.log_out}>Logout</button>
                    </li>
                    </>
                    ):(
                        <>
                        <li className={styles.log_in_btn}>
                            <Link href="/auth/login">Log in</Link>
                        </li>
    
                        <li className={styles.sign_up_btn}>
                            <Link href='/auth/signup'>Sign Up</Link>
                        </li>
                        </>

                    )}
              </>
          </ul>
        </nav>
      </section>
  
      {children}
    </>
  );
};

export default PageNavbar;
