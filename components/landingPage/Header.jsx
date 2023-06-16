import React from 'react'
import styles from '../../styles/LandingPage.module.css'
import Link from 'next/link'

function Header() {
  return (
    <>

      {/* header section */}
      <header className={styles.header}>
      <img src="/hero-image.png" alt="Hero Image" className={styles.hero_image} />

        <div className={styles.hero_content}>
          <div className={styles.text_container}>
            <h1 className={styles.hero_text}>
              Everything you <span className={styles.hero_span}>need</span> to secure your{" "}
              <span className={styles.hero_span}>dream job</span>
            </h1>
            <h2>
            Take control of your career with our all-in-one platform. Build an impressive resume, generate compelling cover letters,
            access professional career advice, and embark on a guided learning journey to acquire new skills.
            Gain the confidence to ace your interviews and land your dream job.
            </h2>
          </div>
          <div className={styles.btn_note_text}>
            <Link href="/auth/signup"><button className={styles.CTA_btn}>Create Your FREE Account Now</button></Link>
            <div className={styles.note_text}>
              <p >*14 Days Free Trial.</p>
              <p >*No Credit Card required.</p>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header