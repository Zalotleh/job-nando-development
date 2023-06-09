import { getDocs, getFirestore,collection } from 'firebase/firestore'
import {firebase_app} from '@/firebase/config'

const database = getFirestore(firebase_app)

export default async function getCoverLettersList (user_id) {
    try {
        const clsCollRef = collection(database, `users/${user_id}/cover_letters`)
        const querySnapshot = await getDocs(clsCollRef)
        const clslist = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
         return clslist
    } catch (error) {
      console.log('Error fetching cvsList:', error);
      return null;
    }
  };
  