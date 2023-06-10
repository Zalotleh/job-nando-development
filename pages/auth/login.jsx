import React, { useState } from "react";
import Head from "next/head";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import AllNavbar from "@/components/landingPage/PageNavbar";
import Layout2 from "@/components/Layout2";

const LoginPage = () => {
  const methods = useForm({ mode: "onBlur" });
  const [errorMessage, setErrorMessage] = useState(null);
  const { logIn, ProviderSignIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      router.push("./../account/Dashboard");
    } catch (error) {
      const errorCode = error.code;
      let formattedCode = errorCode.replace("auth/", "")
      formattedCode = formattedCode.split("-").join(" ")
      setErrorMessage(formattedCode);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await ProviderSignIn();
      router.push("./../account/Dashboard");
    } catch (error) {
      const errorCode = error.code;
      let formattedCode = errorCode.replace("auth/", "")
      formattedCode = formattedCode.split("-").join(" ")
      setErrorMessage(formattedCode);
    }
  };

  return (
    <>

      <Layout2
        metaTitle={'Log in Page'}
        pageTitle={'Log in'}
      >

      <section className="flex flex-col mb-4" >

        <div className="sign-up-form container mx-auto w-96 mt-20 mb-12 font-sans border-4  rounded-lg shadow-lg shadow-cyan-500 dark:shadow-lg dark:shadow-cyan-900">
          {/* <h2 className="px-12 mt-8 text-center text-4xl font-semibold font-sans text-cyan-900">Log In</h2> */}
          <FormProvider {...methods}>
            <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-cyan-900">
                    Email
                  </label>
                </div>

                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-cyan-500 text-black-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                  />
                {errors.email && <p className="text-red-400">{errors.email.message}</p>}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-cyan-900">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  {...register("password", { required: "Password is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-cyan-500 text-black-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
              </div>

              <button type="button" onClick={() => router.push('/auth/forgotPassword')}  className="text-sm text-cyan-500 hover:text-cyan-900 cursor-pointer">
                  Forgot Password?
                </button>

                {errorMessage && <p className="text-red-400" >Please try again: <span style={{textTransform: "capitalize"}}>{errorMessage}</span></p>}

              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="border border-b-gray-400 rounded-md text-white text-xl font-bold bg-cyan-900 hover:bg-cyan-500 hover:text-white px-10 py-5">
                  Log In
                </button>

              </div>

              <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
              <span className="absolute px-3 font-medium text-cyan-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-black-900">or</span>
              </div>

              <div className="flex justify-center pt-4">
                  <button type="button"
                    onClick={handleGoogleSignIn}
                    className=" font-bold	rounded-lg  px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 shadow-lg border border-b-gray-400 text-white text-xl bg-cyan-900 hover:bg-cyan-500 hover:text-white"
                  >
                  <svg className="w-4 h-4 mr-2 -ml-1 " aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" 
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    >
                      </path>
                  </svg>
                    Continue with Google
                  </button>
                  
              </div>
              
            </form>
          </FormProvider>
          
        </div>
        <div className='mx-auto text-cyan-900' >
          &copy; 2023 Ziad Alotleh. All rights reserved.
        </div>
      </section>

      </Layout2>  
   </>
  );
};

export default LoginPage;