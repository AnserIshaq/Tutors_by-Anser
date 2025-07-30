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
    }
  }

  return (
    <div className='slider-item rounded-[10px] p-4 sm:p-0'>
      <div className='slider-img'>
        <img src={item.img} alt={item.name || item.title} className='w-full' />
      </div>
      <div
        className={`slider-content p-2.5 ${
          mode === 'profile' ? 'shadow-[0_4px_40px_0_rgba(0,117,225,0.1)]' : 'shadow-[0_0_40px_0_rgba(0,0,0,0.1)] bg-white'
        } [font-family(var(--font-league))]`}>
        {renderContent(item, mode)}
      </div>
      {mode === 'profile' ? (
        <CustomButtonWithIcon
          text={'Add to cart'}
          icon={'/white-cart.svg'}
          className='bg-[#5183F4]! text-base! font-normal! rounded-tl-none rounded-tr-none text-white h-[44px]!'
        />
      ) : (
        <CustomButtonWithIcon
          text={'Read More'}
          icon={'/blog-arrow-right.svg'}
          className='bg-[white]! text-base! font-normal! rounded-tl-none rounded-tr-none text-[#5183F4] h-[44px]! flex-row-reverse justify-end pl-[10px] '
        />
      )}
    </div>
  )
}

export default CustomCard
