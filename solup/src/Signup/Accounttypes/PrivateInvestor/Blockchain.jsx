import React from 'react';

const Blockchain = ({ formData, onChange, errors }) => {
  return (
    <div className='w-11/12'>
      <form className="flex gap-2 flex-col py-2 items-center justify-center">
        <h1 className='form-title font-bold text-gray-700 text-sm'>Blockchain Investment Preferences</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col relative'>
            <label htmlFor="investmentStage">Investment Stage:(Seed, Series A, Growth, etc)</label>
            <input
              type="text"
              id="investmentStage"
              name="investmentStage"
              onChange={onChange}
              className=""
            />
          </div>

          <div className='flex flex-col relative'>
            <label htmlFor="proofOfAddress">Blockchain Industry Focus</label>
            <input
              type="text"
              id="blockchainFocus"
              name="blockchainFocus"
              onChange={onChange}
              className=""
            />
          </div>

          <div className='deactiveaccount flex items-center'>
            <label>Geographic Focus</label>
            <span className='ml-auto items-center flex'>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="geographicFocus"
                  value="global"
                  checked={formData.geographicFocus === 'global'}
                  onChange={onChange}
                />
                Global
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="geographicFocus"
                  value="regional"
                  checked={formData.geographicFocus === 'regional'}
                  onChange={onChange}
                />
                Regional
              </label>
              <label className='flex items-center'>
                <input
                   type="radio"
                   name="geographicFocus"
                   value="country-specific"
                   checked={formData.geographicFocus=== 'country-specific'}
                   onChange={onChange}
                />
                Country-specific
              </label>
            </span>
          </div>
          <div className='flex flex-col'>
            <label htmlFor=">Expected ROI/ Returns (USD/Crypto)">Expected ROI/ Returns (USD/Crypto)</label>
            <input
              type="text"
              id="expectedReturns"
              name="expectedReturns"
              value={formData.expectedReturns  || ''}
              onChange={onChange}
            />
          </div>
           <div className='deactiveaccount flex items-center'>
            <label>Investment Horizon</label>
            <span className='ml-auto items-center flex'>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="investmentHorizon"
                  value="short-term"
                  checked={formData.investmentHorizon === 'short-term'}
                  onChange={onChange}
                />
                Short-term
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  name="investmentHorizon"
                  value="mid-term"
                  checked={formData.investmentHorizon === 'mid-term'}
                  onChange={onChange}
                />
               Mid-term
              </label>
              <label className='flex items-center'>
                <input
                   type="radio"
                   name="investmentHorizon"
                   value="long-term"
                   checked={formData.investmentHorizon === 'long-term'}
                   onChange={onChange}
                />
                Long-term
              </label>
            </span>
          </div>
          </div>

      </form>
    </div>
  );
};

export default Blockchain;
