import { useState } from 'react'
import { CustomButton } from '../ui/CustomButton'
import DropDown from '../ui/DropDown'
import CustomDrawer from '../ui/Drawer/CustomDrawer'
import { topBarItems } from '../../Static/DropDownItems'
import DrawerModes from '../ui/Drawer/DrawerModes'
import { useNavigate } from 'react-router'
const TopBar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const showDrawer = () => {
    setOpen(true)
  }

  const handleDropdownClick = (e) => {
    console.log('Dropdown item clicked:', e)
  }

  return (
    <div className='w-full contain px-[24px] md:px-[60px]'>
      <div className='flex items-center h-[86px] mx-auto flex-row justify-between'>
        <CustomDrawer
          onCloseDrawer={() => setOpen(false)}
          openState={open}
          mode='topbar'
          modeComponents={DrawerModes}
          extraHeaderContent={
            <>
              <img src='/cross.svg' alt='close' onClick={() => setOpen(false)} />
              <img src='/logo.svg' alt='logo' />
              <DropDown items={topBarItems} />
            </>
          }
        />
        <div className='block lg:hidden'>
          <img src='/Burger.svg' alt='logo' className='cursor-pointer' onClick={showDrawer} />
        </div>
        <div className=''>
          <img src='/logo.svg' alt='logo' />
        </div>
        <div className='middle hidden lg:block'>
          <ul className='flex rounded-r-[50px] rounded-l-[50px] border-[1px] border-[#B1B1B1] [font-family:var(--font-league)] font-normal text-base overflow-hidden'>
            <li className='py-[10px] px-[10px]  border-r border-[#B1B1B1] cursor-pointer hover:bg-[#5193F4] hover:text-[#ffffff] w-[110px] text-center'>
              Find Tutors
            </li>
            <li className='py-[10px] px-[10px]  border-r border-[#B1B1B1] cursor-pointer hover:bg-[#5193F4] hover:text-[#ffffff] w-[110px] text-center'>
              How It Works
            </li>
            <li className='py-[10px] px-[10px]  border-r border-[#B1B1B1] cursor-pointer hover:bg-[#5193F4] hover:text-[#ffffff] w-[110px] text-center'>
              Pricing
            </li>
            <li className='py-[10px] px-[10px]  cursor-pointer hover:bg-[#5193F4] hover:text-[#ffffff] w-[110px] text-center'>
              FAQ
            </li>
          </ul>
        </div>
        <div className='flex items-center sm:gap-[15px]  xl:gap-[24px]'>
          <img className='max-w-none hidden lg:block' src='/bucket.svg' alt='' />
          <DropDown title={'Hironori Takeda'} items={topBarItems} onClick={handleDropdownClick} />
          <CustomButton
            text='日本語先生になる'
            onClick={() => navigate('/become-tutor')}
            className='lg:px-[15px] xl:px-[23px] py-[15px] h-[50px]! rounded-[50px] hidden lg:block text-base! font-medium!'
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar
