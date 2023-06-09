import { getFirestore, doc, deleteDoc } from 'firebase/firestore'
import {firebase_app} from '@/firebase/config'

const database = getFirestore(firebase_app)

export default async function deleteCvFunction(user_id, cv_id) {
  
  try{
    const CvRef = doc(database, `users/${user_id}/cvs`, cv_id)
    await deleteDoc(CvRef)
  }catch(error){
    throw error
  }
}
