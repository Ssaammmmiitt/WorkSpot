import React from 'react'
import InputField from '../InputField';


const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Type Of Employment</h4>

    <div>
      <label className="sidebar-label-container">
      <input type="radio" name="test" id="all3" value="" onChange={handleChange} />
        <span className="checkmark"></span>Any Type
      </label>

      <InputField
        handleChange={handleChange}
        value="full time"
        title="Full-time"
        name="test"
        id="118"
      />
      <InputField
        handleChange={handleChange}
        value="part time"
        title="Part-time"
        name="test"
        id="119"
      />    
      <InputField
        handleChange={handleChange}
        value="temporary"
        title="Temporary"
        name="test"
        id="120"
      />

      
    </div>
  </div>
    )
}

export default EmploymentType