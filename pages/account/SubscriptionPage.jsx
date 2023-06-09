import Layout2 from '@/components/Layout2'
import React from 'react'

function SubscriptionPage() {
  return (
    <>
    <Layout2
        pageTitle={'Subscription Details'}
        metaTitle={'Your Subscription details 365 Talent Hub'}
    >
        <div className='flex flex-col text-4xl max-w-full my-48'>

        <h1 className='m-auto'>Subscription Details</h1>
        <p className='m-auto'>--------------</p>
        <h2 className='m-auto' >It is for Free Now, Enjoy and please provide your feedback...</h2>
        </div>
    </Layout2>
    </>

  )
}

export default SubscriptionPage