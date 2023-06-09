import React from 'react'
import LearningPathForm from '@/components/learning_path/cards/LearningPathForm'
import Layout from '@/components/Layout'
import styles from '../styles/GetCareerAdvice.module.css' 

export default function LearningPathPage() {
  return (
    <>
      <Layout
        metaTitle={'Get comprehensive and professional Learning Path'}
        pageTitle={'Learn New Skills'}
        notificationText={ 
          <>
          <p>
            * Providing detailed answers to the following questions is crucial for us to offer you comprehensive and professional learning path.
          </p>
          </>
          
        }
      >
        <div className={styles.section} >
          <LearningPathForm/>
        </div>
      </Layout>
    </>
  )
}
