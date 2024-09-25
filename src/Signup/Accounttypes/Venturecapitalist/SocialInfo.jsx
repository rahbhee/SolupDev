import {useState} from 'react'
import Modal from '../../Modal';

const SocialInfo = ({formData, onChange, errors, setErrors}) => {
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
    <div  className='w-11/12'>
      <form
        className="flex gap-2 flex-col py-2 items-center justify-center"
      >
        <h1 className='form-title font-bold text-gray-700 text-sm'>Social Information</h1>

        {/* General Error Message */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 font-bold text-xs">
            Please fill out all required fields.
          </div>
        )}

        <div className='flex form-div text-xs flex-col my-28 gap-2 w-10/12'>
        <div className='flex relative'>
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
          </div>
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col items-center modal'>

        <div className='flex justify-center'>
        <i class="fa-solid text-xs mr-4 fa-people-arrows"></i>
        <h1 className='form-title font-bold text-gray-700 text-sm'>Connect Socials</h1>
        </div>

        <div className='flex flex-col items-center mt-12'>
        <div className='flex items-center mb-14 justify-center'>
          <div onClick={handleSocialClick} className='flex items-center flex-col mr-8'>
          <i class="fa-brands text-6xl text-black fa-x-twitter"></i>
          <div className='flex items-center'><h3>Connect X</h3><i class="ml-4 fa-solid fa-user-plus"></i></div>
          </div>
          <div onClick={handleSocialClick} className='flex items-center flex-col ml-8'>
          <i class="fa-brands  text-6xl text-black fa-instagram"></i>
          <div className='flex items-center'><h3>Connect Instagram</h3><i class="ml-4 fa-solid fa-user-plus"></i></div>
          </div>
        </div>
        <div>
        <div onClick={handleSocialClick}className='flex items-center flex-col'>
          <i class="fa-brands text-6xl text-black fa-linkedin"></i>
          <div className='flex items-center'><h3>Connect LinkedIn</h3><i class="ml-4 fa-solid fa-user-plus"></i></div>
          </div>
        </div>
        </div>

        </div>
        
      </Modal>
    </div>
  )
}

export default SocialInfo;