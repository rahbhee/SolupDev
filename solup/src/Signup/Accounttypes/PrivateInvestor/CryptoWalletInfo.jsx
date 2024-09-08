import React  from 'react';
import {useState} from 'react'
import Modal from '../../Modal';

const CryptoWalletInfo = ({ formData, onChange, errors, setErrors}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSocialClick = () => {
    // Clear the error for connectSocials
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.connectSocials;
      return newErrors;
    });

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Crypto Wallet Information</h1>

        {errors && Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
          <div className='flex flex-col'>
            <label htmlFor="fullName">Crypto Wallet Address (Public Key)</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="fullName">Wallet Type (software, Hardware, etc.)</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName || ''}
              onChange={onChange}
            />
          </div>
         </div>

         <h1 className='form-title font-bold text-gray-700 text-sm'>Social Information</h1>

         <div className='flex form-div text-xs flex-col gap-2 w-10/12'>
         <div className='flex flex-col'>
            <label htmlFor="summary">Bio/Summary (optional)</label>
            <input
              type="text"
              id="summary"
              name="summary"
              value={formData.summary || ''}
              onChange={onChange}
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="Investment Thesis">Investment Thesis</label>
            <input
              type="text"
              id="investmentThesis"
              name="investmentThesis"
              value={formData.investmentThesis || ''}
              onChange={onChange}
            />
             {errors.phone && <div className="text-red-500 text-xs">{errors.phone}</div>}
          </div>
          
        <div className=''>
        <section className='flex relative'>
        <label htmlFor="Connect Socials">Connect Socials</label>
        <input
          type="file"
          id="connectSocials"
          name="connectSocials"
          value={formData.connectSocials}
          onChange={onChange}
          className="file-input"
        />
         <i onClick={handleIconClick} class="fa-solid text-xs ml-auto fa-people-arrows"></i>
          </section>
        </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <section className='flex flex-col items-center modal'>
        <section className='flex justify-center'>
        <i class="fa-solid text-xs mr-4 fa-people-arrows"></i>
        <h1 className='form-title font-bold text-gray-700 text-sm'>Connect Socials</h1>
        </section>

        <section className='flex flex-col items-center mt-12'>
        <section className='flex items-center mb-14 justify-center'>
          <section onClick={handleSocialClick} className='flex items-center flex-col mr-8'>
          <i class="fa-brands text-6xl text-black fa-x-twitter"></i>
          <section className='flex items-center'><h3>Connect X</h3><i class="ml-4 fa-solid fa-user-plus"></i></section>
          </section>
          <section onClick={handleSocialClick} className='flex items-center flex-col ml-8'>
          <i class="fa-brands  text-6xl text-black fa-instagram"></i>
          <section className='flex items-center'><h3>Connect Instagram</h3><i class="ml-4 fa-solid fa-user-plus"></i></section>
          </section>
        </section>
        <section>
        <section onClick={handleSocialClick}className='flex items-center flex-col'>
          <i class="fa-brands text-6xl text-black fa-linkedin"></i>
          <section className='flex items-center'><h3>Connect LinkedIn</h3><i class="ml-4 fa-solid fa-user-plus"></i></section>
          </section>
        </section>
        </section>
        </section>
        
      </Modal>
  
         </div>
         
        
      </form>
    </div>
  );
}

export default CryptoWalletInfo;
