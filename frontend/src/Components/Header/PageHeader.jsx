import React from 'react'

const PageHeader = () => {
  return (
    <div className='py-24 mt-3 bg-[#Fafafa] rounded flex items-center justify-center'>
        <div>
            <h2 className='text-3xl text-Primary font-medium mb-1 text-center'>Estimated Salary</h2>
            <p className='text-sm text-center'><a href='/'>Home</a>/Salary</p>
        </div>
    </div>
  )
}

export default PageHeader