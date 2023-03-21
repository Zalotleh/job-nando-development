import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import CoverLetter1 from '@/components/CoverLetter1';

const Profile = () => {
  const { user } = useAuth();
  const [coverLetters, setCoverLetters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!user || !user.uid) {
        return;
      }
      try {
        const { data } = await axios.get(`/api/saveCoverLetter?user_id=${user.uid}`);
      setCoverLetters(data.data);
      } catch (error) {
        console.error(error);
      }
    }    
    fetchData();
  }, [user.uid]);

  return (

    <>

    <ProtectedRoute>
      <div >
        <div >
          <h1>Hello {user.email}</h1>
          <h2>{user.uid}</h2>
          <h2 className="text-2xl font-semibold">You are logged in, this is dashboard page!</h2>

          {coverLetters? (
        coverLetters.map((letter) => (
          <p key={letter.id}>{letter.coverLetterText}</p>
        ))
      ) : (
        <p>No cover letters found</p>
      )}
      </div>
      </div>
      <CoverLetter1/>

    </ProtectedRoute>

    </>

  );
};

export default Profile;


/**
 Here are a few potential improvements you could consider for Profile.jsx and savecoverLetter.js:

Error Handling:
Currently, there is minimal error handling in the fetchData function. It is recommended to handle errors with a try-catch block or a .catch() method to prevent any unexpected errors from being thrown.

Refactor Endpoint URL:
The endpoint URL is hardcoded, and it's better to use a variable instead. You can define an environment variable for your API base URL and use it to define your endpoint.

Optimize Realtime Updates:
The current implementation will not update the cover letter in real-time. You could use websockets or Firebase Realtime Database to create real-time updates for your application.

Use Firebase Auth for User ID:
The user ID is currently stored in the user object returned by the useAuth() hook. It's safer to use the user ID provided by Firebase Authentication rather than extracting it from the user object, as it's possible for the user object to be modified in the client-side code.

Use User Data from Firebase Auth:
You can access the user's display name and photo URL from the Firebase Authentication user object to display their name and profile picture in the application.

Use Timestamps for Dates:
You could use the Firebase Firestore Timestamp data type to store the created_at and updated_at fields instead of using JavaScript's Date object. This allows you to work with timestamps easily, and it ensures consistency in your data format. 
 */