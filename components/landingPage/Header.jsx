import React from 'react'
import styles from '../../styles/LandingPage.module.css'
import Link from 'next/link'

function Header() {
  return (
    <>

      {/* header section */}
      <header className={styles.header}>
      <img src="/hero-image.png" alt="Hero Image" className={styles.heroImage} />

        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.heroText}>
              Everything you <span className={styles.heroSpan}>need</span> to secure your{" "}
              <span className={styles.heroSpan}>dream job</span>
            </h1>
            <h2>
            Take control of your career with our all-in-one platform. Build an impressive resume, generate compelling cover letters,
            access professional career advice, and embark on a guided learning journey to acquire new skills.
            Gain the confidence to ace your interviews and land your dream job.
            </h2>
          </div>
          <Link href="/auth/signup"><button className={styles.CTAbtn}>Create Your FREE Account Now</button></Link>
        </div>
      </header>

    </>
  )
}

export default Header