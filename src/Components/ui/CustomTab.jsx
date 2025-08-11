import React, { useState, useEffect } from 'react'
import { Segmented } from 'antd'

const CustomTab = ({ options, storageKey, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      setValue(saved)
      onChange?.(saved)
    }
  }, [storageKey, onChange])

  const handleChange = (newValue) => {
    setValue(newValue)
    localStorage.setItem(storageKey, newValue)
    onChange?.(newValue)
  }

  const formattedOptions = options.map((opt) => ({
    value: opt.value,
    label: (
      <div className='flex items-center gap-2'>
        <img src={value === opt.value ? opt.activeIcon : opt.inactiveIcon} alt='' />
        <span className='custom-tab-text'>{opt.label}</span>
      </div>
    ),
  }))

  return <Segmented animated={{ tabPane: false }} value={value} onChange={handleChange} options={formattedOptions} />
}

export default CustomTab
