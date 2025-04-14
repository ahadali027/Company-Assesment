import React from "react";

const ShareClassForm = ({ shareStructure, onChange }) => {
  const handleAddShareClass = () => {
    const newShareStructure = [...shareStructure, { class: "", quantity: 0 }];
    onChange(newShareStructure);
  };

  const handleRemoveShareClass = (index) => {
    const newShareStructure = shareStructure.filter((_, i) => i !== index);
    onChange(newShareStructure);
  };

  const handleShareClassChange = (index, field, value) => {
    const newShareStructure = shareStructure.map((share, i) => {
      if (i === index) {
        return { ...share, [field]: value };
      }
      return share;
    });
    onChange(newShareStructure);
  };

  return (
    <div className="space-y-4 p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
        <p className="text-sm sm:text-base text-gray-700">Share Classes</p>
        <button
          type="button"
          onClick={handleAddShareClass}
          className="w-full sm:w-auto px-3 py-1.5 bg-blue-600 text-white text-sm sm:text-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Share Class
        </button>
      </div>

      {shareStructure.map((share, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
          <div className="w-full">
            <input
              type="text"
              value={share.class}
              onChange={(e) => handleShareClassChange(index, "class", e.target.value)}
              className="w-full text-sm sm:text-base border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share Class Name"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <input
              type="number"
              value={share.quantity}
              onChange={(e) => handleShareClassChange(index, "quantity", parseInt(e.target.value) || 0)}
              className="w-full text-sm sm:text-base border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Quantity"
              min="0"
            />
            <button
              type="button"
              onClick={() => handleRemoveShareClass(index)}
              className="w-full sm:w-auto px-3 py-1.5 bg-red-600 text-white text-sm sm:text-base rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShareClassForm; 