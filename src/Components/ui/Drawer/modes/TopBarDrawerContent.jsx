import React from 'react'
import { CustomButton, CustomButtonWithIcon } from '../../CustomButton'
import { Divider } from 'antd'
import { Link } from 'react-router'

const TopBarDrawerContent = () => {
  const navItems = [
    { key: '01', label: 'Find Tutors', link: '/' },
    { key: '02', label: 'How It Works', link: '/' },
    { key: '03', label: 'Contact Us', link: '/' },
    { key: '04', label: 'FAQ', link: '/' },
  ]
  return (
    <>
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
    </>
  )
}

export default TopBarDrawerContent
