import React from 'react'
import CareerAdviceForm from '@/components/career_advice/CareerAdviceForm'
import Layout from '@/components/Layout'
import styles from '../styles/GetCareerAdvice.module.css' 

export default function GetCareerAdvice() {
  return (
    <>

      <Layout 
          metaTitle={'Get a comprehensive and professional Career Advice'}
          pageTitle={'Get Career Advice'}
          notificationText={ 
            <>
              <p>
                <pre-line> * Providing detailed answers to the questions is crucial to offer you comprehensive and professional career advice.</pre-line>
              
                <pre-line>* To proceed to the next question, make sure you answer the current one. Once you've answered all the questions, submit your answers to receive tailored career advice.</pre-line>
              
                <pre-line>* Please make sure to select a resume that will be used, along with your answers, to provide you with personalized career advice.</pre-line>
              
                <pre-line>* Feel free to revisit and modify your previous answers at any time. You can also start over and generate a fresh set of career advice whenever you wish.</pre-line>
              </p>
            </>
          }>

          <div className={styles.section} >
            <CareerAdviceForm/>
          </div>

      </Layout>
    </>
  )
}
