import React from 'react';
import styles from '../../styles/Terms.module.css';
import Layout from '../../components/Layout2';


function PrivacyPolicy() {
  return (
    <Layout 
    metaTitle={"365 Talen Hub Privacy Policy"}
      pageTitle="Privacy Policy"
    >

      <div className={styles.page}>
          <img src='/privacy_policy.png' alt="Privacy Policy" className={styles.pageImage}/>
        <div className={styles.content}>
 
        <p>
          We are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your personal data when you
          use our services.
        </p>

        <h2>1. Collection of Personal Information</h2>

        <p>
          We collect personal information from you when you register on our
          platform, create a user account, and use our services. The types of
          personal information we collect may include:
        </p>

        <ul>
          <li>-Full name</li>
          <li>-Email address</li>
          <li>-Phone number</li>
          <li>-Resume data</li>
          <li>-Other information you provide voluntarily</li>
        </ul>

        <h2>2. Use of Personal Information</h2>

        <p>
          We may use the personal information you provide to:
        </p>

        <ul>
          <li>Deliver and personalize our services to you</li>
          <li>Process and analyze resume data using OpenAI GPT API</li>
          <li>Communicate with you about our services, updates, and promotions</li>
          <li>Improve our platform and enhance user experience</li>
          <li>Ensure compliance with applicable laws and regulations</li>
        </ul>

        <h2>3. Data Storage and Security</h2>

        <p>
          We store and process your personal information in accordance with the
          General Data Protection Regulation (GDPR) and other applicable data
          protection laws. We implement appropriate technical and organizational
          measures to protect your personal data against unauthorized access,
          loss, or alteration.
        </p>

        <h2>4. Sharing of Personal Information</h2>

        <p>
          We may share your personal information with third-party service
          providers who assist us in delivering our services, such as hosting
          providers and analytics providers. We ensure that these service
          providers comply with applicable data protection laws and maintain the
          confidentiality and security of your personal information.
        </p>

        <h2>5. Your Rights</h2>

        <p>
          Under the GDPR, you have the following rights regarding your personal
          data:
        </p>

        <ul>
          <li>
            The right to access, update, or delete your personal information
          </li>
          <li>
            The right to restrict or object to the processing of your personal
            information
          </li>
          <li>
            The right to data portability, allowing you to receive a copy of your
            personal data in a structured, commonly used, and machine-readable
            format
          </li>
          <li>The right to withdraw consent at any time</li>
          <li>
            The right to lodge a complaint with a supervisory authority if you
            believe that your rights under the GDPR have been violated
          </li>
        </ul>

        <p>
          To exercise any of these rights or if you have any questions or concerns
          regarding the processing of your personal information, please contact
          us at our contact email.
        </p>

        <h2>6. Changes to the Privacy Policy</h2>

        <p>
          We reserve the right to modify or update this Privacy Policy at any
          time. We will notify you of any changes by posting the updated policy on
          our platform. It is recommended that you review this Privacy Policy
          periodically for any changes.
        </p>

        <p>Last updated: Jun-2023</p>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
