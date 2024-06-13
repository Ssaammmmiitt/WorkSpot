import React from "react";
import InputField from "../InputField.jsx";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <label className="sidebar-label-container">
        <input type="radio" name="test" id="all" value="" onChange={handleChange} />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="lalitpur"
          title="Lalitpur"
          name="test"
          id="115"
        />

        <InputField
          handleChange={handleChange}
          value="kathmandu"
          title="Kathmandu"
          name="test"
          id="116"
        />

        <InputField
          handleChange={handleChange}
          value="bhaktapur"
          title="Bhaktapur"
          name="test"
          id="117"
        />
      </div>
    </div>
  );
};

export default Location;
