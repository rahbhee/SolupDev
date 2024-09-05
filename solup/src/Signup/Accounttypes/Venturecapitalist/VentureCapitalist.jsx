import React, { useState } from 'react';
import FirmSignup from './FirmSignup';
import InvestmentFocus from './InvestmentFocus';
import Teaminformation from './TeamINformation';
import InvestmentPlan from './InvestmentPlan';
import InvestmentPlan2 from './InvestmentPlan2';
import SocialInfo from './SocialInfo';
import TermsandConditions from './TermsandConditions';

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
    token: '',

    uploadDiligenceQuestionare: '',
    uploadNDA: '',
    uploadFirmsCertification: '',
    uploadFirmsStatement: '',

    connectSocials: "",

    ventureFirmPassword: '',
    ventureFirmConfirmPassword: '',
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

  const validateInvestmentPlan2 = () => {
    const newErrors = {};
    if (!formData.uploadDiligenceQuestionare) newErrors.uploadDiligenceQuestionare = 'uploadDiligenceQuestionare is required';
    if (!formData.uploadNDA) newErrors.uploadNDA = 'uploadNDA is required';
    if (!formData.uploadFirmsCertification) newErrors.uploadFirmsCertification = 'uploadFirmsCertification is required';
    if (!formData.uploadFirmsStatement) newErrors.uploadFirmsStatement = 'uploadFirmsStatement is required';
    return newErrors;
  };

  const validateSocialInfo = () => {
    const newErrors = {};
    if (!formData.connectSocials) newErrors.connectSocials = 'connectSocial is required';
    return newErrors;
  };

  const validateTermsandConditions = () => {
    const newErrors = {};
    if (!formData.ventureFirmPassword) newErrors.ventureFirmPassword = 'ventureFirmPassword is required';
    if (!formData.ventureFirmConfirmPassword) newErrors.ventureFirmConfirmPassword = 'ventureFirmConfirmPassword is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log("Input change detected:", name, type, files);
    setErrors({})
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
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
    }else if (currentStep === 5) {
      newErrors = validateInvestmentPlan2();
    }else if (currentStep === 6) {
      newErrors = validateSocialInfo();
    }
    else if (currentStep === 7) {
      newErrors = validateTermsandConditions();
    }
  
    if (Object.keys(newErrors).length === 0) {
      setErrors({}); // Clear errors
      if (currentStep < 8) {
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
       {currentStep === 5 && (
        <InvestmentPlan2 formData={formData} onChange={handleChange} errors={errors} />
      )}
      {currentStep === 6 && (
        <SocialInfo formData={formData} onChange={handleChange} errors={errors} />
      )}
      {currentStep === 7 && (
        <TermsandConditions formData={formData} onChange={handleChange} errors={errors} />
      )}
      <button
        type="button"
        onClick={handleNextStep}
        className='cursor-pointer flex rounded-sm text-sm mt-2 mb-2 px-16 py-2 next items-center text-white'
      >
        {currentStep < 7 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default VentureCapitalist;
