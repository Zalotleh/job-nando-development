import { getDoc, getFirestore, doc } from 'firebase/firestore'
import firebase_app from '@/firebase/config'

const database = getFirestore(firebase_app)

export default async function fetchCoverLetterData (coverLetterId, user_id) {
    
        try {
          const clDocRef = doc(database, `users/${user_id}/cover_letters/${coverLetterId}`);
          const clDoc = await getDoc(clDocRef);
          if (clDoc.exists()) {
            const clData = clDoc.data();
            return clData;
          } else {
            console.error('Cover Letter not found');
          }
        } catch (error) {
          console.error('Error fetching Cover Letter data:', error);
          throw error
        }
      };