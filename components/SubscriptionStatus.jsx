import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import firebase_app from '../firebase/config';
import { collection, getFirestore, onSnapshot } from '@firebase/firestore';

const database = getFirestore(firebase_app);

function SubscriptionStatus() {
  const { user } = useAuth();
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (user) {
      const user_id = user.uid;
      const collectionRef = collection(database, 'users', user_id, 'subscriptions');

      const unsubscribe = onSnapshot(collectionRef, (snap) => {
        let newIsSubscribed = false;

        snap.forEach((doc) => {
          const subscription = doc.data();
          const firstItem = subscription.items[0];

          if (firstItem && firstItem.plan) {
            newIsSubscribed = firstItem.plan.active;
            console.log('in isUserSubscribed', newIsSubscribed);
          }
        });

        setIsSubscribed(newIsSubscribed);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return(
    <>
      {isSubscribed ? 'Active' : 'Not Active'}
    </>
    ) 
}

export default SubscriptionStatus;
