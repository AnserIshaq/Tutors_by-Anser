const Stepper = ({ reverse = false, text, img, step, isFirst = false }) => {
  return (
    <>
      <div
        className={`stepper--inner  flex mt-[60px] relative ${
          reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row '
        } justify-end md:justify-between items-end md:items-center px-2.5 [font-family(var(--font-league)]`}>
        <div className={`max-w-60%  lg:max-w-[40%] flex basis-[40%] mt-[24px] font-medium `}>
          <div className={`max-w-100%  lg:max-w-[70%] text-base xl:text-[26px] ${reverse ? 'order-3' : 'order-2'}`}>{text}</div>
        </div>
        <div
          className={`stepper--line flex flex-row md:flex-row justify-center w-[1px] basis-[10%] absolute left-0 md:left-[50%]  items-center top-50%  ${
            isFirst ? 'items-start' : ''
          }`}>
          <div
            className={`w-[1px] bg-[#B1B1B1] flex items-center justify-center absolute z-1 ${
              isFirst
                ? 'h-[350px] lg:h-[0px] xl:h-[350px]  xl:top-[45%]'
                : 'bottom-[45%] h-[230px] md:h-[220px] lg:h-[300px] xl:h-[350px] '
            }`}></div>
          <div className='steps bg-[#EBF5FE] rounded-[100px] py-[8px] px-[15px] h-[40px] w-[70px] text-base font-normal whitespace-nowrap z-2'>
            {step}
          </div>
        </div>
        <div className='flex basis-[40%]'>
          <img src={img} alt='stepper' />
        </div>
      </div>
    </>
  )
}

export default Stepper
