import Head from 'next/head'
import Link from 'next/link';
import React, {useState, useEffect} from "react";
import {getAuth} from 'firebase/auth';
import { createCheckoutSession } from '@/stripe/createCheckoutSession';
import usePremiumStatus from '@/stripe/useSubscriptionStatus';


export default function Home() {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const userIsPremium = usePremiumStatus(currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setUserLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);


  console.log("User is:", currentUser);
  return (
    <>
      <Head>
        <title>Job Nandoo - Career Coach</title>
        <meta name="description" content="career coach for foreigners, jobs for foreigners in romania" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
        <div className="ml-2">
      {!currentUser && userLoading && <h1>Loading...</h1>}
      {!currentUser && !userLoading && <Link href={'./auth/login'}>login</Link>}
      {currentUser && !userLoading && (
        <div>
          <h1>Hello, {currentUser.displayName}</h1>
          <h1>Home Page</h1>
          {!userIsPremium ? (
            <>
            <h1>Home Page</h1>
            <button onClick={() => createCheckoutSession(currentUser.uid)}>
              Upgrade to premium!
            </button>
            </>
          ) : (
            <>
            
            <h2>Have a cookie 🍪 Premium customer!</h2>
            </>
          )}
        </div>
      )}

    </div>
        </>
      </main>

    </>
  )
}
