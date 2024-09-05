import React from 'react'


const InvestmentPlan = ({formData, onChange, errors}) => {

  return (
    <div  className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Firm's Investment Plan</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="Minimum Investment Size (USD/crypto)">Minimum Investment Size (USD/crypto)</label>
            <input
               type="text"
               id="minimumInvestment"
               name="minimumInvestment"
               value={formData.minimumInvestment || ''}
               onChange={onChange}
            />
            
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Maximum Investment Size (USD/crypto)">Maximum Investment Size (USD/crypto)</label>
            <input
             type="text"
             id="maximumInvestment"
             name="maximumInvestment"
             value={formData.maximumInvestment || ''}
             onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Investment Horizon (Short-term, Mid-term, Long-term)">Investment Horizon (Short-term, Mid-term, Long-term)</label>
            <input
             type="text"
             id="investmentHorizon"
             name="investmentHorizon"
             value={formData.investmentHorizon || ''}
             onChange={onChange}
            />
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

          <div className='flex flex-col'>
            <label htmlFor="Token / Equity Investment Preference">Token / Equity Investment Preference</label>
            <input
              type="text"
              id="token"
              name="token"
              value={formData.token  || ''}
              onChange={onChange}
            />
          </div>

        </div>
      </form>
    </div>
  )
}

export default InvestmentPlan;
