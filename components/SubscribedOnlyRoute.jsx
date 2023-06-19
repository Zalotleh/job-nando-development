import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import React, {useEffect, useState} from "react";
import getSubscriptionStatus from "@/pages/api/subscription/getSubscriptionStatus";
import CheckoutPage from "./CheckoutPage";

const SubscribedOnlyRoute = ({ children }) => {
  const router = useRouter();
  const {user, isLoading} = useAuth();
  const user_id = user.uid


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

  const [isAllowed, setIsAllowed] = useState(null);


  useEffect(() => {
    const unsubscribe = getSubscriptionStatus(user_id, (newIsSubscribed) => {
      setIsAllowed(newIsSubscribed);
    });

      if (user && !isLoading && isOnlySubscribedRoutes) {
        return () => {
          unsubscribe();
        };
      }
   

  }, [isLoading, isOnlySubscribedRoutes, user]);

  
  if (isLoading || isAllowed === null) {
    return <div>Loading...</div>;
  }

  if (!isLoading && isOnlySubscribedRoutes && !isAllowed) {
    // this is for the button inside the checkout page
    return <CheckoutPage/>;
  }

  return <div>{children}</div>;
};

export default SubscribedOnlyRoute;
