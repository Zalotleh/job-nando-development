import firebase_app from '@/firebase/config';
import { collection, getFirestore, onSnapshot } from '@firebase/firestore';

const database = getFirestore(firebase_app);

const getSubscriptionStatus = (user_id, callback) => {
  if (!user_id) {
    // User is not logged in, invoke callback with false
    callback(false);
    return () => {};
  }
  
    const collectionRef = collection(database, 'users', user_id, 'subscriptions');
    
      const unsubscribe = onSnapshot(collectionRef, (snap) => {
      let newIsSubscribed = false;
      
      snap.forEach((doc) => {
        const subscription = doc.data();
        const firstItem = subscription.items[0];
        
        if (firstItem && firstItem.plan) {
          newIsSubscribed = firstItem.plan.active;
          console.log('Subscription status changed:', newIsSubscribed);
        }
      });
      
      callback(newIsSubscribed);
    });
    
    return unsubscribe;
};

export default getSubscriptionStatus;
