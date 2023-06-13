import React from 'react';
import Link from 'next/link';
import Layout2 from '@/components/Layout2';
import styles from '../../styles/HowItWorks.module.css'

function HowItWorks() {
  return (
    <Layout2 
      metaTitle={'How it works-365 Talent Hub'}
      pageTitle={'How It Works'}
    >
    <div className={styles.page}>
        
      <div className={styles.how_it_works_section}>
        <img src='/how_it_works.png' alt="how it works" className={styles.main_image}/>
        <div className={styles.text_container}>

          <p className={styles.closure_text}>Discover how our platform can empower you in your career journey.
             From creating professional resumes and cover letters to honing your interview skills
              and accessing personalized career advice, our comprehensive set 
              of features and services will help you achieve your career goals
          </p>

          <h2 className={styles.title}>Step 1: Sign up</h2>
          <p><Link href="/auth/signup" className={styles.link}>Create an account </Link>  
            on our platform by providing your basic information. You can choose a free membership or upgrade to a premium membership
            for additional features and benefits.
          </p>

          <h2 className={styles.title}>Step 2: Explore Features and Services</h2>
          <p>Once you're signed in, take a tour of our platform and familiarize yourself with the features and services we offer.
            Discover the various tools available to assist you in your interview preparation,
              resume and cover letter creation, career advice, and personalized learning paths.
          </p>

          <h2 className={styles.title}>Step 3: AI-Powered Interview Simulation</h2>
          <p>Start by engaging in our AI-powered interview simulation, known as the Interview Room.
            Practice your responses in a realistic and interactive environment, tailored to your specific job application.
            Provide important information about the job you are applying for, allowing our AI model to provide personalized advice, interview questions, and answers.
            Receive instant feedback on your answers, with highlights of your strengths and areas for improvement.
            Feel free to ask any questions related to your interview preparation, and our AI model will provide valuable insights to help you succeed.
          </p>

          <h2 className={styles.title}>Step 4: Create a Resume</h2>
          <p>
              Craft a professional resume using our user-friendly templates
              and customization options. Input your resume information into
              our tool and see your resume being built in real-time. Showcase
              your skills, qualifications, and experience effectively to make
              a strong impression on potential employers. Utilize our AI model
              to enhance, tune, and improve your resume content based on
              industry expertise. Save, download in PDF, and edit and print
              your resume as needed.
          </p>

          <h2 className={styles.title}>Step 5: Create a Cover Letter</h2>
          <p>
            Create a professional cover letter that complements your resume.
            Select the resume you want to build the cover letter for, and
            provide information about the job you are applying for, such as
            the job description. Our AI model will provide a professional
            cover letter that you can customize and edit before saving it
            for later. Print or download your cover letter in PDF format and
            make a strong impression on potential employers.
          </p>

          <h2 className={styles.title}>Step 6: Get Expert Career Advice</h2>

          <p>
            Access our AI-powered career coaching tool that provides personalized guidance and support throughout your career journey.
            Complete an interactive questionnaire to provide important information about your career goals and aspirations.
            Select the resume you want to use as a reference for the career advice.
            Our AI-powered model, equipped with industry expertise and valuable insights, 
            will analyze your responses and resume to offer tailored career advice.
            Whether you need assistance with job search strategies, career transitions, 
            or professional development, our AI-powered model will help you make informed decisions and achieve your career goals.
          </p>


          <h2 className={styles.title}>Step 7: Learning Paths and Career Resources</h2>
          <p>
            Gain access to a wealth of career advice and resources on our platform.
            Take our interactive questionnaire, 
            which consists of carefully crafted and professional questions tailored to your specific needs.
            Based on your responses, our AI-powered model will provide you with personalized learning path advice.
            This includes recommendations and curated learning resources selected from the best available platforms.
            With a tailored learning path, your learning process will be more effective and streamlined,
            empowering you to achieve your career goals.
          </p>



          <h2 className={styles.title}>Step 8: Land Your Dream Job</h2>
          <p>With enhanced interview skills, a compelling resume, valuable career advice, and continuous learning,
            you'll be well-equipped to excel in your job search. Put your newfound knowledge and confidence into action,
              apply for positions that align with your aspirations, and increase your chances of landing your dream job.
          </p>
          <p className={styles.closure_text}>
            Take control of your career with our platform's intuitive tools,
            AI-powered guidance, and extensive resources. With a polished resume,
            expert career advice, and enhanced interview skills, 
            you'll be ready to make a lasting impression and land your dream job.
            Start your journey today, 
            <Link href="/auth/signup" className={styles.link}> Create an account </Link>  
            and unlock the possibilities of professional success.
          </p>
        </div>
      </div>
    </div>

    </Layout2>

  );
}

export default HowItWorks;
