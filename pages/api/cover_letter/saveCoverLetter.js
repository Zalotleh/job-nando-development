import firebase_app from '../../../firebase/config'
import {doc, setDoc, getFirestore, serverTimestamp } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const database = getFirestore(firebase_app)

export default async function saveCoverLetterFunction({user_id, coverLetter,cv_id,coverLetterTitle}) {

    
    try{

        const coverLetter_id = uuidv4()
        const CLRef = doc(database, `users/${user_id}/cover_letters/${coverLetter_id}`)
        await setDoc(CLRef, {
            coverLetterTitle,
            created_at: serverTimestamp(),
            coverLetter_id,
            cv_id,
            coverLetter,
        })
        return coverLetter_id
    }catch(error){
        console.log(error)
        throw error
    }
}
