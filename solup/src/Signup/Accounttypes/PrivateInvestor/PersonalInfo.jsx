import React  from 'react';

const PersonalInfo = ({ formData, onChange, errors }) => {

  return (
    <div className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Personal Information</h1>

        {errors && Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
           <label htmlFor="dateOfBirth">Date of Birth</label>
           <input
              type="date"
              id="dateOfBirth"
               name="dateOfBirth"
                value={formData.dateOfBirth || ''}
               onChange={onChange}/>
           </div>

          <div className="relative flex items-center py-1 border-gray-500">
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
              <option value="">Country</option>
              <option value="nigeria">Nigeria</option>
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
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={onChange}
            />
             {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email || ''}
              onChange={onChange}
            />{errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="taxNo">Tax ID Number (e.g, SSN, EIN)</label>
            <input
              type="text"
              id="taxNo"
              name="taxNo"
              value={formData.taxNo || ''}
              onChange={onChange}
            />
             {errors.taxNo && <div className="text-red-500 text-xs">{errors.taxNo}</div>}
          </div>

        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
