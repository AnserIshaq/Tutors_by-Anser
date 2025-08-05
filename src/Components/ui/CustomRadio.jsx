import React, { useState } from 'react'
import { Flex, Radio } from 'antd'

const CustomRadio = () => {
  const [value, setValue] = useState('Apple')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <Flex vertical gap='middle'>
      <Radio.Group onChange={handleChange} value={value} optionType='button'>
        <Radio.Button value='Apple'>
          <img src='/maleicon.svg' alt='Apple' className='inline-block w-full md:w-[26px] h-[26px]' />
          <span className='text-xl font-normal'>男性</span>
        </Radio.Button>
        <Radio.Button value='Pear'>
          <img src='/femaleicon.svg' alt='Pear' className='inline-block w-full md:w-[26px] h-[26px]' />
          <span className='text-xl font-normal'>女性</span>
        </Radio.Button>
        <Radio.Button value='Orange'>
          <img src='/othersicon.svg' alt='Orange' className='inline-block w-full md:w-[26px] h-[26px]' />
          <span className='text-xl font-normal'>その他</span>
        </Radio.Button>
      </Radio.Group>
    </Flex>
  )
}
export default CustomRadio
