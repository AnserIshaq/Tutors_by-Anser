import React from 'react'

const TutorCard = () => {
  return (
    <>
      <div className='absolute 2xl:bottom-[10%] 2xl:right-[14%] xl:right-[4%] lg:bottom-[2%] lg:right-[4%] z-2 hidden lg:block'>
        <div className='w-[202px] h-[118px] rounded-[20px] bg-white px-5 py-[18px] z-10 flex justify-center flex-col'>
          <div>
            <p>Top Rated Tutors</p>
          </div>
          <div className='flex relative'>
            <img src='/Ellipse_1.svg' alt='profile' className='z-1 w-[54px] h-[54px] relative ' />
            <img src='/Ellipse_5.svg' alt='profile' className='z-1 w-[54px] h-[54px] relative left-[-30px]' />
            <img src='/Ellipse_6.svg' alt='profile' className='z-1 w-[54px] h-[54px] relative left-[-60px]' />
            <div className='z-10 relative left-[-80px] top-[4px] rounded-[100px] bg-[#5183F4] text-white w-[38px] h-[38px] shadow-[0_0_0_4px_white] text-base px-[15px] py-[13px] flex items-center justify-center'>
              26+
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorCard
