import React from 'react'
import { Checkbox } from 'antd'
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`)
}
const CustomCheckBox = ({ text }) => (
  <Checkbox onChange={onChange}>
    <p className='text-[16px] text-[#181A20] font-medium'>{text}</p>
  </Checkbox>
)
export default CustomCheckBox
