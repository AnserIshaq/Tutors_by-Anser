import React, { memo, forwardRef } from 'react'

const CustomTextArea = memo(forwardRef((
  {
    className = '',
    placeholder = "I'm looking for...",
    value,
    onChange,
    name,
    id,
    rows = 3,
    cols,
    disabled = false,
    readOnly = false,
    required = false,
    maxLength,
    minLength,
    resize = 'vertical',
    autoFocus = false,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    onFocus,
    onBlur,
    onKeyDown,
    style,
    ...restProps
  },
  ref
) => {
  const baseClasses = 'w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200'
  const resizeClass = resize === 'none' ? 'resize-none' : resize === 'horizontal' ? 'resize-x' : resize === 'vertical' ? 'resize-y' : 'resize'
  const combinedClassName = `${baseClasses} ${resizeClass} ${className}`.trim()

  return (
    <textarea
      ref={ref}
      name={name}
      id={id}
      className={combinedClassName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      cols={cols}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      autoFocus={autoFocus}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      style={style}
      {...restProps}
    />
  )
}))

CustomTextArea.displayName = 'CustomTextArea'

export default CustomTextArea
