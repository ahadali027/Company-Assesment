import React from 'react';

const StepAnalyzer = ({ currentStep, totalSteps }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm sm:text-base font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
        </div>
        <div className="flex space-x-1 sm:space-x-2 w-full sm:w-auto">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-6 sm:w-8 rounded-full ${
                index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 sm:mt-3">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          {currentStep === 1 && 'Company Details'}
          {currentStep === 2 && 'Account Setup'}
          {currentStep === 3 && 'Audience Analysis'}
        </h2>
      </div>
    </div>
  );
};

export default StepAnalyzer; 