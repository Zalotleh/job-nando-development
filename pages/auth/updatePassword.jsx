import { useState } from 'react';
import Head from 'next/head';
import { getAuth, updatePassword } from "firebase/auth";
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const auth = getAuth();
export default function UpdatePassowrd (){
    const[newPassword, setNewPassword] = useState('')
    const[confirmNewPassword, setConfirmNewPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loginErrorMessage, setLoginErrorMessage] = useState('')
    const [successMessage, setsuccessMessage] = useState('')


    const user = auth.currentUser;

    const handleChange = (e)=>{
        e.preventDefault();
        setNewPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e)=>{
        e.preventDefault();
        setConfirmNewPassword(e.target.value)
    }

    const validatePassword = ()=>{
        if(newPassword.length < 8){
            setErrorMessage('Password must be at least 8 characters long')
            return false;
        }
        else if(newPassword !== confirmNewPassword){
            setErrorMessage('Passwords do not match')
            return false;
        }
        return true;
    }

    const handleClick = async ()=>{

        if(!validatePassword()){
            return
        }
        
        await updatePassword(user, newPassword).then(() => {
            // Update successful.
            setsuccessMessage("Your Password has been updated successfully")
            setNewPassword('')
            setConfirmNewPassword('')
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            if (errorCode.includes("auth/requires-recent-login")){
            
                setLoginErrorMessage("For security reasons, in order to update your password please log in again: ")
            }else{
                let formattedCode = errorCode.replace("auth/", "")
                formattedCode = formattedCode.split("-").join(" ")
                setErrorMessage(formattedCode);
            }
      
        });
    }
return(
    <>
     <Head>
      <title>Change your password page</title>
    </Head>
    <Navbar/>
    {!successMessage?
    (
        <div className="container px-16 py-16 mx-auto max-w-md mt-32 shadow-lg shadow-cyan-500">

        <form>
        <h2 className="text-3xl font-semibold text-cyan-900 mb-8">Update your password</h2>

            <label 
            htmlFor="newPassword" 
            className="block text-cyan-900 text-2x1 font-medium mb-4"
            >New Password</label>
            <input 
            type="password" 
            name="newPassword" 
            id="newPassword"
            onChange={handleChange}
            value={newPassword}
            className="w-full py-2 px-4 mb-12 border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"
            />
            <label htmlFor="newPassword" className="block text-cyan-900 text-2x1 font-medium mb-4">Confirm New Password</label>
            <input 
            type="password" 
            name="confirmNewPassword" 
            id="confirmNewPassword" 
            onChange={handleConfirmPasswordChange} 
            value={confirmNewPassword} 
            className="w-full py-2 px-4 mb-12 border border-cyan-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent"

            />
        </form>

        {errorMessage&&<p>{errorMessage}</p>}
        {loginErrorMessage&&(
            <p>
            {loginErrorMessage}
            <Link href={'./login'}>Log In</Link>
            </p>
        )}
        <button 
            type='button' 
            onClick={handleClick}
            className="bg-cyan-900 text-white font-medium text-lg py-2 px-4 mt-4 rounded-md hover:bg-cyan-500 transition"
        >
            Change Password
        </button>
        </div>
    ): (
        <p className='text-cyan-900'>{successMessage}</p>
        )
        }
    </>
)
}