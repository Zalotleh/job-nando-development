import React from "react";
import Head from 'next/head'
import { useAuth } from "@/context/AuthContext";
import Dashboard from "./account/Dashboard";
import LandingPage from "@/components/landingPage/LandingPage";


export default function Home() {
  const { user } = useAuth();


  return (
    <>
      <Head>
        <title>Talent Hub 365</title>
        <meta name="description" content="Your career coach and CV/Resume Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            {!user.uid ? (
              <LandingPage/>
            ) : (
              <Dashboard/>
            )}
    </>
  )
}