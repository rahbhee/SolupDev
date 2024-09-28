import React from 'react'


const InvestorProfile = ({formData, onChange, errors}) => {

  return (
    <div  className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Investor Profile</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="Minimum Investment Size (USD/crypto)">Investor Type (Individual, Family Office, etc.)</label>
            <input
               type="text"
               id="investorType"
               name="investorType"
               value={formData.investorType || ''}
               onChange={onChange}
            />
          </div>


           <div className="relative flex items-center py-1 border-gray-500">
            {/* Conditionally render label based on selected value */}
            {!formData.blockchain && (
              <label
                htmlFor="blockchain"
                className="absolute left-0 text-left text-gray-500 transition-all duration-200">
              </label>
            )}
            <select
              className={`appearance-none w-full bg-transparent ${formData.blockchain ? 'text-black' : 'text-gray-500'}`}
              id="blockchain"
              name="blockchain"
              value={formData.blockchain || ''}
              onChange={onChange}
            >
              <option value="" disabled hidden>
                  Blockchain Investment Experience (Years)
               </option>
              <option value="1">1 (Year)</option>
              <option value="2">2 (Years)</option>
              <option value="3">3 (Years)</option>
              <option value="4">4 (Years)</option>
              <option value="5">5 (Years)</option>
              <option value="6">6 (Years)</option>
              <option value="7">7 (Years)</option>
              <option value="8">8 (Years)</option>
              <option value="9">9 (Years)</option>
              <option value="10">10 (Years)</option>
            </select>
            <i className="absolute right-2 text-sm top-1/2 transform -translate-y-1/2 fa-solid fa-caret-down pointer-events-none"></i>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Investment Focus (Crypto, DeFi,NFTs)">Investment Focus (Crypto, DeFi,NFTs)</label>
            <input
               type="text"
               id="investmentFocus"
               name="investmentFocus"
               value={formData.investmentFocus || ''}
               onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Minimum Investment AMount Range (USD/crypto)">Minimum Investment Amount Range (USD/crypto)</label>
            <input
               type="text"
               id="minimumInvestmentRange"
               name="minimumInvestmentRange"
               value={formData.minimumInvestmentRange || ''}
               onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Preferred Equity Stake (token/Equity)">Preferred Equity Stake (token/Equity)</label>
            <input
               type="text"
               id="preferredEquityStake"
               name="preferredEquityStake"
               value={formData.preferredEquityStake || ''}
               onChange={onChange}
            />
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default InvestorProfile;
