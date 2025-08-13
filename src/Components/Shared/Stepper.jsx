const Stepper = ({ reverse = false, text, desc, img, step, mobStep, isFirst = false, isLast = false, mode }) => {
  return (
    <>
      <div
        className={`stepper--inner relative before:content-[''] before:absolute  ${
          !isLast
            ? 'before:w-[2px] before:bg-[#B1B1B1] before:top-0 before:bottom-0 before:left-[0px] before:block md:before:hidden'
            : ''
        } flex mt-[40px] md:mt-[60px] ${
          reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row '
        } justify-end md:justify-between items-end md:items-center px-2.5 [font-family:var(--font-league)] pl-[40px] sm:pl-[80px] md:pl-0 gap-[20px] md:gap-0`}>
        <div
          className={`max-w-60%  lg:max-w-[40%] flex basis-[40%] mt-0 md:mt-[24px] font-medium ${
            reverse ? '2xl:justify-start' : '2xl:justify-end'
          }`}>
          <div
            className={`max-w-100%  ${mode === 'landing' ? 'lg:max-w-[85%]':"lg:max-w-[75%]"} text-xl xl:text-[26px] [font-family:var(--font-league)] font-normal md:font-medium ${
              desc ? 'text-[#5183F4]' : 'text-[#000000]'
            } ${reverse ? 'order-3' : 'order-2'}`}>
            {text}
            {desc && <div className='text-xl font-normal text-[#717171] mt-[16px]'>{desc}</div>}
          </div>
        </div>
        <div
          className={`stepper--line flex flex-row md:flex-row justify-center w-[1px] basis-[10%] absolute left-[0%] md:left-[50%]  items-center top-[0] md:top-[50%] [font-family(var(--font-league)]  ${
            isFirst ? 'items-start' : ''
          }`}>
          <div
            className={`w-[2px] bg-[#B1B1B1] flex items-center justify-center absolute z-1 ${
              isFirst
                ? `h-[350px] lg:h-[0px] xl:h-[380px]  xl:top-[45%]`
                : `bottom-[45%] h-[300px] md:h-[220px] lg:h-[300px] ${mode === 'landing' ? 'lg:h-[300px] xl:h-[380px]' : 'h-[300px] md:h-[330px] lg:h-[320px] xl:h-[360px]'}`
            }`}></div>
          <div className='steps bg-[#EBF5FE] rounded-[100px] py-[8px] px-[12px] h-[40px] w-[70px] text-base font-normal whitespace-nowrap z-2 hidden md:block text-[#181A20]'>
            {step}
          </div>
          <div className='steps bg-[#EBF5FE] rounded-[100px] py-[8px] px-[15px] h-[40px] w-[70px] text-base font-normal whitespace-nowrap z-2 block md:hidden text-[#181A20]'>
            {mobStep}
          </div>
        </div>
        <div className={`flex w-full basis-[40%] ${!reverse ? '2xl:justify-start' : '2xl:justify-end'}`}>
          <img src={img} alt='stepper' />
        </div>
      </div>
    </>
  )
}

export default Stepper
