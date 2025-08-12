import React, { useState } from 'react'
import { Rate } from 'antd'
import { StarFilled, StarTwoTone } from '@ant-design/icons'

const CustomRating = () => {
  const [value, setValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  return (
    <div className='flex items-center gap-2'>
      <Rate
        value={value}
        character={
          ({ index }) =>
            hoverValue !== undefined && index < hoverValue ? (
              <StarFilled style={{ color: '#FFCC4A' }} />
            ) : (
              <StarTwoTone twoToneColor='#FFCC4A' />
            ) // two-tone otherwise
        }
        onChange={(newValue) => setValue(newValue)}
        onHoverChange={(newHoverValue) => setHoverValue(newHoverValue)}
      />
      <div className='py-2 px-[17px] rounded-full bg-[#5183F4] text-white  flex justify-center items-center'>
        <span className='text-xl font-normal [font-family:var(--font-league]!'>
          {hoverValue !== undefined ? `${hoverValue}` : `  ${value}`}
        </span>
      </div>
    </div>
  )
}

export default CustomRating
