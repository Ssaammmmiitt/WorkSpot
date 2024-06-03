import React from "react";


const ContactUs =() => {
    return (
        <div className="px-6 py-12 sm:py-24 lg:px-8 mx-auto w-[90%] max-w mt-7 bg-white rounded-lg shadow-sm border-2 border-Primary"> 
  <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-Text">Let's Talk</h1>
    <p className="mt-3 text-lg text-Text">Feature request? Suggestion? or maybe you'd like to be our critic! Here's a form just for that.</p>
  </div>
  <form className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" className="block text-sm font-semibold leading-6 text-Text">First name</label>
        <div className="mt-2.5">
          <input required="" type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Your First Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-Text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="last-name" className="block text-sm font-semibold leading-6 text-Text">Last name</label>
        <div className="mt-2.5">
          <input required="" type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Your Last Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-Text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="company" className="block text-sm font-semibold leading-6 text-Text">Company</label>
        <div className="mt-2.5">
          <input required="" type="text" name="company" id="company" autocomplete="organization" placeholder="Your Company Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-Text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="email" className="block text-sm font-semibold leading-6 text-Text">Email</label>
        <div className="mt-2.5">
          <input required="" type="email" name="email" id="email" autocomplete="email" placeholder="Your Email Address" className="block w-full rounded-md border-0 px-3.5 py-2 text-Text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="phone" className="block text-sm font-semibold leading-6 text-Text">Phone number</label>
        <div className="mt-2.5">
          <input required="" type="tel" name="phone" id="phone" autocomplete="tel" placeholder="Your Phone Number" className="block w-full rounded-md border-0 px-3.5 py-2 text-Text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label for="message" className="block text-sm font-semibold leading-6 text-Text">Message</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" placeholder="Share your thoughts..." className="block w-full rounded-md border-0 px-3.5 py-2 text-Text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-Primary sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
    <div className="flex justify-center">
        <button href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-Primary  hover:bg-gradient-to-r hover:from-black hover:to-black-200 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Submit</span>
        </button>
      </div>
    </div>
  </form>
</div>

    );
}

export default ContactUs;