import React, { useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import Layout2 from "@/components/Layout2";

const SignupPage = () => {
  const methods = useForm({ mode: "onBlur" });
  const [errorMessage, setErrorMessage] = useState("");
  const  [ isLoading, setIsLoading] = useState(false)
  const { signUp, ProviderSignIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const password = useWatch({
    control: methods.control,
    name: "password",
  });
  const confirmPassword = useWatch({
    control: methods.control,
    name: "confirmPassword",
  });

  const onSubmit = async (data) => {
    setIsLoading(true); // set loading to true on submit
    try {
      await signUp( data.email, data.password);

      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      let formattedCode = errorCode.replace("auth/", "")
      formattedCode = formattedCode.split("-").join(" ")
      setErrorMessage(formattedCode);
    }
    setIsLoading(false); // set loading to false after submit

  };

  const handleButtonClick = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      handleSubmit(onSubmit)();
    }
  };


  const handleGoogleSignUp = async () => {
    setIsLoading(true); // set loading to true on google sign up

    try {
      await ProviderSignIn();
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      let formattedCode = errorCode.replace("auth/", "")
      formattedCode = formattedCode.split("-").join(" ")
      setErrorMessage(formattedCode);
    }
    setIsLoading(false); // set loading to false after google sign up

  };

  return (
    <>
      <Layout2
        metaTitle={'Sign Up Page'}
        pageTitle={'Sign Up'}
      >

      <section className="flex flex-col mb-8" >
        <div className="sign-up-form container mx-auto w-96 mt-5 mb-12 font-sans border-4  rounded-lg shadow-lg shadow-cyan-600 dark:shadow-lg dark:shadow-[#37C9EF]">

          <FormProvider {...methods}>
            <form 
              disabled={isLoading}
              className="w-80 mx-auto pb-12 px-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-cyan-900">
                    Email
                  </label>
                </div>

                <input
                  type="email"
                  disabled={isLoading}
                  {...register("email", { required: "Email is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-cyan-500 text-black-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.email && <p className="text-red-400">{errors.email.message}</p>}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-cyanS-900">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  disabled={isLoading}
                  {...register("password", { required: "Password is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-cyan-500 text-black-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="block mb-3 font-sans text-cyan-900">
                    Confirm Password
                  </label>
                </div>

                <input
                disabled={isLoading}
                  type="password"
                  {...register("confirmPassword", {
                    required: "Verify your password",
                  })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-cyan-500 text-black-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400">{errors.confirmPassword.message}</p>
                )}
              </div>
              {errorMessage && 
                <p className="text-red-400" >
                  Please try again: 
                  <span 
                    style={{textTransform: "capitalize"}}
                  >
                    {errorMessage}
                  </span>
                </p>
              }

              <div className="flex justify-center pt-8">
                <button
                  type="button"
                  onClick={handleButtonClick}
                  disabled={isLoading}
                  className={"text-white bg-cyan-900 hover:bg-cyan-500/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 shadow-md shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80"}>
                
                  <p className="capitalize text-white text-lg font-bold mr-6 ml-6">submit</p>
                </button>
              </div>

              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <span
                  disabled={isLoading}
                  className="absolute px-3 font-medium text-cyan-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-cyan-900"
                >or
                </span>
              </div>


              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleGoogleSignUp}
                  className="text-white bg-cyan-900 hover:bg-cyan-500/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 text-lg font-bold rounded-lg px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2 shadow-md shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80"
                >
                  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" 
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

export default SignupPage;