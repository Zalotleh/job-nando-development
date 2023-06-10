import firebase_app from '../../../firebase/config'
import { doc, getFirestore,deleteDoc} from '@firebase/firestore';

const database = getFirestore(firebase_app);

export default async function deleteProfileFunction (user_id){
    try{
        await deleteDoc(doc(database, 'users', user_id));
    }catch(error){
        console.log(error)
    }
}
