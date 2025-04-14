import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});
  const [formData, setFormData] = useState({
    step1: {
      email: "",
      confirmEmail: "",
      hasProposedName: false,
      proposedName: "",
      typeOfCompany: "",
      registeredAddress: {
        street: "",
        suburb: "",
        state: "",
        postcode: "",
      },
      shareStructure: [],
      individualDirectors: 0,
      individualShareholders: 0,
    },
    step2: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    step3: {
      targetAgeRange: "",
      monthlyVisitors: "",
      targetLocation: "",
      industryType: "",
      additionalNotes: "",
    },
  });

  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        ...data,
      },
    }));
    // Clear validation errors when data is updated
    if (step === 'step1') {
      setValidationErrors({});
    }
  };

  const validateStep = (step) => {
    const errors = {};
    
    if (step === 1) {
      const { email, confirmEmail, hasProposedName, proposedName, typeOfCompany, registeredAddress } = formData.step1;
      
      if (!email) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Please enter a valid email address";
      
      if (!confirmEmail) errors.confirmEmail = "Please confirm your email";
      else if (email !== confirmEmail) errors.confirmEmail = "Emails do not match";
      
      if (hasProposedName && !proposedName) errors.proposedName = "Proposed company name is required";
      
      if (!typeOfCompany) errors.typeOfCompany = "Please select a company type";
      
      if (!registeredAddress.street) errors.street = "Street address is required";
      if (!registeredAddress.suburb) errors.suburb = "Suburb is required";
      if (!registeredAddress.state) errors.state = "State is required";
      if (!registeredAddress.postcode) errors.postcode = "Postcode is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
      return true;
    }
    return false;
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const submitForm = () => {
    if (validateStep(currentStep)) {
      console.log("Form submitted with data:", formData);
      return true;
    }
    return false;
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        formData,
        validationErrors,
        updateFormData,
        nextStep,
        prevStep,
        submitForm,
        validateStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}; 