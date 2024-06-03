// import React from 'react';

// const TermsAndConditions = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg md:p-10 text-base">
//       <h1 className="text-3xl font-bold mb-4 md:text-4xl">Terms and Conditions</h1>
//       <p className="mb-4 text-lg md:text-xl">Welcome to WorkSpot! By signing up as a user on our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
      
//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">1. Acceptance of Terms</h2>
//         <p className="mb-2 text-sm md:text-lg">By creating an account on WorkSpot, you accept and agree to be bound by these terms and conditions, as well as our Privacy Policy. If you do not agree with these terms, you should not sign up for or use our services.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">2. User Eligibility</h2>
//         <p className="mb-2 text-base md:text-lg">To register as a user on WorkSpot, you must be at least 18 years old or the age of majority in your jurisdiction. You must provide accurate and complete information during the registration process and update your information to keep it current.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">3. Account Security</h2>
//         <p className="mb-2 text-base md:text-lg">You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. WorkSpot is not liable for any loss or damage arising from your failure to protect your account.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">4. User Conduct</h2>
//         <p className="mb-2 text-base md:text-lg">You agree to use WorkSpot for lawful purposes only and not to engage in any conduct that restricts or inhibits any other user from using or enjoying the platform. Prohibited conduct includes, but is not limited to, uploading false information, infringing on the rights of others, and transmitting harmful or malicious content.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">5. Job Applications</h2>
//         <p className="mb-2 text-base md:text-lg">When applying for jobs through WorkSpot, you agree to provide accurate and truthful information. You acknowledge that WorkSpot is not responsible for the hiring decisions of employers or the content of job listings.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">6. Privacy</h2>
//         <p className="mb-2 text-base md:text-lg">Your use of WorkSpot is subject to our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using WorkSpot, you consent to the collection and use of your information as described in our Privacy Policy.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">7. Termination</h2>
//         <p className="mb-2 text-base md:text-lg">WorkSpot reserves the right to suspend or terminate your account at any time, without notice, for any violation of these terms and conditions or for any other reason deemed appropriate by WorkSpot.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">8. Limitation of Liability</h2>
//         <p className="mb-2 text-base md:text-lg">WorkSpot is not responsible for any damages or losses resulting from your use of the platform. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">9. Changes to Terms</h2>
//         <p className="mb-2 text-base md:text-lg">WorkSpot may update these terms and conditions at any time. We will notify users of any significant changes through the platform. Continued use of WorkSpot after any changes constitutes your acceptance of the new terms.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">10. Governing Law</h2>
//         <p className="mb-2 text-base md:text-lg">These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which WorkSpot operates. Any disputes arising from these terms will be resolved in the courts of that jurisdiction.</p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-xl font-bold md:text-2xl">11. Contact Information</h2>
//         <p className="mb-2 text-base md:text-lg">If you have any questions or concerns about these terms and conditions, please contact us at <a href="mailto:support@workspot.com" className="text-blue-500">support@workspot.com</a>.</p>
//       </section>

//       <p className="mt-6 text-lg md:text-xl">By signing up for WorkSpot, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. Thank you for joining WorkSpot! We look forward to helping you find your perfect job.</p>
//     </div>
//   );
// };

// export default TermsAndConditions;

import React from 'react';

const TermsAndConditions = () => {
    return (
        <section className="px-6 py-12 sm:py-24 lg:px-8 mx-auto w-[90%] max-w mt-7 bg-white rounded-lg shadow-sm border-2 border-Primary">
            <div className="container mx-auto flex flex-col p-6">
                <h2 className="py-4 text-5xl font-bold text-center">Terms and Conditions</h2>
                <div >
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">1. Introduction</span>
                            <span className="mt-4 text-Text">Welcome to WorkSpot. These terms and conditions outline the rules and regulations for the use of WorkSpot's website and services.</span>
                        </div>
                    </div>
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">2. Acceptance of Terms</span>
                            <span className="mt-4 text-Text">By accessing this website, we assume you accept these terms and conditions. Do not continue to use WorkSpot if you do not agree to all of the terms and conditions stated on this page.</span>
                        </div>
                    </div>
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">3. License</span>
                            <span className="mt-4 text-Text">Unless otherwise stated, WorkSpot and/or its licensors own the intellectual property rights for all material on WorkSpot. All intellectual property rights are reserved. You may access this from WorkSpot for your own personal use subjected to restrictions set in these terms and conditions.</span>
                        </div>
                    </div>
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">4. User Responsibilities</span>
                            <span className="mt-4 text-Text">You must use our website and services responsibly and comply with all applicable laws and regulations. You must not:</span>
                            <ul className="list-disc list-inside mt-4 text-Text">
                                <li>Republish material from WorkSpot</li>
                                <li>Sell, rent, or sub-license material from WorkSpot</li>
                                <li>Reproduce, duplicate, or copy material from WorkSpot</li>
                                <li>Redistribute content from WorkSpot</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">5. Limitation of Liability</span>
                            <span className="mt-4 text-Text">WorkSpot shall not be held liable for any damages arising out of or in connection with your use of our website. This includes, without limitation, direct loss, loss of business or profits (whether or not the loss of such profits was foreseeable, arose in the normal course of things, or you have advised WorkSpot of the possibility of such potential loss), damage caused to your computer, computer software, systems, and programs, and the data thereon or any other direct or indirect, consequential, and incidental damages.</span>
                        </div>
                    </div>
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">6. Changes to Terms</span>
                            <span className="mt-4 text-Text">WorkSpot reserves the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms and conditions regularly.</span>
                        </div>
                    </div>
                    <div className="p-8 mx-auto space-y-8">
                        <div className="flex flex-col justify-center max-w-3xl text-center lg:text-left">
                            <span className="text-xl font-bold md:text-2xl">7. Contact Information</span>
                            <span className="mt-4 text-Text">If you have any questions about these Terms and Conditions, please contact us at [contact information].</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;