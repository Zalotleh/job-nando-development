import { getDoc, getFirestore,collection, doc } from 'firebase/firestore'
import firebase_app from '@/firebase/config'

const database = getFirestore(firebase_app)

export default async function fetchCvData (cvId, user_id) {
    
    try {
        const cvsCollRef = doc(database, `users/${user_id}/cvs`, cvId)
        const docSnap = await getDoc(cvsCollRef);
        if (docSnap.exists()) {
            const cvData = docSnap.data();
            return cvData;
        } else {
            // Handle case when the CV document does not exist
            return null;
        }
    } catch (error) {
      // Handle any errors that occur during the fetching process
      console.log('Error fetching cvData:', error);
      return null;
    }
  };
  