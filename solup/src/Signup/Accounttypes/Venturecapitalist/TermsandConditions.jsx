import React from 'react';



const TermsandConditions= ({ formData, onChange, errors }) => {
 
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
          <div className='flex flex-col'>
            <label htmlFor="ventureFirmName">Password</label>
            <input
              type="text"
              id="ventureFirmPassword"
              name="ventureFirmPassword"
              value={formData.ventureFirmPassword || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="firmPhone">Confirm Password</label>
            <input
              type="text"
              id="ventureFirmConfirmPassword"
              name="ventureFirmConfirmPassword"
            value={formData.ventureFirmConfirmPassword || ''}
              onChange={onChange}
            />
          </div>
          
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
