// CustomTab.jsx
import React from 'react'
import { Segmented } from 'antd'
import tabIcon1 from '/TabIcon1.svg'
import tabIcon2 from '/TabIcon2.svg'
import tabIcon01 from '/TabIcon01.svg'
import tabIcon02 from '/TabIcon02.svg'

const CustomTab = ({ value, onChange }) => {
  const options = [
    {
      label: (
        <div className='flex items-center gap-2'>
          <img src={value === 'Tutor Profile' ? tabIcon2 : tabIcon01} alt='' className='md:block hidden'/>
          <span className='custom-tab-text text-base sm:text-[18px] font-normal'>Tutor Profile</span>
        </div>
      ),
      value: 'Tutor Profile',
    },
    {
      label: (
        <div className='flex items-center gap-2'>
          <img src={value === 'Edit Account' ? tabIcon02 : tabIcon1} alt='' className='md:block hidden'/>
          <span className='custom-tab-text text-base sm:text-[18px] font-normal'>Edit Account</span>
        </div>
      ),
      value: 'Edit Account',
    },
  ]

  return (
    <>
      <div className=''>
        <Segmented animated={{ tabPane: false }} value={value} onChange={onChange} options={options} />
      </div>
    </>
  )
}

export default CustomTab
