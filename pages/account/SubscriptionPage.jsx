import Layout2 from '@/components/Layout2'
import React from 'react'

function SubscriptionPage() {
  return (
    <>
    <Layout2
        pageTitle={'Subscription Details'}
        metaTitle={'Your Subscription details 365 Talent Hub'}
    >
        <div className='flex flex-col text-lg max-w-full my-48'>

        <h1 className='m-auto'>Subscription Details</h1>
        <p className='m-auto'>--------------</p>
        <h2 className='m-auto' >You got 14 days free trial, Enjoy...</h2>
        <h2 className='m-auto' >Do not forget to provide your feedback...</h2>
        <h2 className='m-auto' >Thank You!</h2>

        </div>
    </Layout2>
    </>

  )
}

export default SubscriptionPage