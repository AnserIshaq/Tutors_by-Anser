import { Divider } from 'antd'
import { CustomButtonWithIcon } from './CustomButton'

const CustomCard = ({ item, mode = 'profile' }) => {
  const renderContent = (item, mode) => {
    switch (mode) {
      case 'blog':
        return (
          <>
            <div className='h-[30px] w-max px-[8px] py-[4px] rounded-[10px] bg-[#EBF5FE]  mt-[10px] '>
              <p className='text-[#5183F4] text-sm'>{item.date}</p>
            </div>
            <p className='text-xl text-[#181A20] font-semibold mt-[10px]'>{item.title}</p>
            <p className='text-base text-[#181A20] font-normal mt-[10px]'>{item.desc}</p>
          </>
        )
      case 'testimonial':
        return (
          <>
            <div className=' px-[8px] py-[4px] mt-[10px] flex flex-col rounded-[10px] md:gap-[24px]'>
              <div className='flex justify-between'>
                <div className='flex flex-col md:flex-row items-center gap-2.5 md:gap-[24px]'>
                  <img src={item.profileIcon} alt='' />
                  <p className='text-xl text-[#5183F4] font-semibold'>{item.name}</p>
                </div>
                <img src={item.quotesIcon} alt='' />
              </div>
              <div>
                <p className='text-base md:text-xl text-[#717171] font-normal mt-[10px]'>{item.description}</p>
              </div>
            </div>
          </>
        )

      case 'profile':
      default:
        return (
          <>
            <p className='text-xl text-[#5183F4] font-semibold'>{item.name}</p>
            <p className='text-base text-[#B1B1B1] font-normal'>{item.location}</p>
            <Divider />
            <p className='text-base text-[#717171] font-semibold'>Languages:</p>
            <p className='text-base text-[#B1B1B1] font-normal'>{item.languages}</p>
            <Divider />
            <div>
              <p className='text-base text-[#717171] font-semibold'>Fee Structure</p>
              {item.fee?.map((f, idx) => (
                <div key={idx} className='flex justify-between text-base text-[#B1B1B1] font-normal'>
                  <p>{f.label}</p>
                  <p>{f.price}</p>
                </div>
              ))}
            </div>
          </>
        )
      case 'jap-lang':
        return (
          <>
            <p className='text-xl text-[#5183F4] font-semibold'>{item.name}</p>
            <p className='text-base text-[#B1B1B1] font-normal'>{item.location}</p>
            <Divider />
            <p className='text-base text-[#717171] font-semibold'>Languages:</p>
            <p className='text-base text-[#B1B1B1] font-normal'>{item.languages}</p>
            <Divider />
            <div>
              <p className='text-base text-[#717171] font-semibold'>Fee Structure</p>
              {item.fee?.map((f, idx) => (
                <div key={idx} className='flex justify-between text-base text-[#B1B1B1] font-normal'>
                  <p>{f.label}</p>
                  <p>{f.price}</p>
                </div>
              ))}
            </div>
          </>
        )
    }
  }

  return (
    <div className='slider-item rounded-[10px] p-4 sm:p-0'>
      <div className={`slider-img ${mode === 'testimonial' ? 'hidden' : 'block'}`}>
        <img src={item.img} alt={item.name || item.title} className='w-full' />
      </div>
      <div
        className={`slider-content rounded-[10px] ${
          mode === 'profile'
            ? 'shadow-[0_4px_40px_0_rgba(0,117,225,0.1)] p-2.5'
            : mode === 'blog'
            ? 'p-2.5'
            : mode === 'testimonial'
            ? 'shadow-[0_0_40px_0_rgba(0,0,0,0.1)] bg-white p-6'
            : ''
        } [font-family(var(--font-league))]`}>
        {renderContent(item, mode)}
      </div>
      {mode === 'profile' && (
        <CustomButtonWithIcon
          text='Add to cart'
          icon='/white-cart.svg'
          className='bg-[#5183F4]! text-base! font-normal! rounded-tl-none rounded-tr-none text-white h-[44px]!'
        />
      )}

      {mode === 'blog' && (
        <CustomButtonWithIcon
          text='Read More'
          icon='/blog-arrow-right.svg'
          className='bg-[white]! text-base! font-normal! rounded-tl-none rounded-tr-none text-[#5183F4] h-[44px]! flex-row-reverse justify-end pl-[10px]'
        />
      )}
    </div>
  )
}

export default CustomCard
