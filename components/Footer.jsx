import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>

        <div className={styles.footer_section}>
          <h3 className={styles.footer_section_title}>Services</h3>
          <ul className={styles.footer_list}>
            <li><Link href='/CreateCVPage'>Create Resume</Link></li>
            <li><Link href='/CreateCoverLetter'>Create Cover Letter</Link></li>
            <li><Link href='/GetCareerAdvice'>Get Career Advice</Link></li>
            <li><Link href='/LearningPathPage'>Learn New Skills</Link></li>
            <li><Link href='/InterviewRoom'>Interview Room</Link></li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <h3 className={styles.footer_section_title}>About</h3>
          <ul className={styles.footer_list}>
            <li><Link href='/about/AboutUs'>About us</Link></li>
            <li><Link href='/about/HowItWorks'>How it works</Link></li>
            <li><Link href='/terms/PrivacyPolicy'>Privacy Policy</Link></li>
            <li><Link href='/terms/TermsAndConditions'>Terms And Conditions</Link></li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <h3 className={styles.footer_section_title}>Useful Tips</h3>
          <ul className={styles.footer_list}>
            <li><Link href='/articles/InterviewTips'>Interview Tips</Link></li>
            <li><Link href='/articles/JobSearchTips'>Job Search Tips</Link></li>
            <li><Link href='/articles/ResumeTips'>Resume Tips</Link></li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <h3 className={styles.footer_section_title}>Contact</h3>
          <ul className={styles.footer_list}>
            <li>Email: info@ourapp.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        <div className={styles.footer_section}>
          <Image src={'/logo-image.png'} width={70} height={70} className={styles.logo_image} alt="logo image"></Image>
          <h3 className={styles.footer_section_title}>Follow Us</h3>
          <div className={styles.social_media_icons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.social_media_icons} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.social_media_icons} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.social_media_icons} />
            </a>
          </div>
        </div>

        
      </div>
      <div className={styles.footer_bottom}>
        &copy; 2023 Ziad Alotleh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
