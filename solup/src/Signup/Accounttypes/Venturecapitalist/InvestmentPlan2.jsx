import React from 'react'


const InvestmentPlan2 = ({formData, onChange, errors}) => {
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
    
        <div className='flex flex-col relative'>
        <label htmlFor="uploadDiligenceQuestionare">Upload Diligence Questionnaire (DDG)</label>
        <input
          type="file"
          id="uploadDiligenceQuestionare"
          name="uploadDiligenceQuestionare"
          onChange={onChange}
          className="file-input"
        />
         <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
         {formData.uploadDiligenceQuestionare && (
              <span className="text-black mt-1">
                {formData.uploadDiligenceQuestionare.name}
              </span>
            )}
      </div>
      <div className='flex flex-col relative'>
        <label htmlFor="uploadNDA">Upload Non-Disclosure Agreement (NDA)</label>
        <input
          type="file"
          id="uploadNDA"
          name="uploadNDA"
          onChange={onChange}
          className="file-input"
        />
         <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
         {formData.uploadNDA && (
              <span className="text-black mt-1">
                {formData.uploadNDA.name}
              </span>
            )}
      </div>
        </div>

          <h1 className='form-title font-bold mt-4 text-gray-700 text-sm'>Firm's Verification</h1>

          <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col relative'>
        <label htmlFor="uploadFirmsCertification">Upload Firm's Certification</label>
        <input
          type="file"
          id="uploadFirmsCertification"
          name="uploadFirmsCertification"
          onChange={onChange}
          className="file-input"
        />
         <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
         {formData.uploadFirmsCertification && (
              <span className="text-black mt-1">
                {formData.uploadFirmsCertification.name}
              </span>
            )}
      </div>

         <div className='flex flex-col relative'>
        <label htmlFor="uploadFirmsStatement">Upload Firm's Investment's Statements (Previous Investments, etc)</label>
         <input
     type="file"
      id="uploadFirmsStatement"
      name="uploadFirmsStatement"
         onChange={onChange}
          className="file-input"/>
      <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
       {formData.uploadFirmsStatement && (
              <span className="text-black mt-1">
                {formData.uploadFirmsStatement.name}
              </span>
            )}
      </div>
          </div>
         

      </form>
    </div>
  )
}

export default InvestmentPlan2;