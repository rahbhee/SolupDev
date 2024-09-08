import React from 'react'

const Teaminformation= ({formData, onChange, errors}) => {
  return (
    <div  className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Firm's Team Information</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="Full Name">Full Name</label>
            <input
               type="text"
               id="fullname"
               name="fullName"
               value={formData.fullName || ''}
               onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Firm Position">Firm Position</label>
            <input
             type="text"
             id="firmPosition"
             name="firmPosition"
             value={formData.firmPosition || ''}
             onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input
             type="text"
             id="email"
             name="email"
             value={formData.email || ''}
             onChange={onChange}
            />
             {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
          </div>


          <div className='flex flex-col'>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone  || ''}
              onChange={onChange}
            />
             {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="phone">Team Mate Bio</label>
            <input
              type="text"
              id="teammatebio"
              name="teamMateBio"
              value={formData.teamMateBio  || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="phone">Investment Experience</label>
            <input
              type="text"
              id="investmentexperience"
              name="investmentExperience"
              value={formData.investmentExperience  || ''}
              onChange={onChange}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Teaminformation;
