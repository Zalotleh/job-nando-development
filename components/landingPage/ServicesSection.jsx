import React from 'react'
import styles from '../../styles/LandingPage.module.css'
import Link from 'next/link'

function ServicesSection() {
  return (
    <>
    
      {/* services section */}

      <section className={styles.services_section}>
        <h1 className={styles.section_title}>Our Services</h1>
        <div className={styles.services_container}>

                {/* resume service section */}

          <div className={styles.resume_service_container}>
            <h1 className={styles.service_title}>
              Build your <span className={styles.service_title_span}>resume</span> in 3 steps
            </h1>
            <div className={styles.resume_service_cards}>
              <div className={styles.resume_service_card}>
                <img src="/writing-resume.png" alt="minimalist graphic for someone writing a resume" className={styles.resume_service_card_image}/>
                <div className={styles.resume_service_card_text}>
                  <h1 className={styles.resume_service_card_number}>1.</h1>
                  <div>
                    <h1 className={styles.resume_service_card_h1}>Fill in</h1>
                    <h2 className={styles.resume_service_card_h2}>Fill in the blanks and see results in real-time</h2>
                  </div>
                </div>
              </div>

              <div className={styles.resume_service_card}>
                <img src="/magic-wand.png" alt="minimalist graphic for magic wand" className={styles.resume_service_card_image}/>
                <div className={styles.resume_service_card_text}>
                  <h1 className={styles.resume_service_card_number}>2.</h1>
                  <div>
                    <h1 className={styles.resume_service_card_h1}>Get help from our A.I. Tools</h1>
                    <h2 className={styles.resume_service_card_h2}>Tune your resume text using our A.I tools</h2>
                  </div>
                </div>
              </div>

              <div className={styles.resume_service_card}>
                <img src="/woman-download.png" alt="minimalist graphic for someone writing a resume" className={styles.resume_service_card_image}/>
                <div className={styles.resume_service_card_text}>
                  <h1 className={styles.resume_service_card_number}>3.</h1>
                  <div>
                    <h1 className={styles.resume_service_card_h1}>Hit 'Download</h1>
                    <h2 className={styles.resume_service_card_h2}>Downlaod your reusme, get more interviews</h2>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/auth/signup"><button className={styles.CTA_btn}>Start Building Your Resume</button></Link>
          </div>

            {/* Cover Letter service section */}
          <div className={styles.services_group}>

            <div className={styles.service_container}>
                
              <div className={styles.service_card}>
                  <img src="/fingers-snapping.png" alt="minimalist graphic for someone fingers snapping" className={styles.service_card_image}/>

                  <div className={styles.service_card_content}>
                    <div className={styles.service_card_text}>
                      <h1 className={styles.service_title}>
                        Generate your <span className={styles.service_title_span}>cover letter</span>!
                      </h1>
                      <h1 className={styles.service_card_h1}>In 1 click, as simple as that!</h1>
                      <h2 className={styles.service_card_h2}>-Create your Resume.</h2>
                      <h2 className={styles.service_card_h2}>-Add the job description you are applying for.</h2>
                      <h2 className={styles.service_card_h2}>-Hit 'Generate Resume Button.</h2>
                      <h2 className={styles.service_card_h2}>-Download your proffesional cover letter.</h2>
                    </div>
                    <button className={styles.CTA_btn}><Link href="/auth/signup">Create Your Free Account</Link></button>
                  </div>

              </div>
            </div>



            {/* Interview practice service section */}

            <div className={styles.service_container}>
              
              <div className={styles.service_card}>
                
              <img src="/interview.png" alt="minimalist graphic for someone having an interview" className={styles.service_card_image}/>

                  <div className={styles.service_card_content}>
                  <h1 className={styles.service_title}>
                          Get ready for your <span className={styles.service_title_span}>interview</span>!
                        </h1>
                    <div className={styles.service_card_text}>
                        
                        <h1 className={styles.service_card_h1}>Our Interview Practice tool will:</h1>
                        <h2 className={styles.service_card_h2}>-Provide you with the most Common questions for the job you are applying for.</h2>
                        <h2 className={styles.service_card_h2}>-Practice your answers on those questions.</h2>
                        <h2 className={styles.service_card_h2}>-Provides you with an immediate feedback on your answers.</h2>
                        <h2 className={styles.service_card_h2}>-Helps you to overcome the fear and get ready for your inetrview.</h2>
                        <h2 className={styles.service_card_h2}>-Will answer any question related to your interview.</h2>
                    </div>
                    <button className={styles.CTA_btn}><Link href="/auth/signup">Start Practicing</Link></button>

                  </div>

              </div>
            </div>
          </div>

          {/* Career coach service section */}
          <div className={styles.services_group}>
            <div className={styles.service_container}>
                
                    <div className={styles.service_card}>
                      <img src="/career-coach.png" alt="minimalist graphic for someone having an advice" className={styles.service_card_image}/>

                        <div className={styles.service_card_content}>
                            <h1 className={styles.service_title}>
                                Have your own 
                                <span className={styles.service_title_span}> career coach</span>!
                            </h1>
                          <div className={styles.service_card_text}>

                            <h1 className={styles.service_card_h1}>Get a comprehensive and professional career advice!</h1>
                            <h2 className={styles.service_card_h2}>-Use your resume and answer few questions, then...</h2>
                            <h2 className={styles.service_card_h2}>-We will provide you with a comprehensive and personalized career advice. </h2>
                            <button className={styles.CTA_btn}><Link href="/auth/signup">Get Your Own Coach</Link></button>

                          </div>
                        </div>
                    </div>

            </div>

                    {/* END OF Career coach section */}

                    {/* Learning Path service section */}

            <div className={styles.service_container}>
              
                  <div className={styles.service_card}>
                  <img src="/learning-path.png" alt="minimalist graphic for someone having an learningPath" className={styles.service_card_image}/>

                      <div className={styles.service_card_content}>
                        <h1 className={styles.service_title}>
                          Learning <span className={styles.service_title_span}>new skills</span> never been easier!
                        </h1>
                        <div className={styles.service_card_text}>
                            <h1 className={styles.service_card_h1}>Now you don't have to start from ZERO, our tool will:</h1>
                            <h2 className={styles.service_card_h2}>-Provide you with best advices on the skills you want to build.</h2>
                            <h2 className={styles.service_card_h2}>-Provide you with a full learning path, where to start and how to start learning.</h2>
                            <h2 className={styles.service_card_h2}>-Provide you with list of reliable resources to get you started immediately.</h2>
                            <button className={styles.CTA_btn}><Link href="/auth/signup">Start Learning Now</Link></button>
                        </div>
                      </div>

                  </div>
          </div>
          </div>

                    {/* END OF Learning Path section */}


        </div>
      </section>
    </>
  )
}

export default ServicesSection