import { getAuth } from 'firebase/auth';
import firebase_app from '../firebase/config'
import { collection, getFirestore, onSnapshot} from '@firebase/firestore';

const database = getFirestore(firebase_app);

export default async function isUserSubscribed() {
    const auth = getAuth();
    const user = auth.currentUser
    if(user){
      const user_id = user.uid
      const collectionRef = collection(database, 'users', user_id, 'subscriptions');
      
      return new Promise((resolve) => {
        
        let isSubscribed = false;
        
        onSnapshot(collectionRef, async (snap) => {

          snap.forEach((doc) => {
            const subscription = doc.data()
            const firstItem = subscription.items[0];
            if (firstItem && firstItem.plan) {
              isSubscribed = firstItem.plan.active;
              console.log('in isUserSubscribed 1',isSubscribed)
            }
          });
          resolve(isSubscribed);
        });
      });
    }
}
