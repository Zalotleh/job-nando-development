import React from 'react'
import Head from 'next/head'
import PageNavbar from './landingPage/PageNavbar'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

function Layout2({metaTitle, pageTitle, children}) {


  return (
    <>
    <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
    <PageNavbar/>
    <section className={styles.pageTitle}>
      <h1>{pageTitle}</h1>
    </section>

    
    <div className={styles.content}>{children}</div>

    <Footer/>
</div>
</>

  )
}

export default Layout2