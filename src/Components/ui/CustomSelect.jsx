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
  defaultValue,
  value,
  height = 'h-[60px]',
  paddingX = 'px-4',
  paddingY = 'py-2',
  rounded = 'rounded-lg',
  textSize = 'text-base',
  textColor = 'text-gray-500',
  border = 'border border-black',
  focusBorder = 'focus:border-blue-500',
  bg = 'bg-white',
  ...props
}) => {
  const mergedWrapperClass = twMerge('relative w-full', className)

  const baseSelectClass = twMerge(
    `appearance-none w-full ${height} ${rounded} ${border} ${textColor} ${textSize} 
     ${bg} ${paddingX} ${paddingY} focus:outline-none ${focusBorder}
     ${leftIcon ? 'pl-12' : ''} ${rightIcon ? 'pr-12' : ''}`,
    selectClassName
  )

  return (
    <div className={mergedWrapperClass}>
      {leftIcon && (
        <img
          src={leftIcon}
          alt='select icon'
          className={twMerge('absolute top-1/2 left-3 -translate-y-1/2', leftIconClassName)}
        />
      )}
      <Select
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        className={baseSelectClass}
        {...props}
      />
      {rightIcon && (
        <img
          src={rightIcon}
          alt='dropdown indicator'
          className={twMerge('absolute top-1/2 right-3 -translate-y-1/2', rightIconClassName)}
        />
      )}
    </div>
  )
}

export default CustomSelect
