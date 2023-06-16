import React from 'react'
import styles from '../../styles/PriceSection.module.css'
import Link from 'next/link'
import Image from 'next/image'

function PriceSection() {
  return (
    <>

      {/* header section */}
      <section className={styles.free_trial_section}>
      <h1 className={styles.section_title}>Try Our Service Free for 14 Days</h1>
        <Image src={'/logo-image.png'} width={150} height={150} alt="logo image" className={styles.section_image}></Image>

        <div className={styles.text_container}>
          <h1 className={styles.hero_text}>
            - Experience the benefits of our service with no commitment.
          </h1>
          <h2>
            - No credit card or payment required during the trial period.
          </h2>
          <h2>
            - Cancel anytime, no questions asked.
          </h2>
        </div>
        <Link href="/auth/signup"><button className={styles.price_section_CTA_btn}>Start Your Free Trial</button></Link>

      </section>
    </>
  )
}

export default PriceSection