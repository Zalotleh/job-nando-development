import React, { useState } from 'react';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import Layout2 from '@/components/Layout2';


export default function UpdateProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleUpdateEmailButton = async (e) => {
    e.preventDefault();
    if (!newEmail.trim()) {
      setErrorMessage('Please enter a valid email');
      return;
    }
    setStatus('pending');
    setErrorMessage("")

    try {
       await updateEmail(user, newEmail),
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to update email. Please try again later.');
      console.error(error);
    }
  };
  
  
  const handleUpdateProfileInfoButton = async (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      setErrorMessage('Please enter a valid name');
      return;
    }
    setStatus('pending');
    setErrorMessage("")
    try {
       await updateProfile(user, {
          displayName: newName,
        }),
       await updateEmail(user, newEmail),
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to update profile. Please try again later.');
      console.error(error);
    }
  };
  
  return (
    <>
    <Layout2
      metaTitle={'Update Your Profile information page'}
      pageTitle={'Update Your Profile'}
    >

        <div className="container justify-around gap-5 px-16 py-16 mx-auto  mt-5 shadow-lg shadow-cyan-500">
        <form>
        <h2 className="text-3xl font-semibold text-cyan-900 mb-20 underline">Your Profile Details</h2>
        {user ? (
          <div className="flex flex-row flex-wrap gap-20">
            <div>
              <h2 className="text-cyan-900 text-2xl font-medium mb-4">User name:</h2>
              <p className="text-cyan-700 text-2xl mb-10 border rounded-md w-fit px-2 py-2">{user.displayName}</p>
            </div>
            <div>
              <h2 className="text-cyan-900 text-2xl font-medium mb-4">Email address:</h2>
              <p className="text-cyan-700 text-2xl mb-20 border rounded-md w-fit px-2 py-2 ">{user.email}</p>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </form>
      <hr />

        <form>
          <h2 className="text-3xl font-semibold text-cyan-900 mt-20 mb-8 underline">Update your Profile Details</h2>
          
          <label 
            htmlFor="newName"
            className="block text-cyan-900 text-2x1 font-medium mb-1 mt-2"
            >
            New Name
          </label>
          <input
            type="text" 
            id="newName" 
            value={newName} 
            onChange={handleNameChange}
            className="w-auto py-2 px-4 mb-2 mr-5 border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
            />
          <button 
            onClick={handleUpdateProfileInfoButton}
            className="bg-cyan-900 text-white font-medium text-lg py-2 px-4 mt-2 mb-10 rounded-md hover:bg-cyan-500 transition"
            >
            Update User Name
          </button>

          <label 
            htmlFor="newEmail"
            className="block text-cyan-900 text-2x1 font-medium mb-1"
            >
            New email
          </label>
          <input 
            type="email" 
            id="newEmail" 
            value={newEmail} 
            onChange={handleEmailChange}
            className="w-auto py-2 px-4 mb-2 mr-5 border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
            />
          <button 
            onClick={handleUpdateEmailButton}
            className="bg-cyan-900 text-white font-medium text-lg py-2 px-4 mt-2 mb-10 rounded-md hover:bg-cyan-500 transition"
            >
            Update Email Address
          </button>

        </form>
      
        {status === 'pending' && <p>Loading...</p>}
        {status === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8" role="alert">
            <p className="font-bold">Success!</p>
            <p>Email or profile updated successfully.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-8" role="alert">
            <p className="font-bold">Error!</p>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </Layout2>
    </>
  );
}