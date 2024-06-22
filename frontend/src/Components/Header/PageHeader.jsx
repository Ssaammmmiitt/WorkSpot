import React from 'react'

const PageHeader = () => {
  return (
    // <div className='py-24 mt-3   rounded flex items-center justify-center bg-[url("/abc1.jpg")] bg-cover bg-center transition-transform duration-500'>
    <div className=" w-[90%] mx-auto py-24 mt-3 rounded flex items-center justify-center bg-cover bg-center transition-transform duration-500" style={{ backgroundImage: "url('/salary.jpg')" }}>
        <div className=''>
            <h2 className='text-3xl text-white font-medium mb-1 text-left'>Estimated Salary</h2>
            <p className='text-sm text-white text-left'><a href='/'>Home</a>/Salary</p>
        </div>
    </div>
  )
}

export default PageHeader
