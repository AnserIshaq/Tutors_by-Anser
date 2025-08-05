const CustomInput = ({
  type,
  placeholder,
  onChange,
  leftIcon,
  rightIcon,
  onRightIconClick,
  className = '',
  inputClassName = '',
  leftIconClassName = '',
  rightIconClassName = '',
  disabled = false,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      {leftIcon && (
        <img src={leftIcon} alt='input icon' className={`absolute top-[15px] left-[10px] ${leftIconClassName}`} />
      )}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className={`common-inputs w-full border border-black rounded-[10px] [font-family:var(--font-league)] py-[16px] text-base sm:text-xl font-normal text-[#181A20] focus-visible:outline-none focus-visible:border-[#5183F4] placeholder:text-[#B1B1B1] ${
          leftIcon ? 'pl-[48px]' : 'pl-[16px]'
        } ${rightIcon ? 'pr-[48px]' : 'pr-[16px]'} ${inputClassName}`}
        {...props}
      />
      {rightIcon && (
        <img
          src={rightIcon}
          alt='action icon'
          className={`absolute top-[15px] right-[10px] cursor-pointer ${rightIconClassName}`}
          onClick={onRightIconClick}
        />
      )}
    </div>
  )
}

export default CustomInput
