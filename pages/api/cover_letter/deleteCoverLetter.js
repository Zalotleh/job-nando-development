import { getFirestore, doc, deleteDoc } from 'firebase/firestore'
import {firebase_app} from '@/firebase/config'
const database = getFirestore(firebase_app)

export default async function deleteCoverLetterFunction(user_id, coverLetter_id) {
  try{
    const coverLetterRef = doc(database, `users/${user_id}/cover_letters`, coverLetter_id)
    await deleteDoc(coverLetterRef)
  }catch(error){
    throw error
  }
}

