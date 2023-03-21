import { collection, addDoc, getFirestore, getDocs, query as dbQuery , where } from 'firebase/firestore/lite';
import { firebase_app } from '../../firebase/config';


export default async function handler(req, res) {
    const database = getFirestore(firebase_app);
    const collectionRef = collection(database, 'cover_letters');

    const {method, query} = req;

    switch (method) {
        case 'GET': {
            try {
              const { user_id } = query;      
              // Query for the cover letter with the specified user ID
              const q = dbQuery(collectionRef, where('user_id', '==', user_id))
              const querySnapshot = await getDocs(q);
              const coverLetters = querySnapshot.docs.map((doc) => ({
                 id: doc.id, ...doc.data() 
                }));
              res.status(200).json({ data: coverLetters });
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'Unable to retrieve the cover letter' });
            }
            break;
          }
          
        case 'POST': {
            try {
              const { coverLetterText, user_id } = req.body;
              const createdAt = new Date()
              const updatedAt = createdAt;
              const data = { coverLetterText, created_at: createdAt, updated_at: updatedAt, user_id };
          
              // Create a new cover letter with a random ID
              const docRef = await addDoc(collectionRef, data);
              const coverLetter = { id: docRef.id, ...data };
          
              res.status(201).json({ data: coverLetter });
            } catch (error) {
              console.error(error);
              res.status(500).json({ error: 'Unable to create the cover letter' });
            }
            break;
          
          
        }
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
