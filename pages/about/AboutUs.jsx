import React from 'react';
import Link from 'next/link';
import styles from '../../styles/AboutUs.module.css'
import Layout2 from '@/components/Layout2';

function AboutUs() {
  return (
    <Layout2 
    metaTitle={'Learn more about 365 Talent Hub'}
    pageTitle={'About Us'}
    >

    <div className={styles.page}>
        
      <div className={styles.page_content}>

        
        <div className={styles.our_mission_section}>
        <h2 className={styles.section_title}>Our Mission</h2>

          <div className={styles.our_mission_text}>
            <h2 className={styles.welcome_message}>
              Welcome to our Career Hub Platform! 
            </h2>
            <p>
              Our mission is to empower individuals by equipping them with the
              skills and resources needed to succeed in interviews and advance
              their careers. We understand that the job search can be challenging
              and competitive, and our goal is to provide a holistic platform that
              addresses the various aspects of career development.
            </p>
          </div>

          <img src='/about-us.png' alt="About Us" className={styles.our_mission_image}/>

        </div>

        <div className={styles.what_we_offer_section}>
          <h2 className={styles.section_title}>What We Offer</h2>
          <div className={styles.what_we_offer_section_container}>

          <img src='/what-we-offer.png' alt="what-we-offer.png" className={styles.what_we_offer_image}/>
        <ul>
        <li>
          <strong>AI-Powered Interview Simulation</strong>
          <p>
                Practice your interview skills in a realistic and interactive
                manner with our AI-powered interview simulation. Our advanced AI
                model can simulate various interview scenarios and provide
                instant feedback on your responses, helping you identify areas
                for improvement and refine your answers. Gain confidence and
                prepare effectively for your next interview.
              </p>        
        </li>

        <li>
              <strong>Resume Creation</strong>
              <p>
                Craft a compelling resume using our user-friendly resume
                builder. Our platform provides professional templates and
                customizable sections to help you create a polished and tailored
                document that showcases your skills and qualifications. Utilize
                our AI model to tune and improve your resume content based on
                industry expertise.
              </p>
            </li>
            <li>
              <strong>Cover Letter Creation</strong>
              <p>
                Create a captivating cover letter using our AI-powered cover
                letter generator. Our platform offers customizable sections and
                professional templates to help you craft a persuasive and
                engaging cover letter. Leverage the AI model to enhance your
                cover letter content and make a strong impression on employers.
              </p>
            </li>
            <li>
              <strong>Expert Career Coaching</strong>
              <p>
                Access our AI-powered career coaching tool that provides
                personalized guidance and support throughout your career
                journey. Whether you need advice on job search strategies,
                career transitions, or professional development, our AI model
                offers industry expertise and valuable insights to help you make
                informed decisions and achieve your career goals.
              </p>
            </li>
            <li>
              <strong>Career Advice and Resources</strong>
              <p>
                Gain access to a wealth of career advice and resources on our
                platform. From interview tips and techniques to networking
                strategies and salary negotiation guidance, our comprehensive
                library covers a wide range of topics. Stay up to date with the
                latest trends in the job market and gain valuable insights to
                enhance your career progression.
              </p>
            </li>
            <li>
              <strong>Personalized Learning Paths</strong>
              <p>
                Take control of your professional growth with personalized
                learning paths tailored to your career goals and interests. Our
                platform offers curated resources, online courses, and skill
                development materials to help you acquire new knowledge and stay
                ahead in your field. Continuously enhance your skillset and
                excel in your career.
              </p>
            </li>
          </ul>
          </div>
        </div>  
        <div className={styles.why_choose_us_section}>
          <h2 className={styles.section_title}>Why Choose Us</h2>
        <div className={styles.why_choose_us_section_container}>
          <ul>
            <li>
              <strong>Comprehensive Career Support</strong>
              <p>
                We provide a holistic approach to career development, offering a
                wide range of services and features. From interview preparation
                to resume and cover letter creation, expert career coaching, and
                personalized learning paths, our platform covers all aspects of
                your job search and professional growth. Benefit from a
                one-stop solution that saves you time and maximizes your chances
                of success.
              </p>
            </li>
            <li>
              <strong>AI-Powered Tools and Feedback</strong>
              <p>
                Harness the power of AI with our advanced tools and feedback.
                Our AI-powered interview simulation, resume builder, and cover
                letter generator provide accurate feedback and tailored
                suggestions. Leverage the AI model to optimize your interview
                performance and enhance your resume and cover letter to stand
                out from the competition.
              </p>
            </li>
            <li>
              <strong>Expert Guidance and Support</strong>
              <p>
                Our platform offers expert guidance and support from our
                AI-powered career coaching tool. Tap into industry expertise and
                receive personalized support to navigate the complexities of
                the job market. Our AI model provides valuable insights and
                recommendations to help you make informed career decisions.
              </p>
            </li>
            <li>
              <strong>Convenient and User-Friendly</strong>
              <p>
                Our platform is designed to be convenient and user-friendly.
                Access it from anywhere, at any time, using your computer or
                mobile device. Seamlessly navigate through the various features
                and services, and engage in career development activities at
                your own pace. Take control of your career journey with ease and
                flexibility.
              </p>
            </li>
          </ul>
          <img src='/choose_us.png' alt="what-we-offer.png" className={styles.why_choose_us_image}/>

          </div>
          </div>


          <div className={styles.get_started_section}>

          <h2 className={styles.section_title}>Get Started</h2>
          <p>
            Are you ready to take your career to new heights? <Link href={'/auth/signup'} className={styles.link}>Sign up</Link> for our
            platform today and gain access to our comprehensive suite of career
            development tools, AI-powered simulations, expert guidance, and
            personalized learning paths. Let us help you unlock your full
            potential and achieve your professional goals.
          </p>
          </div>
        </div>
      </div>
    </Layout2>
  );
}

export default AboutUs;
