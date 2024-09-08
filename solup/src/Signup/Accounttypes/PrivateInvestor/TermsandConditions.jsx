import React, {useState} from 'react';

const TermsandConditions= ({ formData, onChange, errors }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <div className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Terms and Conditions</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <span className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <div className='flex'>
              <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password || ''}
              onChange={onChange}
            />
            {showPassword ? <i onClick={togglePasswordVisibility} class="ml-auto fa-solid fa-eye-slash"></i> : <i onClick={togglePasswordVisibility} class="ml-auto fa-solid fa-eye"></i> }
            </div>
             {errors.password && <div className="text-red-500 text-xs">{errors.password}</div>}
          </span>

          <div className='flex flex-col'>
            <label htmlFor="firmPhone">Confirm Password</label>
            <span className='flex'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
            value={formData.confirmPassword || ''}
              onChange={onChange}
            />
            {showConfirmPassword ? <i onClick={toggleConfirmPasswordVisibility} class="ml-auto fa-solid fa-eye-slash"></i> : <i onClick={toggleConfirmPasswordVisibility} class="ml-auto fa-solid fa-eye"></i> }
            </span>
           
             {errors.confirmPassword && <div className="text-red-500 text-xs">{errors.confirmPassword}</div>}
          </div>

          <span className='flex consent flex-col'>
          <h3 className='mb-4 mt-4'>By completing the signup process you agree to the following:</h3>
          <h3 className='mb-2'>1. Accept platform terms and conditions for Blockchain investment</h3>
          <h3>2. Consent to receive blockchain investment oppurtunitites and platform updates</h3>
          </span>

        </div>
        {/*<button
          type="submit"
          className='cursor-pointer flex rounded-sm text-sm mt-2 px-16 py-2 next items-center text-white'
        >
          <h3>Next</h3>
        </button>*/}
      </form>
    </div>
  );
};

export default TermsandConditions;
