import React from 'react'

const InvestmentFocus = ({formData, onChange, errors}) => {
  return (
    <div  className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Investment Focus</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="Investment Focus">Investment Focus</label>
            <input
               type="text"
               id="investmentFocus"
               name="investmentFocus"
               value={formData.investmentFocus || ''}
               onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Industry Interests">Blockchain Industry Interests (DAOs, Staking, Protocols, etc)</label>
            <input
             type="text"
             id="industryInterests"
             name="industryInterests"
             value={formData.industryInterests || ''}
             onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Investment Stage">Stage of Investment (checkboxes: Seeds, Series A, Growth, etc)</label>
            <input
             pe="text"
             id="investmentStage"
             name="investmentStage"
             value={formData.investmentStage || ''}
             onChange={onChange}
            />
          </div>


          <div className='flex flex-col'>
            <label htmlFor="Blockchain Ecosysytem Interests">Blockchain Ecosysytem Interests (Solana, Ethereum, Bitcoin, etc)</label>
            <input
              type="text"
              id="blockchainecosysyteminterests"
              name="blockchainEcosysytemInterests"
              value={formData.blockchainEcosysytemInterests  || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex items-center'>
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
        </div>
      </form>
    </div>
  )
}

export default InvestmentFocus;
