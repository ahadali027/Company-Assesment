import React, { useState, useEffect } from 'react';

const ShareClassForm = () => {
  const [shares, setShares] = useState({
    ORDINARY: { allotted: '', value: '', total: 0 },
    A: { allotted: '', value: '', total: 0 },
    B: { allotted: '', value: '', total: 0 },
    C: { allotted: '', value: '', total: 0 },
    D: { allotted: '', value: '', total: 0 },
    E: { allotted: '', value: '', total: 0 },
    F: { allotted: '', value: '', total: 0 },
    G: { allotted: '', value: '', total: 0 },
  });

  const [showWarning, setShowWarning] = useState(true);

  const predefinedValues = [
    '1.00', '5.00', '10.00', '20.00', '100.00', 
    '0.01', '0.05', '0.10', '0.20', '0.25', '0.50'
  ];

  // Check if any share class has data
  useEffect(() => {
    const hasData = Object.values(shares).some(
      share => share.allotted !== '' || share.value !== ''
    );
    setShowWarning(!hasData);
  }, [shares]);

  const handleAllottedChange = (shareClass, value) => {
    const updatedShares = { ...shares };
    updatedShares[shareClass].allotted = value;
    
    // Reset value and total if allotted is empty
    if (!value) {
      updatedShares[shareClass].value = '';
      updatedShares[shareClass].total = 0;
    }
    
    setShares(updatedShares);
  };

  const handleValueChange = (shareClass, value) => {
    const updatedShares = { ...shares };
    updatedShares[shareClass].value = value;
    
    // Calculate total
    const allotted = parseFloat(updatedShares[shareClass].allotted) || 0;
    const shareValue = parseFloat(value) || 0;
    updatedShares[shareClass].total = allotted * shareValue;
    
    setShares(updatedShares);
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md mt-4 sm:mt-5">
      {showWarning && (
        <div className="mb-4 text-sm sm:text-base text-red-600 bg-[#f2dede] p-3 sm:p-5 font-medium rounded-md">
          At least one share class is required
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Share Class</th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Shares to be Allotted</th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Value per Share</th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Total Share Capital</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(shares).map(([shareClass, data]) => (
              <tr key={shareClass}>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                  {shareClass}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                  <input
                    type="number"
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={data.allotted}
                    onChange={(e) => handleAllottedChange(shareClass, e.target.value)}
                    placeholder="Enter Number of shares"
                  />
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                  {data.allotted ? (
                    <select
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={data.value}
                      onChange={(e) => handleValueChange(shareClass, e.target.value)}
                    >
                      <option value="">Select value</option>
                      {predefinedValues.map((value) => (
                        <option key={value} value={value}>${value}</option>
                      ))}
                    </select>
                  ) : (
                    <div className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-gray-100 text-gray-400">
                      Enter shares first
                    </div>
                  )}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  ${data.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShareClassForm;