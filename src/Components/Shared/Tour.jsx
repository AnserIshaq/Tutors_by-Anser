import { CustomButton } from '../ui/CustomButton'
const Tour = ({heading, headingClass, desc, btnText, descClass,bgImage}) => {
  return (
    <section className=''>
      <div className='tour-main '>
        <div className='tour--inner relative flex justify-center items-center'>
          <div className='image w-full h-auto lg:h-[296px]'>
            <img src={bgImage} alt='tour' className='w-full h-full object-cover' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#5183F4] opacity-50'></div>
          </div>
          <div className='content absolute text-white flex flex-col gap-[16px] justify-center items-center'>
            <div className={`title [font-family:var(--font-jakarta)] font-extrabold text-2xl md:text-4xl lg:text-5xl ${headingClass}`}>
              {heading}
            </div>
            <div className={`desc [font-family:var(--font-league)] self-center text-center ${descClass}`}>
              {desc}
            </div>
            <CustomButton
              text={btnText}
              className={
                'text-[#5183F4]! bg-[#FFFFFF]! h-[50px]! w-max rounded-[50px]! py-[15px] px-[32px] font-medium! text-base!'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tour
