import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Divider } from 'antd'
import { CustomButtonWithIcon } from './ui/CustomButton'
import { sliderData } from '../Static/SliderData'
const Slider = () => {
  return (
    <Swiper
      className='my-swiper'
      spaceBetween={5}
      slidesPerView={5}
      modules={[Autoplay]}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Optional: pause on hover
      }}
      centeredSlides={false}
      breakpoints={{
        // Responsive breakpoints to ensure proper loop behavior
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}>
      {sliderData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className='slider-item rounded-[10px] p-4 sm:p-0'>
            <div className='slider-img'>
              <img src={item.img} alt={item.name} className='w-full' />
            </div>
            <div className='slider-content p-2.5 shadow-[0_4px_40px_0_rgba(0,117,225,0.1)] [font-family(var(--font-league))]'>
              <p className='text-xl text-[#5183F4] font-semibold'>{item.name}</p>
              <p className='text-base text-[#B1B1B1] font-normal'>{item.location}</p>
              <Divider />
              <p className='text-base text-[#717171] font-semibold'>Languages:</p>
              <p className='text-base text-[#B1B1B1] font-normal'>{item.languages}</p>
              <Divider />
              <div>
                <p className='text-base text-[#717171] font-semibold'>Fee Structure</p>
                {item.fee.map((f, idx) => (
                  <div key={idx} className='flex justify-between text-base text-[#B1B1B1] font-normal'>
                    <p>{f.label}</p>
                    <p>{f.price}</p>
                  </div>
                ))}
              </div>
            </div>
            <CustomButtonWithIcon
              text={'Add to cart'}
              icon={'/white-cart.svg'}
              className='bg-[#5183F4]! text-base! font-normal! rounded-tl-none rounded-tr-none text-white h-[44px]!'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
