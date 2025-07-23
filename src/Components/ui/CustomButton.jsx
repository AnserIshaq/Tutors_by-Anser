const CustomButton = ({ text, onClick, className='' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-[60px] rounded-[10px] bg-[#5183F4] [font-family:var(--font-league)] text-white font-semibold text-base sm:text-xl cursor-pointer ${className}`}>
      {text}
    </button>
  )
}

export default CustomButton


