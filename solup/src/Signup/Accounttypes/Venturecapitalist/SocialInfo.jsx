import {useState} from 'react'
import Modal from '../../Modal';


const SocialInfo = ({formData, onChange, errors}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
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
        <div className='flex flex-col items-center'>

        <div className='flex'>
        <i class="fa-solid text-xs ml-auto fa-people-arrows"></i>
        <h1 className='form-title font-bold text-gray-700 text-sm'>Social Information</h1>
        </div>

        <div className='flex flex-col items-center'>
        <div className='flex'>
          <div className='flex flex-col'>
          <i class="fa-brands text-lg fa-x-twitter"></i>
          <div className='flex'><h3>Connect X</h3><i class="fa-solid fa-user-plus"></i></div>
          </div>
          <div className='flex flex-col'>
          <i class="fa-brands fa-instagram"></i>
          <div className='flex'><h3>Connect Instagram</h3><i class="fa-solid fa-user-plus"></i></div>
          </div>
        </div>
        <div>
        <div className='flex flex-col'>
          <i class="fa-brands fa-x-twitter"></i>
          <div className='flex'><h3>Connect X</h3><i class="fa-solid fa-user-plus"></i></div>
          </div>
        </div>
        </div>

        </div>
        
      </Modal>
    </div>
  )
}

export default SocialInfo;