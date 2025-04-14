import React, { useState } from "react";

const NumberDropdown = ({ value, onChange }) => {
  return (
    <div className="w-full sm:w-auto">
      <select
        id="number-select"
        className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {[...Array(10)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NumberDropdown;
