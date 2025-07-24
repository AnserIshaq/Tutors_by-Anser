import { Select } from 'antd'
import { twMerge } from 'tailwind-merge'

const CustomSelect = ({
  options = [],
  onChange,
  leftIcon,
  rightIcon,
  className = '',
  selectClassName = '',
  rightIconClassName = '',
  leftIconClassName = '',
  defaultValue = undefined,
  value,
  ...props
}) => {
  const mergedWrapperClass = twMerge('relative w-full', className)

  const mergedSelectClass = twMerge(
    `!h-[60px] !rounded-[10px] !border !border-black !text-[#B1B1B1] 
     !text-base sm:!text-xl !pr-[16px] !py-[16px] 
     font-normal bg-white appearance-none 
     focus:!border-[#5183F4] 
     ${leftIcon ? 'pl-[48px]' : 'pl-[16px]'} 
     ${rightIcon ? 'pr-[48px]' : 'pr-[16px]'}`,
    selectClassName
  )

  return (
    <div className={mergedWrapperClass}>
      {leftIcon && (
        <img
          src={leftIcon}
          alt='select icon'
          className={`absolute top-[18px] left-[10px] z-[10] ${leftIconClassName}`}
        />
      )}
      <Select
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        className={mergedSelectClass}
        {...props}
      />
      {rightIcon && (
        <img
          src={rightIcon}
          alt='dropdown indicator'
          className={`absolute top-[18px] right-[10px] z-[10] ${rightIconClassName}`}
        />
      )}
    </div>
  )
}

export default CustomSelect
