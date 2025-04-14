import React from "react";

const SuburbInput = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Suburb
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm sm:text-base border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter suburb"
      />
      <p className="text-sm text-gray-500 mt-1">
        Type few characters in suburb and then select from drop down list.
      </p>
    </div>
  );
};

export default SuburbInput; 