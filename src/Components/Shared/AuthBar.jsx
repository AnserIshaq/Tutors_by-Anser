import React from 'react'

const AuthBar = () => {
  return (
    <div className='authbar w-full'>
      <div className='authbar-inner pr-[60px] pl-[30px] md:pl-[60px] flex items-center h-[80px] mx-auto'>
        <div className='authbar-logo'>
          <img src='/logo.svg' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default AuthBar
