import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import CustomCard from '../ui/CustomCard'
const Slider = ({
  showNavigation,
  showPagination,
  data,
  sliderPerView,
  cardMode = 'profile',
  wrapperClass = '',
  prevBtnClass = '',
  nextBtnClass = '',
  paginationClass = '',
}) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const paginationRef = useRef(null)
  return (
    <>
      <div className={`relative w-full ${wrapperClass}`}>
        {showNavigation && (
          <>
            <div ref={prevRef} className={`custom-swiper-prev absolute ${prevBtnClass} cursor-pointer`}>
              <img src='/blog-arrow.svg' alt='prev' />
            </div>
          </>
        )}

        {showPagination && <div ref={paginationRef} className={`custom-swiper-pagination ${paginationClass}`}></div>}
        {showNavigation && (
          <>
            <div ref={nextRef} className={`custom-swiper-next absolute cursor-pointer ${nextBtnClass}`}>
              <img src='/blog-arrow.svg' alt='next' />
            </div>
          </>
        )}

        <Swiper
          spaceBetween={10}
          slidesPerView={sliderPerView}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={
            showPagination
              ? {
                  el: paginationRef.current,
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 1,
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }
              : false
          }
          onBeforeInit={(swiper) => {
            if (showNavigation) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
            if (showPagination) {
              swiper.params.pagination.el = paginationRef.current
            }
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            460: {
              slidesPerView: cardMode === 'profile' ? 2 : cardMode === 'testimonial' ? 1 : 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: cardMode === 'profile' ? 3 : cardMode === 'testimonial' ? 2 : 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: cardMode === 'profile' ? 4 : cardMode === 'blog' ? 3 : cardMode === 'testimonial' ? 2 : 4,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: sliderPerView,
              spaceBetween: 24,
            },
          }}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CustomCard item={item} mode={cardMode} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Slider
