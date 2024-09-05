import React, { useState } from 'react';
import FirmSignup from './FirmSignup';
import InvestmentFocus from './InvestmentFocus';
import Teaminformation from './TeamINformation';
import InvestmentPlan from './InvestmentPlan';


const VentureCapitalist = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1 or 2
  const [formData, setFormData] = useState({
    ventureFirmName: '',
    firmPhone: '',
    officialEmail: '',
    country: '',
    address: '',
    firmType: '',
    blockchainFocus: '',

    investmentFocus: '',
    industryInterests: '',
    investmentStage: '',
    blockchainEcosysytemInterests: '',
    geographicFocus: '',

    fullName: '',
    firmPosition: '',
    email: '',
    phone: '',
    teamMateBio: '',
    investmentExperience: '',

    minimumInvestment: '',
    maximumInvestment: '',
    investmentHorizon: '',
    expectedReturns: '',
    token: ''
  });
  const [errors, setErrors] = useState({}); // Store errors for both sections

  const validateFirmSignup = () => {
    const newErrors = {};
    if (!formData.ventureFirmName) newErrors.ventureFirmName = 'Venture Firm Name is required';
    if (!formData.firmPhone) newErrors.firmPhone = 'Firm Official Phone is required';
    if (!formData.officialEmail) newErrors.officialEmail = 'Official Email Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.firmType) newErrors.firmType = 'Type of Firm is required';
    if (!formData.blockchainFocus) newErrors.blockchainFocus = 'Blockchain Focus is required';
    return newErrors;
  };

  const validateInvestmentFocus = () => {
    const newErrors = {};
    if (!formData.investmentFocus) newErrors.investmentFocus = 'Investment Focus is required';
    if (!formData.industryInterests) newErrors.industryInterests = 'Blockchain Industry Interests are required';
    if (!formData.investmentStage) newErrors.investmentStage = 'Stage of Investment is required';
    if (!formData.blockchainEcosysytemInterests) newErrors.blockchainEcosysytemInterests = 'Stage of Investment is required';
    if (!formData.geographicFocus) newErrors.geographicFocus = 'Geographic Focus is required';
    return newErrors;
  };
  const validateTeamInformation = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.firmPosition) newErrors.firmPosition = 'firm position are required';
    if (!formData.email) newErrors.email = 'email is required';
    if (!formData.phone) newErrors.phone = 'phone is required';
    if (!formData.teamMateBio) newErrors.teamMateBio = 'teammate bio is required';
    if (!formData.investmentExperience) newErrors.investmentExperience = 'investment experience is required';
    return newErrors;
  }

  const validateInvestmentPlan = () => {
    const newErrors = {};
    if (!formData.minimumInvestment) newErrors.minimumInvestment = 'Minimum Investment is required';
    if (!formData.maximumInvestment) newErrors.maximumInvestment = 'Maximum Investment Interests are required';
    if (!formData.investmentHorizon) newErrors.investmentHorizon = 'Investment Horizon is required';
    if (!formData.expectedReturns) newErrors.expectedReturns = 'Expected returns is required';
    if (!formData.token) newErrors.token = 'Token is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setErrors({})
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value,
    }));
  };
 

  const handleNextStep = () => {
    let newErrors = {};
  
    if (currentStep === 1) {
      newErrors = validateFirmSignup();
    } else if (currentStep === 2) {
      newErrors = validateInvestmentFocus();
    } else if (currentStep === 3) {
      newErrors = validateTeamInformation();
    } else if (currentStep === 4) {
      newErrors = validateInvestmentPlan();
    }
  
    if (Object.keys(newErrors).length === 0) {
      setErrors({}); // Clear errors
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    } else {
      setErrors(newErrors); // Set the new errors
    }
  
    // Debugging
    console.log('Current Step:', currentStep);
    console.log('Errors:', newErrors);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='items-center flex flex-col'>
      
      {currentStep === 1 && (
        <FirmSignup formData={formData} onChange={handleChange} errors={errors} />
      )}
      {currentStep === 2 && (
        <InvestmentFocus formData={formData} onChange={handleChange} errors={errors} />
      )}
       {currentStep === 3 && (
        <Teaminformation formData={formData} onChange={handleChange} errors={errors} />
      )}
       {currentStep === 4 && (
        <InvestmentPlan formData={formData} onChange={handleChange} errors={errors} />
      )}
      <button
        type="button"
        onClick={handleNextStep}
        className='cursor-pointer flex rounded-sm text-sm mt-2 mb-2 px-16 py-2 next items-center text-white'
      >
        {currentStep > 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default VentureCapitalist;
