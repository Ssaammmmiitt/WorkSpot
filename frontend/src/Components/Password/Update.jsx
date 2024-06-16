import React from "react";

const Update = () => {
  return (
    <>
      <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg border-2 border-Secondary">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-Text ">
                Update Password
              </h1>
            </div>

            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-bold ml-1 mb-2 "
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="new_password"
                        name="password"
                        className="py-3 px-4 block w-full border-2 border-Primary rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm hover:border-black "
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <label
                      for="email"
                      className="block text-sm font-bold ml-1 mb-2 "
                    >
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="new_password"
                        name="password"
                        className="py-3 px-4 block w-full border-2 border-Primary rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm hover:border-black "
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <a
                      href="#_"
                      className="relative flex justify-center w-[50%] px-5 py-3 overflow-hidden font-medium text-Text bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                    >
                      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-Text group-hover:w-full ease"></span>
                      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-Text group-hover:w-full ease"></span>
                      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-Text group-hover:h-full ease"></span>
                      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-Text group-hover:h-full ease"></span>
                      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                      <span className="relative  text-center text-bold font-medium transition-colors duration-300 delay-200 group-hover:text-white ease">
                        Update Password
                      </span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Update;
