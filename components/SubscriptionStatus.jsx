import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import getSubscriptionStatus from '@/pages/api/subscription/getSubscriptionStatus';

function SubscriptionStatus() {
  const { user } = useAuth();
  const user_id = user.uid;

  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const unsubscribe = getSubscriptionStatus(user_id, (newIsSubscribed) => {
      setIsSubscribed(newIsSubscribed);
    });

    return () => {
      unsubscribe();
    };
  }, [user_id]);

  return <p>{isSubscribed ? 'Active' : 'Not Active'}</p>;
}

export default SubscriptionStatus;
