import firebase_app from '../../../firebase/config'
import { doc, getFirestore, collection, getDocs,query, setDoc, serverTimestamp} from '@firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


const database = getFirestore(firebase_app);

export default async function saveCvData (user_id, CvData, cvTitle) {
        let cvRef = ""
        try {
                // if cv_id doesn't exist, create a new cv
                // check if the user has already created the maximum number of CVs
                const cvQuerySnapshot = await getDocs(
                query(collection(database, 'users', user_id, 'cvs'))
                )
                const numberOfCvs = cvQuerySnapshot.docs.length
                if (numberOfCvs >= 5) {
                  throw new Error('You have reached the maximum number of CVs')
                }
                const cv_id = uuidv4() // generate a unique ID for the new cv
                cvRef = doc(database, 'users', user_id, 'cvs', cv_id)
                await setDoc(cvRef, {
                      CvData,
                      cvTitle,
                      created_at: serverTimestamp(),
                      cv_id,
                })
                return cvRef.id
            }
          catch (error) {
        // console.error("Error saving CV data:", error);
        throw new Error(`Could not save CV data: ${error}`);
      }
  }


