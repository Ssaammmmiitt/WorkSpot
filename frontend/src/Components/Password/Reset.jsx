import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";
import { getAuth } from "firebase/auth";
import { db_firebase } from "../../firebase/firebase.config";
import { useState } from "react";
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};


const Reset = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const email = useFormInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email.value);
      console.log("Password reset email sent");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg border-2 border-Secondary">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-Text ">Forgot password?</h1>
              <p className="mt-2 text-sm text-Text ">
                Remember your password?
                <Link to="/login" className="text-Accent decoration-2 hover:underline font-medium" href="#">
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label for="email" className="block text-sm font-bold ml-1 mb-2 ">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email" name="email" className="py-3 px-4 block w-full border-2 border-Secondary rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm hover:border-black " required aria-describedby="email-error"
                        {...email} />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link onClick={handleSubmit} to="/reset-otp" href="#_" className="relative flex justify-center w-[50%] px-5 py-3 overflow-hidden font-medium text-Text bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-Text group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-Text group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-Text group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-Text group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Reset Password</span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


export default Reset;