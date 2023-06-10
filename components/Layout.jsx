import React,{useState} from 'react'
import Head from 'next/head'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

function Layout({metaTitle, pageTitle,notificationText, children}) {
  const [showNotification, setShowNotification] = useState(true);

  const closeNotification = ()=>{
    setShowNotification(false);
  }


  return (
    <>
      <Head>
          <title>{metaTitle}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className={styles.container}>
          <Navbar/>
          <section className={styles.pageTitle}>
            <h1>{pageTitle}</h1>
          </section>

          {showNotification && 
            <section className={styles.notificationSection}>
              <div className={styles.notification}>
                <div>{notificationText}</div>
                <button 
                  className={styles.closeButton} 
                  onClick={closeNotification}
                >
                  Close
                </button>
              </div>
            </section>
          }
        <div className={styles.content}>{children}</div>

      <Footer/>
    </div>
  </>

  )
}

export default Layout