// import {db} from '../../firebase/config'
import {db} from '../../firebase/firebaseAdmin'

export default async function handler(req, res) {
    const { method, body } = req;
  
    switch (method) {
      case 'GET': {
        // Retrieve all cover letters for current user
        const { uid } = body;
        const querySnapshot = await db
          .collection('cover_letters')
          .where('user_id', '==', uid)
          .get();
  
        const coverLetters = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        res.status(200).json({ data: coverLetters });
        break;
      }
      case 'POST': {
        // Create a new cover letter
        const { uid, text } = body;
        const createdAt = admin.firestore.FieldValue.serverTimestamp();
  
        const newCoverLetterRef = await db.collection('cover_letters').add({
          user_id: uid,
          text,
          created_at: createdAt,
          updated_at: createdAt,
        });
  
        const newCoverLetter = {
          id: newCoverLetterRef.id,
          user_id: uid,
          text,
          created_at: createdAt,
          updated_at: createdAt,
        };
  
        res.status(201).json({ data: newCoverLetter });
        break;
      }
      case 'PUT': {
        // Update an existing cover letter
        const { id, text } = body;
        const updatedAt = admin.firestore.FieldValue.serverTimestamp();
  
        await db
          .collection('cover_letters')
          .doc(id)
          .update({
            text,
            updated_at: updatedAt,
          });
  
        res.status(204).end();
        break;
      }
      case 'DELETE': {
        // Delete an existing cover letter
        const { id } = body;
  
        await db.collection('cover_letters').doc(id).delete();
  
        res.status(204).end();
        break;
      }
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  