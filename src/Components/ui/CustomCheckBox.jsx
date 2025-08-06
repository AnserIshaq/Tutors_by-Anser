import React from 'react'
import { Checkbox } from 'antd'
const CustomCheckBox = ({ text, className }) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const baseClassName = 'text-[16px] text-[#181A20] bg-[#EBF5FE]'
  return (
    <Checkbox onChange={onChange}>
      <p className={`${baseClassName} ${className}`}>{text}</p>
    </Checkbox>
  )
}
export default CustomCheckBox
