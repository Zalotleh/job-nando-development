import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import React, {useEffect, useState} from "react";
import useSubscriptionStatus from '@/stripe/useSubscriptionStatus';
import CheckoutPage from "./CheckoutPage";

const SubscribedOnlyRoute = ({ children }) => {
  const router = useRouter();
  const {user, isLoading} = useAuth();
  const userIsSubscribed = useSubscriptionStatus(user);

  const onlySubscribedRoutes = [
    "/CreateCVPage",
    "/CreateCoverLetter",
    "/GetCareerAdvice",
    "/LearningPathPage",
    "/InterviewRoom",
    "/account/CvsListPage",
    "/account/CoverLettersListPage",
    "/account/cover-letter-request/*",
  ];

  const isOnlySubscribedRoutes = onlySubscribedRoutes.includes(router.pathname);

  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    if (user && !isLoading && isOnlySubscribedRoutes) {
      setIsAllowed(userIsSubscribed);
    }
  }, [isLoading, isOnlySubscribedRoutes, userIsSubscribed]);

  if (!isLoading && isOnlySubscribedRoutes && !isAllowed) {


    // this is for the button inside the checkout page

    return <CheckoutPage/>;
  
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default SubscribedOnlyRoute;
