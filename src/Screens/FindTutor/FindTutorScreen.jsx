import React from 'react'
import FilterDrawerContent from '../../Components/ui/Drawer/modes/FilterDrawerContent'

const FindTutorScreen = () => {
  return (
    <>
      <section className='contain sm:px-[24px] md:px-[60px] py-[30px] md:py-[60px]'>
        <div className=''>
          <div className='filter-section w-[30%]'>
            <FilterDrawerContent />
          </div>
          <div className='listing-section w-[70%]'></div>
        </div>
      </section>
    </>
  )
}

export default FindTutorScreen
