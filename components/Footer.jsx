import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>About Us</h3>
          <p className={styles.footerSectionText}>
            At OurApp, our mission is to empower individuals in their job search journey. We understand the challenges job seekers face, and we have created this application to provide comprehensive support, from resume building to interview preparation. Our vision is to help every individual secure their dream job by equipping them with the necessary tools, resources, and guidance.
          </p>
        </div> */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Services</h3>
          <ul className={styles.footerContactList}>
            <li><Link href='/CreateCVPage'>Create Resume</Link></li>
            <li><Link href='/CreateCoverLetter'>Create Cover Letter</Link></li>
            <li><Link href='/GetCareerAdvice'>Get Career Advice</Link></li>
            <li><Link href='/LearningPathPage'>Learn New Skills</Link></li>
            <li><Link href='/InterviewRoom'>Interview Room</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>About</h3>
          <ul className={styles.footerContactList}>
            <li><Link href='/about/AboutUs'>About us</Link></li>
            <li><Link href='/about/HowItWorks'>How it works</Link></li>
            <li><Link href='/terms/PrivacyPolicy'>Privacy Policy</Link></li>
            <li><Link href='/terms/TermsAndConditions'>Terms And Conditions</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Useful Tips</h3>
          <ul className={styles.footerContactList}>
            <li><Link href='/articles/InterviewTips'>Interview Tips</Link></li>
            <li><Link href='/articles/JobSearchTips'>Job Search Tips</Link></li>
            <li><Link href='/articles/ResumeTips'>Resume Tips</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Contact</h3>
          <ul className={styles.footerContactList}>
            <li>Email: info@ourapp.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSectionTitle}>Follow Us</h3>
          <div className={styles.socialMediaIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.socialMediaIcon} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.socialMediaIcon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.socialMediaIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        &copy; 2023 Ziad Alotleh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
