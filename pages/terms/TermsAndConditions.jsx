import React from 'react';
import styles from '../../styles/Terms.module.css';
import Layout2 from '../../components/Layout2';


function TermsAndConditions() {
  return (
    <Layout2 
      metaTitle={'365 Talent Hub Terms&Conditions'}
      pageTitle="Terms & Conditions"
    >
      <div className={styles.page}>
        
        <div className={styles.content}>

          <p>
            These terms of service ("Terms") establish the terms and conditions
            that apply to users when they use the Service.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you do not agree with any of these Terms, you must not
            use the Service.
          </p>

          <h2>2. User Responsibilities</h2>
          <p>
            When using the Service, you agree to abide by all applicable laws,
            regulations, and third-party agreements. You are solely responsible
            for your use of the Service and any content you submit or share
            through it.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All intellectual property rights related to the Service, including
            but not limited to the software, design, trademarks, and content,
            are owned by us or our licensors. You agree not to modify, copy,
            distribute, transmit, display, perform, reproduce, publish, license,
            create derivative works from, transfer, or sell any information,
            software, products, or services obtained from or through the
            Service.
          </p>

          <h2>4. Privacy and Data Protection</h2>
          <p>
            We value your privacy and are committed to protecting your personal
            data. Our Privacy Policy outlines how we collect, use, and disclose
            information from users of the Service. By using the Service, you
            consent to the collection and use of your information as described
            in the Privacy Policy.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall we or our affiliates be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from (i) your access to or use of or
            inability to access or use the Service; (ii) any conduct or content
            of any third party on the Service; (iii) any content obtained from
            the Service; or (iv) unauthorized access, use, or alteration of
            your transmissions or content.
          </p>

          <h2>6. Modifications to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time.
            It is your responsibility to review these Terms periodically for
            changes. Your continued use of the Service after any modifications
            to the Terms constitutes acceptance of those changes.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of EU. Any disputes arising under or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts of EU.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms, please
            contact us at our Contact Email.
          </p>
        </div>
      </div>
    </Layout2>
  );
}

export default TermsAndConditions;
