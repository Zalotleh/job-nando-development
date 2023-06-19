import Link from 'next/link'
import React from 'react'
import styles from '../../styles/RedirectingPage.module.css'


function RedirectingPage() {
  return (
    <>
    <div className={styles.page}>

        <p>For security reason, to proceed with deleting your account you will need to reauthenticate</p>
        <p>Please Click here to be redirected to the log in page</p>
        <button className={styles.button}><Link href={'/auth/login'}> Log in</Link> </button>
    </div>
    </>
  )
}

export default RedirectingPage