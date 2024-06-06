import React from 'react'
import InputField from '../InputField';


const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Type Of Employment</h4>

    <div>
      <label className="sidebar-label-container">
      <input type="radio" name="test" id="all" value="" onChange={handleChange} />
        <span className="checkmark"></span>Any Experience
      </label>

      <InputField
        handleChange={handleChange}
        value="full time"
        title="Full-time"
        name="test"
      />
      <InputField
        handleChange={handleChange}
        value="part time"
        title="Part-time"
        name="test"
      />    
      <InputField
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="test"
      />

      
    </div>
  </div>
    )
}

export default EmploymentType