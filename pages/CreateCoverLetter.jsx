import React from 'react'
import { useEffect, useContext, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import {ResumeContext} from '@/context/ResumeContext'
import getCvsList from './api/CvProcessing/getCvsList'
import Layout from '@/components/Layout'

export default function CreateCoverLetter() {
  const {cvsList, setCvsList} = useContext(ResumeContext)
  const [loading, setLoading] = useState(false)
  const {user} = useAuth()
  const user_id = user.uid

  useEffect(() => {
    const getCvs = async ()=>{
      setLoading(true)
      const fetchedCvsList = await getCvsList(user_id)
      setLoading(false)
      setCvsList(fetchedCvsList)
    }
    if(user_id){
      getCvs()
    }
  }, [])


  return (
    
    <>
      <Layout 
        pageTitle={'Create Cover Letter'}
        notificationText = {
          <p>

          - Enhance your application by creating a customized cover letter for each resume you build.<n />
          - Simply click on the "Create Cover Letter" button below to get started and craft a compelling letter that complements your resume.
          </p>
          }
        metaTitle={"Create a customized cover Letter"}
      >
        <section className='m-16'>
        {loading?(
          <p>...Loading</p>
          ):(
            <>
                {cvsList.length> 0 ? (
                  <ul>
                      {cvsList.map(cv => (
                        <>
                        <li 
                        key={cv.id}
                        className='m-8 flex flex-row flex-wrap justify-center content-center '
                        >
                          <Link 
                              href={`./account/cover-letter-request/${cv.id}`}
                              as={`./account/cover-letter-request/${cv.id}`}
                              >
                              <button 
                                type="button"
                                className="ml-5 mt-2 mr-2 px-10 py-8 border border-transparent text-lg font-medium rounded-md text-white bg-cyan-900 hover:bg-cyan-500 shadow-lg shadow-grey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                >
                                Create Cover Letter
                              </button>
                            </Link>
                            <h2 className='text-md ml-5 mt-2 mr-2 px-3 py-8'>
                            - for resume -
                            </h2>
                            <Link 
                              href={`./account/cvs/${cv.id}`} 
                              as={`./account/cvs/${cv.id}`}
                              className="flex flex-col ml-5 mt-2 mr-2 px-10 py-4 border border-transparent text-lg font-medium rounded-md text-cyan-900 hover:bg-slate-100 hover:shadow-cyan-100 shadow-md shadow-grey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                              >
                              {cv.cvTitle}
                              <p className='text-sm mt-2'>
                                click to view...
                              </p> 
                            </Link>
                            
                          </li>
                          <hr />
                                  </>

                        ))}

                    </ul>
                  ):(
                    <Link href={'../CreateCVPage'}>
                      <button
                        type='button'
                        className="ml-20 mt-2 mr-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                        Create CV First
                      </button>
                    </Link>
                  )
                }
              </>
            )
          }
          </section>
      </Layout>
  
    </>
  )
}
