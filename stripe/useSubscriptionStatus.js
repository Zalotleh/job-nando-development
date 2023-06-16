import { useState, useEffect } from "react";
import isUserSubscribed from "./isUserSubscribed";

export default function useSubscriptionStatus(user) {
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  useEffect(() => {
    if (user) {
      const checkSubscriptionStatus = async () => {
        const isSubscribed = await isUserSubscribed();
        setSubscriptionStatus(isSubscribed);
      };
      checkSubscriptionStatus();
    }
  }, [user]);
  console.log('in useSubscriptionStatus.js',subscriptionStatus)
  return subscriptionStatus;
}
