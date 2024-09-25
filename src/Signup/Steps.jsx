import React from 'react'
import { useState } from 'react'
import solup from '/solup.png'
import StepOne from './stepone'
import StepThree from './StepThree'
import StepFour from './StepFour'

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [accountType, setAccountType] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const renderStep = () => {
    switch (currentStep){
      case 1:
        return <StepOne selectAccountType={selectAccountType} accountType={accountType}/>;
      case 2:
        return <StepThree selectAccountType={selectAccountType} accountType={accountType}/>;
      case 3:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  const nextStep = () => {
      if (!accountType) {
        setShowAlert(true)
        return;
      }
      setShowAlert(false);
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };


  const selectAccountType = (type) => {
    setAccountType(type)
    setShowAlert(false)
  };

  return (
    <div className='stepone text-xs items-center justify-center flex flex-col'>
       <img className='logo w-28 mb-4' src={solup} alt="" />
       <h3 className='text-gray-500 mb-4'>Four basic steps to creating your account.</h3>
       {showAlert && (
        <div className='alert mb-2 p-2 bg-red-500 text-white rounded'>
          Please select an account type!
        </div>
      )}
       <div className='flex items-center'>
        <div className=' cursor-pointer flex flex-col items-center justify-center'>
        <h4 className={`${currentStep === 1 && !accountType ? 'active' : ''}`}>1</h4>
        </div>
        <div></div>
        <div className='line'></div>
        <div className='cursor-pointer flex flex-col items-center justify-center'>
          <h4 className={`${currentStep  === 1 && accountType ? 'active' : ''}`}>2</h4>
        </div>
        <div className='line'></div>
        <div className='cursor-pointer flex flex-col items-center justify-center'>
        <h4  className={`${currentStep === 2 ? 'active' : ''}`}>3</h4>
        </div>
        <div className='line'></div>
       <div className=' cursor-pointer flex flex-col items-center justify-center'>
       <h4 className={`${currentStep === 3 ? 'active' : ''}`}>4</h4>
       </div>
   </div>

   <div className='text-xs mt-2 mb-4 justify-center title flex items-center'>
   <h5>Sign up</h5>
   <h5>Select account type</h5>
   <h5>Activate account</h5>
   <h5>Login</h5>
   </div>


   {renderStep()}


   <div className='text-xs flex flex-col items-center'>
    {currentStep === 1  ? <div onClick={nextStep} className=' cursor-pointer flex rounded-sm text-sm mt-6 px-16 py-3 next items-center text-white'>
          <h3>Next</h3>
          <i className="ml-2 fa-solid fa-arrow-right"></i>
        </div> : ''}
        <h3 className='mt-2'>Already have an account? <span className='sign cursor-pointer'>Sign in</span></h3>
        <h3 className='mt-3'>Terms of use. Privacy policy</h3>
      </div>
    </div>
  )
}

export default Steps
