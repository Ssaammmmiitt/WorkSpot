import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="px-6 mb-6 sm:py-12 lg:px-6 mx-auto w-[90%] max-w-5xl mt-2 bg-white rounded-lg shadow-sm border-2 border-Primary">
      <div className="container mx-auto flex flex-col p-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Terms and Conditions
        </h2>
        <div className="space-y-6">
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">1. Introduction</h3>
              <p className="mt-2 text-gray-700">
                Welcome to WorkSpot. These terms and conditions outline the
                rules and regulations for the use of WorkSpot's website and
                services.
              </p>
            </div>
          </div>
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                2. Acceptance of Terms
              </h3>
              <p className="mt-2 text-gray-700">
                By accessing this website, we assume you accept these terms and
                conditions. Do not continue to use WorkSpot if you do not agree
                to all of the terms and conditions stated on this page.
              </p>
            </div>
          </div>
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">3. License</h3>
              <p className="mt-2 text-gray-700">
                Unless otherwise stated, WorkSpot and/or its licensors own the
                intellectual property rights for all material on WorkSpot. All
                intellectual property rights are reserved. You may access this
                from WorkSpot for your own personal use subjected to
                restrictions set in these terms and conditions.
              </p>
            </div>
          </div>
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                4. User Responsibilities
              </h3>
              <p className="mt-2 text-gray-700">
                You must use our website and services responsibly and comply
                with all applicable laws and regulations. You must not:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Republish material from WorkSpot</li>
                <li>Sell, rent, or sub-license material from WorkSpot</li>
                <li>Reproduce, duplicate, or copy material from WorkSpot</li>
                <li>Redistribute content from WorkSpot</li>
              </ul>
            </div>
          </div>
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                5. Limitation of Liability
              </h3>
              <p className="mt-2 text-gray-700">
                WorkSpot shall not be held liable for any damages arising out of
                or in connection with your use of our website. This includes,
                without limitation, direct loss, loss of business or profits
                (whether or not the loss of such profits was foreseeable, arose
                in the normal course of things, or you have advised WorkSpot of
                the possibility of such potential loss), damage caused to your
                computer, computer software, systems, and programs, and the data
                thereon or any other direct or indirect, consequential, and
                incidental damages.
              </p>
            </div>
          </div>
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                6. Changes to Terms
              </h3>
              <p className="mt-2 text-gray-700">
                WorkSpot reserves the right to revise these terms and conditions
                at any time. By using this website, you are expected to review
                these terms and conditions regularly.
              </p>
            </div>
          </div>
          <div className="py-4 mx-auto">
            <div className="flex flex-col justify-center max-w-3xl mx-auto text-center lg:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                7. Contact Information
              </h3>
              <p className="mt-2 text-gray-700">
                If you have any questions about these Terms and Conditions,
                please contact us at [contact information].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
