  import { Divider } from 'antd'
  import { CartData } from '../Static/CartData'
  import CartCard from '../Components/Shared/CartCard'
  import { CustomButton } from '../Components/ui/CustomButton'

  const CartScreen = () => {
    return (
      <section>
        <div className='contain sm:px-[24px] md:px-[60px] py-[30px] md:py-[60px] flex flex-col lg:flex-row gap-[24px]'>
          <div className='bg-[#EBF5FE] rounded-[30px] flex flex-col lg:flex-row p-[15px] md:p-[50px] gap-[24px] w-full lg:w-[65%]'>
            <div className='p-[15px] md:p-[24px] rounded-[30px] bg-transparent w-full flex flex-col gap-[24px]'>
              <h1 className='text-[#5183F4] '>Tutor Cart</h1>
              <Divider style={{ width: '100%', border: '1px solid #B1B1B1' }} />
              <CartCard />
            </div>
          </div>
          <div className='w-full lg:w-[35%] py-[50px] px-[24px] bg-[#F7F7F7] h-[262px] rounded-[30px] sticky lg:static bottom-0 z-10'>
            <div className='flex justify-between text-[#181A20] text-[22px] font-semibold mb-0.5'>
              <span>Number of Teachers:</span>
              <span>4</span>
            </div>
            <Divider style={{ width: '100%', border: '1px solid #B1B1B1' }} />
            <div className='flex justify-between text-[#181A20] text-[22px] font-semibold mt-0.5 mb-[24px]'>
              <span>Usage Fee</span>
              <span>$8</span>
            </div>
            <CustomButton text={'Go To Checkout'} className={'rounded-[50px] text-base!'} />
          </div>
        </div>
      </section>
    )
  }

  export default CartScreen
