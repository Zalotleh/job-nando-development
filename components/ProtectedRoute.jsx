import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  const unprotectedRoutes = [
    "/",
    "/auth/login",
    "/auth/forgotPassword",
    "/auth/signup",
    "/auth/access-denied",
    '/about/AboutUs',
    '/about/HowItWorks',
    '/terms/PrivacyPolicy',
    '/terms/TermsAndConditions',
    '/articles/InterviewTips',
    '/articles/JobSearchTips',
    '/articles/ResumeTips',
  ];

  const isUnprotectedRoute = unprotectedRoutes.includes(router.pathname);

  if (!isLoading && !isUnprotectedRoute && !user.uid) {
    router.replace("/auth/login");
    return null; // Redirecting, so no need to render the children
  }

  if (isLoading) {
    return <div></div>;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
