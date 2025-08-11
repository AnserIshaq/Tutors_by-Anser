import React from 'react'
import Slider from './Slider'
import { TestimonialData } from '../../Static/TestimonialData'
const Testimonials = ({heading , data}) => {
  return (
    <section className='testimonial-section bg-[#F7F7F7]  mt-[15px] lg:mt-[60px]'>
      <div className='slider--inner contain px-0 py-[24px] md:py-[60px]'>
        <div className='content flex flex-col gap-[16px] px-[15px] lg:pl-3 mb-[24px]'>
          <div className='title [font-family:var(--font-jakarta)] font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#5183F4] text-center '>
            {heading}
          </div>
        </div>
        <div className='slider-main [font-family:var(--font-league)]'>
          <Slider
            showNavigation={false}
            showPagination={true}
            data={data}
            sliderPerView={2}
            cardMode='testimonial'
            prevBtnClass={'right-[8%] top-[-15%] -translate-y-1/2 z-10'}
            nextBtnClass={'top-[-15%] right-0 -translate-y-1/2 z-10  rotate-180'}
            paginationClass={'mt-4 text-center absolute top-[-20%] right-5'}
            wrapperClass={'slider-style-for-testimonial-section'}
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
