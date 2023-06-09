import React,{useState} from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
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
    <Navbar/>
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