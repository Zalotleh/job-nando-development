import admin from 'firebase-admin'


const serviceAccount = require('/career-coach-f8de8-firebase-adminsdk-hj99i-324f9c70db.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });


const db = admin.firestore();

export default db