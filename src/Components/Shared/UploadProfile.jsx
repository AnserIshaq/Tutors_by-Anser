import React, { useRef, useState } from 'react'

const UploadProfile = () => {
  const fileInputRef = useRef(null)
  const [imageUrl, setImageUrl] = useState('')
  const baseClass = imageUrl === '/demoProfile.svg' ? 'top-[13%] absolute' : 'object-cover'
  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImageUrl(imageUrl)
    }
  }

  return (
    <div className='profile-section self-center justify-self-center relative overflow-hidden flex justify-center items-center w-[150px] h-[150px] mb-[30px]'>
      {/* Outer frame image */}
      <img
        src={imageUrl === '' ? 'fileUpload.svg' : '/profileFrame.svg'}
        alt='profile frame'
        onClick={handleImageClick}
        className='cursor-pointer absolute w-full h-full'
      />

      {/* User uploaded image */}
      {imageUrl !== '' && (
        <img
          src={imageUrl}
          alt='profile'
          onClick={handleImageClick}
          className={`cursor-pointer rounded-full w-[80%] h-[80%] z-10 ${baseClass}`}
        />
      )}

      <input type='file' ref={fileInputRef} onChange={handleFileChange} accept='image/*' className='hidden' />
    </div>
  )
}

export default UploadProfile
