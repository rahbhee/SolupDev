import React from 'react';



const FirmSignup = ({ formData, onChange, errors }) => {
 
  return (
    <div className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Venture Firm Signup</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="ventureFirmName">Venture Firm Name</label>
            <input
              type="text"
              id="ventureFirmName"
              name="ventureFirmName"
              value={formData.ventureFirmName || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="firmPhone">Firm Official Phone</label>
            <input
              type="text"
              id="firmPhone"
              name="firmPhone"
            value={formData.firmPhone || ''}
              onChange={onChange}
            />
            {errors.firmPhone && <div className="text-red-500 text-xs">{errors.firmPhone}</div>}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="officialemailaddress">Official Email Address</label>
            <input
              type="text"
              id="officialEmail"
              name="officialEmail"
              value={formData.officialEmail || ''}
              onChange={onChange}/>
              {errors.officialEmail && <div className="text-red-500 text-xs">{errors.officialEmail}</div>}
          </div>

          <div className="relative flex items-center py-1 border-gray-500">
            {/* Conditionally render label based on selected value */}
            {!formData.country && (
              <label
                htmlFor="country"
                className="absolute left-0 text-left text-gray-500 transition-all duration-200"
              >
            
              </label>
            )}
            <select
              className={`appearance-none w-full bg-transparent ${formData.country ? 'text-black' : 'text-gray-500'}`}
              id="country"
              name="country"
              value={formData.country || ''}
              onChange={onChange}
            >
              <option value="nigeria">Select country</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="india">India</option>
            </select>
            <i className="absolute right-2 text-sm top-1/2 transform -translate-y-1/2 fa-solid fa-caret-down pointer-events-none"></i>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address || ''}
              onChange={onChange}
         
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="firmType">Type of Firm</label>
            <input
              type="text"
              id="firmType"
              name="firmType"
              value={formData.firmType || ''}
              onChange={onChange}
            
            />
          </div>

          <div className='flex items-center'>
            <label>Blockchain Focus</label>
            <span className='ml-auto items-center flex'>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="blockchainFocus"
                  value="DeFi"
                  checked={formData.blockchainFocus === 'DeFi'}
                  onChange={onChange}
                />
                DeFi
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="blockchainFocus"
                  value="Athlete"
                  checked={formData.blockchainFocus === 'Athlete'}
                  onChange={onChange}
                />
                Athlete
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="blockchainFocus"
                  value="NFTs"
                  checked={formData.blockchainFocus === 'NFTs'}
                  onChange={onChange}
                />
                NFTs
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="blockchainFocus"
                  value="Others"
                  checked={formData.blockchainFocus === 'Others'}
                  onChange={onChange}
                />
                Others
              </label>
            </span>
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

export default FirmSignup;
