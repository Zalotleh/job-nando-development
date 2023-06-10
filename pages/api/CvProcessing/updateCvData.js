import firebase_app from '../../../firebase/config'
import { doc, getFirestore,setDoc, serverTimestamp} from '@firebase/firestore';


const database = getFirestore(firebase_app);

export default async function updateCvData (user_id, CvData, cv_id) {
        try {
              const cvRef = doc(database, 'users', user_id, 'cvs', cv_id)
                await setDoc(cvRef, {
                     CvData,
                     updated_at: serverTimestamp()
                }, { merge: true })

                return cvRef.id
            }
           catch (error) {
                console.error("Error saving CV data:", error);
                throw new Error("Could not save CV data");
            }
  }

