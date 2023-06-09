import React from 'react'
import styles from '../../styles/LandingPage.module.css'

function Header() {
  return (
    <>

      {/* header section */}
      <header className={styles.header}>
        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.heroText}>
              Everything you <span className={styles.heroSpan}>need</span> to secure your{" "}
              <span className={styles.heroSpan}>dream job</span>
            </h1>
            <h2>
              Build your resume, generate cover letters, get professional career advice, and start learning a new
              skill with a solid learning path. On top of that, practice and get ready for your interview.
            </h2>
          </div>
          <button className={styles.CTAbtn}>Create Your FREE Account Now</button>
        </div>
        <img src="/hero-image.png" alt="Hero Image" className={styles.heroImage} />
      </header>

    </>
  )
}

export default Header