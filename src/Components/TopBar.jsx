import React, { useState } from 'react'
import { CustomButton } from './ui/CustomButton'
import CustomSelect from './ui/CustomSelect'
import DropDown from './ui/DropDown'
import CustomDrawer from './ui/CustomDrawer'
import { topBarItems } from '../Static/DropDownItems'
const TopBar = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  const handleDropdownClick = (e) => {
    console.log('Dropdown item clicked:', e)
  }

  return (
    <div className='w-full contain px-[24px] md:px-[60px]'>
      <div className='flex items-center h-[86px] mx-auto flex-row justify-between'>
        <CustomDrawer onCloseDrawer={onClose} openState={open} />
        <div className='block lg:hidden'>
          <img src='/Burger.svg' alt='logo' className='cursor-pointer' onClick={showDrawer} />
        </div>
        <div className=''>
          <img src='/logo.svg' alt='logo' />
        </div>
        <div className='middle hidden lg:block'>
          <ul className='flex rounded-r-[50px] rounded-l-[50px] border-[1px] border-[#B1B1B1] [font-family:var(--font-league)] font-normal text-base'>
            <li className='py-[10px] px-[10px] xl:px-[20px]  border-r border-[#B1B1B1]'>Find Tutors</li>
            <li className='py-[10px] px-[10px] xl:px-[20px]  border-r border-[#B1B1B1]'>How It Works</li>
            <li className='py-[10px] px-[10px] xl:px-[20px]  border-r border-[#B1B1B1]'>Pricing</li>
            <li className='py-[10px] px-[10px] xl:px-[20px] '>FAQ</li>
          </ul>
        </div>
        <div className='flex items-center sm:gap-[15px]  xl:gap-[24px]'>
          <img className='max-w-none hidden lg:block' src='/bucket.svg' alt='' />
          <DropDown title={'Hironori Takeda'} items={topBarItems} onClick={handleDropdownClick} />
          <CustomButton
            text='日本語先生になる'
            onClick={() => console.log('Log In clicked')}
            className='lg:px-[15px] xl:px-[23px] py-[15px] h-[50px]! rounded-[50px] hidden lg:block'
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar
