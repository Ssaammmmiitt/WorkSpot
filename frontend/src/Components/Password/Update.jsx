import React from "react";

const Update =() =>
    {
        return(
            <>
            <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg border-2 border-Secondary">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-Text ">Update Password</h1>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label for="email" className="block text-sm font-bold ml-1 mb-2 ">New Password</label>
                <div className="relative">
                  <input type="password" id="new_password" name="password" className="py-3 px-4 block w-full border-2 border-Primary rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm hover:border-black " required aria-describedby="email-error"/>
                </div>
                <label for="email" className="block text-sm font-bold ml-1 mb-2 ">Confirm New Password</label>
                <div className="relative">
                  <input type="password" id="new_password" name="password" className="py-3 px-4 block w-full border-2 border-Primary rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm hover:border-black " required aria-describedby="email-error"/>
                </div>
              </div>
              <div className="flex justify-center items-center">
              <a href="#_" className="relative flex justify-center w-[50%] px-5 py-3 overflow-hidden font-medium text-Text bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-Text group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-Text group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-Text group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-Text group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative  text-center text-bold font-medium transition-colors duration-300 delay-200 group-hover:text-white ease">Update Password</span>
</a>
              </div>
              {/* <button href="#_" class="relative inline-flex items-center justify-center w-[50%] p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-Primary rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-Primary 0 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-Primary transition-all duration-300 transform group-hover:translate-x-full ease">Reset Password</span>
<span class="relative invisible">Login</span>
</button>           */}
           </div>
          </form>
        </div> 
      </div>
    </div>
  </main>
  </>
        )
    }


export default Update;