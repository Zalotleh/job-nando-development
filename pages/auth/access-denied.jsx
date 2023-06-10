import React from "react"
import LoginPage from "./login"
import AllNavbar from "@/components/landingPage/LandingPageNavbar"

export default function AccessDenied() {
  return (
    <>
          <AllNavbar/>
    <div >
      <LoginPage/>
      <h1 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Access Denied</h1>
      <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">You must be logged in to view this page</h2>
    </div>
    </>
  )
}
