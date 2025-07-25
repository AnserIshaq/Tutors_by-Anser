export const CustomButton = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[60px] rounded-[10px] bg-[#5183F4] [font-family:var(--font-league)] text-white font-semibold text-base sm:text-xl cursor-pointer ${className}`}>
      {text}
    </button>
  )
}

export const CustomButtonWithIcon = ({ text, onClick, className = '', icon }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[60px] rounded-[10px] bg-white [font-family:var(--font-league)] text-darkText font-semibold text-base sm:text-xl cursor-pointer flex items-center justify-center gap-2.5 ${className}`}>
      <img src={icon} alt='icon' className='w-5 h-5 object-contain' />
      {text}
    </button>
  )
}
