import React from 'react'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='test' id="test" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>
        </div>
    </div>
  )
}

export default Location