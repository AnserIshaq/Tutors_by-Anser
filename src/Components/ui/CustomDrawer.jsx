import React, { useState } from 'react'
import { Button, Drawer, Radio, Space } from 'antd'
import DropDown from './DropDown'
import { topBarItems } from '../../Static/DropDownItems'
import { Divider } from 'antd'
import { CustomButton, CustomButtonWithIcon } from './CustomButton'
import { Link } from 'react-router'

const CustomDrawer = ({ onCloseDrawer, openState }) => {
  const [placement, _] = useState('left')
  const handleDropdownClick = (e) => {
    console.log('Dropdown item clicked:', e)
  }

  const navItems = [
    { key: '01', label: 'Find Tutors', link: '/' },
    { key: '02', label: 'How It Works', link: '/' },
    { key: '03', label: 'Contact Us', link: '/' },
    { key: '04', label: 'FAQ', link: '/' },
  ]
  return (
    <>
      <Drawer
        r
        title=''
        placement={placement}
        width={428}
        onClose={onCloseDrawer}
        open={openState}
        extra={
          <Space className='flex justify-between w-full m-0!'>
            <img src='/cross.svg' alt='cross' onClick={onCloseDrawer} className='cursor-pointer' />
            <img src='/logo.svg' alt='logo' />
            <DropDown className='mt-2.5' onClick={handleDropdownClick} title='' items={topBarItems} />
          </Space>
        }>
        <div className='mt-1.5'>
          {navItems.map((item, idx) => (
            <p
              key={idx}
              className='flex items-center gap-[15px] text-xl text-[#B1B1B1] font-normal [font-family:var(--font-league)] mb-6 '>
              {item.key} <span className='w-[20px] h-[1px] border border-[#B1B1B1] flex'></span>
              <Link to={item.link}>
                <span className='font-medium text-[26px] text-[#181A20]'>{item.label}</span>
              </Link>
            </p>
          ))}
        </div>
        <Divider />
        <div>
          <CustomButtonWithIcon
            text={'Cart'}
            onClick={() => console.log('prop passed')}
            className='text-[#181A20]! rounded-[50px] border  px-[28px]! py-[12px]! mb-6 text-base! font-medium!'
            icon='/bag.svg'
          />
          <CustomButton
            text={'日本語先生になる'}
            onClick={() => console.log('prop passed')}
            className='rounded-[50px] border  px-[28px]! py-[12px]! text-base! font-medium!'
          />
        </div>
      </Drawer>
    </>
  )
}
export default CustomDrawer
