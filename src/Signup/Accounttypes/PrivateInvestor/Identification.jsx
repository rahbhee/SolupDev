import React from 'react';

const Identification = ({ formData, onChange, errors }) => {
  return (
    <div className='w-11/12'>
      <form className="flex gap-2 flex-col py-2 items-center justify-center">
        <h1 className='form-title font-bold text-gray-700 text-sm'>Identification and Verification</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col relative'>
            <label htmlFor="govIssuedID">Government-Issued ID (File Upload)</label>
            <input
              type="file"
              id="govIssuedID"
              name="govIssuedID"
              onChange={onChange}
              className="file-input"
            />
            <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
            {formData.govIssuedID && (
              <span className="text-black mt-1">
                {formData.govIssuedID.name}
              </span>
            )}
          </div>

          <div className='flex flex-col relative'>
            <label htmlFor="proofOfAddress">Proof Of Address (File Upload)</label>
            <input
              type="file"
              id="proofOfAddress"
              name="proofOfAddress"
              onChange={onChange}
              className="file-input"
            />
            <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
            {formData.proofOfAddress && (
              <span className="text-black mt-1">
                {formData.proofOfAddress.name}
              </span>
            )}
          </div>

          <div className='flex flex-col relative'>
            <label htmlFor="verificationOfFunds">Verification of Source of Funds (File Upload)</label>
            <input
              type="file"
              id="verificationOfFunds"
              name="verificationOfFunds"
              onChange={onChange}
              className="file-input"
            />
            <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
            {formData.verificationOfFunds && (
              <span className="text-black mt-1">
                {formData.verificationOfFunds.name}
              </span>
            )}
          </div>
          </div>

          <h1 className='form-title font-bold mt-4 text-gray-700 text-xs'>Accredited Investor Certification</h1>
          <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
            <section className='flex items-center'>
              <label className='text-xs'>Accredited Investor Status (Yes/No)</label>
              <span className='ml-auto items-center flex'>
                <label className='flex items-center'>
                  <input
                    type="radio"
                    name="accreditedInvestorStatus"
                    value="yes"
                    checked={formData.accreditedInvestorStatus === 'yes'}
                    onChange={onChange}
                  />
                  Yes
                </label>
                <label className='flex items-center'>
                  <input
                    type="radio"
                    name="accreditedInvestorStatus"
                    value="no"
                    checked={formData.accreditedInvestorStatus === 'no'}
                    onChange={onChange}
                  />
                  No
                </label>
              </span>
            </section>

            <div className='flex flex-col relative'>
              <label htmlFor="certificationDocument">Certification Document (File Upload)</label>
              <input
                type="file"
                id="certificationDocument"
                name="certificationDocument"
                onChange={onChange}
                className="file-input"
              />
              <i className="fa-solid fa-paperclip absolute right-2 text-sm top-1/2 transform -translate-y-1/2 pointer-events-none"></i>
              {formData.certificationDocument && (
                <span className="text-black mt-1">
                  {formData.certificationDocument.name}
                </span>
              )}
            </div>
          </div>
      </form>
    </div>
  );
};

export default Identification;
