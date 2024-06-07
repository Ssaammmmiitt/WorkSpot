import React from 'react'

const InputField = ({handleChange, value, title, name,id }) => {
  return (
    <label className='sidebar-label-container'>
    <input 
     type="radio"
     name={name}
     value={value}
     onChange={handleChange}
     id={id}
    />
    <span className="checkmark"></span>{title}
</label>
)
}

export default InputField