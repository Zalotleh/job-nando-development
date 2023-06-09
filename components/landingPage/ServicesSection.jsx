import React from 'react'
import styles from '../../styles/LandingPage.module.css'

function ServicesSection() {
  return (
    <>
    
      {/* services section */}

      <section className={styles.servicesSection}>
        <h1 className={styles.sectionTitle}>Our Services</h1>
        <div className={styles.servicesContainers}>

                {/* resume service section */}

          <div className={styles.resumeServiceContainer}>
              <h1 className={styles.resumeServiceTitle}>
                Build your <span className={styles.resumeServiceTitleSpan}>resume</span> in 3 steps
              </h1>
              <div className={styles.resumeServiceCards}>
                  <div className={styles.resumeServiceCard}>
                      <img src="/writing-resume.png" alt="minimalist graphic for someone writing a resume" className={styles.resumeServiceCardImages}/>
                      <div className={styles.resumeServiceCardText}>
                        <h1 className={styles.resumeServiceCardNumber}>1.</h1>
                        <div>
                          <h1 className={styles.resumeServiceCardh1}>Fill in</h1>
                          <h2 className={styles.resumeServiceCardh2}>Fill in the blanks and see results in real-time</h2>
                        </div>
                      </div>
                  </div>

                  <div className={styles.resumeServiceCard}>
                      <img src="/magic-wand.png" alt="minimalist graphic for magic wand" className={styles.resumeServiceCardImages}/>
                      <div className={styles.resumeServiceCardText}>
                        <h1 className={styles.resumeServiceCardNumber}>2.</h1>
                        <div>
                          <h1 className={styles.resumeServiceCardh1}>Get help from our A.I. Tools</h1>
                          <h2 className={styles.resumeServiceCardh2}>Tune your resume text using our A.I tools</h2>
                        </div>
                      </div>
                  </div>

                  <div className={styles.resumeServiceCard}>
                      <img src="/woman-download.png" alt="minimalist graphic for someone writing a resume" className={styles.resumeServiceCardImages}/>
                      <div className={styles.resumeServiceCardText}>
                        <h1 className={styles.resumeServiceCardNumber}>3.</h1>
                        <div>
                          <h1 className={styles.resumeServiceCardh1}>Hit 'Download</h1>
                          <h2 className={styles.resumeServiceCardh2}>Downlaod your reusme, get more interviews</h2>
                        </div>
                      </div>
                  </div>
              </div>
              <button type='button' className={styles.CTAbtn}>Start Building Your Resume</button>
          </div>

            {/* Cover Letter service section */}

          <div className={styles.coverLetterServiceContainer}>
              
                  <div className={styles.coverLetterServiceCard}>
                  <img src="/fingers-snapping.png" alt="minimalist graphic for someone fingers snapping" className={styles.coverLetterServiceCardImage}/>

                      <div className={styles.coverLetterServiceCardContent}>
                        <div className={styles.coverLetterServiceCardText}>
                        <h1 className={styles.coverLetterServiceTitle}>
                          Generate your <span className={styles.coverLetterServiceTitleSpan}>cover letter</span>!
                        </h1>
                            <h1 className={styles.coverLetterServiceCardh1}>In 1 click, as simple as that!</h1>
                            <h2 className={styles.coverLetterServiceCardh2}>Create your Resume.</h2>
                            <h2 className={styles.coverLetterServiceCardh2}>Add the job description you are applying for.</h2>
                            <h2 className={styles.coverLetterServiceCardh2}>Hit 'Generate Resume Button.</h2>
                            <h2 className={styles.coverLetterServiceCardh2}>Download your proffesional cover letter.</h2>
                        </div>
                        <button type='button' className={styles.CTAbtn}>Create Your Free Account</button>
                      </div>

                  </div>
          </div>



            {/* Interview practice service section */}

            <div className={styles.interviewServiceContainer}>
              
                  <div className={styles.interviewServiceCard}>
                    
                      
                      <div className={styles.interviewServiceCardContent}>
                      <h1 className={styles.interviewServiceTitle}>
                      Get ready for your <span className={styles.interviewServiceTitleSpan}>interview</span>!
                    </h1>
                        <div className={styles.interviewServiceCardText}>
                            <h1 className={styles.interviewServiceCardh1}>Our Interview Practice tool will:</h1>
                            <h2 className={styles.interviewServiceCardh2}>Provide you with the most Common questions for the job you are applying for.</h2>
                            <h2 className={styles.interviewServiceCardh2}>Practice your answers on those questions.</h2>
                            <h2 className={styles.interviewServiceCardh2}>Provides you with an immediate feedback on your answers.</h2>
                            <h2 className={styles.interviewServiceCardh2}>Helps you to overcome the fear and get ready for your inetrview.</h2>
                            <h2 className={styles.interviewServiceCardh2}>Will answer any question related to your interview.</h2>
                        </div>
                        <button type='button' className={styles.CTAbtn}>Start Practicing</button>
                      </div>
                      <img src="/interview.png" alt="minimalist graphic for someone having an interview" className={styles.interviewServiceCardImage}/>

                  </div>
          </div>

          {/* Career coach service section */}

          <div className={styles.adviceServiceContainer}>
              
                  <div className={styles.adviceServiceCard}>
                  <img src="/career-coach.png" alt="minimalist graphic for someone having an advice" className={styles.adviceServiceCardImage}/>

                      <div className={styles.adviceServiceCardContent}>
                      <h1 className={styles.adviceServiceTitle}>
                        Have your own 
                        <span className={styles.adviceServiceTitleSpan}> career coach</span>!
                      </h1>
                        <div className={styles.adviceServiceCardText}>
                            <h1 className={styles.adviceServiceCardh1}>Get a comprehensive and professional career advice!</h1>
                            <h2 className={styles.adviceServiceCardh2}>Use your resume and answer few questions, then...</h2>
                            <h2 className={styles.adviceServiceCardh2}>We will provide you with a comprehensive and personalized career advice. </h2>
                            <h2 className={styles.adviceServiceCardh2}>We will provide you with a comprehensive and personalized career advice. </h2>
                            <button type='button' className={styles.CTAbtn}>Get Your Own Coach</button>

                        </div>
                      </div>
                  </div>

          </div>

                    {/* END OF Career coach section */}

                    {/* Learning Path service section */}

            <div className={styles.learningPathServiceContainer}>
              
                  <div className={styles.learningPathServiceCard}>
                      
                      <div className={styles.learningPathServiceCardContent}>
                      <h1 className={styles.learningPathServiceTitle}>
                        Learning <span className={styles.learningPathServiceTitleSpan}>new skills</span> never been easier!
                      </h1>
                        <div className={styles.learningPathServiceCardText}>
                            <h1 className={styles.learningPathServiceCardh1}>Now you don't have to start from ZERO, our tool will:</h1>
                            <h2 className={styles.learningPathServiceCardh2}>Provide you with best advices on the skills you want to build.</h2>
                            <h2 className={styles.learningPathServiceCardh2}>Provide you with a full learning path, where to start and how to start learning.</h2>
                            <h2 className={styles.learningPathServiceCardh2}>Provide you with list of reliable resources to get you started immediately.</h2>
                            <button type='button' className={styles.CTAbtn}>Start Learning Now</button>

                        </div>
                      </div>
                      <img src="/learning-path.png" alt="minimalist graphic for someone having an learningPath" className={styles.learningPathServiceCardImage}/>

                  </div>
          </div>

                    {/* END OF Learning Path section */}


        </div>
      </section>
    </>
  )
}

export default ServicesSection