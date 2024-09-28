import React, { useState, useEffect} from 'react';

import Success from '../../Success';
import PersonalInfo from './PersonalInfo';
import InvestorProfile from './InvestorProfile';
import Identification from './Identification';
import Blockchain from './Blockchain';
import CryptoWalletInfo from './CryptoWalletInfo';
import TermsandConditions from './TermsandConditions';

const PrivateInvestor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
  dateOfBirth: '',
  country: '',
  address: '',
  phone: '',
  email: '',
  taxNo: '',

    investorType: '',
    blockchain: '',
    investmentFocus: '',
    minimumInvestmentRange: '',
    preferredEquityStake: '',

    govIssuedID: null,
    proofOfAddress: null,
    verificationOfFunds: null,
    accreditedInvestorStatus: '',
    certificationDocument: null,
  
    investmentStage: '',
    blockchainFocus: '',
    geographicFocus: '',
    investmentHorizon: '',
    expectedReturns: '',

    cryptoWalletaddress: '',
    walletType: '',
    summary: '',
    investmentThesis: '',
    connectSocials: "",

    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});


  const validatePersonalInfo = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Venture Firm Name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) {
      errors.phone = ' Phone Number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must contain only numbers';
    }
    if (!formData.email) newErrors.email = '';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.taxNo) {
      errors.taxNo = 'Tax Number is required';
    } else if (!/^\d+$/.test(formData.taxNo)) {
      newErrors.taxNo = 'Tax number must contain only numbers';
    }
    return newErrors;
  };

  const validateInvestorProfile = () => {
    const newErrors = {};
    if (!formData.investorType) newErrors.investorType = 'Investor type is required';
    if (!formData.blockchain) newErrors.blockchain = 'block chain is required';
    if (!formData.investmentFocus) newErrors.investmentFocus = 'investment focus is required';
    if (!formData. minimumInvestmentRange) newErrors. minimumInvestmentRange = ' minimumInvestmentRange is required';
    if (!formData.preferredEquityStake) newErrors.preferredEquityStake = 'preferred Equity Stake is required';
    return newErrors;
  };
  const validateIdentification = () => {
    const newErrors = {};
    if (!formData.govIssuedID) newErrors.govIssuedID = 'gov Issued ID is required';
    if (!formData.proofOfAddress) newErrors.proofOfAddress = 'proof Of Address is required';
    if (!formData.verificationOfFunds) newErrors.verificationOfFunds = 'verification Of Funds is required';
    if (!formData.accreditedInvestorStatus) newErrors.accreditedInvestorStatus = 'accredited InvestorStatus is required';
    if (!formData.certificationDocument) newErrors.certificationDocument = 'certification Document is required';
    return newErrors;
  };

  const validateBlockchain = () => {
    const newErrors = {};
    if (!formData.investmentStage) newErrors.investmentStage = 'investmentStage is required';
    if (!formData.blockchainFocus) newErrors.blockchainFocus = 'blockchainFocus is required';
    if (!formData.geographicFocus) newErrors.geographicFocus = 'geographicFocus is required';
    if (!formData.investmentHorizon) newErrors.investmentHorizon = 'investmentHorizon is required';
    if (!formData. expectedReturns) newErrors. expectedReturns = 'expected Returns is required';
    return newErrors;
  };

  const validateCryptoWalletInfo = () => {
    const newErrors = {};
    return newErrors;
  };

  const validateTermsandConditions = () => {
    let errors = {};
    
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
  
    // Validate Password
    if (!password) {
      errors.password = 'Password is required';
    } else {
      const passwordRequirements = [
        { regex: /.{8,}/, message: 'Password must be at least 8 characters long' },
        { regex: /[A-Z]/, message: 'Password must contain at least one uppercase letter' },
        { regex: /[a-z]/, message: 'Password must contain at least one lowercase letter' },
        { regex: /[0-9]/, message: 'Password must contain at least one number' },
        { regex: /[!@#$%^&*]/, message: 'Password must contain at least one special character' },
      ];
  
      const failedRequirements = passwordRequirements
        .filter(req => !req.regex.test(password))
        .map(req => req.message);
  
      if (failedRequirements.length > 0) {
        errors.password = failedRequirements.join(', ');
      }
    }
  
    // Validate Confirm Password
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return errors;
  };

  useEffect(() => {
    // Load data from local storage on component mount
    const savedData = localStorage.getItem('privateInvestorForm');
    if (savedData) {
      const { formData, currentStep } = JSON.parse(savedData);
      setFormData(formData);
      setCurrentStep(currentStep);
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem('privateInvestorForm', JSON.stringify({ formData, currentStep }));
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      // Force re-render or any additional actions
    }
  }, [errors]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log("Input change detected:", name, type, files);
    setErrors({})
    setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
    saveToLocalStorage();
  };


  const handleNextStep = () => {
    let newErrors = {};
  
    // Validate based on the current step
    if (currentStep === 1) {
      newErrors = validatePersonalInfo();
    } else if (currentStep === 2) {
      newErrors = validateInvestorProfile();
    } else if (currentStep === 3) {
      newErrors = validateIdentification();
    } else if (currentStep === 4) {
      newErrors = validateBlockchain();
    } else if (currentStep === 5) {
      newErrors = validateCryptoWalletInfo();
    } else if (currentStep === 6) {
      newErrors = validateTermsandConditions();
    }
  
    // If there are errors, don't proceed
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
        saveToLocalStorage();
      }
    }
  
    // Debugging
    console.log('Current Step:', currentStep);
    console.log('Errors:', newErrors);
  };
  
  const handleSubmit = () => {
    console.log('Form submitted with data:', formData);
    localStorage.removeItem('privateInvestorForm');
    // Additional submission logic here
  };
  
  return (
    <div className='items-center flex flex-col'>

      {currentStep === 1 && (
        <PersonalInfo formData={formData} onChange={handleChange} errors={errors} />
      )}
      {currentStep === 2 && (
        <InvestorProfile formData={formData} onChange={handleChange} errors={errors} />
      )}
       {currentStep === 3 && (
        <Identification formData={formData} onChange={handleChange} errors={errors} />
      )}
       {currentStep === 4 && (
        <Blockchain formData={formData} onChange={handleChange} errors={errors} />
      )}
       {currentStep === 5 && (
        <CryptoWalletInfo formData={formData} onChange={handleChange} errors={errors} />
      )}
      {currentStep === 6 && (
        <TermsandConditions formData={formData} onChange={handleChange} errors={errors} />
      )} {currentStep === 7 && (
        <Success/>
      )}

      {currentStep < 7 ? <button
        type="button"
        onClick={handleNextStep}
        className='cursor-pointer flex rounded-sm text-sm mt-2 mb-2 px-16 py-2 next items-center text-white'
      >
        {currentStep < 6 ? 'Next' : 'Submit'}
      </button> : ''}
      
    </div>
  );
};

export default PrivateInvestor;
