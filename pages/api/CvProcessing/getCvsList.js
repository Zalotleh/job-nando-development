import { getDocs, getFirestore,collection, doc } from 'firebase/firestore'
import {firebase_app} from '@/firebase/config'
const database = getFirestore(firebase_app)

export default async function getCvsList (user_id) {
    try {
        const cvsCollRef = collection(database, `users/${user_id}/cvs`)
        const querySnapshot = await getDocs(cvsCollRef)
        const cvslist = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          return cvslist

    } catch (error) {
      // Handle any errors that occur during the fetching process
      console.log('Error fetching cvsList:', error);
      return null;
    }
  };
  