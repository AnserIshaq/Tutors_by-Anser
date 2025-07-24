import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'

const DropDown = ({ title, items, onClick }) => {
  const menuProps = {
    items,
    onClick: onClick,
  }
  return (
    <Space direction='vertical'>
      <Dropdown menu={menuProps}>
        <div className='cursor-pointer'>
          <div className='dropdown group items-center relative border border-[#181A20] rounded-[50px] p-[10px] gap-[10px] cursor-pointer hidden xl:flex'>
            <img className='max-w-none' src='/person.svg' alt='person' />
            <span className='whitespace-nowrap text-black'>{title}</span>
            <img className='max-w-none hidden xl:block' src='/arrow1.svg' alt='person' />
            {/* <DownOutlined /> */}
          </div>
          <img className='max-w-none block xl:hidden h-[36px] lg:h-[50px]' src='/person1.svg' alt='person' />
        </div>
      </Dropdown>
    </Space>
  )
}
export default DropDown
