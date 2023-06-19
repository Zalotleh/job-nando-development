import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth, deleteUser } from 'firebase/auth';
import Layout2 from '@/components/Layout2';

export default function DeleteAccount() {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.uid) {
      router.push('/');
    }
  }, [user, router]);

  const handleDelete = async (e) => {
    e.preventDefault();
    setStatus('pending');
    // TODO show message for the customer that they should 

    try {
      if (user) {
        await deleteUser(user);
        alert('The account has been deleted successfuly')
        // Profile deletion successful, redirect to home page
        router.push('/');
      }
    } catch (error) {
      if (error.code === 'auth/requires-recent-login') {
        // User needs to log in again, redirect to login page
        router.push('/auth/RedirectingPage');
      } else {
        console.error('Error deleting profile:', error);
        setStatus('error');
        setErrorMessage(error.message);
      }
    }
  };

  const cancelDeleteAccount = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      <Layout2 
        metaTitle={'Delete your Account Page'} 
        pageTitle={'Delete your Account'}
      >

        <div className="flex justify-center items-center h-screen"></div>
        {showConfirmation? (
          <>
          
          <div className="fixed inset-0 bg-cyan-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-lg p-8 text-center text-cyan-900">
              <h2 className="text-lg font-semibold mb-4">Sorry to see you leaving, are you absolutely sure?</h2>
              <p className="text-sm mb-8">
                This action cannot be undone. It will permanently delete your account and remove your data from our
                servers.
              </p>
              <div>
                <button
                  onClick={handleDelete}
                  className="bg-[#ef3737] text-white font-medium text-sm py-2 px-4 mr-4 rounded-md hover:bg-red-800 transition"
                >
                  Confirm
                </button>
                <button
                  onClick={cancelDeleteAccount}
                  className="bg-cyan-900 text-white font-medium text-sm py-2 px-4 rounded-md hover:bg-cyan-500 transition"
                >
                  Cancel
                </button>
              </div>

            </div>
          </div>
          </>
        ):(
          <p>Account deleted successfully.</p>
          )}
          {status === 'error' && <p>Error: {errorMessage}</p>}
      
      </Layout2>
    </>
  );
}
