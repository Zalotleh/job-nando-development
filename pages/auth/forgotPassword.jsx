import { useState } from 'react';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import Navbar from '@/components/Navbar';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const auth = getAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth,email);
      setSuccessMessage('Password reset email sent successfully');
    } catch (error) {
      console.log(error.message);
      setErrorMessage('An error occurred while sending the password reset email');
    }
  };

  return (
    <>
    <section className="flex flex-col mb-4" >

    <div className="flex flex-row justify-around	">
        <Navbar />
    </div>

    <div className="container px-16 py-16 mx-auto max-w-lg mt-32 shadow-md shadow-cyan-500">

      <h2 className="text-3xl font-semibold text-black-900 mb-4">Reset your password</h2>

      {successMessage?
       (
         
         <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p>{successMessage}</p>
          </div>
          ):
          
          errorMessage? (
            
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{errorMessage}</p>
        </div>):
        ""}

      <form onSubmit={handleResetPassword}>
        <div className="mb-4">
          <p className="block text-cyan-900 text-lg font-medium mb-6">Please type in the email address connected to your account</p>
          <label htmlFor="email" className="block text-2xl text-cyan-900 font-medium mb-4">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 px-4 border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            required
            />
        </div>
        <button
          type="submit"
          className="bg-cyan-900 text-lg text-white font-medium py-2 px-4 mt-4 rounded-md hover:bg-cyan-500 transition"
          >
          Reset Password
        </button>
      </form>
      
    </div>
    <div className='mx-auto mt-4 text-cyan-900' >
        &copy; 2023 Ziad Alotleh. All rights reserved.
    </div>
    </section>

    
    
  </>
  );
};

export default ForgotPasswordPage;