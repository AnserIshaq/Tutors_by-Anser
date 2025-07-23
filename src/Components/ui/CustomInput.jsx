const CustomInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='common-inputs w-full border border-black h-[60px] rounded-[10px] [font-family:var(--font-league)] pl-[48px] pr-[16px] py-[16px] text-base sm:text-xl font-normal text-[#B1B1B1] focus-visible:outline-none focus-visible:border-[#5183F4]'
    />
  )
}

export default CustomInput
